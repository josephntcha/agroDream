import { AfterViewInit, Component } from '@angular/core';
import { DomainesComponent } from "../domaines/domaines.component";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-service',
  standalone: true,
  imports: [DomainesComponent,NgFor],
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


   piscicultureCards = [
    {
      title: 'Pisciculture extensive',
      image: 'assets/images/pisculture (1).png',
      description: `La pisciculture en bassins consiste à
        élever des poissons dans des réservoirs
        contrôlés, permettant d'optimiser leur
        croissance et leur santé grâce à un
        environnement adapté.`
    },
    {
      title: 'Pisciculture en bassins',
      image: 'assets/images/pisculture (2).png',
      description: `La pisciculture en bassins consiste à
        élever des poissons dans des réservoirs
        contrôlés, permettant d'optimiser leur
        croissance et leur santé grâce à un
        environnement adapté.`
    },
    {
      title: 'Pisciculture en étangs',
      image: 'assets/images/pisculture (3).png',
      description: `La pisciculture en bassins consiste à
        élever des poissons dans des réservoirs
        contrôlés, permettant d'optimiser leur
        croissance et leur santé grâce à un
        environnement adapté.`
    }
  ];

    especesPoissons = [
    {
      nom: 'Tilapia',
      image: 'assets/images/poisson (1).png'
    },
    {
      nom: 'Silure',
      image: 'assets/images/poisson (2).png'
    },
    {
      nom: 'Poisson-chat',
      image: 'assets/images/poisson (3).png'
    },
    {
      nom: 'Bass',
      image: 'assets/images/poisson (4).png'
    }
  ];
}
