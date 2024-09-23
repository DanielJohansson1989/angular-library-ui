import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponse } from '../models/apiresponse';
import { APIResponseService } from '../service/apiresponse.service';
import { HttpStatusCode } from '@angular/common/http';

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

  apiResponse: APIResponse = {
    isSuccess: false,
    result: [],
    httpStatusCode: HttpStatusCode.BadRequest,
    errorList: [],
  }

  constructor(private apiResponseService: APIResponseService) {}

  onSearch(): void {
    this.isLoading = true;
    this.apiResponseService.searchForBooks(this.searchQuery).subscribe({
      next: (response: APIResponse) => {
        this.apiResponse = response;
        console.log('API Response: ', this.apiResponse);
        this.hasSearched = true;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching data: ', error);
        this.hasSearched = true;
        this.isLoading = false;
      }
    })
  }
}
