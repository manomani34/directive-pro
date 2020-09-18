import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasichighlight]', // <p appBasichighlight></p>
 // selector: 'appBasichighlight', <appBasichighlight></appBasichighlight>
  //selector: '.appBasichighlight' <p class='appBasichighlight'></p>
})
export class BasichighlightDirective implements OnInit {

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.elRef.nativeElement.style.color = "red" ;
    this.elRef.nativeElement.style.backgroundColor = "green" ;
  }

}
