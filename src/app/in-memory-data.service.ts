import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const TASKS: Task[] = [
            {
                id: 1,
                name: 'Complete Syslogs',
                project: '',
                status: 'In Progress',
                timeStarted: '',
                timeCompleted: '',
                notes: 'Working on it',
                priority: "2"
            },
            {
                id: 2,
                name: 'Complete IGP parsing',
                project: '',
                status: 'In Progress',
                timeStarted: '',
                timeCompleted: '',
                notes: 'Working on it',
                priority: "4"
            },
            {
                id: 3,
                name: 'FOA request',
                project: '',
                status: 'In Progress',
                timeStarted: '',
                timeCompleted: '',
                notes: 'Data Pull request from Jaosn',
                priority: "1"
            },
            {
                id: 4,
                name: 'GX_srlg_study',
                project: '',
                status: 'Completed',
                timeStarted: '',
                timeCompleted: '',
                notes: 'Worked with vishwajeet',
                priority: "3"
            },
            {
                id: 5,
                name: 'Kubernetes task',
                project: '',
                status: 'In Progress',
                timeStarted: '',
                timeCompleted: '',
                notes: 'Pending on Impala issue',
                priority: "4"
            }
        ]
        return { TASKS };
    }

    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    genId(TASKS: Task[]): number {
        return TASKS.length > 0 ? Math.max(...TASKS.map(Task => Task.id)) + 1 : 11;
    }
}