import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {
  constructor(private elem:ElementRef){}

  @HostListener("click")onClicks(){
    this.textDeco("green")
  }

  @HostListener("dblclick")onDoubleClicks(){
    this.textDeco("")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.color=action;
  }
}
  



