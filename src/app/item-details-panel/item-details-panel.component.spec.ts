import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsPanelComponent } from './item-details-panel.component';

describe('ItemDetailsPanelComponent', () => {
  let component: ItemDetailsPanelComponent;
  let fixture: ComponentFixture<ItemDetailsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDetailsPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemDetailsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
