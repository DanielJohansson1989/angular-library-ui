import { Routes } from '@angular/router';
import { BookSearchComponent } from './book-search/book-search.component';
import { BooklistDisplayComponent } from './booklist-display/booklist-display.component';
import { CreatebookComponent } from './createbook/createbook.component';
import { BookDisplaydetailsComponent } from './book-displaydetails/book-displaydetails.component';

export const routes: Routes = [
    { path: 'book-search-component', component: BookSearchComponent },
    { path: 'booklist-display-component', component: BooklistDisplayComponent },
    { path: 'createbook-component', component: CreatebookComponent },
    { path: 'book-displaydetails-component/:id', component: BookDisplaydetailsComponent}
];
