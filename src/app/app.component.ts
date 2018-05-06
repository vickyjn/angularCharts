import {
  Component
} from '@angular/core';
import {
  CommonService
} from './common.service';
import {
  Trend
} from './model/chart-trend';
import {
  TeamProb
} from './model/team-prob';
import {
  Profile
} from './model/profile';
import {
  Table
} from './model/table';
import {
  Line
} from './model/line';
import {
  Pie
} from './model/pie';
import {
  Donut
} from './model/donut';
import {
  Map
} from './model/map';
import {
  Plot
} from './model/plot';

import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommonService]
})
export class AppComponent {
  serviceData: TeamProb[] = [];
  trendData: Array < Trend > ;
  lineData: Array < Line > ;
  pieData: Array < Pie > ;
  donutData: Array < Donut > ;
  mapData: Array < Map > ;
  plotData: Array < Plot > ;
  tableKeys: any[] = [];
  tableData: Table = new Table();
  customHeaders: any[];
  profile: Profile = new Profile();
  constructor(private _Common: CommonService) {}
  title = 'app';

  ngOnInit() {
    this.getTrendData();
    this.getLineData();
    this.getPieData();
    this.getDonutData();
    this.getMapData();
    this.getPlotData();
    let self = this;
    this.customHeaders = [{
      "headerName": "Week",
      "keyMapper": "week"
    }, {
      "headerName": "away",
      "keyMapper": "away"
    }, {
      "headerName": "Away Prob",
      "keyMapper": "away_prob"
    }, {
      "headerName": "Home Prob",
      "keyMapper": "home_prob"
    }, {
      "headerName": "Home",
      "keyMapper": "home"
    }];

    let result = self._Common.getSampleData1().toPromise().then((data: TeamProb[]) => {
      self.serviceData = data;
      if (data && data.length) {
        let firstObject = data[0];
        for (let keys in firstObject) {
          self.tableKeys.push(keys);
        }
      }

      self.tableData.keys = self.tableKeys;
      self.tableData.rows = data;
    });

  }
  getTrendData() {
    this._Common.getTrendData().toPromise().then((response: Array < Trend > ) => { // function() {} -- ()=> {}
      this.trendData = response;
    });
  }

  getLineData() {
    this._Common.getLineData().toPromise().then((response: Array < Line > ) => { // function() {} -- ()=> {}
      this.lineData = response;
    });
  }
  getPieData() {
    this._Common.getPieData().toPromise().then((response: Array < Pie > ) => { // function() {} -- ()=> {}
      this.pieData = response;
    });
  }
  getDonutData() {
    this._Common.getDonutData().toPromise().then((response: Array < Donut > ) => { // function() {} -- ()=> {}
      this.donutData = response;
    });
  }
  getMapData() {
    this._Common.getMapData().toPromise().then((response: Array < Map > ) => { // function() {} -- ()=> {}
      this.mapData = response;
    });
  }
  getPlotData() {
    this._Common.getPlotData().toPromise().then((response: Array < Plot > ) => { // function() {} -- ()=> {}
      this.plotData = response;
    });
  }

}