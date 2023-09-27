import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelComponent } from './sel.component';

describe('SelComponent', () => {
  let component: SelComponent;
  let fixture: ComponentFixture<SelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelComponent]
    });
    fixture = TestBed.createComponent(SelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
