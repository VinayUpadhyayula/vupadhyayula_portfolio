import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { TimelineModule } from "primeng/timeline"; 
import { CardModule } from "primeng/card";
import { Split } from './work-exp/split.pipe';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';
import { OtherComponent } from './other/other.component';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EducationComponent,
    WorkExpComponent,
    Split,
    SkillsComponent,
    ProjectsComponent,
    ResumeComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    NgxPageScrollModule,
    TimelineModule,
    CardModule,
    MatTabsModule,
    MatExpansionModule,
    MatIconModule,
    MatSidenavModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
