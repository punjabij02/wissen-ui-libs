import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from '@wissen-libs/wissen-ui-lib/loader';
import { MyComponent, WsButton } from './stencil-generated/components';

defineCustomElements();
@NgModule({
    imports: [CommonModule],
    declarations: [...DIRECTIVES, MyComponent, WsButton],
    exports: [...DIRECTIVES, MyComponent, WsButton],
})
export class ComponentsModule { }
