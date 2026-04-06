import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Login } from './login/login';
import { Postdetails } from './postdetails/postdetails';
import { Notfound } from './notfound/notfound';
import { Membership } from './membership/membership';

export const routes: Routes = [
    {path:'' ,component:Login},
    {path:'membership',component:Membership},
    {path:'home', component:Home},
    {path:'about' ,component:About},
    {path:'postdetail' ,component:Postdetails},
    {path:'**' ,component:Notfound}
];
