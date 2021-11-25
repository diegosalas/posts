import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private postsService: PostsService, private router: Router) {
    this.postsService.getPosts().subscribe((data: any) => {
      this.posts = data;
    });
  }

  showComments(id: string) {
    this.router.navigate(['posts', id, 'comments']);
  }

  ngOnInit(): void {}
}
