import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PostDetail } from './post-detail/post-detail';
import { About } from './about/about';
import { NotFound} from './not-found/not-found';
import { AddPost} from './add-post/add-post';
import { EditPost } from './edit-post/edit-post';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'post/:id', component: PostDetail},
  { path: 'add', component: AddPost},
  { path: 'edit/:id', component: EditPost },
  { path: 'about', component: About },
  { path: '**', component: NotFound }
];