import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ihouse } from '../ihouse';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homes',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './homes.component.html',
  styleUrl: './homes.component.css'
})
export class HomesComponent {
  @Input() housingLocation!:Ihouse;
}
