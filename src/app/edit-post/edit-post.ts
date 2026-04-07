import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-post.html',
  styleUrl: './edit-post.css'
})
export class EditPost {
  post: any = {
    title: '',
    desc: ''
  };

  constructor(
    private route: ActivatedRoute,
    private blog: BlogService,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    const data = this.blog.getPostById(id);

    if (data) {
      this.post = { ...data };
    }
  }

  updatePost() {
    if (!this.post.title || !this.post.desc) {
      alert('Please fill all fields');
      return;
    }

    this.blog.updatePost(this.post);
    alert('Post updated successfully');
    this.router.navigate(['/home']);
  }
}