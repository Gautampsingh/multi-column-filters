import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../utils/shared.module';
import { DateTimeDropdownComponent } from './datetime-dropdown.component';

@NgModule({
  declarations: [
    DateTimeDropdownComponent,
  ],
  imports: [
    SharedModule 
  ],
  exports: [
    RouterModule,
  ]
})
export class DateTimeDropdownModule {
}
