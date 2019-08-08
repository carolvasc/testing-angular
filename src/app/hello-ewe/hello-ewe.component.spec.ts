import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloEweComponent } from './hello-ewe.component';

/**
 * Cria um grupo de testes (mantém organizado)
 * OBS: Os testes podem ser realizados fora do describe
 */
describe('HelloEweComponent', () => {
  let component: HelloEweComponent;
  let fixture: ComponentFixture<HelloEweComponent>;

  /** 
   * Roda antes de executar cada teste
   * Ideal para a configuração de propriedades que serão utilizadas nos testes
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelloEweComponent]
    });
    fixture = TestBed.createComponent(HelloEweComponent);
    component = fixture.componentInstance;
  }));

  test('should exist', () => {
    expect(component).toBeDefined();
  });

  test('should have a default name', () => {
    expect(component.name).toBe('Caarol');
  });
});