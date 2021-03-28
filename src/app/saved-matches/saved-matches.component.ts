import { Component, OnInit } from '@angular/core';
import studentsData  from '../students.json';
import { identifierModuleUrl } from '@angular/compiler';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-saved-matches',
  templateUrl: './saved-matches.component.html',
  styleUrls: ['./saved-matches.component.css']
})
export class SavedMatchesComponent implements OnInit {



  displayedColumns = ['select', 'id', 'name', 'contact', 'address','action'];
  // dataSource = ELEMENT_DATA;


  data = Object.assign( ELEMENT_DATA);
  dataSource = new MatTableDataSource<Element>(this.data);
  selection = new SelectionModel<Element>(true, []);
  constructor() { }

  ngOnInit(): void {
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
   
  }

  removeSelectedRows() {
     this.selection.selected.forEach(item => {
      let index: number = this.data.findIndex(d => d === item);
      console.log(this.data.findIndex(d => d === item));
      this.dataSource.data.splice(index,1);

      this.dataSource = new MatTableDataSource<Element>(this.dataSource.data);
     
     
    });
    this.selection = new SelectionModel<Element>(true, []);
   
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

   save() {	
    var checkbox = document.getElementById("checkbox1");

      // localStorage.setItem("checkbox1", checkbox.checked);	
  }
  

}

export interface Element {
 
  name: string;
  id: number;
  contact: number;
  address: string;
  
}
const ELEMENT_DATA: Element[] = [
  {  id: 1, name: 'Hydrogen', contact:12345688, address: 'pune' },
  {  id: 2, name: 'Hydrogen', contact:12345688, address: 'pune' },
  {  id: 3, name: 'Hydrogen', contact:12345688, address: 'pune' },
  {  id: 4, name: 'Hydrogen', contact:12345688, address: 'pune' },
  {  id: 5, name: 'Hydrogen', contact:12345688, address: 'pune' },

 
];
