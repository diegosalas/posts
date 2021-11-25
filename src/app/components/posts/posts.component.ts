import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  isItemAvailable = false;
  posts= [];
  
  constructor(private postsService: PostsService, private router: Router) {

  }

  showComments(id: string) {
    this.router.navigate(['posts', id, 'comments']);
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((data: any) => {
      this.posts = data;
      });
  
  }
   


  getItems(ev: any) {

    const val = ev.target.value;
    if (val && val.trim() !== '') {
        this.isItemAvailable = true;
        this.posts= this.posts.filter((post) => {
            return (post.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
    } else {
        this.postsService.getPosts().subscribe((data: any) => {
          this.posts = data;
        });
    }
  }

}
