import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthResponse } from 'src/app/model/AuthResponse.interface';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( private oAuthService: AuthService) { }
  session!: AuthResponse;

  ngOnInit() {
    this.oAuthService.sessionObserver$
    .subscribe({
      next: (resp : AuthResponse) =>{
        this.session= resp;
      }
    });
    this.oAuthService.checkSession();
  }

  logout(){
    this.oAuthService.logout();
  }

}
