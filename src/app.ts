import { Component, Input, ɵrenderComponent } from '@angular/core'

@Component({
  selector: 'hello-world',
  templateUrl: './app.html',
  styleUrls: [ './app.css' ]
})
export class HelloWorldComponent {
  
  @Input() name: string;

}

ɵrenderComponent(HelloWorldComponent)