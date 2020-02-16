import { Component, Input, ViewEncapsulation } from '@angular/core'
import { NgIf } from '@angular/common'
import { renderCustomElement } from 'ngx-elements'

@Component({
  selector: 'hello-world',
  templateUrl: './app.html',
  styleUrls: [ './app.css' ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HelloWorldComponent {
  
  @Input() name: string

}

renderCustomElement(HelloWorldComponent)