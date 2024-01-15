

import { Component, Input } from '@angular/core';
import { ItemPanelDetails } from '../item-panel-details';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-details-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-details-panel.component.html',
  styleUrl: './item-details-panel.component.scss'
})
export class ItemDetailsPanelComponent {
  @Input() iconSrc: string = '';
  @Input() title: string = '';
  @Input() details: ItemPanelDetails[] = [];

  iconSrcOne: string = '../../assets/svgs/items-details-panel/ic_green confirmedone.svg';
  iconSrcTwo: string = '../../assets/svgs/items-details-panel/ic_green confirmedtwo.svg';
}
