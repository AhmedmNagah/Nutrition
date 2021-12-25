import { DataService } from 'src/app/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FirebaseListObservable} from'angularFire2'

@Component({
  selector: 'app-responce',
  templateUrl: './responce.component.html',
  styleUrls: ['./responce.component.scss']
})
export class ResponceComponent implements OnInit {


  id = "503528f7";
  key = "b275cc0a81af238ad83391cd8360553d";

  results: string[] = [];
  totaldaily: string[][]=[]
  amountPerServing = "amount";
  grams = '';
  calories = '';
  totalFat = "totalFat";
  Cholesterol='';
  

  constructor(data: DataService, private http: HttpClient) {
    let ingr = data.getOption();
    this.getResponse(ingr);
  }

  getResponse(ingr: string) {

    this.http.get('https://api.edamam.com/api/nutrition-data?app_id=' + this.id
      + '&app_key=' + this.key + '&ingr=' + ingr).subscribe(data => {
        console.log('data are', data);
        for (let key in data)
          if (data.hasOwnProperty(key)) {
            this.results.push(((data) as any)[key])
          }
           console.log('results of push', this.results);
           let resArr=Object.entries(data);
           let resArr2=Object.entries(resArr[7][1])
           console.log('resAssay is ',Object.entries(resArr2[1]));
        // this.calories = this.results[1];
        // this.grams=this.results[2];
        // this.amountPerServing=ingr;
        // console.log(this.results[6])
        // this.totaldaily=Object.entries(resArr[6][1]);
        // console.log('total daily', this.totaldaily);
      })
      
  }
;

  ngOnInit(): void {
  }

}
