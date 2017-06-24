import {Component} from '@angular/core';
import {TaskService} from './services/task.service';
import {StockService} from './services/stock.service';
@Component(
    {
        moduleId : module.id,
        selector : 'my-app',
        templateUrl : 'app.component.html', 
        providers : [TaskService, StockService]
    }
)

export class AppComponent{ }