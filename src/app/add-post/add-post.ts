import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../blog';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-post.html'
})
export class AddPost{

  title = '';
  desc = '';

  constructor(private blog: BlogService, private router: Router) {}

  addPost() {
    this.blog.addPost({ title: this.title, desc: this.desc });
    this.router.navigate(['/']);
  }

}