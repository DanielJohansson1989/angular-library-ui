import { Component } from '@angular/core';
import { APIResponseService } from '../service/apiresponse.service';
import { APIResponse } from '../models/apiresponse';
import { FormsModule } from '@angular/forms';
import { Book } from '../models/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-createbook',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './createbook.component.html',
  styleUrl: './createbook.component.css'
})
export class CreatebookComponent {
  book: Book = {
    id: 0,
    title: '',
    author: '',
    dateOfPublication: '',
    genre: '',
    imageURL: '',
    description: '',
    available: true
  };

  constructor( private apiResponseService: APIResponseService) {}

  onSubmit(){
    this.apiResponseService.createBook(this.book).subscribe({
      next: (response: APIResponse<Book>) => {
        if (response.isSuccess){
          this.resetForm();
          alert('The data is successfully sent to the database!');
        }
      },
      error: (error) => {
        console.error('Error fetching data: ', error);
      }
    });
  }

  resetForm() {
    this.book = {
      id: 0,
      title: '',
      author: '',
      dateOfPublication: '',
      genre: '',
      imageURL: '',
      description: '',
      available: true
    }
  }
}
