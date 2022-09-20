import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ws-checkbox',
  styleUrl: 'ws-checkbox.css',
  shadow: true,
})
export class WsCheckbox {
  /**
   * value
   */
  @Prop() value: string;

  render() {
    return <span>{this.value}</span>;
  }
}
