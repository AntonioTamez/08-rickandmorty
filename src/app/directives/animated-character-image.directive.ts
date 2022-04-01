import { AfterViewInit, Directive, HostListener, Input } from '@angular/core';
import { AnimationController, Animation } from '@ionic/angular';

@Directive({
  selector: '[appAnimatedCharacterImage]'
})
export class AnimatedCharacterImageDirective implements AfterViewInit{

  @Input('appAnimatedCharacterImage') characterData: any

  constructor(private animationCtrl: AnimationController) { }

  shrinkAnimation: Animation;
  expanded = true;
 
  ngAfterViewInit() {
    this.characterData = this.characterData.el;
    console.log(this.characterData);
    this.setupAnimation();
  }

  setupAnimation() {
    const textSpan = this.characterData.querySelector('ion-list');
    
    const shrink = this.animationCtrl.create('shrink')
      .addElement(this.characterData)
      .duration(400)
      .fromTo('width', '140px', '50px');
 
    const fade = this.animationCtrl.create('fade')
      .addElement(textSpan)
      .duration(400)
      .fromTo('opacity', 1, 0)
      .fromTo('width', '70px', '0px');
 
    this.shrinkAnimation = this.animationCtrl.create('shrink-animation')
      .duration(400)
      .easing('ease-out')
      .addAnimation([shrink, fade])
  }
 
  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
    if ($event.detail.deltaY > 0 && this.expanded) {
      // Scrolling down
       this.expanded = false;
      // this.shrinkFab();
      console.log("DOWN",this.characterData);
    } else if ($event.detail.deltaY < 0 && !this.expanded) {
      // Scrolling up
       this.expanded = true;
      // this.expandFab();
      console.log("UP",this.characterData);
    }
  }
 
  expandFab() {
    this.shrinkAnimation.direction('reverse').play();
  }
 
  shrinkFab() {
    this.shrinkAnimation.direction('alternate').play();
  }



}
