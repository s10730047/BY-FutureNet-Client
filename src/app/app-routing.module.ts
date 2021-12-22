import { SideNavComponent } from './core/component/side-nav/side-nav.component';
import { HeaderComponent } from './core/component/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/component/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'header',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'header',
    component: HeaderComponent,
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
