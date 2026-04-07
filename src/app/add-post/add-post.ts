import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../blog';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-post.html',
  styleUrl: './add-post.css'
})
export class AddPost {
  title = '';
  desc = '';

  constructor(
    private blog: BlogService,
    private router: Router
  ) {}

  addPost() {
    if (!this.title || !this.desc) {
      alert('Please fill all fields');
      return;
    }

    this.blog.addPost({
      title: this.title,
      desc: this.desc
    });

    alert('Post added successfully');
    this.router.navigate(['/home']);
  }
}