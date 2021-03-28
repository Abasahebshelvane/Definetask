import { Component, OnInit } from '@angular/core';

import studentsData  from '../students.json';
import { identifierModuleUrl } from '@angular/compiler';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrls: ['./all-matches.component.css']
})
export class AllMatchesComponent implements OnInit {

  displayedColumns = ['select', 'id', 'name', 'contact', 'address','action'];
  // dataSource = ELEMENT_DATA;


  data = Object.assign( ELEMENT_DATA);
  dataSource = new MatTableDataSource<Element>(this.data);
  selection = new SelectionModel<Element>(true, []);
   
  
  constructor(){
    
  }
 
 
  ngOnInit(){

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
      console.log(this.dataSource.data.splice(index,1))

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
           this.selection.selected.forEach(item => {
          let index: number = this.data.findIndex(d => d === item);
           console.log(this.data.findIndex(d => d === item));
            var check=this.dataSource.data;
            this.dataSource.data.splice(index,1);
            this.dataSource = new MatTableDataSource<Element>(this.dataSource.data);
    
    
   });
   this.selection = new SelectionModel<Element>(true, []);
  
 }
  
 
  
  
 
  
}
var checked = JSON.parse(localStorage.getItem("checkbox1"));
// document.getElementById("checkbox1").checked = checked;


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




  

   
