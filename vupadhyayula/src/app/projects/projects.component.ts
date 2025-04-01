import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Sentiment Pulse',
      subtitle: 'Next.js, Django, Machine Learning, NLP',
      imageSrc: 'assets/images/pulse.png',
      imageAlt: 'Sentiment Pulse',
      content: [
        'Developed a web application that predicts the sentiment of a single text or tweet',
        'The project aims to decode the sentiment of the text using a trained machine learning model'
      ]
    },
    {
      title: 'Pantry Guru',
      subtitle: 'Next.js, LLM, Google Firebase',
      imageSrc: 'assets/images/pantry_logo.png',
      imageAlt: 'Pantry Tracker',
      content: [
        'Designed and implemented a pantry tracking system using NextJS, Tailwind CSS and Google Firebase',
        'Utilized a Large Language Model(LLM- Google Gemini) to analyze and add items to the database based on the image captured or uploaded by the user',
        'User can manually add data into the database or can take a live photo of the product, AI will analyze, identify the item and add it to the database'
      ]
    },
    {
      title: 'Twitter(X) Sentiment Analysis',
      subtitle: 'Natural Language Processing, Python',
      imageSrc: 'assets/images/twitter.jpeg',
      imageAlt: 'Sentiment Analysis',
      content: [
        'Performed data pre processing, feature extraction on twitter sentiment dataset, build and trained a machine learning model and evaluated the model\'s accuracy',
        'Sentiment analysis, also known as opinion mining, is a natural language processing (NLP) and machine learning (ML) technique used to determine the sentiment expressed in a piece of text.',
        'The goal of sentiment analysis is to identify and extract subjective information from the text and classify it as positive, negative, or neutral.',
        'Accuracy achieved is 92%'
      ]
    },
    {
      title: 'Astra - personalized AI chatbot',
      subtitle: 'Next.js, LLM, RAG',
      imageSrc: 'assets/images/ai_chatbot.png',
      imageAlt: 'AI powered customer chatbot',
      content: [
        'Developed a context based AI chatbot using NextJS, Material UI and a Large Language Model(LLM)',
        'Deployed the app to Amazon EC2 and achieved Retrieval Augment Reality(RAG) using Amazon Bedrock API and Meta Llama',
        'Enhanced response accuracy by retrieving relevant information from a knowledge base by training the model using hugging face and langchain API\'s.'
      ]
    },
    {
      title: 'APEX Instruction Pipeline Simulator',
      subtitle: 'Computer Architecture',
      imageSrc: 'assets/images/cao.png',
      imageAlt: 'Out of order processor',
      content: [
        'Developed and simulated a 5 stage APEX Instruction Pipeline using C whose design correlates to the real-world on chip in-order processor. The design included all the arithmetic, logical operations and also handled branching instructions.',
        'Integrated the in-order pipeline with a branch target buffer to reduce the number of cycles required to process an instruction.',
        'Extended the APEX pipeline into a out-of-order processor design which reduced pipeline latency thereby increasing processor performance. It also included speculative execution.'
      ]
    },
    {
      title: 'Spreadsheet development',
      subtitle: 'Programming for the Web',
      imageSrc: 'assets/images/view.png',
      imageAlt: 'Out of order processor',
      content: [
        'Implemented complete Spreadsheet interface from scratch using <b>ReactJS, Mongo DB, Typescript</b>',
        'Achieved data retrieval using web API service based architecture'
      ]
    },
    {
      title: 'Black Friday Sales Prediction Analysis',
      subtitle: 'Machine Learning',
      imageSrc: 'assets/images/sales_prediction.jpeg',
      imageAlt: 'Out of order processor',
      content: [
        'Performed exploratory data analysis and used various Regression algorithms to predict the amount in a retail store based on historical sales transactions',
        'Used Numpy, sckitlearn & Pandas for data pre processing, model training and plotting'
      ]
    },
    {
      title: 'Retail Business Management System',
      subtitle: 'Java JDBC, MySQL, PL/SQL',
      imageSrc: 'assets/images/jdbc.jpeg',
      imageAlt: 'Out of order processor',
      content: [
        'Developed a command - line menu interface based retail management system that performed various actions as per user input.',
        'Incorporated various sql and pl/sql functionalities such as triggers, procedures, packages and sequences to commit and perform various database transactions'
      ]
    },
    {
      title: 'Recursive Descent Parser',
      subtitle: 'Java',
      imageSrc: 'assets/images/compiler.avif',
      imageAlt: 'Out of order processor',
      content: [
        'Designed and simulated a recursive decent parser using Java as part of programming languages course project',
        'Implemented a scanner(tokenizer) and extended it to build an abstract syntax tree'
      ]
    },
    {
      title: 'ATM - Bank model',
      subtitle: 'Computer Security, Java',
      imageSrc: 'assets/images/aes.avif',
      imageAlt: 'Out of order processor',
      content: [
        'Implemented a server(Bank) and multiple clients(ATM\'s) model using AES/RSA cipher techniques in Java',
        'Generated public and private keys for RSA encryption and decryption'
      ]
    },
    {
      title: 'Stride Scheduling - xv6 OS',
      subtitle: 'Operating System, Process Scheduling',
      imageSrc: 'assets/images/os.jpeg',
      imageAlt: 'Stride Scheduling',
      content: [
        'The default scheduler of xv6 adopts a round-robin (RR) policy. Implemented the stride scheduler, which is a type of proportional share scheduler',
        'Implemented functionality that changes the outcomes of race conditions after forking in xv6'
      ]
    }
  ];
}