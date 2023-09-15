import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { AnwersComponent } from './pages/anwers/anwers.component';
const routes: Routes = [
  {
   path: '', redirectTo: 'form/builder', pathMatch: 'full' 
  },
  {
    path: 'form',
    children: [
      {
        path: 'builder',
        component: FormComponent,
      },
      {
        path: 'answers',
        component: AnwersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
