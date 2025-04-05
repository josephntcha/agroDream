import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-domaines',
  standalone: true,
  imports: [],
  templateUrl: './domaines.component.html',
  styleUrl: './domaines.component.css'
})
export class DomainesComponent implements OnInit {
  
  ngOnInit() {
    this.initAnimations();
  }

  private initAnimations(): void {
    // Animation spécifique pour les cartes de domaines d'intervention
    gsap.utils.toArray('.domaines-intervention .card').forEach((card: any, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 90,
        duration: 0.5,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: '.domaines-intervention',
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });
    });
  }
}
