import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'filter-column',
  templateUrl: './filter-column.component.html',
  styleUrls: ['./filter-column.component.scss']
})
export class FilterColumnComponent implements OnInit {
  @Input() searchText: string = '';

  @Input() filterName = '';
  @Output() resetFilter = new EventEmitter<any>();
  @Output() searchFilter = new EventEmitter<any>();
 

  constructor() { }

  ngOnInit() {
    
  }

  // searchKey(event) {
  //   this.searchText = (event.currentTarget.value !== '' && event.currentTarget.value !== null) ? event.currentTarget.value : '';
  // }

  filterClear() {
    this.resetFilter.emit({ key: this.filterName, value: '' });
    this.searchText = '';
  }

  filterSearch() {
    this.searchFilter.emit({ key: this.filterName, value: this.searchText });
  }

}
