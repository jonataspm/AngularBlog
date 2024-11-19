import { CommonModule } from '@angular/common';
import { dataFake } from './../../data/datafake';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-content',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './view-content.component.html',
  styleUrl: './view-content.component.scss'
})
export class ViewContentComponent implements OnInit{
  card: any;
  found: boolean = true
  
  private id: string | null = "0";

  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(val => this.id = val.get("id"))

    if(this.id)
      this.setGetDataById(this.id)
    else
      this.found = false;
  }

  setGetDataById(id:string):void
  {
    const data = dataFake.filter(art => art.id.toString() == id)[0];
    if(data != null)
    {
      this.card = data
    }
    else
      this.found = false;
  }
}
