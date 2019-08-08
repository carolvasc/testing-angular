import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  clientForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      nicename: ['', Validators.required],
      nickname: [''],
      document: ['', Validators.required],
      clientCode: [''],
      stateRegistration: [''],
      municipalRegistration: [''],
      address: ['', Validators.required],
      addressNumber: ['', Validators.required],
      complement: [''],
      neighborhood: [''],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
      telephone2: [''],
      monitored: [false],
    });
  }

  onSubmit() {
    console.log(this.clientForm.value);
  }

}
