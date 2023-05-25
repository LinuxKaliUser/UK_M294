import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VehicleListComponent} from './pages/vehicle-list/vehicle-list.component';
import {AppAuthGuard} from './guard/app.auth.guard';
import {EmployeeListComponent} from './pages/employee-list/employee-list.component';
import {DepartmentListComponent} from './pages/department-list/department-list.component';
import {VehicleUsageListComponent} from './pages/vehicle-usage-list/vehicle-usage-list.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {NoAccessComponent} from './pages/no-access/no-access.component';
import {VehicleDetailComponent} from './pages/vehicle-detail/vehicle-detail.component';
import {AppRoles} from '../app.roles';
import {DepartmentDetailComponent} from './pages/department-detail/department-detail.component';
import {EmployeeDetailComponent} from './pages/employee-detail/employee-detail.component';
import {VehicleUsageDetailComponent} from './pages/vehicle-usage-detail/vehicle-usage-detail.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'vehicles', component: VehicleListComponent, canActivate: [AppAuthGuard], data: {roles: [AppRoles.Read]}},
  {
    path: 'vehicle', canActivate: [AppAuthGuard], component: VehicleDetailComponent, pathMatch: 'full',
    data: {roles: [AppRoles.Admin]}
  },
  {
    path: 'vehicle/:id', canActivate: [AppAuthGuard], component: VehicleDetailComponent, pathMatch: 'full',
    data: {roles: [AppRoles.Admin]}
  },
  {path: 'employees', component: EmployeeListComponent, canActivate: [AppAuthGuard], data: {roles: [AppRoles.Read]}},
  {
    path: 'employee', canActivate: [AppAuthGuard], component: EmployeeDetailComponent, pathMatch: 'full',
    data: {roles: [AppRoles.Admin]}
  },
  {
    path: 'employee/:id', canActivate: [AppAuthGuard], component: EmployeeDetailComponent, pathMatch: 'full',
    data: {roles: [AppRoles.Admin]}
  },
  {
    path: 'departments',
    component: DepartmentListComponent,
    canActivate: [AppAuthGuard],
    data: {roles: [AppRoles.Read]}
  },
  {
    path: 'department', canActivate: [AppAuthGuard], component: DepartmentDetailComponent, pathMatch: 'full',
    data: {roles: [AppRoles.Admin]}
  },
  {
    path: 'department/:id', canActivate: [AppAuthGuard], component: DepartmentDetailComponent, pathMatch: 'full',
    data: {roles: [AppRoles.Admin]}
  },
  {
    path: 'vehicle-usages',
    component: VehicleUsageListComponent,
    canActivate: [AppAuthGuard],
    data: {roles: [AppRoles.Read]}
  },
  {
    path: 'vehicle-usage', canActivate: [AppAuthGuard], component: VehicleUsageDetailComponent, pathMatch: 'full',
    data: {roles: [AppRoles.Update]}
  },
  {
    path: 'vehicle-usage/:id', canActivate: [AppAuthGuard], component: VehicleUsageDetailComponent, pathMatch: 'full',
    data: {roles: [AppRoles.Update]}
  },
  {path: 'noaccess', component: NoAccessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
