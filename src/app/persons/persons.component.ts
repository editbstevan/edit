import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  isActive: boolean = true;
  persons: any[] = 
  [
    {'name': 'Stevan', 'age': 15}, 
    {'name': 'Lucia', 'age': 18}, 
    {'name': 'Maya', 'age': 28}, 
    {'name': 'Mike', 'age': 45}
  ];

  constructor() { }

  ngOnInit() {
    this.isActive = this.persons.length > 0;
    console.log(this.persons.length);
  }


}
