import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">{{title}}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" routerLinkActive="active">
      <li class="nav-item"><a class="nav-link" routerLink="home">Home</a></li>
      <li class="nav-item"><a class="nav-link" routerLink="detail">Detail</a></li>
      <li class="nav-item"><a class="nav-link" routerLink="about">About</a></li>
      </ul>
    </div>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'bigdatasample'


  constructor() {
  }
}
