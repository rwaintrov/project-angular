import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  metrics = [
    {
      title: 'Alert',
      // icon: 'pi pi-shopping-cart',
      color_light: '#4DD0E1',
      color_dark: '#0097A7',
      textContent: [
        {amount: '90', text: 'Detected'},
        {amount: '15', text: 'At Risk'}
      ]
    }]
}
