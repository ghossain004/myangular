import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/model/comment.model';
import { Post } from 'src/app/model/post.model';
import { Signup } from 'src/app/model/signup.model';
import { SubComment } from 'src/app/model/subcomment.model';
import { CommentService } from 'src/app/service/comment.service';
import { PostService } from 'src/app/service/post.service';
import { SignupService } from 'src/app/service/signup.service';
import { SubCommentService } from 'src/app/service/subcomment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  homeForm!: FormGroup;
  commentForm!: FormGroup;
  subcommentForm!: FormGroup;


  posts!: Post[];
  comments!: Comment[];
  subComment!: SubComment[];

  constructor(
    public postService: PostService,
    public commentService: CommentService,
    public subCommentService: SubCommentService,
    private router: Router
  ){}
  
  ngOnInit(): void {
    this.postService.getAll().subscribe((res:any) => {
      this.posts = res;

      console.log('Posts get successfully!', this.posts);

 })

 this.commentService.getAll().subscribe((res:any) => {
  this.comments = res;

  console.log('Comment get successfully!', this.comments);

})

this.subCommentService.getAll().subscribe((res:any) => {
  this.subComment = res;
  console.log('SubComment get successfully!', this.subComment);

})

    this.homeForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      postBody: new FormControl('', Validators.required),
    })

    this.commentForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      commentBody: new FormControl('', Validators.required),
    })

    this.subcommentForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      subCommentBody: new FormControl('', Validators.required),
    })
  }

  get f(){
    return this.homeForm.controls;
  }

  btnColor:string = ''

  btnClorChamge(id:number){
    if(this.btnColor===''){
      this.btnColor='#349eeb';
    }else{
      this.btnColor=''
    }
  }

  postSubmit(){
    console.log(this.homeForm.value);
    this.homeForm.value.userName = "Golam Hossain"
    this.postService.create(this.homeForm.value).subscribe((res:any) => {
         console.log('Post created successfully!');
        //  this.router.navigateByUrl('login');
        this.ngOnInit();
    })
  }

  deletePost(id:number){
    this.postService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }

  commentSubmit(){
    console.log(this.commentForm.value);
    this.commentForm.value.userName = "Golam Hossain"
    this.commentService.create(this.commentForm.value).subscribe((res:any) => {
         console.log('Comment created successfully!');
        //  this.router.navigateByUrl('login');
        this.ngOnInit();
    })
  }

  replaySubmit(){
    console.log(this.subcommentForm.value);
    this.subcommentForm.value.userName = "Golam Hossain"
    this.subCommentService.create(this.subcommentForm.value).subscribe((res:any) => {
         console.log('Comment created successfully!');
        //  this.router.navigateByUrl('login');
        this.ngOnInit();
    })
  }

  deleteComment(id:number){
    this.commentService.delete(id).subscribe(res => {
         this.comments = this.comments.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }

}
