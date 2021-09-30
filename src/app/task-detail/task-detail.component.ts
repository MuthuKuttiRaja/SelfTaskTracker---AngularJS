import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task'
import { Notes } from '../notes'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService } from '../task.service'
import * as $ from 'jquery';

@Component({
    selector: 'app-task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

    @Input() task: Task;
    notes: Notes;
    notesList: Notes[];
    constructor(private route: ActivatedRoute, private taskService: TaskService, private location: Location) {
    }

    gettask(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.taskService.getTask(id)
            .subscribe(task => this.task = task);
    }

    ngOnInit() {
        this.gettask()
        this.readNotes();
    }

    addNotes(): void {
        this.notes = {
            'notesId': 0,
            'taskId': +this.route.snapshot.paramMap.get('id'),
            'notes': $('#addNotes').val().toString(),
            'createdDateTime': ''
        }
        this.taskService.insertNotes(this.notes).subscribe((notes: Notes) => {
            console.log("Notes Inserted, ", notes);
        });
        $('#addNotes').val('');
        this.readNotes();
    }
    
    readNotes(): void{
        const id = +this.route.snapshot.paramMap.get('id');
        this.taskService.readNotesByTaskId(id)
            .subscribe((notesList: Notes[]) => {
                    this.notesList = notesList;
            });
    }

    goBack(): void {
        this.location.back();
    }

}
