import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {StyleClassModule} from "primeng/styleclass";
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {TooltipModule} from "primeng/tooltip";
import { ConfigComponent } from './config/config.component';
import {RadioButtonModule} from "primeng/radiobutton";
import {InputSwitchModule} from "primeng/inputswitch";
import {FormsModule} from "@angular/forms";
import {SidebarModule} from "primeng/sidebar";
import { UserTypeComponent } from './user-type/user-type.component';
import {DropdownModule} from "primeng/dropdown";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttackScenariosComponent } from './attack-scenarios/attack-scenarios.component';
import { DeviceComponent } from './device/device.component';
import { AlertComponent } from './alert/alert.component';
import { CveComponent } from './cve/cve.component';
import { PasComponent } from './pas/pas.component';
import {TableModule} from "primeng/table";
import {MenuModule} from "primeng/menu";
// import {ChartModule} from "primeng/chart";


@NgModule({
    declarations: [
        PagesComponent,
        TopBarComponent,
        MenuComponent,
        MenuItemComponent,
        SideBarComponent,
        ConfigComponent,
        UserTypeComponent,
        DashboardComponent,
        AttackScenariosComponent,
        DeviceComponent,
        AlertComponent,
        CveComponent,
        PasComponent
    ],
    exports: [
        TopBarComponent,
        ConfigComponent
    ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    StyleClassModule,
    TooltipModule,
    RadioButtonModule,
    InputSwitchModule,
    FormsModule,
    SidebarModule,
    DropdownModule,
    TableModule,
    MenuModule,
    // ChartModule,

  ]
})
export class PagesModule { }
