import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { DriverComponent } from './driver/driver.component';
import { SupplierComponent } from './supplier/supplier.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'user', component: UserComponent},
  {path: 'driver', component: DriverComponent},
  {path: 'supplier', component: SupplierComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
