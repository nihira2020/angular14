import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalpopupComponent } from './modalpopup.component';

describe('ModalpopupComponent', () => {
  let component: ModalpopupComponent;
  let fixture: ComponentFixture<ModalpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
