import { Component } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent {
  metrics = [
    {
      title: 'Active Devices',
      // icon: 'pi pi-shopping-cart',
      color_light: '#64B5F6',
      color_dark: '#1976D2',
      textContent: [
        {amount: '90', text: 'Detected'},
        {amount: '15', text: 'At Risk'}
      ]
    }]
}
