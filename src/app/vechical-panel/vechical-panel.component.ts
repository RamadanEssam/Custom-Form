import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemPanelDetails } from '../item-panel-details';
import { ItemDetailsPanelComponent } from "../item-details-panel/item-details-panel.component";

@Component({
    selector: 'app-vechical-panel',
    standalone: true,
    templateUrl: './vechical-panel.component.html',
    styleUrl: './vechical-panel.component.scss',
    imports: [CommonModule, ItemDetailsPanelComponent]
})
export class VechicalPanelComponent {

  vehicleDetails: ItemPanelDetails[] = [
    { type: 'Status', value: "true" }, //  iconSrcOne showen  if status false iconSrcTwo will show
    { type: '980-476', value: "980-476" },
    { type: 'Headquarters', value: "Headquartes  >  Cloud technical office" }
  ];

  iconSrc: string = '../../assets/svgs/items-details-panel/Isolation_Mode.svg';
  title: string = '#4567';
  constructor( ) {}


}

