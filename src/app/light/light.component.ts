import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {
  best()
{
  this.ben.navigate(['./main'])
 
}
constructor(public ben:Router) { }
  

  ngOnInit(): void {
  }

}
