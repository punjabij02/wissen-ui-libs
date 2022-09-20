import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ws-label',
  styleUrl: 'ws-label.css',
  shadow: true,
})
export class WsLabel {
  /**
   * value
   */
  @Prop() value: string;

  render() {
    return <label>{this.value}</label>;
  }
}
