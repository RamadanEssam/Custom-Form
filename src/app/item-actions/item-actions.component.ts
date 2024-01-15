import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ActionItem } from '../action-item';

@Component({
  selector: 'app-item-actions',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './item-actions.component.html',
  styleUrls: ['./item-actions.component.scss']
})
export class ItemActionsComponent {
 @Input() title:string='';
  @Input() actionItems: ActionItem[] = [];

  constructor(private router: Router) {}


  }

