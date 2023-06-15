import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CarsoulComponent } from './Components/carsoul/carsoul.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { ServicesComponent } from './Components/services/services.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TeamComponent } from './Components/team/team.component';
import { TodosComponent } from './Components/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { SlideComponent } from './Components/slide/slide.component';
import { ItitracksComponent } from './Components/ititracks/ititracks.component';
import { AddstudentComponent } from './Components/addstudent/addstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarsoulComponent,
    PortfolioComponent,
    ServicesComponent,
    FooterComponent,
    TeamComponent,
    TodosComponent,
    SlideComponent,
    ItitracksComponent,
    AddstudentComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
