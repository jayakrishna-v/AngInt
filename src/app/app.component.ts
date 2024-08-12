import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomesComponent } from './homes/homes.component';
import { Ihouse } from './ihouse';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./apphome/apphome.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomesComponent, CommonModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes-app';
  constructor(){
    this.title=$localize`${this.title}`;
  }
}
