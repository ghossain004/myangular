import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { Message } from "../model/message.model";

@Injectable({
    providedIn: 'root'
})

export class MessageService {
    // private apiURL = "http://localhost:3000";
    private apiURL = "http://localhost:8080/api";

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private httpClient: HttpClient) {}

    getAll(): Observable<any> {
  
        return this.httpClient.get(this.apiURL + '/messages')
      
        .pipe(
          catchError(this.errorHandler)
        )
      }

      create(post:Message): Observable<any> {
  
        return this.httpClient.post(this.apiURL + '/messages', JSON.stringify(post), this.httpOptions)
      
        .pipe(
          catchError(this.errorHandler)
        )
      }

      find(id:number): Observable<any> {
  
        return this.httpClient.get(this.apiURL + '/messages/' + id)
      
        .pipe(
          catchError(this.errorHandler)
        )
      }

      update(id:number, post:Message): Observable<any> {
  
        return this.httpClient.put(this.apiURL + '/messages/' + id, JSON.stringify(post), this.httpOptions)
     
        .pipe( 
          catchError(this.errorHandler)
        )
      }

      delete(id:number){
        return this.httpClient.delete(this.apiURL + '/messages/' + id, this.httpOptions)
      
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