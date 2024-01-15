import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemSelectorComponent } from "../item-selector/item-selector.component";
import { MenuItem } from '../menu-item';
const infoSvgPath = '../../assets/svgs/items-selector/noun-information-1582625 1.svg';
const groupOneSvgPath = '../../assets/svgs/items-selector/Group 8646.svg';
const maintenanceSvgPath = '../../assets/svgs/items-selector/noun-maintenance-5723877 1.svg';
const moreSvgPath = '../../assets/svgs/items-selector/noun-more-2012703 1.svg';
const photoSvgPath = '../../assets/svgs/items-selector/noun-photo-6197316 1.svg';
const groupTwoSvgPath = '../../assets/svgs/items-selector/Group (1).svg';

@Component({
    selector: 'app-menu-one',
    standalone: true,
    templateUrl: './menu-one.component.html',
    styleUrl: './menu-one.component.scss',
    imports: [CommonModule, ItemSelectorComponent]
})
export class MenuOneComponent {

myMenuItemsOne: MenuItem[] = [
  {id:"1", icon: infoSvgPath, label: 'Main info'},
  {id:"2", icon: maintenanceSvgPath, label: 'Preventive maintenance'},
  {id:"3", icon: groupOneSvgPath, label: 'Operations'},
  {id:"4", icon: groupTwoSvgPath, label: 'Device info'},
  {id:"5", icon: photoSvgPath, label: 'Photos'},
  {id:"6", icon: moreSvgPath , label: 'More'},

];

onItemSelected(item: MenuItem): void {
  // Handle the selection => navigate or call an API
  // You can use Angular Router for navigation or HttpClient for API calls

  console.log(`Item ID: ${item.id}, Text: ${item.label}`);
}

}
