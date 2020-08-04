import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
 {
    path: '',
    component: PortfolioComponent
  }
  , {
    path: 'form',
    component: FormComponent
  }
  , {
    path: 'about',
    component: AboutComponent
  }
  , {
    path: '**',
    component: PortfolioComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
