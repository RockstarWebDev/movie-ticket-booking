import { Component } from '@angular/core';
import { UserService } from '../user-service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
 user = {
  name:'',
  email: '',
  password:''
 }

 constructor( private userService: UserService) {}


  signup(): void {
    this.userService.register(this.user)
      .subscribe({
        next: (response) => {
          // Handle signup success, display success message, navigate to login page, etc.
        },
        error: (error) => {
          // Handle signup failure, display error message, etc.
        }
      });
 }

}
