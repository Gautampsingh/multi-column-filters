import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '~utils/shared.module';

import { AppRoutingModule } from '~app/app.routes';

// COMPONENTS
import { AppComponent } from '~components/app/app.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { DataGridComponent } from '../app/modules/data-grid/data-grid.component';
import { FilterDialogComponent } from './modules/data-grid/filter-dialog/filter-dialog.component';

import { TableGridComponent } from '../app/modules/table-grid/table-grid.component';
import { FilterBoxComponent } from './modules/table-grid/filter-box/filter-box.component';

import { TableSortFilterComponent } from '../app/modules/table-sort-filter/table-sort-filter.component';

import { DateTimeDropdownComponent } from './modules/datetime-dropdown/datetime-dropdown.component';
import { DateTimeValidationComponent } from './modules/datetime-validation/datetime-validation.component';

import { MultiColumnFilterComponent } from './modules/multi-column-filter/multi-column-filter.component';
import { FilterColumnComponent } from './modules/multi-column-filter/filter-column/filter-column.component';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    FilterDialogComponent,
    TableGridComponent,
    FilterBoxComponent,
    TableSortFilterComponent,
    DateTimeDropdownComponent,
    DateTimeValidationComponent,
    MultiColumnFilterComponent,
    FilterColumnComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
