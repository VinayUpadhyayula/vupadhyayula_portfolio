import { Component } from '@angular/core';

@Component({
  selector: 'work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.scss']
})
export class WorkExpComponent {
  array:any[] = [];
  ngOnInit()
  {
    this.array = [
      {
        year:"August 2023 - Present",
        org:"<b>Binghamton University<b>,New York, USA",
        role:"Teaching Assistant",
        work:"Worked as a Teaching Assistant for Data Structures and Algorithms\nAssisted in coursework, grading, conducting lab sessions every week for a class of 60 students"
      },
      {
      year:"Jan 2021 - December 2022",
      org:"<b>Tata Consultancy Services Ltd<b>,Hyderabad, India | <b>Client: Proximus</b>",
      role:"Systems Engineer",
      work:`Workforce Management Integration Layer June 2022-December 2022 Worked on a full stack Workforce management application using Apache camel, XSLT transformation, Angular and Spring BootParticipated and demonstrated in various discussions with the client from the feature description level to post implementation testing National Directory Search        								           November 2021-June 2022Developed a Directory search portal project for a Belgium Client using Spring Batch Processing,Spring Boot, Angular,REST,ElasticSearch DB,Spring Cloud
      Played a key role in the development right from the project initiation phase to the handover phase
      Onboarded new graduate students and trained them on project related technical technologies
      Central Digital Communication Platform eXtension - Test Automation Integration                           July 2021-November 2021
      Developed a UI functionality using Angular 10 and Node JS to integrate Web Service Automation Testing using Selenium and REST Framework
      Implementation of  the functionality reduced the manual testing overhead thereby cutting the overall cost for the client`
      }
    ]
  }
}
