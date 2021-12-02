import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  FormData!: FormGroup;

  answer=[
    {
      id:1,
      answer:"Yes" 
    },
    {
      id:2,
      answer:"No"
    }
  ];
  
  onSubmit(){
    console.log(this.FormData);
  };
 
  

    




   

  ngOnInit(): void {
    this.FormData = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      subject: new FormControl(''),
      answer: new FormControl(''),
      message: new FormControl('')
    }
    
    );

    
    

}

}
