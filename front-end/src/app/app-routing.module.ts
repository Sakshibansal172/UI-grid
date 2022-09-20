import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { FaultGraphComponent } from './fault-graph/fault-graph.component';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'first',component:FirstComponent},
  {path:'graph',component:GraphComponent},
  {path:'fault-graph',component:FaultGraphComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
