import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMatchesComponent } from './all-matches/all-matches.component';
import { SavedMatchesComponent } from './saved-matches/saved-matches.component';

const routes: Routes = [
  
  {path:'All-Match',component:AllMatchesComponent},
  {path:'Save-Match',component:SavedMatchesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
