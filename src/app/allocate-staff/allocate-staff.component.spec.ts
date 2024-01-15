import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateStaffComponent } from './allocate-staff.component';

describe('AllocateStaffComponent', () => {
  let component: AllocateStaffComponent;
  let fixture: ComponentFixture<AllocateStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllocateStaffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllocateStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
