import { Component } from '@angular/core';
import { APIResponseService } from '../service/apiresponse.service';
import { APIResponse } from '../models/apiresponse';
import { FormsModule } from '@angular/forms';
import { Book } from '../models/book';

@Component({
  selector: 'app-createbook',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './createbook.component.html',
  styleUrl: './createbook.component.css'
})
export class CreatebookComponent {
  book: Book = {
    iD: 0,
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
        console.log(response.result);
        if (response.isSuccess){
          this.resetForm();
        }
      },
      error: (error) => {
        console.error('Error fetching data: ', error);
      }
    });
  }

  resetForm() {
    this.book = {
      iD: 0,
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
