import {Component} from '@angular/core';
import {TaskService} from '../../services/task.service'
import {Task} from '../../../classes/Task'
@Component(
    {
        moduleId : module.id,
        selector : 'tasks',
        templateUrl : './tasks.component.html'
    }
)

export class TasksComponent{
    tasks : Task[];
    title : string;

    constructor(private taskService : TaskService )
    {
        this.taskService.getTasks()
        .subscribe(tasks => {this.tasks = tasks;
        });
    }

    addTask(event)
    {
        event.preventDefault();
        var newTask = {
            title : this.title,
            isDone : false
        };

        this.taskService.addTask(newTask)
            .subscribe(task => {
                this.tasks.push(task);
                this.title = '';
            });
    }

    deleteTask(id)
    {
         this.taskService.deleteTask(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0;i < this.tasks.length;i++){
                    if(this.tasks[i]._id == id){
                        this.tasks.splice(i, 1);
                    }
                }
            }
        });
    };
 }  