import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ChartType } from 'chart.js';
import { AddMoneyService } from '../../services/add-money.service';

@Component({
  selector: 'app-money-data',
  standalone: false,
  
  templateUrl: './money-data.component.html',
  styleUrl: './money-data.component.scss'
})
export class MoneyDataComponent {

  addMoneyService = inject(AddMoneyService)

  constructor(private route: Router){

  }

  public pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const,
      },
    },
  };

  public pieChartData = {
    labels: ['Food', 'Rent', 'Transport', 'Shopping'],
    datasets: [
      {
        data: [40, 30, 234, 10],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  public pieChartType: ChartType = 'pie';

  navigateToUsersMoneyPage(){
    this.route.navigate(['users-money-page']);
  }
}
