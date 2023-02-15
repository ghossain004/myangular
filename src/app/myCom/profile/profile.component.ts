import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/service/signup.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  form!: FormGroup;
  
  constructor(
    public signupService: SignupService,
    private router: Router
  ){}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submit(){
    console.log(this.form.value);
    this.signupService.create(this.form.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('login');
    })
  }

}
