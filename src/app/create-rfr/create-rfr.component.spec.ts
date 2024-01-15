import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRFRComponent } from './create-rfr.component';

describe('CreateRFRComponent', () => {
  let component: CreateRFRComponent;
  let fixture: ComponentFixture<CreateRFRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRFRComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateRFRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
