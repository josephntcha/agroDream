import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrez le plugin une fois
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contactez-nous',
  standalone: true,
  imports: [],
  templateUrl: './contactez-nous.component.html',
  styleUrl: './contactez-nous.component.css'
})
export class ContactezNousComponent implements OnInit, AfterViewInit {
  @ViewChild('background', { static: true }) background!: ElementRef;

  ngOnInit(): void {
   this.initAnimationAboutImage();
  }

  ngAfterViewInit(): void {
    this.initFormAnimations();
    this.initInteractiveAnimations();
  }
  
  private initAnimationAboutImage(): void{
 // Animation existante de l'arrière-plan
 gsap.to('.contactez-nous-background', {
  duration: 2,
  scale: 1.05,
  opacity: 0.8,
  yoyo: true,
  repeat: -1,
  ease: 'power1.inOut'
});

// Animation existante du titre
gsap.from('.contactez-nous-content h1', {
  duration: 1.5,
  y: 50,
  opacity: 0,
  ease: 'back.out(1.7)'
});
  }

  private initFormAnimations(): void {
    // Animation de la colonne du formulaire
    gsap.from('.contact-form', {
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      ease: 'power2.out'
    });

    gsap.from('.contact-info', {
      scrollTrigger: {
        trigger: '.contact-info',
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      ease: 'power2.out'
    });

    gsap.from('.contact-item', {
      scrollTrigger: {
        trigger: '.contact-info',
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      duration: 0.5,
      y: 20,
      opacity: 0,
      stagger: 0.15,
      delay: 0.4,
      ease: 'back.out(1.4)'
    });


    // Animation des éléments du formulaire
    gsap.from('.form-title', {
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      duration: 0.6,
      y: 30,
      opacity: 0,
      delay: 0.2,
      ease: 'power2.out'
    });

    gsap.from('.form-subtitle', {
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      duration: 0.6,
      y: 30,
      opacity: 0,
      delay: 0.3,
      ease: 'power2.out'
    });

    // Animation des champs de formulaire avec stagger
    gsap.from('.custom-input', {
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      duration: 0.5,
      y: 20,
      opacity: 0,
      stagger: 0.15,
      delay: 0.4,
      ease: 'back.out(1.4)'
    });

    // Animation du bouton
    gsap.from('.btn-submit', {
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      duration: 0.6,
      y: 20,
      opacity: 0,
      delay: 0.7,
      ease: 'power2.out'
    });
  }

  private initInteractiveAnimations(): void {
    // Animation au survol des inputs
    const inputs = document.querySelectorAll('.custom-input');
    
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        gsap.to(input, {
          duration: 0.2,
          scale: 1.02,
          boxShadow: '0 0 0 2px rgba(15, 149, 45, 0.3)',
          ease: 'power1.out'
        });
      });

      input.addEventListener('blur', () => {
        gsap.to(input, {
          duration: 0.2,
          scale: 1,
          boxShadow: 'none',
          ease: 'power1.out'
        });
      });
    });

    // Animation au survol du bouton
    const submitBtn = document.querySelector('.btn-submit');
    
    if (submitBtn) {
      submitBtn.addEventListener('mouseenter', () => {
        gsap.to(submitBtn, {
          duration: 0.2,
          scale: 1.03,
          backgroundColor: '#007a38',
          ease: 'power1.out'
        });
      });

      submitBtn.addEventListener('mouseleave', () => {
        gsap.to(submitBtn, {
          duration: 0.2,
          scale: 1,
          backgroundColor: '#009E48',
          ease: 'power1.out'
        });
      });
    }
  }
}