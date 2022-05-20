import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Maravilla } from './maravilla';


@Injectable({
  providedIn: 'root'
})
export class MaravillaService {
  private apiUrl: string = environment.baseUrl ;
constructor(private http: HttpClient) { }
getMaravillas(): Observable<Maravilla[]> {
  return this.http.get<Maravilla[]>(this.apiUrl);
}

}
