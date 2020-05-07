import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>("/api/user");
  }
}

export class User{
  id: number;
  name: string;
  gender: string;
  mobile: string;
  email: string;
}
