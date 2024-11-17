import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataGridComponent } from './modules/data-grid/data-grid.component';
import { TableGridComponent } from './modules/table-grid/table-grid.component';
import { DateTimeDropdownComponent } from './modules/datetime-dropdown/datetime-dropdown.component';
import { TableSortFilterComponent } from './modules/table-sort-filter/table-sort-filter.component';
import { DateTimeValidationComponent } from './modules/datetime-validation/datetime-validation.component';
import { MultiColumnFilterComponent } from './modules/multi-column-filter/multi-column-filter.component';

// ROUTES
const routes: Routes = [
  {
    path: '',
    component: DataGridComponent,
    children: [
      {
        path: 'DataGridComponent',
        loadChildren: '~modules/data-grid/data-grid.module#DataGridModule',
      },
    ]
  },
  {
    path: 'table-grid',
    component: TableGridComponent,
    children: [
      {
        path: 'TableGridComponent',
        loadChildren: '~modules/table-grid/table-grid.module#TableGridModule',
      },
    ]
  },
  {
    path: 'table-sort-filter',
    component: TableSortFilterComponent,
    children: [
      {
        path: 'TableSortFilterComponent',
        loadChildren: '~modules/table-sort-filter/table-sort-filter.module#TableSortFilterModule',
      },
    ]
  },
  {
    path: 'datetime-dropdown',
    component: DateTimeDropdownComponent,
    children: [
      {
        path: 'DateTimeDropdownComponent',
        loadChildren: '~modules/datetime-dropdown/datetime-dropdown.module#DateTimeDropdownModule',
      },
    ]
  },
  {
    path: 'datetime-validation',
    component: DateTimeValidationComponent,
    children: [
      {
        path: 'DateTimeValidationComponent',
        loadChildren: '~modules/datetime-validation/datetime-validation.module#DateTimeValidationModule',
      },
    ]
  },
  {
    path: 'multi-column-filter',
    component: MultiColumnFilterComponent,
    children: [
      {
        path: 'MultiColumnFilterComponent',
        loadChildren: '~modules/multi-column-filter/multi-column-filter.module#MultiColumnFilterModule',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

