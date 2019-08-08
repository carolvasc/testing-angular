import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloEweComponent } from './hello-ewe.component';

describe('HelloEweComponent', () => {
  let component: HelloEweComponent;
  let fixture: ComponentFixture<HelloEweComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [ HelloEweComponent ]
      });
      fixture = TestBed.createComponent(HelloEweComponent);
      component = fixture.componentInstance;
  }));

  test('should exist', () => {
      expect(component).toBeDefined();
  });

  test('should have a default name', () => {
    expect(component.name).toBe('Matt');
});
});
