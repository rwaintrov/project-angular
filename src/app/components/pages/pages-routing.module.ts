import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DeviceComponent} from "./device/device.component";
import {CveComponent} from "./cve/cve.component";
import {PasComponent} from "./pas/pas.component";
import {AlertComponent} from "./alert/alert.component";

const routes: Routes = [
  {path: '', component: PagesComponent, children:[
      {path: 'device', component: DeviceComponent},
      {path: 'PAS', component: PasComponent},
      {path: 'CVE', component: CveComponent},
      {path: 'alert', component: AlertComponent},
    ]},


  {path: 'dashboard', component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
