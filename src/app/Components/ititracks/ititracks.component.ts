import { Component } from '@angular/core';

@Component({
  selector: 'app-ititracks',
  templateUrl: './ititracks.component.html',
  styleUrls: ['./ititracks.component.css']
})
export class ItitracksComponent {
tracks=[
  {name:'frontend',cities:['Cairo','Sohag','Menofia']},
  {name:'Mern',cities:['Mansoura','Cairo','Assuit','SmartVillage']},
  {name:'Embeded',cities:['Cairo']},
  {name:'.Net',cities:['Cairo','Mansoura','Menoufia']}
];
selectedCities:string[]=[];
selectedtrack:string="";
getcities(trackname:string):string[]{
  const selectedTrack = this.tracks.find(track => track.name === trackname);
  if(selectedTrack){
    this.selectedCities = selectedTrack.cities;
  }else{
    this.selectedCities =[];
  }
  return this.selectedCities;
}
}

