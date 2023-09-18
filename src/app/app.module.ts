import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlQudsGroupComponent } from './al-quds-group/al-quds-group.component';
import { GroupHomeComponent } from './group-home/group-home.component';
import { GroupAboutComponent } from './group-about/group-about.component';
import { GroupContactComponent } from './group-contact/group-contact.component';
import { SteelComponent } from './steel/steel.component';
import { GroupNavbarComponent } from './group-navbar/group-navbar.component';
import { SteelHomeComponent } from './steel-home/steel-home.component';
import { SteelAboutComponent } from './steel-about/steel-about.component';
import { SteelProjectsComponent } from './steel-projects/steel-projects.component';
import { QshadingComponent } from './qshading/qshading.component';
import { ShadingHomeComponent } from './shading-home/shading-home.component';
import { ShadingAboutComponent } from './shading-about/shading-about.component';
import { SteelServicesComponent } from './steel-services/steel-services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SteelCatalogComponent } from './steel-catalog/steel-catalog.component';
import { SteelCertificateComponent } from './steel-certificate/steel-certificate.component';

@NgModule({
  declarations: [
    AppComponent,
    AlQudsGroupComponent,
    GroupHomeComponent,
    GroupAboutComponent,
    GroupContactComponent,
    SteelComponent,
    GroupNavbarComponent,
    SteelHomeComponent,
    SteelAboutComponent,
    SteelProjectsComponent,
    QshadingComponent,
    ShadingHomeComponent,
    ShadingAboutComponent,
    SteelServicesComponent,
    SteelCatalogComponent,
    SteelCertificateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
