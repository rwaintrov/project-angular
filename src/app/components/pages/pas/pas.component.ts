import { Component } from '@angular/core';

@Component({
  selector: 'app-pas',
  templateUrl: './pas.component.html',
  styleUrls: ['./pas.component.scss']
})
export class PasComponent {
  metrics = [
    {
      title: 'PAS',
      // icon: 'pi pi-shopping-cart',
      color_light: '#7986CB',
      color_dark: '#303F9F',
      textContent: [
        {amount: '9', text: 'Detected'},
        {amount: '84%', text: 'Avg.Probability'}
      ]
    }]
}
