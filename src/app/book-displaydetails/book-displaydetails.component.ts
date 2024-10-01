import { Component } from '@angular/core';
import { APIResponseService } from '../service/apiresponse.service';
import { Book } from '../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { APIResponse } from '../models/apiresponse';

@Component({
  selector: 'app-book-displaydetails',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-displaydetails.component.html',
  styleUrl: './book-displaydetails.component.css'
})
export class BookDisplaydetailsComponent {

  constructor(private apiResponseService: APIResponseService, private route: ActivatedRoute, private router: Router){

  }

  updateSuccess: boolean = false;

  apiResponse: APIResponse<Book> = {
    isSuccess: false,
    result: {
      id: 0, 
      title: '', 
      author: '', 
      dateOfPublication: '', 
      genre: '', 
      available: false, 
      imageURL: '',
      description: ''
    },
    httpStatusCode: HttpStatusCode.BadRequest,
    errorList: [] 
  }

  ngOnInit(){
    this.getBook(Number(this.route.snapshot.paramMap.get('id')));
  }

  getBook(id: number){
    this.apiResponseService.getSingleBook(id).subscribe({
      next: (response) => {
        this.apiResponse = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log(`Http status code: ${error.status}, Message: ${error.message}`);
      }
    });
  }

  onSubmit() {
    console.log('The value of book that is sent to database', this.apiResponse.result);
    this.apiResponseService.updateBook(this.apiResponse.result).subscribe({
      next: (response) => {
        this.apiResponse = response;

        if (response.isSuccess === true) {
          this.updateSuccess = true;
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log(`Http status code: ${error.status}, Message: ${error.message}`);
      }
    });
  }

  onCloseModal() {
    this.updateSuccess = false;
  }

  onDelete(bookId: number) {
    this.apiResponseService.deleteBook(bookId).subscribe({
      error: (error: HttpErrorResponse) => {
        console.log(`Http status code: ${error.status}, Message: ${error.message}`);
      },
      complete: () => {
        alert('Book deleted successfully!');
        this.router.navigate(['books']);
      }
    });
  }
}
