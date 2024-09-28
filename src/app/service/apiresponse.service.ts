import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { APIResponse } from "../models/apiresponse";
import { Book } from "../models/book";

@Injectable({
    providedIn: 'root'
})

export class APIResponseService{
    baseURL = 'https://localhost:7078/api/';

    constructor(private http:HttpClient){

    }

    getAllBooks(): Observable<APIResponse<Book[]>>{
        return this.http.get<APIResponse<Book[]>>(this.baseURL + 'books');
    }

    searchForBooks(searchKeyword: string): Observable<APIResponse<Book[]>>{
        return this.http.get<APIResponse<Book[]>>(this.baseURL + 'book/result?searchKeyword=' + searchKeyword);
    }

    createBook(newBook: Book): Observable<APIResponse<Book>>{
        return this.http.post<APIResponse<Book>>(this.baseURL + 'book', newBook);
    }

    getSingleBook(bookId: number): Observable<APIResponse<Book>>{
        return this.http.get<APIResponse<Book>>(this.baseURL + 'book/' + bookId);
    }
    
    updateBook(book: Book): Observable<APIResponse<Book>> {
        return this.http.put<APIResponse<Book>>(this.baseURL + 'book', book);
    }
}