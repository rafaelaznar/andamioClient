import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IDeveloper } from 'src/app/model/developer-interface';
import { DeveloperService } from 'src/app/service/developer.service';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { IPage } from 'src/app/model/generic-types-interface';

@Component({
  selector: 'app-developer-plist-admin-routed',
  templateUrl: './developer-plist-admin-routed.component.html',
  styleUrls: ['./developer-plist-admin-routed.component.css']
})

export class DeveloperPlistAdminRoutedComponent implements OnInit {

  responseFromServer: IPage<IDeveloper>;
  //
  strTermFilter: string = "";
  id_usertypeFilter: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";
  //
  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faUserPlus = faUserPlus;

  constructor(
    private oDeveloperService: DeveloperService
  ) { }

  ngOnInit() {
    this.getPage();
  }

  getPage() {
    this.oDeveloperService.getDevelopersPlist(this.page, this.numberOfElements, this.strTermFilter, this.id_usertypeFilter, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<IDeveloper>) => {
          this.responseFromServer = resp;
          
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
  }

  setPage(e: number) {
    this.page = (e - 1);
    this.getPage();
  }

  setRpp(rpp: number) {
    this.numberOfElements = rpp;
    this.getPage();
  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }

  setFilterByUsertype(id: number): void {
    this.id_usertypeFilter = id;
    this.getPage();
  }

  setOrder(order: string): void {
    this.sortField = order;
    if (this.sortDirection == "asc") {
      this.sortDirection = "desc";
    } else {
      this.sortDirection = "asc";
    }
    this.getPage();
  }

}
