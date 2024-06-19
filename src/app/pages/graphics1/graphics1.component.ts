import { Component } from '@angular/core';

import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-graphics1',
  templateUrl: './graphics1.component.html',
  styles: ``
})
export class Graphics1Component {
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  public pieChartLabels: string[] = ['Red', 'Blue', 'Yellow'];

  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

}
