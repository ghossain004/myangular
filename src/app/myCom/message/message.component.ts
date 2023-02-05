import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'src/app/model/message.model';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{
  
  messageForm!: FormGroup;

  messages!: Message[];

  constructor(
    public messageService: MessageService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.messageService.getAll().subscribe((res:any) => {
      this.messages = res;

      console.log('Posts get successfully!', this.messages);

 })

 this.messageForm = new FormGroup({
  userName: new FormControl('', [Validators.required]),
  msgBody: new FormControl('', Validators.required),
})
  }

  get f(){
    return this.messageForm.controls;
  }

  messageSubmit(){
    console.log(this.messageForm.value);
    this.messageForm.value.userName = "Golam Hossain"
    this.messageService.create(this.messageForm.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('message');
         this.ngOnInit();
    })
  }
}
