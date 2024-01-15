import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicalActionsComponent } from './vehical-actions.component';

describe('VehicalActionsComponent', () => {
  let component: VehicalActionsComponent;
  let fixture: ComponentFixture<VehicalActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicalActionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicalActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
