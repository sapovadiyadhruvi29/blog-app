import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Router, RouterLink } from "@angular/router";
import { Blog } from '../blog';

@Component({
  selector: 'app-postdetails',
  imports: [Navbar, RouterLink],
  templateUrl: './postdetails.html',
  styleUrl: './postdetails.css',
})
export class Postdetails {

  posts: any[] = [];

  constructor(private blog: Blog, private router: Router) { }

  ngOnInit() {
    this.posts = this.blog.getpost();
  }

  deletePost(index:number) {
    this.posts=this.posts.splice(index,1)
  }

  editPost(index: number) {
    this.router.navigate(['/edit-post', index]);
  }
}

