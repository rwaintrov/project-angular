import { Component } from '@angular/core';

@Component({
  selector: 'app-cve',
  templateUrl: './cve.component.html',
  styleUrls: ['./cve.component.scss']
})
export class CveComponent {
  metrics = [
    {
      title: 'Affecting CVEs',
      // icon: 'pi pi-shopping-cart',
      color_light: '#4DB6AC',
      color_dark: '#00796B',
      textContent: [
        {amount: '18', text: 'Detected'},
        {amount: 'high', text: 'Avg.Criticality'}
      ]
    }]
}
