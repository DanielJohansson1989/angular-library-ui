import { Routes } from '@angular/router';
import { BookSearchComponent } from './book-search/book-search.component';
import { BooklistDisplayComponent } from './booklist-display/booklist-display.component';

export const routes: Routes = [
    { path: 'book-search-component', component: BookSearchComponent },
    { path: 'booklist-display-component', component: BooklistDisplayComponent }
];
