import { Component, Prop, h, Fragment } from '@stencil/core';

export type InputType = 'text' | 'password';
@Component({
  tag: 'ws-input',
  styleUrl: 'ws-input.css',
  shadow: true,
})
export class WsInput {
  /**
   * value
   */
  @Prop() value: string;

  @Prop() type: InputType = 'text';

  @Prop() label: string;

  @Prop() name: string;

  render() {
    return (
      <Fragment>
        <label htmlFor={this.name}>{this.label}</label><input name={this.name} type={this.type}>{this.value}</input>
      </Fragment>
    );
  }
}
