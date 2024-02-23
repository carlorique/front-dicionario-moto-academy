import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DicionarioService {
  private apiUrl = 'http://localhost:3000/search/';

  constructor(private http: HttpClient) {}

  searchWord(word: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${word}`);
  }
}
