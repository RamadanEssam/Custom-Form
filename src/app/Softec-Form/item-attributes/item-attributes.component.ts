import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailsComponent } from "./item-details/item-details.component";
import { FormComponent } from "./form/form.component";
// import { FormServiceService } from '../../serveses/form-service.service';
import { ItemAttribute } from '../../ItemAttribute';

@Component({
    selector: 'app-item-attributes',
    standalone: true,
    templateUrl: './item-attributes.component.html',
    styleUrl: './item-attributes.component.scss',
    imports: [CommonModule, ItemDetailsComponent, FormComponent]
})
export class ItemAttributesComponent implements OnInit {


  @Input() formFields: ItemAttribute[] = [];
  isEditMode = false; // Directly manage the edit mode state

  constructor( ) {}

  ngOnInit(): void {

  }

  handleSubmission(data: any) {
    console.log('Form data:', data);
  }


  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }
}


