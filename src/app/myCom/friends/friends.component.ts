import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from 'src/app/model/signup.model';
import { SignupService } from 'src/app/service/signup.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit{

  friends: Signup[] = [];

  constructor(
    public signupService: SignupService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.signupService.getAll().subscribe((data: Signup[])=>{
      this.friends = data;
      console.log(this.friends);
    })
  }

}
