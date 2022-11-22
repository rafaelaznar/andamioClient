import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDeveloper } from '../model/developer-interface';
import { IPage } from '../model/generic-types-interface';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  private entityURL = '/developer';
  url: string = ""

  constructor(private oHttp: HttpClient) {
    this.url = `${environment.baseURL}${this.entityURL}`;
  }

  getDevelopersPlist(page: number, size: number, termino: string, id_usertype: number, strSortField: string, strOrderDirection: string): Observable<IPage<IDeveloper>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
    if (id_usertype != 0) {
      params = params.set("usertype", id_usertype);
    }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<IDeveloper>>(this.url, { params: params });
  }

  getOne(id: number): Observable<IDeveloper> {
    return this.oHttp.get<IDeveloper>(this.url + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id);
  }

  setNewDeveloper( newDeveloper: IDeveloper ): Observable<number>{
    const body = JSON.stringify(newDeveloper);
    return this.oHttp.post<number>(this.url+'/',body, {headers: environment.headers});
  }

}
