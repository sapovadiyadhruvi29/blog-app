import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Blog } from '../blog';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-post.html',
  styleUrl: './add-post.css',
})
export class AddPost {

  title = '';
  author = '';
  description = '';

  constructor(private blog: Blog, private router: Router) {}

  addPost() {
    const newPost = {
      title: this.title,
      author: this.author,
      description: this.description
    };

    this.blog.addpost(newPost);

    this.router.navigate(['/']); 
  }
}