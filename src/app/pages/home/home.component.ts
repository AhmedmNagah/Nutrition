import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userForm: FormGroup;
  
  constructor(private router: Router,private fb:FormBuilder) { 
    this.userForm = this.fb.group({
      inputText: ['',Validators.required]
    })
    
  }
  
  async sendToAnalysis(ingr: string): Promise<void> {
    
    let id = "503528f7";
    let key = "b275cc0a81af238ad83391cd8360553d";
    let qty = ingr;
    let nutritiontype = "cooking";
    let responce = await fetch('https://api.edamam.com/api/nutrition-data?app_id=' + id + '&app_key=' + key + '&nutrition-type=' + nutritiontype + '&ingr=' + qty);
    console.log(responce);
    this.router.navigateByUrl('src/app/pages/responce/responce.component.html');

  }

  ngOnInit(): void {
  }

}
