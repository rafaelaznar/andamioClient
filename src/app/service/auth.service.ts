import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../model/AuthResponse.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private url = `${environment.baseURL}/session`;

  sessionStatus = new Subject<AuthResponse>();
  sessionObserver$ = this.sessionStatus.asObservable();

  constructor( private oHttpClient: HttpClient ) { }

  login(username: string, password: string): Observable<AuthResponse>{
    return this.oHttpClient.post(this.url,{ username, password}, {withCredentials: true});
  }

  logout(): void{
    this.oHttpClient.delete(this.url, { withCredentials: true })
    .subscribe({
      next: (resp: AuthResponse) => {
        this.sessionStatus.next(resp);
      },
      error: (err: HttpErrorResponse) =>{
        console.log(err);
      }
    })
  }

  checkSession(): void{
    this.oHttpClient.get<AuthResponse>(this.url, {withCredentials:true})
    .subscribe({
      next: (resp: AuthResponse) =>{
        this.sessionStatus.next(resp);
      },
      error: (err: HttpErrorResponse) =>{
        console.log(err);
      }
    })
  }

}
