import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'ws-select',
  styleUrl: 'ws-select.css',
  shadow: true,
})
export class WsSelect {
    @Prop() name: string = 'Select Value';

    // Data/state that can change in the component should use the state decorator
    @State() toggle: boolean = false;
  
    render() {
      return (
        <div class="drop-down">
          <button onClick={() => this.toggleClick()}>
            {this.name} {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}
          </button>
  
          <div style={{ display: this.toggle ? 'block' : 'none' }}>
            <slot></slot>
          </div>
        </div>
      )
    }
  
    // When clicked invert the state of the toggle property
    toggleClick() {
      this.toggle = !this.toggle;
    }
}
