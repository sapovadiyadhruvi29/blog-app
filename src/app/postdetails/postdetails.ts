import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService } from '../blog';

@Component({
  selector: 'app-postdetails',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './postdetails.html',
  styleUrl: './postdetails.css',
})
export class Postdetails {
  posts: any[] = [];

  constructor(private blog: BlogService) {
    this.posts = this.blog.getPosts();
  }

  deletePost(id: any) {
    this.blog.deletePost(id);
    this.posts = this.blog.getPosts();
  }
}