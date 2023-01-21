import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent {
  title = 'angular-quickstart';
  constructor(private window: Window) { }

  ngOnInit(): void {
    console.log(this.window)
  }
}
