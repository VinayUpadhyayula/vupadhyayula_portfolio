import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js'

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  ngOnInit(): void {
    const target = document.getElementById("tw");
    const writer = new Typewriter(target, {
    loop: false,
    typeColor: 'black'
  });
  const writer2 = new Typewriter(target, {
    typeColor: 'green'
  })
  writer
  .type("I'm a ")
  .removeCursor()
  .then(writer2.start.bind(writer2))
  .start();
  writer2
  .type("Consultant")
  .rest(500)
  .clear()
  .type("Software Engineer")
  .rest(500)
  .clear()
  .type('Full Stack Developer!')
  .rest(500)
  .clear()
  .type('Masters Student!')
  .rest(500)
  .clear()
  .type('learner!')
  .rest(500)
  .clear()
  .type('proud Bearcat!')
  .rest(500)
  .clear()
  .then(writer.start.bind(writer))

  } 


}
