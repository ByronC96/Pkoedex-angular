import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean =false;
  redirectUrl: string;

  login(name: string, password: string): Observable<boolean>{
    const isLoggedIn = (name == 'pika' && password =='pika')

    return of(isLoggedIn).pipe(
      delay(700),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn));
  }

  logout(){
    this.isLoggedIn = false;
  }
}
