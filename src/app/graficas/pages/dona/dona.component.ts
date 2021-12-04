import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {
  public doughnutChartLabels: Label[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
    'Others',
  ];
  public doughnutChartData: MultiDataSet = [[350, 450, 100, 150]];
  public doughnutChartType: ChartType = 'doughnut';

  public colores: Color[] = [
    {
      backgroundColor: ['#0CC9F8', '#0BD9CB', '#00F09D', '#0BD956'],
    },
  ];
}
