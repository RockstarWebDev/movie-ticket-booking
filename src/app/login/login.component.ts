import { Component } from '@angular/core';
import { UserService } from '../user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email:'',
    password:''
  };

  constructor( private userService: UserService){}

  login(): void{
    this.userService.login(this.credentials).subscribe({
      next: (response) => {
       // Handle login success, store user data, navigate to home page, etc.
      },
      error: (error) => {
        // Handle login failure, display error message, etc.
      }
    })
  }

}
