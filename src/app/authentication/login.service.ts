import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface login{
    id: any;
    username: string;
    password: string;
    
}

@Injectable()
export class LoginService{
    constructor(private http: HttpClient) {}

    getLogin(user: string): Observable<login> {
        return this.http.get<login>('http://localhost:3000/login/' + user)
       
    }
}