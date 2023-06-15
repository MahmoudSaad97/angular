import { Component } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {
  imgpath:string="6.jpeg";
  images:string[]=["1.jpg","2.jpg","3.jpg","5.jpg","6.jpeg"];
  index:number=0;
  switch(){
    if(this.index == this.images.length){
      this.index=0;
    }
    this.imgpath=this.images[this.index];
    this.index++;
  }
}
