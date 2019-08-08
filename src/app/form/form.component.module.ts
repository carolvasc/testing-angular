import { NgModule } from "@angular/core";
import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule],
  declarations: [FormComponent],
  exports: [FormComponent],
  providers: [],
})

export class FormModule { }