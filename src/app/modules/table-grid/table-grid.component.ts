import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface UserData {
  name: string;
  age: number;
  email: string;
}

const ELEMENT_DATA: UserData[] = [
  { name: 'John Doe', age: 25, email: 'johndoe@example.com' },
  { name: 'Jane Smith', age: 30, email: 'janesmith@example.com' },
  { name: 'George Brown', age: 35, email: 'georgebrown@example.com' },
  { name: 'Goutam', age: 21, email: 'goutam@example.com' },
  { name: 'Smith', age: 33, email: 'smith@example.com' },
  { name: 'Rocky', age: 38, email: 'rocky@example.com' },
  { name: 'Johnny', age: 31, email: 'johnny@example.com' },
  { name: 'Brown', age: 36, email: 'brown@example.com' }
];

@Component({
  selector: 'app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrls: ['./table-grid.component.scss']
})
export class TableGridComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'email'];
  
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  // filteredData: UserData[] = [...this.dataSource];
  filters: { [key: string]: string } = {};
  activeFilter: string | null = null;
  isFilteredData = false;

  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  toggleColumnFilter(column: string) {
    this.activeFilter = this.activeFilter === column ? null : column;
  }

  searchFilter(filterValue) {
    this.filters[filterValue.key] = filterValue.value;
    this.applyFilters();
  }

  applyFilters(): void {
    this.dataSource.filterPredicate = (data: UserData, filter: string) => {
      const transformedFilter = JSON.parse(filter);
      return Object.keys(transformedFilter).every(key => {
        return data[key].toString().toLowerCase().includes(transformedFilter[key].toLowerCase());
      });
    };
    this.dataSource.filter = JSON.stringify(this.filters);
    if(this.dataSource.data.length === this.dataSource.filteredData.length) {
      this.isFilteredData = false;
    } else {
      this.isFilteredData = true;
    }
  }

  resetFilter() {
    this.filters= {};
    this.applyFilters();
  }

}
