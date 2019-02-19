import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoVuelosPage } from './info-vuelos.page';

describe('InfoVuelosPage', () => {
  let component: InfoVuelosPage;
  let fixture: ComponentFixture<InfoVuelosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoVuelosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoVuelosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
