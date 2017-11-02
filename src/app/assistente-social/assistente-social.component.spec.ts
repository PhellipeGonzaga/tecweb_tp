import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistenteSocialComponent } from './assistente-social.component';

describe('AssistenteSocialComponent', () => {
  let component: AssistenteSocialComponent;
  let fixture: ComponentFixture<AssistenteSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistenteSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistenteSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
