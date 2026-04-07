import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-detail.html',
  styleUrls: ['./post-detail.css']
})
export class PostDetail {
  post: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blog: BlogService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.post = this.blog.getPostById(id);
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}