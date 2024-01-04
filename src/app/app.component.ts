import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare var Typewriter: any;

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
    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
      loop: false,
      delay: 75,
    });
    
    typewriter
      .typeString('A simple yet powerful native javascript')
      .start()
  }

  ngOnDestroy(): void {
    // Clean up the typewriter instance when the component is destroyed
    this.typewriter.stop();
    this.typewriter = null;
  }
}