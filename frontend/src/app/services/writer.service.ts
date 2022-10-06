import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Writer {
  id: number;
  nombre: string;
  fechas: string;
}

@Injectable({
  providedIn: 'root'
})
export class WriterService {

  endpoint = 'http://localhost:8080/api/writers';
  httpOptions = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: new HttpHeaders ({ 'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) { }

  createWriter( writer: Writer): Observable<any> {
   return this.httpClient.post<Writer>(this.endpoint, writer, this.httpOptions);
  }

  getWriter(id): Observable<Writer[]> {
    return this.httpClient.get<Writer[]>(this.endpoint + '/' + id);
  }

  getWriters(): Observable<Writer[]> {
    return this.httpClient.get<Writer[]>(this.endpoint);
  }

  deleteWriter(id): Observable<Writer[]>  {
    return this.httpClient.delete<Writer[]>(this.endpoint + '/' + id, this.httpOptions);
  }

  deleteAllWriters(): Observable<Writer[]> {
    return this.httpClient.delete<Writer[]>(this.endpoint);
  }

  updateWriter(id, writer: Writer): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, writer, this.httpOptions);
  }
}
