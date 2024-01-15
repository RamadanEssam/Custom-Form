import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-item-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-selector.component.html',
  styleUrl: './item-selector.component.scss'
})
export class ItemSelectorComponent {
  @Input() menuItems: MenuItem[] = [];
  @Input() activeItem!:MenuItem;
  @Output() itemSelected: EventEmitter<MenuItem> = new EventEmitter();

  // Function to handle menu item click
  onMenuItemClick(clickedItem: MenuItem): void {
    // Set the clicked menu item as active
    this.activeItem = clickedItem;

    // Emit the event for the parent component to handle
    this.itemSelected.emit(clickedItem);
    // Log for demonstration
    console.log(clickedItem.id);
  }
}
