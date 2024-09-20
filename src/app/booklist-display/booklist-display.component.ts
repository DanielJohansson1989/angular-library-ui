import { Component } from '@angular/core';
import { APIResponse } from '../models/apiresponse';
import { APIResponseService } from '../service/apiresponse.service';
import { CommonModule } from '@angular/common';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-booklist-display',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './booklist-display.component.html',
  styleUrl: './booklist-display.component.css'
})
export class BooklistDisplayComponent {

  apiResponse: APIResponse = {
    isSuccess: false,
    result: [],
    httpStatusCode: HttpStatusCode.BadRequest,
    errorList: []
  }

  constructor( private apiResponseService: APIResponseService ) {

  }

  ngOnInit(): void{
    this.getApiResponse();
  }

  getApiResponse(){
    this.apiResponseService.getAllBooks().subscribe({
      next: (response: APIResponse) => {
        this.apiResponse = response;
        console.log('API Response: ', this.apiResponse);
      },
      error: (error) => {
        console.error('Error fetching data: ', error);
      }
    });
  }
}
