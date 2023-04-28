import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  //{ redirectTo: '', path: 'home-page', pathMatch: 'full' },
  { path: '', component: HomePageComponent, pathMatch: 'full' }, // patchMath is important with empty route, otherwise any route would match
  // { path: '**', redirectTo: '/' }, // so if you want to access "/foo123", the url wi
  { path: 'home-page', component: HomePageComponent },
  { path: 'registers', component: RegisterComponent },
  {
    path: 'viewdata',
    component: ViewdataComponent,
  },
  {
    path: 'user-profile/:id',
    component: UserProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
