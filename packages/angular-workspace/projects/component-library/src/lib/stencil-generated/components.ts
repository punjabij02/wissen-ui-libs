/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@wissen-libs/wissen-ui-lib';




export declare interface MyComponent extends Components.MyComponent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['first', 'last', 'middle']
})
export class MyComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WsButton extends Components.WsButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['value']
})
@Component({
  selector: 'ws-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['value']
})
export class WsButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WsCheckbox extends Components.WsCheckbox {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['value']
})
@Component({
  selector: 'ws-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['value']
})
export class WsCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WsInput extends Components.WsInput {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['label', 'name', 'type', 'value']
})
@Component({
  selector: 'ws-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label', 'name', 'type', 'value']
})
export class WsInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WsLabel extends Components.WsLabel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['value']
})
@Component({
  selector: 'ws-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['value']
})
export class WsLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WsRadiobutton extends Components.WsRadiobutton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['label', 'name', 'options', 'value']
})
@Component({
  selector: 'ws-radiobutton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label', 'name', 'options', 'value']
})
export class WsRadiobutton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WsSelect extends Components.WsSelect {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['name']
})
@Component({
  selector: 'ws-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['name']
})
export class WsSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
