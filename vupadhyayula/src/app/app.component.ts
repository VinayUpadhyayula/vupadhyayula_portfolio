import { Component, HostListener, OnInit, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vupadhyayula';
  opacity: number = 0;

  ngOnInit(): void {
    const checkpoint = 250;
    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= checkpoint) {
        this.opacity = 1 - currentScroll / checkpoint;
      } else {
        this.opacity = 0;
      }

      const name_element = <HTMLElement>document.querySelector('.name');
      const image_element = <HTMLElement>document.querySelector('.profile-pic');
      const ruler_element = <HTMLElement>document.querySelector('.ruler');
      name_element.style.opacity = String(this.opacity);
      image_element.style.opacity = String(this.opacity);
      ruler_element.style.opacity = String(this.opacity);
    });
  }
  displayResume()
  {
    window.open("assets/Resume.pdf","_blank");
  }
  closeSideNav(sidenav:any)
  {
    sidenav.close();
  }
  
  // containerTop = 0;

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   // Adjust the top position of the container based on the scroll distance
  //   this.containerTop = Math.max(0, 300 - window.scrollY);
  // }
}
