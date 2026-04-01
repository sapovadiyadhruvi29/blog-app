import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  getPosts() {
    return JSON.parse(localStorage.getItem('posts') || '[]');
  }

  savePosts(posts: any) {
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  addPost(post: any) {
    const posts = this.getPosts();
    post.id = Date.now();
    posts.push(post);
    this.savePosts(posts);
  }

  getPostById(id: any) {
    return this.getPosts().find((p: any) => p.id == id);
  }

  updatePost(updatedPost: any) {
    let posts = this.getPosts();
    posts = posts.map((p: any) => p.id == updatedPost.id ? updatedPost : p);
    this.savePosts(posts);
  }

  deletePost(id: any) {
    let posts = this.getPosts().filter((p: any) => p.id != id);
    this.savePosts(posts);
  }
}