import { Component, Prop, h, Fragment } from '@stencil/core';

@Component({
  tag: 'ws-radiobutton',
  styleUrl: 'ws-radiobutton.css',
  shadow: true,
})
export class WsRadiobutton {
  /**
   * value
   */
  @Prop() value: string;

  @Prop() options: string[];

  @Prop() label: string;

  @Prop() name: string;

  render() {
    return (
      <Fragment>
        <label htmlFor={this.name}>{this.label}</label><input type="radio" name={this.name}>{this.value}</input>
      </Fragment>
    );
  }
}
