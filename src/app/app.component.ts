import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Typewriter from 'typewriter-effect';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  private typewriter: any; // Adjust the type based on your application

  ngOnInit(): void {
    var app = document.getElementById('typewriter-container');

    this.typewriter = new Typewriter(app, {
      strings: ['Hello, Typewriter!', 'Welcome to Angular Typing Demo.'],
      autoStart: true,
      loop: true,
    });

    this.typewriter
    .typeString('A simple yet powerful native javascript')
    .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
    .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
    .start();
  }

  ngOnDestroy(): void {
    // Clean up the typewriter instance when the component is destroyed
    this.typewriter.stop();
    this.typewriter = null;
  }
}