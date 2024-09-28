import { Component } from '@angular/core';
import { APIResponseService } from '../service/apiresponse.service';
import { Book } from '../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  book: Book = {
    id: 0, 
    title: '', 
    author: '', 
    dateOfPublication: '', 
    genre: '', 
    available: false, 
    imageURL: '',
    description: ''
  }

  ngOnInit(){
    this.getBook(Number(this.route.snapshot.paramMap.get('id')));
  }

  getBook(id: number){
    this.apiResponseService.getSingleBook(id).subscribe({
      next: (response) => {
        this.book = response.result;
      },
      error: (error) => {
        console.error('Error fetching data: ', error);
      }
    });
  }

  onSubmit() {
    console.log('The value of book that is sent to database', this.book);
    this.apiResponseService.updateBook(this.book).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
