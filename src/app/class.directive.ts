import { Directive , ElementRef , Input } from '@angular/core'; //To Take In Which Element We Are Using Our Custom Directive We Use ElementRef But In Case We Want To Know The Input Given By user In The Element We Will Use Input 

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  // Now We Are Taking The Input Background Color Which Should Be A String
  // @Input() backgroundColor : string = '';  
  
  constructor(private element : ElementRef) { 
  // Now We Are Accessing The Element We Want To Change By Making It A Parameter Above
  
  //Now If We Want To Play With That Element We Can Actually Used This Element
  // Never Do This
  // setTimeout(() => {
  // this.element.nativeElement.style.backgroundColor = this.backgroundColor;
  }  
  @Input('appClass') set classNames(classObj : any)
  {
    for (let key in classObj)
    {
      if(classObj[key])
      {
        this.element.nativeElement.classList.add(key);
      }
      else
      {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}


