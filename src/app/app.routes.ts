import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactezNousComponent } from './contactez-nous/contactez-nous.component';
import { ServiceComponent } from './service/service.component';

export const routes: Routes = [
    
    {path:"", component:AccueilComponent},
    {path:"apropos", component:AproposComponent},
    {path:"contactez-nous", component:ContactezNousComponent},
    {path:"service", component:ServiceComponent},
];
