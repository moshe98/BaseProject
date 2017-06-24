import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component'
import { TimerComponent } from './components/timer/timer.component'
import { StocksComponent } from './components/stocks/stocks.component'
@NgModule({
    imports : [BrowserModule, HttpModule, FormsModule],
    declarations : [AppComponent, TasksComponent, TimerComponent, StocksComponent],
    bootstrap : [AppComponent]
})

export class AppModule {}