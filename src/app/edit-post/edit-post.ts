import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-post.html'
})
export class EditPost {

  post: any;

  constructor(
    private route: ActivatedRoute,
    private blog: BlogService,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.post = this.blog.getPostById(id);
  }

  update() {
    this.blog.updatePost(this.post);
    this.router.navigate(['/']);
  }
}