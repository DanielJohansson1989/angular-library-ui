import { Component } from '@angular/core';
import { APIResponse } from '../models/apiresponse';
import { APIResponseService } from '../service/apiresponse.service';
import { CommonModule } from '@angular/common';
import { HttpStatusCode } from '@angular/common/http';
import { Book } from '../models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booklist-display',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './booklist-display.component.html',
  styleUrl: './booklist-display.component.css'
})
export class BooklistDisplayComponent {

  apiResponse: APIResponse<Book[]> = {
    isSuccess: false,
    result: [],
    httpStatusCode: HttpStatusCode.BadRequest,
    errorList: []
  }

  constructor( private apiResponseService: APIResponseService, private router: Router ) {

  }

  ngOnInit(): void{
    this.getApiResponse();
  }

  getApiResponse(){
    this.apiResponseService.getAllBooks().subscribe({
      next: (response: APIResponse<Book[]>) => {
        this.apiResponse = response;
        this.sortByTitle();
        console.log('API Response: ', this.apiResponse);
      },
      error: (error) => {
        console.error('Error fetching data: ', error);
      }
    });
  }

  onSortChange(event: any) {
    const sortOption = event.target.value;
    switch(sortOption) {
      case 'title': {
        this.sortByTitle();
        break;
      }
      case 'available': {
        this.sortByAvailable();
        break;
      }
      case 'author': {
        this.sortByAuthor();
        break;
      }
      default: {
        this.sortByTitle();
        console.warn(`Unknown sorting option: ${sortOption}. Defaulting to sorting by title`);
        break;
      }
    }
  }

  sortByTitle() {
    this.apiResponse.result.sort((a, b) => { 
      return a.title.localeCompare(b.title)
    });
  }

  sortByAvailable() {
    this.apiResponse.result.sort((a, b) => {
      return (a.available === b.available) ? 0 : a.available ? -1 : 1;
    });
  }

  sortByAuthor() {
    this.apiResponse.result.sort((a, b) => {
      return a.author.localeCompare(b.author);
    });
  }

  goToDetails(id: number){
    this.router.navigate(['books/details/', id]);
  }
}
