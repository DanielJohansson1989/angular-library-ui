import { HttpStatusCode } from "@angular/common/http";

export interface APIResponse<T>{
    isSuccess: boolean;
    result: T;
    httpStatusCode: HttpStatusCode;
    errorList: string[];
}
