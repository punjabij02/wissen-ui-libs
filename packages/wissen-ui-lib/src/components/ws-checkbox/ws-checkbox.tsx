import { Component, Prop, h, Fragment } from '@stencil/core';

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

  @Prop() label: string;

  @Prop() name: string;

  @Prop() checked: boolean;

  componentDidUpdate(){
    console.log('updating...');
    console.log(this.name);
    console.log(this.checked);
    console.log(this.value)
  }

  

  onClick(event){
    console.log(event);
    this.checked=!this.checked;
    console.log('checked');

  }
  render() {
    return (
    
      <Fragment>
        <label htmlFor={this.name}>{this.label}</label><input type='checkbox' name={this.name} checked={this.checked} onClick={this.onClick.bind(this)}>{this.value}</input>
      </Fragment>
    );
  }
}
