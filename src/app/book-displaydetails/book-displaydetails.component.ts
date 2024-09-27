import { Component } from '@angular/core';
import { APIResponseService } from '../service/apiresponse.service';
import { APIResponse } from '../models/apiresponse';
import { Book } from '../models/book';
import { HttpStatusCode } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-displaydetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-displaydetails.component.html',
  styleUrl: './book-displaydetails.component.css'
})
export class BookDisplaydetailsComponent {

  constructor(private apiResponseService: APIResponseService, private route: ActivatedRoute){

  }
  
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
        console.log(this.apiResponse);
      },
      error: (error) => {
        console.error('Error fetching data: ', error);
      }
    });
  }
}
