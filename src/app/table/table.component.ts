import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TableModel } from '../models/table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() tableFillObject: TableModel;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  addNewPerson() {
    this.dataService.addNewPerson(this.tableFillObject.type);
  }

}
