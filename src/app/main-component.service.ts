import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { Http } from '../../node_modules/@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class MainComponentService {

  constructor(private http: Http) { }

  get(url: string): Observable<any> {
    return this.http.get(url).map(response => response.json())
  }

}
