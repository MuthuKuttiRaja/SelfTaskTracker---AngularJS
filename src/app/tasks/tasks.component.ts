import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import {statusOut} from '../status_out'
import { TaskService } from '../task.service'
import { Policy } from  '../policy';
import { ElasticserviceService } from '../elasticservice.service';


@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
    tasks: Task[];
    status: statusOut[];
    policies:  Policy[];
  selectedPolicy:  Policy  = { id :  null , number:null, amount:  null};
    public tableWidget: any;

    getTasks(): void {
        this.taskService.getTasks()
            .subscribe(tasks => this.tasks = tasks);
    }
    constructor(private taskService: TaskService) { }

    getStatus(): void{
        this.taskService.getStatus()
        .subscribe(status => this.status = status);
    }

    ngOnInit() {
        this.getTasks();
        this.getStatus();
        this.taskService.readPolicies().subscribe((policies: Policy[])=>{
      this.policies = policies;
      console.log(this.policies);
    })
    }

}
