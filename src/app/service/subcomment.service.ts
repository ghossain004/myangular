import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { SubComment } from "../model/subcomment.model";

@Injectable({
    providedIn: 'root'
})

export class SubCommentService {
    private apiURL = "http://localhost:3000";

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private httpClient: HttpClient) {}

    getAll(): Observable<any> {
  
        return this.httpClient.get(this.apiURL + '/subcomment')
      
        .pipe(
          catchError(this.errorHandler)
        )
      }

      create(subComment:SubComment): Observable<any> {
  
        return this.httpClient.post(this.apiURL + '/subcomment', JSON.stringify(subComment), this.httpOptions)
      
        .pipe(
          catchError(this.errorHandler)
        )
      }

      find(id:number): Observable<any> {
  
        return this.httpClient.get(this.apiURL + '/subcomment/' + id)
      
        .pipe(
          catchError(this.errorHandler)
        )
      }

      update(id:number, subComment:SubComment): Observable<any> {
  
        return this.httpClient.put(this.apiURL + '/subcomment/' + id, JSON.stringify(subComment), this.httpOptions)
     
        .pipe( 
          catchError(this.errorHandler)
        )
      }

      delete(id:number){
        return this.httpClient.delete(this.apiURL + '/subcomment/' + id, this.httpOptions)
      
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