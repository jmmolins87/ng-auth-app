import { 
  Injectable, 
  inject, 
  signal 
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environments } from './../../../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environments.baseUrl;
  private _http = inject( HttpClient );

  // ! WIP
  // ! private _currentUser = signal<User | null>(null);
  // ! private _authStatus = signal<AuthStatus>();

  constructor() { }

  login( email: string, password: string ): Observable<boolean> {

    return of(true);
  }
}
