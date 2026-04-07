import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Login } from './login/login';
import { Postdetails } from './postdetails/postdetails';
import { Notfound } from './notfound/notfound';
import { Membership } from './membership/membership';
import { AddPost } from './add-post/add-post';
import { EditPost } from './edit-post/edit-post';
import { PostDetail } from './post-detail/post-detail';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'membership', component: Membership },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'postdetail', component: Postdetails },
  { path: 'add-post', component: AddPost },
  { path: 'edit-post/:id', component: EditPost },
  { path: 'post-detail/:id', component: PostDetail },

  // always last
  { path: '**', component: Notfound }
];