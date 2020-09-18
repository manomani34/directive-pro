import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
//test
@Directive({
  selector: '[appAdvancedhighlight]'
})
export class AdvancedhighlightDirective implements OnInit {

  @Input() defaultColor: string = "black";
  @Input() highlightColor: string = "white";
  @HostBinding('style.color') c: string = "green";
//'renderer' is not depend to tags in view.
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.c= this.defaultColor;
  }
  @HostListener('mouseenter') me(eventData: Event){
  this.renderer.setStyle(this.elRef.nativeElement , "backgroundColor" , "orange");   
  //this.renderer.setStyle(this.elRef.nativeElement , "color" , "white"); 
  this.c = this.highlightColor;
  }
  @HostListener('mouseleave') ml(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement , "backgroundColor" , "transparent");
    //this.renderer.setStyle(this.elRef.nativeElement , "color" , "black");
    this.c = this.defaultColor;
  }
  
}
