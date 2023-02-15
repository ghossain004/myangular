import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { Login } from "../model/login.model";

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    // private apiURL = "http://localhost:3000";
    private apiURL = "http://localhost:8080/api";

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

      create(login:Login): Observable<any> {
  
        return this.httpClient.post(this.apiURL + '/signup', JSON.stringify(login), this.httpOptions)
      
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

      update(id:number, login:Login): Observable<any> {
  
        return this.httpClient.put(this.apiURL + '/update/' + id, JSON.stringify(post), this.httpOptions)
     
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