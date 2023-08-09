import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponenetComponent } from './footer-componenet.component';

describe('FooterComponenetComponent', () => {
  let component: FooterComponenetComponent;
  let fixture: ComponentFixture<FooterComponenetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponenetComponent]
    });
    fixture = TestBed.createComponent(FooterComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
