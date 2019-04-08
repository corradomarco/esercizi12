import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemooComponent } from './form-demoo.component';

describe('FormDemooComponent', () => {
  let component: FormDemooComponent;
  let fixture: ComponentFixture<FormDemooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDemooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDemooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
