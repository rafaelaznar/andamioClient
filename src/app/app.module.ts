import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { MenuComponent } from './component/shared/unrouted/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { AjaxService } from './service/ajax.service.service';
import { Login2Component } from './component/shared/routed/login2/login2.component';
import { DeveloperPlistAdminRoutedComponent } from './component/application/developer/routed/admin/developer-plist-admin-routed/developer-plist-admin-routed.component';
import { DeveloperViewAdminRoutedComponent } from './component/application/developer/routed/admin/developer-view-admin-routed/developer-view-admin-routed.component';
import { UsertypePlistAdminRoutedComponent } from './component/application/usertype/routed/admin/usertype-plist-admin-routed/usertype-plist-admin-routed.component';
import { PaginationComponent } from './component/shared/unrouted/pagination/pagination.component';
import { SearchUnroutedComponent } from './component/shared/unrouted/search-unrouted/search-unrouted.component';
import { DropdownRegisterPageComponent } from './component/shared/unrouted/dropdown-register-page/dropdown-register-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationUnroutedComponent } from './component/shared/unrouted/pagination-unrouted/pagination-unrouted.component';
import { PaginationService } from './service/pagination.service';
import { TeamPlistAdminRoutedComponent } from './component/application/team/routed/admin/team-plist-admin-routed/team-plist-admin-routed.component';
import { HelpPlistAdminRoutedComponent } from './component/application/help/routed/admin/help-plist-admin-routed.component';
import { DeveloperRemoveAdminRoutedComponent } from './component/application/developer/routed/admin/developer-remove-admin-routed/developer-remove-admin-routed.component';
import { DeveloperNewAdminRoutedComponent } from './component/application/developer/routed/admin/developer-new-admin-routed/developer-new-admin-routed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    Login2Component,
    DeveloperPlistAdminRoutedComponent,
    DeveloperViewAdminRoutedComponent,
    DeveloperRemoveAdminRoutedComponent,
    DeveloperNewAdminRoutedComponent,
    UsertypePlistAdminRoutedComponent,
    PaginationComponent,
    SearchUnroutedComponent,
    DropdownRegisterPageComponent,
    PaginationUnroutedComponent,
    TeamPlistAdminRoutedComponent,
    HelpPlistAdminRoutedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    AjaxService,
    PaginationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
