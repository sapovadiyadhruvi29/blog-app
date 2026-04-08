import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


// Service aapde data store karva mate banavi 

export class Blog {


  posts: any[] = [];

  getpost() {
    return this.posts;
  }

  addpost(post: any) {
    this.posts.push(post);
  }

  deletepost(index: number) {
    this.posts.splice(index,1);
  }

  getPost(index:number){ 
    return this.posts[index]
  }

  editPost(index: number, editpost: any) {
    this.posts[index] = editpost;
  }

}
