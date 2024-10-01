import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponse } from '../models/apiresponse';
import { APIResponseService } from '../service/apiresponse.service';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.css'
})
export class BookSearchComponent {

  searchQuery: string = '';
  hasSearched: boolean = false;
  isLoading: boolean = false;

  apiResponse: APIResponse<Book[]> = {
    isSuccess: false,
    result: [],
    httpStatusCode: HttpStatusCode.BadRequest,
    errorList: [],
  }

  constructor(private apiResponseService: APIResponseService) {}

  onSearch(): void {
    this.isLoading = true;
    this.apiResponseService.searchForBooks(this.searchQuery).subscribe({
      next: (response: APIResponse<Book[]>) => {
        this.apiResponse = response;
        this.hasSearched = true;
        this.isLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        console.log(`Http status code: ${error.status}, Message: ${error.message}`);
        this.hasSearched = true;
        this.isLoading = false;
      }
    })
  }
}
