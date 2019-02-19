import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHotelesPage } from './info-hoteles.page';

describe('InfoHotelesPage', () => {
  let component: InfoHotelesPage;
  let fixture: ComponentFixture<InfoHotelesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoHotelesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoHotelesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
