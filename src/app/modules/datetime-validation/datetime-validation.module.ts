import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../utils/shared.module';
import { DateTimeValidationComponent } from './datetime-validation.component';

@NgModule({
  declarations: [
    DateTimeValidationComponent,
  ],
  imports: [
    SharedModule 
  ],
  exports: [
    RouterModule,
  ]
})
export class DateTimeValidationModule {
}
