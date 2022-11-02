import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user-model';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SignupService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }
  
  public addUser(user: User): Observable<User>{
    return this.httpClient.post<User>(`${this.apiServerUrl}/user/register`, user);
  }

  public updateUser(user: User): Observable<User>{
    return this.httpClient.put<User>(`${this.apiServerUrl}/user/update`, user);
  }

  public deleteUser(id: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.apiServerUrl}/user/delete/${id}`);
  }

}