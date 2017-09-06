import { Component, Inject, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Rx';

import 'rxjs/add/operator/map'

class Person {
  id: String;
  nome: String;
  email: String;
}

@Component({
  selector: 'app-grid-component',
  templateUrl: './grid-component.component.html',
  styleUrls: ['./grid-component.component.css']
})
export class GridComponentComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  persons: Person[] = [];

  dtTrigger: Subject<any> = new Subject();

  constructor(private http: Http) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/v1/person')
                .map(this.extractData)
                .subscribe(persons => {
                  this.persons = persons;
                  console.log(this.persons);
                  this.dtTrigger.next();
                });
  }

  private extractData(res: Response){
    return res.json();
  }
}