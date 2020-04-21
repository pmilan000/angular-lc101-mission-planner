import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = [
    'Telescope',
    'Drill',
    'SpaceSuit',
    'Microscope'
  ];

  constructor() { }

  ngOnInit() {
  }

}
