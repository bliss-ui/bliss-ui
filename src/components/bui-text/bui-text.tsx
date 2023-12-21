import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'bui-text',
  styleUrl: 'bui-text.scss',
  shadow: true,
})
export class BuiText {
  /**
   * The text to display
   */
  @Prop() text: string;

  /**
   * The color of the text
   */
  @Prop() color: string;

  render() {
    return <div class={`bui-text ${this.color ? `bui-text-${this.color}` : ''}`}>{this.text}</div>;
  }
}
