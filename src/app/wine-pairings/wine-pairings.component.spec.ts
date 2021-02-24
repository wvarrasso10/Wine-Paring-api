import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinePairingsComponent } from './wine-pairings.component';

describe('WinePairingsComponent', () => {
  let component: WinePairingsComponent;
  let fixture: ComponentFixture<WinePairingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinePairingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinePairingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
