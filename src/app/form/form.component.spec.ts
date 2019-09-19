import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [{ provide: FormBuilder }]
    }).compileComponents();
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;

    component.clientForm = formBuilder.group({
      name: null,
      nicename: 'Carolzinha',
      nickname: null,
      document: null,
      clientCode: null,
      stateRegistration: null,
      municipalRegistration: null,
      address: null,
      addressNumber: null,
      complement: null,
      neighborhood: null,
      zipCode: null,
      city: null,
      state: null,
      email: null,
      telephone: null,
      telephone2: null,
      monitored: false,
    });

    fixture.detectChanges();
  }));

  test('should exist', () => {
    expect(component).toBeDefined();
  });

  test("name can't be empty", () => {
    expect(component.clientForm.controls['nicename'].value).not.toBe('');
  })

  test("name can't be null", () => {
    expect(component.clientForm.controls['nicename'].value).not.toBe(null);
  })

  // test('two plus two is four', () => {
  //   expect(2 + 2).toBe(4);
  // });

  // test('object assigment', () => {
  //   const data = { one: 1 };
  //   data['two'] = 2;
  //   expect(data).toEqual({ one: 1, two: 2 });
  // })
});
