import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from './hijo/hijo.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, HijoComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

}
