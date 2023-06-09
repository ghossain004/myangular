import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'src/app/model/message.model';
import { Signup } from 'src/app/model/signup.model';
import { MessageService } from 'src/app/service/message.service';
import { SignupService } from 'src/app/service/signup.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{
  
  messageForm!: FormGroup;

  messages!: Message[];
  signup: Signup[] = [];

  constructor(
    public messageService: MessageService,
    public signupService: SignupService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.messageService.getAll().subscribe((res:any) => {
      this.messages = res;

      console.log('Messages get successfully!', this.messages);

 })

 this.signupService.getAll().subscribe((res:any) => {
  this.signup = res;

  console.log('Posts get successfully!', this.messages);

})

 this.messageForm = new FormGroup({
  user: new FormControl('', [Validators.required]),
  messageBody: new FormControl('', Validators.required),
})
  }

  get f(){
    return this.messageForm.controls;
  }

  messageSubmit(){
    console.log(this.messageForm.value);
    this.messageForm.value.user = {userId:1}
    this.messageService.create(this.messageForm.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('message');
         this.ngOnInit();
    })
  }
}
