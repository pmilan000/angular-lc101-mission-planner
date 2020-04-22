import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
   experiments: object[] = [
     {name:'Moon soil sample', number: 1}, 
     {name: 'Plant growth in orbit', number: 2},
     {name:'Human bone density changes', number: 3},
     {name:'Water droplet podcast for grades K-5', number: 4},
     {name:'Satellite launch', number: 5}
   ];
   laboratory: object[] = [];
   labProjects: number = 0;
   maxItems: number = 3;
   constructor() { }

   ngOnInit() { }

   addProjects(item: object) : boolean {
    this.laboratory.push(item);
    this.labProjects++;
    return this.laboratory;
  }
}
