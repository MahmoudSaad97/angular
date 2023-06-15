import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  task:string = "";
  tasks:string[] =[];
  add(){
    if(this.task.trim().length > 0){
      this.tasks.push(this.task);
      console.log(this.tasks)
    }
    this.task="";
  }

  remove(index:number){
    if(confirm("are you Finished This Task")){
      this.tasks.splice(index,1);
    }
  }
}
