import { Component, OnInit, Inject  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent  implements OnInit {
  filterControl = new FormControl('');

  constructor(public dialogRef: MatDialogRef<FilterDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

  }

  onClose(): void {
    this.dialogRef.close();
  }

  onApply(): void {
    this.dialogRef.close(this.filterControl.value);
  }

}
