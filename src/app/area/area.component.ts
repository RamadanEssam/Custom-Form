import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemAttributesComponent } from "../old/item-attributes/item-attributes.component";
import { areaFormFields } from '../area-form.config';

@Component({
    selector: 'app-area',
    standalone: true,
    templateUrl: './area.component.html',
    styleUrl: './area.component.scss',
    imports: [CommonModule, ItemAttributesComponent]
})
export class AreaComponent {

  areaFormFields = areaFormFields; // Assigning the imported fields to the component property


onAreaDataChanged(areaData: any) {
  console.log('area Data:', areaData);
  // Handle user data
}


}
