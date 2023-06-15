import { Component } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {
  name: string="";
  age: string="";
  items: {id:number, name: string, age: string }[] = [];
  id:number=1;
  namevalid:boolean=true;
  agevalid:boolean=true;
  addValues() {
    if(this.name.trim().length < 3){
      this.namevalid = false;
    }else {
      this.namevalid = true;
    }
    if(parseInt(this.age) < 18 || parseInt(this.age) > 30 || this.age.length ==0){
      this.agevalid = false;
    }
    else{
      this.agevalid = true;
    }
    if(this.namevalid && this.agevalid){
      const newItem = {id:this.id, name: this.name, age: this.age };
      this.items.push(newItem);
      this.name = '';
      this.age = '';
      this.id++
    }
  }
}
