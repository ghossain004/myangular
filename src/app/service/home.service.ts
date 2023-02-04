import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { Signup } from "../model/signup.model";

@Injectable({
    providedIn: 'root'
})

export class HomeService {
    private apiURL = "http://localhost:3000";

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private httpClient: HttpClient) {}

    getAll(): Observable<any> {
  
        return this.httpClient.get(this.apiURL + '/get', this.httpOptions)
      
        .pipe(
          catchError(this.errorHandler)
        )
      }

      create(signup:Signup): Observable<any> {
  
        return this.httpClient.post(this.apiURL + '/signup', JSON.stringify(signup), this.httpOptions)
      
        .pipe(
          catchError(this.errorHandler)
        )
      }

      find(id:number): Observable<any> {
  
        return this.httpClient.get(this.apiURL + '/find/' + id)
      
        .pipe(
          catchError(this.errorHandler)
        )
      }

      update(id:number, signup:Signup): Observable<any> {
  
        return this.httpClient.put(this.apiURL + '/update/' + id, JSON.stringify(signup), this.httpOptions)
     
        .pipe( 
          catchError(this.errorHandler)
        )
      }

      delete(id:number){
        return this.httpClient.delete(this.apiURL + '/delete/' + id, this.httpOptions)
      
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