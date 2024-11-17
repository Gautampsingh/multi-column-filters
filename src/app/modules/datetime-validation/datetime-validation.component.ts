import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'datetime-validation',
  templateUrl: './datetime-validation.component.html',
  styleUrls: ['./datetime-validation.component.scss']
})
export class DateTimeValidationComponent implements OnInit {
  form: FormGroup;
  // hours: number[] = Array.from({ length: 25 }, (_, i) => i); // Create hours 0-24
  // minutes: number[] = Array.from({ length: 60 }, (_, i) => i); // Create minutes 0-59
  hours = [];
  minutes = ['00', 15, 30, 45];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // set hours
    for (let i = 0; i < 25; i++) {
      const val = i < 10 ? '0' + i : i;
      const obj = {
        value: val,
        text: val,
      };
      this.hours.push(obj);
    }

    this.form = this.fb.group({
      fromDate: [new Date().toISOString().split('T')[0], Validators.required],
      fromHour: ['', Validators.required],
      fromMinute: ['', Validators.required],
      toDate: [new Date().toISOString().split('T')[0], Validators.required],
      toHour: ['', Validators.required],
      toMinute: ['', Validators.required]
    });

    // Listen for changes on "fromHour" to adjust the "toHour" options
    this.form.get('fromHour')?.valueChanges.subscribe((hour) => {
      if (parseInt(hour) === 24) {
        this.form.get('fromMinute')?.setValue(0); // Set minute to 0 if hour is 24
        this.form.get('fromMinute')?.disable(); // Disable minutes if hour is 24
      } else {
        this.form.get('fromMinute')?.enable(); // Enable minutes for other hours
      }
    });

    // Listen for changes on "toHour" to adjust the "toMinute" options
    this.form.get('toHour')?.valueChanges.subscribe((hour) => {
      if (parseInt(hour) === 24) {
        this.form.get('toMinute')?.setValue(0); // Set minute to 0 if hour is 24
        this.form.get('toMinute')?.disable(); // Disable minutes if hour is 24
      } else {
        this.form.get('toMinute')?.enable(); // Enable minutes for other hours
      }
    });

    this.form.valueChanges.subscribe(() => this.validateToTime());
  }

  // Custom validator to ensure "to" time is greater than "from" time
  validateToTime() {
    const fromDate = this.form.get('fromDate')?.value;
    const fromHour = this.form.get('fromHour')?.value;
    const fromMinute = this.form.get('fromMinute')?.value;

    const toDate = this.form.get('toDate')?.value;
    const toHour = this.form.get('toHour')?.value;
    const toMinute = this.form.get('toMinute')?.value;

    if (fromDate && toDate) {
      const fromDateTime = new Date(fromDate);
      fromDateTime.setHours(fromHour, fromMinute);

      const toDateTime = new Date(toDate);
      toDateTime.setHours(toHour, toMinute);

    //   return fromDateTime > toDateTime ? null : { invalidTime: true };
    // fromDateTime > toDateTime ? null : { invalidTime: true };
      this.validateToDateTime();
    }
    return null;
  }

  validateToDateTime() {
    let { fromDate, fromHour, fromMinute, toDate, toHour, toMinute } = this.form.value;
    fromHour = fromHour ? (fromHour === 0) ? '00' : fromHour: '00';
    toHour = toHour ? (toHour === 0) ? '00' : toHour: '00';
    fromMinute = fromMinute ? (fromMinute === 0) ? '00' : fromMinute: '00';
    toMinute = toMinute ? (toMinute === 0) ? '00' : toMinute: '00';

    const tempFromDate = `${fromDate}`;
    const tempToDate = `${toDate}`;

    const fromDateTime =`${tempFromDate}T${this.padZero(fromHour)}:${this.padZero(fromMinute)}Z`;
    const toDateTime = `${tempToDate}T${this.padZero(toHour)}:${this.padZero(toMinute)}Z`;

    const toDateTimeControl = this.form.get('toDate');
    if (toDateTimeControl) {
      if (toDateTime <= fromDateTime) {
        toDateTimeControl.setErrors({ dateError: true });
        // this.form.valid = false;
      } else {
        toDateTimeControl.setErrors(null);
        // this.form.valid = true;
      }
    }
  }
  padZero(value: any): string {
    // if(value == '00') {
    //   value = 0;
    // }
    return parseInt(value) < 10 ? `${value}` : `${value}`;
  }

  submitForm() {
    if (this.form.valid) {
      alert('Form Submitted!');
    } else {
      alert('Form is invalid');
    }
  }
}