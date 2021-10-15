import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {
  constructor(private elem:ElementRef){elem.nativeElement.style.color="green";}

  // @HostListener("click")onClicks(){
  //   this.textDeco("green")
  // }

  // @HostListener("dblclick")onDoubleClicks(){
  //   this.textDeco("")
  // }

  // private textDeco(action:string){
  //   elem.nativeElement.style.color="green";
  // }
}
  



