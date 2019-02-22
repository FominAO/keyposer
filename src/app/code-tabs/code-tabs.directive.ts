import { OnInit, Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[wb-code-header], [wbCodeHeader]',
  
})
export class CodeTabsComponent {

  constructor( public template: TemplateRef<any>) { 
    console.log(this.template)
  }

}
