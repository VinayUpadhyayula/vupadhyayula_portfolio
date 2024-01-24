import { Component, HostListener} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vupadhyayula';
  // containerTop = 0;

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   // Adjust the top position of the container based on the scroll distance
  //   this.containerTop = Math.max(0, 300 - window.scrollY);
  // }
}
