import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'Routing Implementation';
  bech()
  {
    this.ben1.navigate(['light'])
   
  }
  constructor(public ben1:Router) { }
  
  ngOnInit(): void {
  }

}
