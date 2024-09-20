import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { APIResponse } from './models/apiresponse';
import { APIResponseService } from './service/apiresponse.service';
import { response } from 'express';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { HttpStatusCode } from '@angular/common/http';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-library-ui';

  apiResponse: APIResponse = {
    isSuccess: true,
    result: [],
    httpStatusCode: HttpStatusCode.Ok,
    errorList:[]
  }

  constructor (private apiResponseService: APIResponseService){

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
