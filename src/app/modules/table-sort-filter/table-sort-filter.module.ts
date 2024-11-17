import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../utils/shared.module';
import { TableSortFilterComponent } from './table-sort-filter.component';

@NgModule({
  declarations: [
    TableSortFilterComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class TableSortFilterModule {
}
