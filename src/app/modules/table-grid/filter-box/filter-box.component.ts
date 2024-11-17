import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss']
})
export class FilterBoxComponent implements OnInit {
  searchText: string = '';

  @Input() filterName = '';
  @Output() resetFilter = new EventEmitter<boolean>();
  @Output() searchFilter = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
    
  }

  searchKey(event) {
    this.searchText = (event.currentTarget.value !== '' && event.currentTarget.value !== null) ? event.currentTarget.value : '';
  }

  resetFilterText() {
    this.resetFilter.emit(true);
    this.searchText = '';
  }

  searchFilterText() {
    this.searchFilter.emit({ key: this.filterName, value: this.searchText });
  }

}
