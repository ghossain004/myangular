import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { Signup } from "../model/signup.model";

@Injectable({
    providedIn: 'root'
})

export class SignupService {
    private apiURL = "http://localhost:8080/api";
    // private apiURL = "http://localhost:3000";

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private httpClient: HttpClient) {}

    getAll(): Observable<any> {
  
        return this.httpClient.get(this.apiURL + '/signup/', this.httpOptions)
      
        .pipe(
          catchError(this.errorHandler)
        )
      }

      create(signup:Signup): Observable<any> {
  
        return this.httpClient.post(this.apiURL + '/signup/', JSON.stringify(signup), this.httpOptions)
      
        .pipe(
          catchError(this.errorHandler)
        )
      }

      find(id:number): Observable<any> {
  
        return this.httpClient.get(this.apiURL + '/signup/' + id)
      
        .pipe(
          catchError(this.errorHandler)
        )
      }

      update(id:number, signup:Signup): Observable<any> {
  
        return this.httpClient.put(this.apiURL + '/signup/' + id, JSON.stringify(signup), this.httpOptions)
     
        .pipe( 
          catchError(this.errorHandler)
        )
      }

      delete(id:number){
        return this.httpClient.delete(this.apiURL + '/signup/' + id, this.httpOptions)
      
        .pipe(
          catchError(this.errorHandler)
        )
      }

      errorHandler(error:any) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
          errorMessage = error.error.message;
        } else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
     }
}