import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartEvent, ChartType, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import Annotation from 'chartjs-plugin-annotation';
import { MenuService } from 'src/app/Settings/menu/menu.service';
import { CategoryService } from 'src/app/Settings/category/category.service';
import { TableService } from 'src/app/Settings/table/table.service';
import { IngredientService } from 'src/app/Settings/ingredient/ingredient.service';
import { RecipeService } from 'src/app/dine-in/recipe.service';
import { ResponseModel } from 'src/app/_helper/responseModel';
import { Total, recipe } from 'src/app/dine-in/total';
import { DashboardService } from './dashboard.service';
import {} from 'node_modules/chart.js'
import { Sale } from './dashboard';
Chart.register(...registerables)
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined ;
  private newLabel? = 'label';
  public lineChartType: ChartType = 'line';
  menuCount: number = 0;
  categoryCount!: number;
  tableCount!:number;
  ingredientCount!: number;
  orderCount!:number;
  chartdata:any
  labeldata:any[]=[];
  realdata:any[]=[];
  colordata:any[]=[];

  constructor(
    private menuService: MenuService,
    private categoryService: CategoryService,
    private tableService: TableService,
    private ingredientService: IngredientService,
    private recipeService:RecipeService,
    private service: DashboardService,
    
  ) {
    Chart.register(Annotation);
    
    this.getAll();
 
  }
  
  ngOnInit(): void {
   
    this.service.Getchartinfo().subscribe(result => {
      this.chartdata = result;
      if(this.chartdata!=null){
        for(let i=0; i<this.chartdata.length; i++){
          console.log("this.chartdata:::",this.chartdata[i]);
          this.labeldata.push(this.chartdata[i].year);
          this.realdata.push(this.chartdata[i].amount);
          this.colordata.push(this.chartdata[i].colorcode);
        }
        
        this.RenderChart(this.labeldata,this.realdata,this.colordata);
      }
      
    })
   
  }
  RenderChart(labeldata:any,maindata:any,colordata:any){
    const myChart = new Chart("piechart", {
      type: 'bar',
      data: {
          labels:​labeldata ,
          datasets: [{
              label: 'sale',
              data: maindata,
              backgroundColor: colordata,
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }
  
  
  getAll() {
    this.menuService.gets().subscribe((res) => {
      // console.log("res::",res);
      this.menuCount = res.length;
    });
    
    this.categoryService.gets().subscribe((res) => {
      this.categoryCount = res.length ;
      
    });
    
    this.tableService.getTable().subscribe((res) => {
      this.tableCount = res.length;
    });
    
    this.ingredientService.gets().subscribe((res) => {
      this.ingredientCount = res.length ;
    });
      
    this.recipeService.getAll().subscribe((res) => {
      console.log("res::",res.length);
      this.orderCount = res.length;
        const data: Sale = {
          "id":  2014,
          "year": 2014,
          "amount": res.length,
          "colorcode": "darkred"
        }
      this.service.put(2014,data).subscribe(res => {
        console.log(res, "???s");
      })
      // this.orderCount = res[0].order ;
      let _arr : Total[] = res[0].order 
      // const array: any = _arr.map(o => o.price);
      // this.dataSet = array ;
      
      
      const array_price: any = _arr.map(p => p.price * p.units)
    // this.granTotal = array_price.reduce((a: number, b: number) => a + b, 0)
      
  });
  
}
  
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      // {
      //   data: this.dataSet,
      //   label: 'Food',
      //   backgroundColor: 'rgba(148,159,177,0.2)',
      //   borderColor: 'rgba(148,159,177,1)',
      //   pointBackgroundColor: 'rgba(148,159,177,1)',
      //   pointBorderColor: '#fff',
      //   pointHoverBackgroundColor: '#fff',
      //   pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      //   fill: 'origin',
      // },
      // {
      //   data: [75, 49, 90, 91, 66, 65, 30],
      //   label: 'Category',
      //   backgroundColor: 'rgba(148,0,177,0.2)',
      //   borderColor: 'rgba(148,0,177,1)',
      //   pointBackgroundColor: 'rgba(148,0,177,1)',
      //   pointBorderColor: '#fff',
      //   pointHoverBackgroundColor: '#fff',
      //   pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      //   fill: 'origin',
      // },
      // {
      //   data: [28, 48, 40, 19, 86, 27, 90],
      //   label: 'Stock',
      //   backgroundColor: 'rgba(77,83,96,0.2)',
      //   borderColor: 'rgba(77,83,96,1)',
      //   pointBackgroundColor: 'rgba(77,83,96,1)',
      //   pointBorderColor: '#fff',
      //   pointHoverBackgroundColor: '#fff',
      //   pointHoverBorderColor: 'rgba(77,83,96,1)',
      //   fill: 'origin',
      // },
      {
        data: [180, 480, 770, 90, 1000, 270, 400],
        label: 'Ingredient',
        yAxisID: 'y1',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Food' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Customers' },
    ],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        position: 'left',
      },
      y1: {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red',
        },
      },
    },

    plugins: {
      legend: { display: true },
      annotation: {
        annotations: [
          {
            type: 'line',
            scaleID: 'x',
            value: 'March',
            borderColor: 'orange',
            borderWidth: 2,
            label: {
              display: true,
              position: 'center',
              color: 'orange',
              content: 'LineAnno',
              font: {
                weight: 'bold',
              },
            },
          },
        ],
      },
    },
  };



  private static generateNumber(i: number): number {
    return Math.floor(Math.random() * (i < 2 ? 100 : 1000) + 1);
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.datasets.length; i++) {
      for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
        this.lineChartData.datasets[i].data[j] =
        DashboardComponent.generateNumber(i);
      }
    }
    this.chart?.update();
  }

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public hideOne(): void {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
  }

  public pushOne(): void {
    this.lineChartData.datasets.forEach((x, i) => {
      const num = DashboardComponent.generateNumber(i);
      x.data.push(num);
    });
    this.lineChartData?.labels?.push(
      `Label ${this.lineChartData.labels.length}`
    );

    this.chart?.update();
  }

  public changeColor(): void {
    // this.lineChartData.datasets[2].borderColor = 'green';
    for (var i = 0; i < this.lineChartData.datasets.length; i++) {
      let color = this.getRandomColor()
      this.lineChartData.datasets[i].borderColor = color;
      this.lineChartData.datasets[i].backgroundColor = `${color + '70'}`;
    }

    this.chart?.update();
  }

  private getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  public changeLabel(): void {
    const tmp = this.newLabel;
    this.newLabel = this.lineChartData.datasets[2].label;
    this.lineChartData.datasets[2].label = tmp;

    this.chart?.update();
  }
  
  priceOrder(){
    // const array: any = this.order.map(o => o.name);
  }
  
  
}



