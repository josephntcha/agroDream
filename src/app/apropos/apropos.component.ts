import { Component } from '@angular/core';
import { PartenaireComponent } from "../partenaire/partenaire.component";

@Component({
  selector: 'app-apropos',
  standalone: true,
  imports: [PartenaireComponent],
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AproposComponent {

}
