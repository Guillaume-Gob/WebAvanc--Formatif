import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonbonComponent } from './bonbon.component';

describe('BonbonComponent', () => {
  let component: BonbonComponent;
  let fixture: ComponentFixture<BonbonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BonbonComponent]
    });
    fixture = TestBed.createComponent(BonbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
