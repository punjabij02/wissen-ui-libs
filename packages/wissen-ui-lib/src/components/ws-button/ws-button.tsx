import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ws-button',
  styleUrl: 'ws-button.css',
  shadow: true,
})
export class WsButton {
  /**
   * value
   */
  @Prop() value: string;

  render() {
    return <span>{this.value}</span>;
  }
}
