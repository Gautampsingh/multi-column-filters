import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface TableData {
  id: number;
  name: string;
  age: number;
  email: string;
}

const ELEMENT_DATA: TableData[] = [
  { id: 1, name: 'John Doe', age: 25, email: 'john.doe@gmail.com' },
  { id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@gmail.com' },
  { id: 3, name: 'Michael Johnson', age: 35, email: 'michael.johnson@gmail.com' },
  { id: 4, name: 'Emily Davis', age: 28, email: 'emily.davis@gmail.com' },
  { id: 5, name: 'David Lee', age: 40, email: 'david.lee@gmail.com' },
];

@Component({
  selector: 'app-table-sort-filter',
  templateUrl: './table-sort-filter.component.html',
  styleUrls: ['./table-sort-filter.component.scss']
})

export class TableSortFilterComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'age', 'email'];
  dataSource = new MatTableDataSource<TableData>(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;
  isFilterShow = true;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    
  }

  applyFilter(event: Event, column: string): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // Filter only on the current column
    if (column) {
      this.dataSource.filterPredicate = (data: TableData, filter: string) => {
        const columnValue = data[column] ? data[column].toString().toLowerCase() : '';
        return columnValue.includes(filter);
      };
    }
  }

}
