import {Component} from '@angular/core';

@Component(
    {
        moduleId: module.id,
        selector: 'timer',
        template : '<div>{{timer}}</div>'
    }
)

export class TimerComponent
{
    timer: Date;
    constructor()
    {
        this.timer = new Date();
        setInterval(() => { this.updateTime()}, 1000)
    }

    updateTime()
    {
        this.timer = new Date();
        return this.timer.getTime().toLocaleString();
    }
}