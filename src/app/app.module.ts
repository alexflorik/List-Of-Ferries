import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { SortComponent } from './sort/sort.component';
import { InputComponent } from './input/input.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PaginatorComponent,
    SortComponent,
    InputComponent,
    DatepickerComponent,
    ButtonComponent,
    ButtonToggleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
