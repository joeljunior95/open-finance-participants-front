import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Participant } from '../models/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  apiHost = 'http://127.0.0.1:5000/participants/';
  
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getParticipants(): Observable<Participant[]> {
    return this.httpClient.get<Participant[]>(this.apiHost + 'list')
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getParticipantById(id: number): Observable<Participant> {
    return this.httpClient.get<Participant>(this.apiHost + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Error code: ${error.status}, ` + `Content: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
