import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title="Login";

  

  User:string='';
  password:string='';

  login(){
    console.log('User',this.User);
    console.log('password',this.password);
  }

}
