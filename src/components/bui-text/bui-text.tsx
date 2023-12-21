import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'bui-text',
  styleUrl: 'bui-text.css',
  shadow: true,
})
export class BuiText {
  /**
   * The text to display
   */
  @Prop() text: string;

  render() {
    return <div>{this.text}</div>;
  }
}
