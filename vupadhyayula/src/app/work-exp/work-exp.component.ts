import { Component } from '@angular/core';

@Component({
  selector: 'work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.scss']
})
export class WorkExpComponent {
  workExperience = [
    {
      company: 'Engineering Indx',
      timeSpan: 'Feb 24 - Present',
      roles: [
        {
          title: 'Technology Analyst',
          subtitle: 'Consultant, Developer',
          content: [
            'Transforming Bayer\'s Crop protection manufacturing division using Industry Digital 4.0',
            'Delivering high quality web applications built using Angular, C#, MySQL, Rabbit MQ',
            'Leveraging Siemens Opcenter Execution Foundation event driven command based architecture to integrate cross cutting technologies'
          ]
        }
      ]
    },
    {
      company: 'Tata Consultancy Services',
      timeSpan: 'Jan 21 - Dec 22',
      roles: [
        {
          title: 'Workforce Management Integration Layer™',
          subtitle: 'Apache Camel, XSLT, Angular, and Spring Boot',
          content: [
            'Engineered a full-stack Workforce Management application utilizing Apache Camel, XSLT, Angular, and Spring Boot',
            'Engaged actively in discussions with analysts and stakeholders, providing demonstrations from feature description through post-implementation testing phases that led to a 55% decrease in average handling time of a request'
          ]
        },
        {
          title: 'National Directory Search™',
          subtitle: 'Angular, Spring Boot, Elasticsearch',
          content: [
            'Developed a Directory search portal project for a leading Belgium Client using Spring Batch Processing, Spring Boot, Angular, REST, Elasticsearch DB, Spring Cloud, Jenkins and Openshift container platform',
            'The application was transformed using new technology from legacy application which reduced 4.2 million euros cost for the client',
            'Use of new technology by the team was a risk. Enough POC was done by the team offline before proposing and implementing the solution.'
          ]
        },
        {
          title: 'Central Digital Communication Platform eXtension™ - Test Automation Integration',
          subtitle: 'Angular, Spring Boot, Selenium',
          content: [
            'Developed a UI functionality using Angular 10 and Node JS to integrate Web Service Automation Testing using Selenium and REST Framework in a Agile team of 15 members',
            'Devised and executed the functionality that significantly reduced manual testing overhead, resulting in substantial cost savings of over 40% for the client'
          ]
        }
      ]
    },
    {
      company: 'Binghamton University',
      timeSpan: 'Aug 23 - Dec 24',
      roles: [
        {
          title: 'Teaching Assistant',
          subtitle: 'Data Structures and Algorithms, C++',
          content: [
            'Gained expertise by contributing as a Teaching Assistant for Data Structures and Algorithms using C++',
            'Assisted in coursework, grading, conducting lab sessions and office hours every week for a class of over 60 students'
          ]
        }
      ]
    }
  ];
}