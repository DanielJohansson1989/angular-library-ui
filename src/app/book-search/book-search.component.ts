import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.css'
})
export class BookSearchComponent {
  searchQuery: string = '';
  searchResults: string[] = [];

  constructor() {}

  onSearch(): void {
    if (this.searchQuery) {
      this.searchResults = [
        `Result 1 for "${this.searchQuery}"`,
        `Result 2 for "${this.searchQuery}"`,
        `Result 3 for "${this.searchQuery}"`
      ];
    } else {
      this.searchResults = [ ];
    }
  }
}
