import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechicalPanelComponent } from './vechical-panel.component';

describe('VechicalPanelComponent', () => {
  let component: VechicalPanelComponent;
  let fixture: ComponentFixture<VechicalPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VechicalPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VechicalPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
