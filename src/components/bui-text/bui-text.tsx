import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bui-text',
  styleUrl: 'bui-text.scss',
  shadow: true,
})
export class BuiText {
  // Todo: Implement Text component

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
