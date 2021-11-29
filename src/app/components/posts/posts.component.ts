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
  postFiltered=[]
  posts= [];
  users=[]
  
  constructor(private postsService: PostsService, private router: Router) {

  }

  showComments(id: string) {
    this.router.navigate(['posts', id, 'comments']);
  }

  showUserName(id: string) {
    var result = this.users.find(obj => {
        return obj.id === id
    })
    return result.name
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((data: any) => {
      this.posts = data;
      this.postFiltered = data;
      });
    this.postsService.getUsers().subscribe((data: any) => {
      this.users = data;
      });
  
  }
   


  getItems(ev: any) {
    const val = ev.target.value;
    console.log(val);
    if (val && val.trim() !== '') {
        this.postFiltered= this.posts.filter((post) => {
            return (post.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
    } else {
        this.postsService.getPosts().subscribe((data: any) => {
          this.posts = data;
        });
    }
  }

}
