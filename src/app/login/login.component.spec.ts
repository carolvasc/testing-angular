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
    let email = component.form.controls['email'];
    expect(email.valid).toBeFalsy();

    
    let errors = {};
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
    
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['pattern']).toBeTruthy();
  });

  test('submitting a form emits a user', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['email'].setValue("test@test.com");
    component.form.controls['senha'].setValue("12345678");
    expect(component.form.valid).toBeTruthy();

    let user: User;

    // Guarda o valor dentro da variavel local user
    component.loggedIn.subscribe((value) => user = value);

    // Chama a função de login
    component.login();

    // Verifica se o valor emitido é mesmo o valor correto
    expect(user.email).toBe("test@test.com");
    expect(user.senha).toBe("12345678");
  })

});
