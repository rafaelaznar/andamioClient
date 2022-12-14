import { HomeComponent } from './component/shared/routed/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { DeveloperPlistAdminRoutedComponent } from './component/application/developer/routed/admin/developer-plist-admin-routed/developer-plist-admin-routed.component';
import { UsertypePlistAdminRoutedComponent } from './component/application/usertype/routed/admin/usertype-plist-admin-routed/usertype-plist-admin-routed.component';
import { TeamPlistAdminRoutedComponent } from './component/application/team/routed/admin/team-plist-admin-routed/team-plist-admin-routed.component';
import { HelpPlistAdminRoutedComponent } from './component/application/help/routed/admin/help-plist-admin-routed.component';
import { TaskPlistAdminRoutedComponent } from './component/application/task/routed/admin/task-plist-admin-routed/task-plist-admin-routed.component'
import { DeveloperViewAdminRoutedComponent } from './component/application/developer/routed/admin/developer-view-admin-routed/developer-view-admin-routed.component';
import { DeveloperRemoveAdminRoutedComponent } from './component/application/developer/routed/admin/developer-remove-admin-routed/developer-remove-admin-routed.component';
import { DeveloperEditAdminRoutedComponent } from './component/application/developer/routed/admin/developer-edit-admin-routed/developer-edit-admin-routed.component';
import { DeveloperNewAdminRoutedComponent } from './component/application/developer/routed/admin/developer-new-admin-routed/developer-new-admin-routed.component';
import { ResolutionPlistAdminRoutedComponent } from './component/application/resolution/routed/admin/resolution-plist-admin-routed/resolution-plist-admin-routed.component';
import { ResolutionRemoveAdminRoutedComponent } from './component/application/resolution/routed/admin/resolution-remove-admin-routed/resolution-remove-admin-routed.component';
import { ResolutionViewAdminRoutedComponent } from './component/application/resolution/routed/admin/resolution-view-admin-routed/resolution-view-admin-routed.component';
import { ProjectPlistAdminRoutedComponent } from './component/application/project/routed/admin/project-plist-admin-routed/project-plist-admin-routed.component';
import { ProjectViewAdminRoutedComponent } from './component/application/project/routed/admin/project-view-admin-routed/project-view-admin-routed.component';
import { TaskViewAdminRoutedComponent } from './component/application/task/routed/admin/task-view-admin-routed/task-view-admin-routed.component';
import { TaskRemoveAdminRoutedComponent } from './component/application/task/routed/admin/task-remove-admin-routed/task-remove-admin-routed.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },  
  { path: 'logout', component: LogoutComponent },  
  { path: 'admin/developer/plist', component: DeveloperPlistAdminRoutedComponent },
  { path: 'admin/developer/view/:id', component: DeveloperViewAdminRoutedComponent },
  { path: 'admin/developer/remove/:id', component: DeveloperRemoveAdminRoutedComponent},
  { path: 'admin/developer/new', component: DeveloperNewAdminRoutedComponent},
  { path: 'admin/developer/edit/:id', component: DeveloperEditAdminRoutedComponent},
  { path: 'admin/usertype/plist', component: UsertypePlistAdminRoutedComponent },
  { path: 'admin/team/plist', component: TeamPlistAdminRoutedComponent },
  { path: 'admin/help/plist', component: HelpPlistAdminRoutedComponent },
  { path: 'admin/resolution/plist', component: ResolutionPlistAdminRoutedComponent },
  { path: 'admin/resolution/view/:id', component: ResolutionViewAdminRoutedComponent },
  { path: 'admin/resolution/remove/:id', component: ResolutionRemoveAdminRoutedComponent},
  { path: 'admin/task/plist', component: TaskPlistAdminRoutedComponent },
  { path: 'admin/project/plist', component: ProjectPlistAdminRoutedComponent },
  { path: 'admin/project/view/:id', component: ProjectViewAdminRoutedComponent },
  { path: 'admin/task/view/:id', component: TaskViewAdminRoutedComponent },
  { path: 'admin/task/remove/:id', component: TaskRemoveAdminRoutedComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
