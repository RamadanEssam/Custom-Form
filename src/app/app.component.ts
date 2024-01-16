import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ItemAttributesComponent } from "./old/item-attributes/item-attributes.component";
import { VehicleComponent } from "./vehicle/vehicle.component";
import { UserComponent } from "./user/user.component";
import { AreaComponent } from "./area/area.component";
import { BranchComponent } from "./branch/branch.component";
import { ItemSelectorComponent } from './item-selector/item-selector.component';
import { MenuOneComponent } from "./menu-one/menu-one.component";
import { ItemActionsComponent } from './item-actions/item-actions.component';
import { VehicalActionsComponent } from './vehical-actions/vehical-actions.component';
import { VechicalPanelComponent } from './vechical-panel/vechical-panel.component';
import { ItemDetailsPanelComponent } from './item-details-panel/item-details-panel.component';
import { SpinnerComponent } from "./shared/spinner/spinner.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ItemAttributesComponent, VehicleComponent, UserComponent, AreaComponent, BranchComponent, ItemSelectorComponent, MenuOneComponent, ItemActionsComponent, VehicalActionsComponent, VechicalPanelComponent, ItemDetailsPanelComponent, SpinnerComponent]
})
export class AppComponent {
  title = 'task-one';
}
