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
  items = ["app", "app2"]
  async ngOnInit() {

  }

  typeByElement(element:string){
    var app = document.getElementById(element);

    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 75,
    });
    
    typewriter
      .typeString('A simple yet powerful native javascript')
      .pauseFor(300)
      .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
      .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
      .pauseFor(1000)
      .start();
  }

  ngOnDestroy(): void {
    // Clean up the typewriter instance when the component is destroyed
    this.typewriter.stop();
    this.typewriter = null;
  }
}