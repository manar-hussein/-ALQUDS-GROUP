import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlQudsGroupComponent } from './al-quds-group/al-quds-group.component';
import { GroupHomeComponent } from './group-home/group-home.component';
import { GroupAboutComponent } from './group-about/group-about.component';
import { GroupContactComponent } from './group-contact/group-contact.component';
import { SteelComponent } from './steel/steel.component';
import { SteelHomeComponent } from './steel-home/steel-home.component';
import { SteelAboutComponent } from './steel-about/steel-about.component';
import { SteelProjectsComponent } from './steel-projects/steel-projects.component';
import { QshadingComponent } from './qshading/qshading.component';
import { ShadingHomeComponent } from './shading-home/shading-home.component';
import { ShadingAboutComponent } from './shading-about/shading-about.component';
import { SteelServicesComponent } from './steel-services/steel-services.component';
import { SteelCatalogComponent } from './steel-catalog/steel-catalog.component';
import { SteelCertificateComponent } from './steel-certificate/steel-certificate.component';

const routes: Routes = [
    {path:'',component:AlQudsGroupComponent , title:'ALQUDS GROUP',children:[
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home',component:GroupHomeComponent},
      {path:'about',component:GroupAboutComponent},
      {path:'contact',component:GroupContactComponent},
    ]},
   
    {path:'steel',component:SteelComponent,title:'ALQUDS STEEL' ,children:[
      {path:'',redirectTo:'home' , pathMatch:'full'},
      {path:'home',component:SteelHomeComponent,children:[
        {path:'',redirectTo:'about',pathMatch:'full'},
        {path:'about',component:SteelAboutComponent},
        {path:'serv',component:SteelServicesComponent},
        {path:'steel-ctalog',component:SteelCatalogComponent},
        {path:'steel-crtificate',component:SteelCertificateComponent},
      ]},
      {path:'projects',component:SteelProjectsComponent},
    ]},
    {path:'shading',component:QshadingComponent,title:'Q SHADING' , children:[
      {path:'',redirectTo:'home' , pathMatch:'full'},
      {path:'home',component:ShadingHomeComponent},
      {path:'about',component:ShadingAboutComponent}
    ]}
   
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
