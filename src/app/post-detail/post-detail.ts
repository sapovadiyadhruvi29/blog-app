import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  templateUrl: './post-detail.html',
  styleUrls: ['./post-detail.css']
})
export class PostDetail {

  id: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  goHome() {
    this.router.navigate(['/']);
  }

}