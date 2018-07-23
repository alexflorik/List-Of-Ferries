import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  position: number;
  name: string;
  weight: string;
  symbol: string;
  symbo: string;
  symb: string;
  sym: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 2721987, name: 'GUAILK', weight: 'AS ARIES', symbol: 'ОВ "ППЛ 33-35" - 38156292', symbo: '01.01.2017 01:01:01', symb: '01.01.2017 01:01:01', sym: '01.04.2017 01:01:01'},
  {position: 2721986, name: 'UAIL', weight: 'AS ARIES', symbol: 'SТОВ "ППЛ 33-35" - 38156292', symbo: '01.01.2017 01:01:01', symb: '01.01.2017 01:01:01', sym: '02.03.2017 01:01:01'},
  {position: 2721985, name: 'HUAI', weight: 'SAS ARIES', symbol: 'ТОВ "ППЛ 33-35" - 38156292', symbo: '01.01.2017 01:01:01', symb: '01.01.2017 01:01:01', sym: '03.02.2017 01:01:01'},
  {position: 2721984, name: 'BUA', weight: 'DAS ARIES', symbol: 'ТVОВ "ППЛ 33-35" - 38156292', symbo: '01.01.2017 01:01:01', symb: '01.01.2017 01:01:01', sym: '04.01.2017 01:01:01'},
  {position: 2721983, name: 'UAILK', weight: 'AS ARIES', symbol: 'ТОВ "ППЛ 33-35" - 38156292', symbo: '01.01.2017 01:01:01', symb: '01.01.2017 01:01:01', sym: '0.01.2017 01:01:01'},
  {position: 2721982, name: 'UAILK', weight: 'AS ARIES', symbol: 'ТОВ "ППЛ 33-35" - 38156292', symbo: '01.01.2017 01:01:01', symb: '01.01.2017 01:01:01', sym: '01.01.2017 01:01:01'},
  {position: 2721981, name: 'UAILK', weight: 'AS ARIES', symbol: 'ТОВ "ППЛ 33-35" - 38156292', symbo: '01.01.2017 01:01:01', symb: '01.01.2017 01:01:01', sym: '01.01.2017 01:01:01'},
  {position: 2721987, name: 'UAILK', weight: 'AS ARIES', symbol: 'ТОВ "ППЛ 33-35" - 38156292', symbo: '01.01.2017 01:01:01', symb: '01.01.2017 01:01:01', sym: '01.01.2017 01:01:01'},
  {position: 2721987, name: 'UAILK', weight: 'AS ARIES', symbol: 'ТОВ "ППЛ 33-35" - 38156292', symbo: '01.01.2017 01:01:01', symb: '01.01.2017 01:01:01', sym: '01.01.2017 01:01:01'},
  {position: 2721987, name: 'UAILK', weight: 'AS ARIES', symbol: 'ТОВ "ППЛ 33-35" - 38156292', symbo: '01.01.2017 01:01:01', symb: '01.01.2017 01:01:01', sym: '01.01.2017 01:01:01'},
  {position: 2721987, name: 'UAILK', weight: 'AS ARIES', symbol: 'ТОВ "ППЛ 33-35" - 38156292', symbo: '01.01.2017 01:01:01', symb: '01.01.2017 01:01:01', sym: '01.01.2017 01:01:01'},
  {position: 2721987, name: 'UAILK', weight: 'AS ARIES', symbol: 'ТОВ "ППЛ 33-35" - 38156292', symbo: '01.01.2017 01:01:01', symb: '01.01.2017 01:01:01', sym: '01.01.2017 01:01:01'},
  {position: 2721987, name: 'UAILK', weight: 'AS ARIES', symbol: 'ТОВ "ППЛ 33-35" - 38156292', symbo: '01.01.2017 01:01:01', symb: '01.01.2017 01:01:01', sym: '01.01.2017 01:01:01'},
  {position: 2721987, name: 'UAILK', weight: 'AS ARIES', symbol: 'ТОВ "ППЛ 33-35" - 38156292', symbo: '01.01.2017 01:01:01', symb: '01.01.2017 01:01:01', sym: '01.01.2017 01:01:01'},
  {position: 2721987, name: 'UAILK', weight: 'AS ARIES', symbol: 'ТОВ "ППЛ 33-35" - 38156292', symbo: '01.01.2017 01:01:01', symb: '01.01.2017 01:01:01', sym: '01.01.2017 01:01:01'},
  {position: 2721987, name: 'UAILK', weight: 'AS ARIES', symbol: 'ТОВ "ППЛ 33-35" - 38156292', symbo: '01.01.2017 01:01:01', symb: '01.01.2017 01:01:01', sym: '01.01.2017 01:01:01'},
  {position: 2721987, name: 'UAILK', weight: 'AS ARIES', symbol: 'ТОВ "ППЛ 33-35" - 38156292', symbo: '01.01.2017 01:01:01', symb: '01.01.2017 01:01:01', sym: '01.01.2017 01:01:01'},
  {position: 2721987, name: 'UAILK', weight: 'AS ARIES', symbol: 'ТОВ "ППЛ 33-35" - 38156292', symbo: '01.01.2017 01:01:01', symb: '01.01.2017 01:01:01', sym: '01.01.2017 01:01:01'},
  {position: 2721987, name: 'UAILK', weight: 'AS ARIES', symbol: 'ТОВ "ППЛ 33-35" - 38156292', symbo: '01.01.2017 01:01:01', symb: '01.01.2017 01:01:01', sym: '01.01.2017 01:01:01'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
	displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'symbo', 'symb', 'sym'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor() { }

  ngOnInit() {
  	this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
