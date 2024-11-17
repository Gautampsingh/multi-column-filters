import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-multi-column-filter',
  templateUrl: './multi-column-filter.component.html',
  styleUrls: ['./multi-column-filter.component.scss']
})

export class MultiColumnFilterComponent implements OnInit {

displayedColumns: string[] = ['name', 'age', 'address', 'email'];
  dataSource = new MatTableDataSource([
    { name: 'John Doe', age: 25, address: 'Bhubaneswar, India', email: 'johndoe@example.com' },
    { name: 'Jane Smith', age: 30, address: 'Bengaluru', email: 'janesmith@example.com' },
    { name: 'George Brown', age: 35, address: 'Bergamo, Italy', email: 'georgebrown@example.com' },
    { name: 'Goutam', age: 21, address: 'Milan, Italy', email: 'goutam@example.com' },
    { name: 'Smith', age: 33, address: 'Bhubaneswar, India', email: 'smith@example.com' },
    { name: 'Rocky', age: 38, address: 'Paris, france', email: 'rocky@example.com' },
    { name: 'Johnny', age: 31, address: 'Bhubaneswar, India', email: 'johnny@example.com' },
    { name: 'Brown', age: 36, address: 'Bengaluru', email: 'brown@example.com' },
    { name: 'Johanson', age: 25, address: 'Bergamo', email: 'Johanson@example.com' },
  ]);
  filterValues: { [key: string]: string } = {};
  activeFilter: string | null = null;

  ngOnInit() {
    this.dataSource.filterPredicate = (data, filter) =>
      Object.keys(this.filterValues).every(
        (key) =>
          !this.filterValues[key] || data[key].toString().toLowerCase().includes(this.filterValues[key].toLowerCase())
      );
  }

  toggleColumnFilter(column: string) {
    this.activeFilter = this.activeFilter === column ? null : column;
  }

  searchFilter(column: string) {
    this.filterValues[column['key']] = column['value'];
    this.dataSource.filter = JSON.stringify(this.filterValues);
  }

  resetFilter(column: string) {
    // this.filterValues[column['key']] = column['value'];
    this.filterValues = {};
    this.dataSource.filter = JSON.stringify(this.filterValues);
  }

//   resetFilters() {
//     this.filterValues = {};
//     this.dataSource.filter = JSON.stringify(this.filterValues);
//   }

}
