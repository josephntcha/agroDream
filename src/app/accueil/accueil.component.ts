import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PartenaireComponent } from "../partenaire/partenaire.component";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DomainesComponent } from "../domaines/domaines.component";
gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterLink, PartenaireComponent, DomainesComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit,OnDestroy{
  private dotClickListeners: (() => void)[] = [];
  private slideshowInterval: number | undefined;

  ngOnInit() {
    this.initSlideshow();
    this.initAnimations();
  }

  ngOnDestroy() {
    // Nettoyage des ressources
    if (this.slideshowInterval) {
      clearInterval(this.slideshowInterval);
    }
    this.dotClickListeners.forEach(removeListener => removeListener());
  }

  private initSlideshow(): void {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0 || dots.length === 0) {
      console.warn('Slideshow: Aucun slide ou point de navigation trouvé');
      return;
    }

    let currentSlideIndex = 0;

    const animateSlide = (slideIndex: number) => {
      const slide = slides[slideIndex];
      if (!slide) return;

      const background = slide.querySelector('.slide-background') as HTMLElement;
      const header = slide.querySelector('header h1');
      const separator = slide.querySelector('.separator');
      const h2 = slide.querySelector('section h2');
      const p = slide.querySelector('section p');

      // Animation de l'arrière-plan
      gsap.fromTo(background, 
        { scale: 1 },
        { 
          scale: 1.05, 
          duration: 40, 
          ease: 'sine.inOut', 
          yoyo: true, 
          repeat: 1 
        }
      );

      // Animation du contenu
      const tl = gsap.timeline();
      
      tl.fromTo(header, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
      )
      .fromTo(separator,
        { width: 0 },
        { width: '25%', duration: 1, ease: 'power2.out' }, '-=1'
      )
      .fromTo(h2,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'back.out(1.7)' }, '-=0.5'
      )
      .fromTo(p,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.7'
      );
    };

    const goToSlide = (index: number) => {
      if (this.slideshowInterval) {
        clearInterval(this.slideshowInterval);
      }
      
      slides[currentSlideIndex]?.classList.remove('active');
      dots[currentSlideIndex]?.classList.remove('active');
      
      currentSlideIndex = index;
      slides[currentSlideIndex]?.classList.add('active');
      dots[currentSlideIndex]?.classList.add('active');
      
      animateSlide(currentSlideIndex);
      this.startSlideshow();
    };

    const nextSlide = () => {
      const nextIndex = (currentSlideIndex + 1) % slides.length;
      goToSlide(nextIndex);
    };

    this.startSlideshow = () => {
      if (this.slideshowInterval) {
        clearInterval(this.slideshowInterval);
      }
      this.slideshowInterval = window.setInterval(nextSlide, 5000);
    };

    dots.forEach((dot, index) => {
      const listener = () => goToSlide(index);
      dot.addEventListener('click', listener);
      this.dotClickListeners.push(() => dot.removeEventListener('click', listener));
    });

    // Initialisation
    animateSlide(0);
    this.startSlideshow();
  }

  private startSlideshow(): void {
    // Implémentation dans initSlideshow
  }

  private initAnimations(): void {
    // Animations GSAP avec ScrollTrigger pour les autres sections
    gsap.utils.toArray('.bienvenue, .notre-entreprise, .domaines-intervention, .statistiques, .notre-mission, .notre-vision, .accompagnement, .accompagnement_h1, .accompagnement_p, .accompagnement_button, .card-agri, .cardjeune, .ellipse, .chiffre').forEach((section: any) => {
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
