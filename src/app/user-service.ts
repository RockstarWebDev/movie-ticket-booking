import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  private baseUrl = 'http://your-api-url';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  logout(): void {
    // Clear user-related data from local storage or session storage
  }

  isAuthenticated(): boolean {
    // Check if the user is authenticated based on the presence of a token or other data
    return true; // Return true or false based on the check
  }
  
}
