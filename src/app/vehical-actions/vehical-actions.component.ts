import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionItem } from '../action-item';
import { ItemActionsComponent } from "../item-actions/item-actions.component";

@Component({
    selector: 'app-vehical-actions',
    standalone: true,
    templateUrl: './vehical-actions.component.html',
    styleUrls: ['./vehical-actions.component.scss'],
    imports: [CommonModule, ItemActionsComponent]
})
export class VehicalActionsComponent {
  vehicleActionItems: ActionItem[] = [
    { label: 'Create RFR' , route: '/create-rfr'  },
    { label: 'Preventive maintenance' , route: '/maintenance'  },
    { label: 'Allocate staff',  route: '/allocate-staff'  }
  ];


}
