import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type ItemType = {
  readonly id: number;
  readonly name: string;
};

type CollectionType = ReadonlyArray<ItemType>;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isChecked = signal(true);

  collection: CollectionType = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];
  emptyCollection: CollectionType = [];

  radioValue = signal(1);
}
