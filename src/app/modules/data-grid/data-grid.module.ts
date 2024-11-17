import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../utils/shared.module';
import { DataGridComponent } from './data-grid.component';


@NgModule({
  declarations: [
    DataGridComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class DataGridModule {
}
