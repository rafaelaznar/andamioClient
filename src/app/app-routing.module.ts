import { HomeComponent } from './component/shared/routed/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { Login2Component } from './component/shared/routed/login2/login2.component';
import { DeveloperPlistAdminRoutedComponent } from './component/application/developer/routed/admin/developer-plist-admin-routed/developer-plist-admin-routed.component';
import { UsertypePlistAdminRoutedComponent } from './component/application/usertype/routed/admin/usertype-plist-admin-routed/usertype-plist-admin-routed.component';
import { TeamPlistAdminRoutedComponent } from './component/application/team/routed/admin/team-plist-admin-routed/team-plist-admin-routed.component';
import { HelpPlistAdminRoutedComponent } from './component/application/help/routed/admin/help-plist-admin-routed.component';
import { DeveloperViewAdminRoutedComponent } from './component/application/developer/routed/admin/developer-view-admin-routed/developer-view-admin-routed.component';
import { DeveloperRemoveAdminRoutedComponent } from './component/application/developer/routed/admin/developer-remove-admin-routed/developer-remove-admin-routed.component';
import { DeveloperNewAdminRoutedComponent } from './component/application/developer/routed/admin/developer-new-admin-routed/developer-new-admin-routed.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login/:id', component: LoginComponent },
  { path: 'login2', component: Login2Component },
  { path: 'admin/developer/plist', component: DeveloperPlistAdminRoutedComponent },
  { path: 'admin/developer/view/:id', component: DeveloperViewAdminRoutedComponent },
  { path: 'admin/developer/remove/:id', component: DeveloperRemoveAdminRoutedComponent},
  { path: 'admin/developer/create', component: DeveloperNewAdminRoutedComponent},
  { path: 'admin/usertype/plist', component: UsertypePlistAdminRoutedComponent },
  { path: 'admin/team/plist', component: TeamPlistAdminRoutedComponent },
  { path: 'admin/help/plist', component: HelpPlistAdminRoutedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
