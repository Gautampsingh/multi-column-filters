import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../utils/shared.module';
import { TableGridComponent } from './table-grid.component';

@NgModule({
  declarations: [
    TableGridComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class TableGridModule {
}
