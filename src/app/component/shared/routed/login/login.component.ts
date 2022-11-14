import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { AuthResponse } from 'src/app/model/AuthResponse.interface';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username: string = '';
  password: string = ''
  userSession!: AuthResponse;
 
  constructor( private AuthService: AuthService  ) { }

  ngOnInit(): void {

  }

  login( e:MouseEvent ){
    e.preventDefault();
    this.AuthService.login(this.username,this.password)
    .subscribe({
      next: (resp: AuthResponse) =>{
        this.userSession = resp;
        this.AuthService.sessionStatus.next(this.userSession);
      },
      error: (err: HttpErrorResponse) =>{
        console.log(err);
      }
    });
    this.username='';
    this.password='';

  }


  }

