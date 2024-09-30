import { Routes } from '@angular/router';
import { BookSearchComponent } from './book-search/book-search.component';
import { BooklistDisplayComponent } from './booklist-display/booklist-display.component';
import { CreatebookComponent } from './createbook/createbook.component';
import { BookDisplaydetailsComponent } from './book-displaydetails/book-displaydetails.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: BookSearchComponent },
    { path: 'books', component: BooklistDisplayComponent },
    { path: 'createbook', component: CreatebookComponent },
    { path: 'books/details/:id', component: BookDisplaydetailsComponent}
];
