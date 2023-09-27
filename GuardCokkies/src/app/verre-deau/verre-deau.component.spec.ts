import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerreDEauComponent } from './verre-deau.component';

describe('VerreDEauComponent', () => {
  let component: VerreDEauComponent;
  let fixture: ComponentFixture<VerreDEauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerreDEauComponent]
    });
    fixture = TestBed.createComponent(VerreDEauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
