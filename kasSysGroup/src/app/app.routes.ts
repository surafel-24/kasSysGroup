import { Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/services/service.component';
import { AboutComponent } from './components/about/about.component';
import { PartnersComponent } from './components/partners/partners.component';
import { AnnouncementComponent } from './components/events/announcement/announcement.component';
import { NewsComponent } from './components/events/news/news.component';
import { LoginComponent } from './components/events/login/login.component';
import { EventsComponent } from './components/events/events.component';
import { ProductsComponent } from './components/products/products.component';
import { CareerComponent } from './components/career/career.component';
import { IndustriesComponent } from './components/industries/industries.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'contact-us', component: ContactUsComponent },
    {path: 'services', component: ServiceComponent},
    {path: 'about', component: AboutComponent},
    {path: 'partners', component: PartnersComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'career', component: CareerComponent},
    { path: 'industries', component: IndustriesComponent },
    { path: 'events', component: EventsComponent,  
      children: [
        { path: 'announcement', component: AnnouncementComponent, pathMatch: 'full' },
        { path: 'news', component: NewsComponent },
        { path: 'news/:id', component: NewsComponent },
        { path: 'login', component: LoginComponent },
      ]
    },

    { path: '**', redirectTo: '' }
    
];
