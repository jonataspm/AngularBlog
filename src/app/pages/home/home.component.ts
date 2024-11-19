import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { CommonModule } from '@angular/common';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { dataFake } from '../../data/datafake';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule ,MenuTitleComponent, CommonModule, BigCardComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'AngularBlog';

  bcard: any = dataFake[0]

  scards: any[] = [  
    dataFake[1],
    dataFake[2],
    dataFake[3]
  ];  
}

