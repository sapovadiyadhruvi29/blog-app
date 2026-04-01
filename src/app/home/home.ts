import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService } from '../blog';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {

  posts: any[] = [];

  constructor(private blog: BlogService) {}

  ngOnInit() {
    this.posts = this.blog.getPosts();
  }

  delete(id: any) {
    this.blog.deletePost(id);
    this.posts = this.blog.getPosts();
  }
}