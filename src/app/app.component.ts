import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTitleComponent } from "./components/menu-title/menu-title.component";
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { BigCardComponent } from "./components/big-card/big-card.component";
import { SmallCardComponent } from "./components/small-card/small-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuTitleComponent, CommonModule, MenuBarComponent, BigCardComponent, SmallCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isDark: boolean = true;

}