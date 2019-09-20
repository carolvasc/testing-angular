import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { User } from './user.model';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [LoginComponent]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  test('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  test('email field validity', () => {
    let errors = {};
    let email = component.form.controls['email'];

    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();

    // Set email to something correct
    email.setValue('test@test.com');
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
  });

  test('password field validity', () => {
    let errors = {};
    let password = component.form.controls['password'];

    // Password field is required
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set password to something
    password.setValue("123456");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    // Set password to something correct
    password.setValue("12345678");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
  });

  test('submitting a form emits a user', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['email'].setValue("carolina.souza@grupokrs.com.br");
    component.form.controls['password'].setValue("12345678");
    expect(component.form.valid).toBeTruthy();

    let user: User;

    // Guarda o valor dentro da variavel local user
    component.loggedIn.subscribe((value) => user = value);

    // Chama a função de login
    component.login();

    // Verifica se o valor emitido é mesmo o valor correto
    expect(user.email).toBe("carolina.souza@grupokrs.com.br");
    expect(user.password).toBe("12345678");
  })

});
