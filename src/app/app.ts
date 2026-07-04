import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Shiva Shankara M | Software Architect');
  protected readonly role = signal('Software Architect');
  protected readonly summary = signal(
    'I design scalable software platforms, modernize legacy systems, and guide engineering teams toward reliable, cloud-ready solutions.'
  );
  protected readonly focusAreas = [
    'Enterprise architecture',
    'Cloud-native platforms',
    'Distributed systems',
    'API strategy',
    'Solution modernization'
  ];
  protected readonly achievements = [
    'Led architecture for high-impact digital products and services.',
    'Bridged business goals with practical engineering execution.',
    'Championed modern delivery practices and maintainable platforms.'
  ];
  protected readonly skills = [
    'System Design',
    'Microservices',
    'Cloud Architecture',
    'Integration Patterns',
    'DevOps Enablement',
    'Technical Leadership'
  ];
}
