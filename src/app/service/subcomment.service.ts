import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { SubComment } from "../model/subcomment.model";

@Injectable({
    providedIn: 'root'
})

export class SubCommentService {
    // private apiURL = "http://localhost:3000";
    private apiURL = "http://localhost:8080/api";

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private httpClient: HttpClient) {}

    getAll(): Observable<any> {
  
        return this.httpClient.get(this.apiURL + '/comment')
      
        .pipe(
          catchError(this.errorHandler)
        )
      }

      create(subComment:SubComment): Observable<any> {
  
        return this.httpClient.post(this.apiURL + '/comment', JSON.stringify(subComment), this.httpOptions)
      
        .pipe(
          catchError(this.errorHandler)
        )
      }

      find(id:number): Observable<any> {
  
        return this.httpClient.get(this.apiURL + '/comment/' + id)
      
        .pipe(
          catchError(this.errorHandler)
        )
      }

      update(id:number, subComment:SubComment): Observable<any> {
  
        return this.httpClient.put(this.apiURL + '/comment/' + id, JSON.stringify(subComment), this.httpOptions)
     
        .pipe( 
          catchError(this.errorHandler)
        )
      }

      delete(id:number){
        return this.httpClient.delete(this.apiURL + '/comment/' + id, this.httpOptions)
      
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