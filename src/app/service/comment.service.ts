import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { Comment } from "../model/comment.model";
import { Post } from "../model/post.model";

@Injectable({
    providedIn: 'root'
})

export class CommentService {
    // private apiURL = "http://localhost:3000";
    private apiURL = "http://localhost:8080/api";

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private httpClient: HttpClient) {}

    getAll(): Observable<any> {
  
        return this.httpClient.get(this.apiURL + '/posts')
      
        .pipe(
          catchError(this.errorHandler)
        )
      }

      create(comment:Comment): Observable<any> {
  
        return this.httpClient.post(this.apiURL + '/posts', JSON.stringify(comment), this.httpOptions)
      
        .pipe(
          catchError(this.errorHandler)
        )
      }

      find(id:number): Observable<any> {
  
        return this.httpClient.get(this.apiURL + '/posts/' + id)
      
        .pipe(
          catchError(this.errorHandler)
        )
      }

      update(id:number, comment:Comment): Observable<any> {
  
        return this.httpClient.put(this.apiURL + '/posts/' + id, JSON.stringify(comment), this.httpOptions)
     
        .pipe( 
          catchError(this.errorHandler)
        )
      }

      delete(id:number){
        return this.httpClient.delete(this.apiURL + '/posts/' + id, this.httpOptions)
      
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