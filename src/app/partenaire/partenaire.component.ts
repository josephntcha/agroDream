import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-partenaire',
  standalone: true,
  imports: [],
  templateUrl: './partenaire.component.html',
  styleUrl: './partenaire.component.css'
})
export class PartenaireComponent implements OnInit{


  ngOnInit(): void {
      this.initAnimations()
  }


  private initAnimations(): void {
    // Animations GSAP avec ScrollTrigger pour les autres sections
    gsap.utils.toArray('.partenaires,.img-fluid').forEach((section: any) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    });

  
  }
}
