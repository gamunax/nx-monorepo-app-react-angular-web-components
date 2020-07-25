import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiResponse, API_URL } from '@my-domain/api-interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    private http: HttpClient
  ) { }

  getApi() {
    return this.http.get(API_URL);
  }
}
