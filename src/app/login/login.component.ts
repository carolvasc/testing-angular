import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<User>();
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  login() {
    console.log('Login ', JSON.stringify(this.form.value));
    if (this.form.valid) {
      this.loggedIn.emit(
        new User(this.form.value.email, this.form.value.password)
      )
    }
  }

}
