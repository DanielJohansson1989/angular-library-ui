import { HttpStatusCode } from "@angular/common/http";
import { Book } from "./book";

export interface APIResponse{
    isSuccess: boolean;
    result: Book[];
    httpStatusCode: HttpStatusCode;
    errorList: string[];
}
