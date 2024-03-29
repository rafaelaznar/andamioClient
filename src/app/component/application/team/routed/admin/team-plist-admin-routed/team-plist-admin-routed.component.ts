import { Component, OnInit } from '@angular/core';
import { faEye, faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { ITeam, TeamResponse } from 'src/app/model/team-interface';
import { TeamService } from 'src/app/service/team.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/service/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-plist-admin-routed',
  templateUrl: './team-plist-admin-routed.component.html',
  styleUrls: ['./team-plist-admin-routed.component.css']
})
export class TeamPlistAdminRoutedComponent implements OnInit {
  private pListContent!: ITeam[];
  private pagesCount!: number;
  private numberPage: number = 0;
  private pageRegister: number = 5;
  private termino: string = "";
  id_usertype: number = 0;
  strUserName: string = "";

  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;

  constructor(
    private oTeamService: TeamService,
    private oSessionService: SessionService,
    protected oRouter: Router,
  ) { 
    if (this.oSessionService.isSessionActive()) {
      this.strUserName = this.oSessionService.getUserName();
    } else {
      this.oRouter.navigate(['/home']);
    }

  }

  ngOnInit(): void {
    this.getPage();
  }

  getPage(){
    this.oTeamService.getTeamsPlist(this.numberPage,this.pageRegister,this.termino,this.id_usertype)
    .subscribe({
      next:(resp:TeamResponse)=>{
        this.pListContent = resp.content;
        this.pagesCount = resp.totalPages;
        this.numberPage = resp.number;
      },
      error: (err:HttpErrorResponse)=>{
        console.log(err);
      }
    })
  }

  getPageNumber(): number {
    return this.numberPage;
  }

  getPlistContent(): ITeam[] {
    return this.pListContent;
  }

  getpagesCount(): number {
    return this.pagesCount;
  }

  setPage(e: number) {
    this.numberPage = e - 1;
    this.getPage();
  }

  getPageRegister(): number {
    return this.pageRegister;
  }

  setRpp(registerPage: number) {
    this.pageRegister = registerPage;
    this.getPage();
  }

  setFilter(termino: string): void {
    this.termino = termino;
    this.numberPage = 0;
    this.getPage();
  }

  filterByUsertype(id: number): void {
    this.id_usertype = id;
    this.numberPage = 0;
    this.getPage();
  }

}
