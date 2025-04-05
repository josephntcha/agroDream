import { AfterViewInit, Component } from '@angular/core';
import { DomainesComponent } from "../domaines/domaines.component";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-service',
  standalone: true,
  imports: [DomainesComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  
    const cards = document.querySelectorAll('.card-grid .card');
  
    gsap.from(cards, {
      scale: 0.8, 
      opacity: 0, 
      duration: 0.8, 
      ease: 'power1.out', 
      stagger: 0.2, 
      scrollTrigger: {
        trigger: '.card-grid',
        start: 'top 80%', 
        toggleActions: 'play none none none', 
      }
    });
  }

}
