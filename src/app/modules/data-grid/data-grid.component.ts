import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';

interface Data {
  name: string;
  age: number;
  email: string;
}

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'email'];
  dataSource: Data[] = [
    { name: 'John Doe', age: 25, email: 'johndoe@example.com' },
    { name: 'Jane Smith', age: 30, email: 'janesmith@example.com' },
    { name: 'George Brown', age: 35, email: 'georgebrown@example.com' },
    { name: 'Goutam', age: 21, email: 'goutam@example.com' },
    { name: 'Smith', age: 33, email: 'smith@example.com' },
    { name: 'Rocky', age: 38, email: 'rocky@example.com' },
    { name: 'Johnny', age: 31, email: 'johnny@example.com' },
    { name: 'Brown', age: 36, email: 'brown@example.com' }
  ];
  filteredData: Data[] = [...this.dataSource];
  filters: { [key: string]: string } = {};

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  openFilterDialog(column: string): void {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      data: { column }
    });

    dialogRef.afterClosed().subscribe(filterValue => {
      if (filterValue !== undefined) {
        this.filters[column] = filterValue;
        this.applyFilters();
      }
    });
  }

  applyFilters(): void {
    this.filteredData = this.dataSource.filter(item =>
      Object.keys(this.filters).every(key =>
        item[key as keyof Data].toString().toLowerCase().includes(this.filters[key].toLowerCase())
      )
    );
  }

}
