import { Injectable } from '@angular/core';
import { Task } from './task';
import { Notes } from './notes';
import { TASKS } from './mockTasks';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {statusOut} from './status_out'
import { Policy } from  './policy';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    /** Log a HeroService message with the MessageService */
    private tasksUrl = 'api/TASKS';  // URL to web api
    private log(message: string) {
        this.messageService.add(`TaskService: ${message}`);
    }

    PHP_API_SERVER = "http://127.0.0.1:8081";
    getTask(id: number): Observable<Task> {
        return this.http.post<Task>(`${this.PHP_API_SERVER}/api/readTaskById.php`, {'id':id});
    }

    getStatus(): Observable<statusOut[]>{
        return this.http.get<statusOut[]>(`${this.PHP_API_SERVER}/api/read.php`);
    }

    readPolicies(): Observable<Policy[]> {
        return this.http.get<Policy[]>(`${this.PHP_API_SERVER}/api/read.php`);
    }

    createTask(task: Task): Observable<Task>{
        return this.http.post<Task>(`${this.PHP_API_SERVER}/api/insertTasks.php`, task);
    }

    insertNotes(notes: Notes):Observable<Notes>{
        return this.http.post<Notes>(`${this.PHP_API_SERVER}/api/insertNotes.php`, notes);
    }

    readNotesByTaskId(taskId: number): Observable<Notes[]> {
        return this.http.post<Notes[]>(`${this.PHP_API_SERVER}/api/readNotesBytaskId.php`, {'taskId':taskId});
    }

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(`${this.PHP_API_SERVER}/api/readTasks.php`)
         
    }
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }

}
