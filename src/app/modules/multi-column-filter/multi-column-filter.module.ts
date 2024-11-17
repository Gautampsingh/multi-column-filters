import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../utils/shared.module';
import { MultiColumnFilterComponent } from './multi-column-filter.component';

@NgModule({
  declarations: [
    MultiColumnFilterComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class MultiColumnFilterModule {
}
