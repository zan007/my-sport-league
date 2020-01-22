import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpResponseBase} from '@angular/common/http';
import {Observable, throwError as observableThrowError,} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';

function getBaseUrl(): string {
  if (environment.production) {
    return '';
  }

  return '/api';
}


@Injectable()
export class ApiService {
  private baseUrl = getBaseUrl();

  constructor(private http: HttpClient) {
  }

  public post(url: string, params?): Observable<any> {
    return this.http
      .post(this.baseUrl + url, params)
      .pipe(catchError((response: HttpResponse<HttpResponseBase>) => observableThrowError(response)));
  }
}

