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

    getAllBooks(): Observable<APIResponse>{
        return this.http.get<APIResponse>(this.baseURL + 'books');
    }

    searchForBooks(searchKeyword: string): Observable<APIResponse>{
        return this.http.get<APIResponse>(this.baseURL + 'book/result?searchKeyword=' + searchKeyword)
    }

    createBook(newBook: Book): Observable<APIResponse>{
        newBook.iD = 0;
        return this.http.post<APIResponse>(this.baseURL + '/book', newBook)
    }
}