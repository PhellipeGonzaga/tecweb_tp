import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabeleciomentoComponent } from './estabeleciomento.component';

describe('EstabeleciomentoComponent', () => {
  let component: EstabeleciomentoComponent;
  let fixture: ComponentFixture<EstabeleciomentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstabeleciomentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabeleciomentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
