import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {MenuItem} from "primeng/api";
import {AppConfig, LayoutService} from "../../../services/layout.service";
import {Product, ProductService} from "../product.service";
import {Table} from "primeng/table";
import {Router} from "@angular/router";

@Component({
  selector: 'app-attack-scenarios',
  templateUrl: './attack-scenarios.component.html',
  styleUrls: ['./attack-scenarios.component.scss']
})
export class AttackScenariosComponent implements OnInit{
  products: Product[] = [];

  productsThisWeek: Product[] = [];

  productsLastWeek: Product[] = [];

  productsBestSellers: Product[] = [];

  subscription!: Subscription;

  items: MenuItem[] = [];

  ordersChart: any;

  ordersChartOptions: any;

  revenueChart: any;

  revenueChartOptions: any;

  cols: any[] = [];

  config!: AppConfig;

  orderWeek: any[] = [];

  metrics: any[] = [];

  teamMembers: any[] = [];

  selectedOrderWeek!: any;
  item: any;


  constructor(private productService: ProductService, private layoutService: LayoutService,private route :Router) {
    this.subscription = this.layoutService.configUpdate$.subscribe(config => {
      this.config = config;
      this.initCharts();
    });
  }

  ngOnInit(): void {
    this.productService.getProducts().then(data => {
      this.products = data;
      this.productsThisWeek = data;
      this.productsBestSellers = data.slice(0,7);
    });

    this.productService.getProductsMixed().then(data => this.productsLastWeek = data);

    this.cols = [
      {field: 'vin', header: 'Vin'},
      {field: 'year', header: 'Year'},
      {field: 'brand', header: 'Brand'},
      {field: 'color', header: 'Color'}
    ];

    this.items = [
      {
        label: 'Shipments',
        items: [
          { label: 'Tracker', icon: 'pi pi-compass' },
          { label: 'Map', icon: 'pi pi-map-marker' },
          { label: 'Manage', icon: 'pi pi-pencil' }
        ]
      }
    ];

    this.orderWeek = [
      {name: 'This Week', code: '0'},
      {name: 'Last Week', code: '1'}
    ];

    this.metrics = [
      {
        title: 'Active Devices',
        // icon: 'pi pi-shopping-cart',
        color_light: '#64B5F6',
        color_dark: '#1976D2',
        textContent: [
          {amount: '90', text: 'Dedected'},
          {amount: '15', text: 'At Risk'}
        ]
      },
      {
        title: 'PAS',
        // icon: 'pi pi-dollar',
        color_light: '#7986CB',
        color_dark: '#303F9F',
        textContent: [
          {amount: '9', text: 'Dedecteed'},
          {amount: '84%', text: 'Avg.Probability'}
        ]
      },
      {
        title: 'Affecting CVEs',
        // icon: 'pi pi-users',
        color_light: '#4DB6AC',
        color_dark: '#00796B',
        textContent: [
          {amount: 18, text: 'Detected'},
          {amount: 'HIGH', text: 'AVG. Criticality'}
        ]
      },
      {
        title: 'Alerts',
        // icon: 'pi pi-users',
        color_light: '#4DD0E1',
        color_dark: '#0097A7',
        textContent: [
          {amount: 1, text: 'in last 24 hours'},
          // {amount: 85, text: 'Responded'}
        ]
      }
    ];

    this.teamMembers = [
      {
        name: 'Amy Elsner',
        desc: 'Accounting',
        image: 'amyelsner'
      },
      {
        name: 'Anna Fali',
        desc: 'Procurement',
        image: 'annafali'
      },
      {
        name: 'Bernardo Dominic',
        desc: 'Finance',
        image: 'bernardodominic'
      },
      {
        name: 'Ivan Magalhaes',
        desc: 'Sales',
        image: 'ivanmagalhaes'
      },
      {
        name: 'Xuxue Feng',
        desc: 'Management',
        image: 'xuxuefeng'
      }
    ];

    this.initCharts();
  }

  initCharts() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    this.ordersChart = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'New',
        data: [2, 7, 20, 9, 16, 9, 5],
        backgroundColor: [
          'rgba(100, 181, 246, 0.2)',
        ],
        borderColor: [
          '#64B5F6',
        ],
        borderWidth: 3,
        fill: true,
        tension: .4
      }]
    };

    this.ordersChartOptions = {
      plugins: {
        legend: {
          display: true,
          labels: {
            color: textColor
          }
        }
      },
      hover: {
        mode: 'index'
      },
      scales: {
        x:{
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color:[surfaceBorder],
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary,
            min: 0,
            max: 20
          },
          grid: {
            color:[surfaceBorder],
            drawBorder: false
          }
        }
      }
    };

    this.revenueChart = {
      labels: ['Direct', 'Promoted', 'Affiliate'],
      datasets: [{
        data: [40, 35, 25],
        backgroundColor: ['#64B5F6', '#7986CB', '#4DB6AC'],
        borderColor: [surfaceBorder]
      }]
    };

    this.revenueChartOptions = {
      plugins: {
        legend: {
          display: true,
          labels: {
            color: textColor
          }
        }
      }
    }

  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  changeDataset(event: any) {
    const dataSet = [
      [2, 7, 20, 9, 16, 9, 5],
      [2, 4, 9, 20, 16, 12, 20],
      [2, 17, 7, 15, 4, 20, 8],
      [2, 2, 20, 4, 17, 16, 20]
    ];

    this.ordersChart.datasets[0].data = dataSet[parseInt(event.currentTarget.getAttribute('data-index'))];
    this.ordersChart.datasets[0].label = event.currentTarget.getAttribute('data-label');
    this.ordersChart.datasets[0].borderColor = event.currentTarget.getAttribute('data-stroke');
    this.ordersChart.datasets[0].backgroundColor = event.currentTarget.getAttribute('data-fill');

  }

  recentSales(event: KeyboardEvent) {
    if ((event.target as HTMLInputElement).value === '0') {
      this.products = this.productsThisWeek;
    } else {
      this.products = this.productsLastWeek;
    }
  }

  updateChartOptions() {
    if (this.config.colorScheme === 'dark')
      this.applyDarkTheme();
    else
      this.applyLightTheme();

  }

  applyDarkTheme() {
    this.ordersChartOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#ebedef'
          },
          grid: {
            color:  'rgba(160, 167, 181, .3)',
          }
        },
        y: {
          ticks: {
            color: '#ebedef'
          },
          grid: {
            color:  'rgba(160, 167, 181, .3)',
          }
        },
      }
    };
  }

  applyLightTheme() {
    this.ordersChartOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color:  '#ebedef',
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color:  '#ebedef',
          }
        },
      }
    };
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  a(i:any) {
    switch (i) {
      case 0:
        this.route.navigate(['device']);
        break;
      case 1:
        this.route.navigate(['PAS'])
        break;
      case 2:
        this.route.navigate(['CVE'])
        break;
      case 3:
        this.route.navigate(['alert'])
        break;
      default:
        console.log("error");
        break;
    }
    // console.log(i)
    // if (i==0)
    //   this.route.navigate(['device']);
    // if (i==1)
    //   this.route.navigate(['PAS'])
  }


}
