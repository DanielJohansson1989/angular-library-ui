import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { APIResponse } from "../models/apiresponse";

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
}