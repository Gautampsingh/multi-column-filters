import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-datetime-dropdown',
  templateUrl: './datetime-dropdown.component.html',
  styleUrls: ['./datetime-dropdown.component.scss']
})
export class DateTimeDropdownComponent implements OnInit {
 
  datetimeForm: FormGroup;
  // dates: string[] = ['2024-11-04', '2024-11-05', '2024-11-06'];
  // hours: number[] = Array.from({ length: 24 }, (_, i) => i);
  // minutes: number[] = Array.from({ length: 60 }, (_, i) => i);

  dates: string[] = ['2024-11-04', '2024-11-05', '2024-11-06'];
  hours: number[] = Array.from({ length: 24 }, (_, i) => i);
  minutes = ['00', 15, 30, 45];

  constructor(private fb: FormBuilder) {
    this.datetimeForm = this.fb.group({
      fromDate: ['', Validators.required],
      fromHour: ['', Validators.required],
      fromMinute: ['', Validators.required],
      toDate: ['', Validators.required],
      toHour: ['', Validators.required],
      toMinute: ['', Validators.required]
    });

    this.datetimeForm.valueChanges.subscribe(() => this.validateToDateTime());
   }

  ngOnInit() {
    
  }

  validateToDateTime() {
    const { fromDate, fromHour, fromMinute, toDate, toHour, toMinute } = this.datetimeForm.value;

    this.padZero(fromHour)
    this.padZero(fromMinute)

    const fromDateTime = new Date(`${fromDate}T${this.padZero(fromHour)}:${this.padZero(fromMinute)}`);
    const toDateTime = new Date(`${toDate}T${this.padZero(toHour)}:${this.padZero(toMinute)}`);

    const toDateTimeControl = this.datetimeForm.get('toDate');
    if (toDateTimeControl) {
      if (toDateTime <= fromDateTime) {
        toDateTimeControl.setErrors({ dateError: true });
      } else {
        toDateTimeControl.setErrors(null);
      }
    }
  }

  padZero(value: any): string {
    if(value == '00') {
      value = 0;
    }
    return value < 10 ? `0${value}` : `${value}`;
  }

  onSubmit() {
    if (this.datetimeForm.valid) {
      console.log("Form Submitted:", this.datetimeForm.value);
    }
  }

}
