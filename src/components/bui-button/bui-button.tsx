import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'bui-button',
  styleUrl: 'bui-button.scss',
  shadow: true,
})
export class BuiButton {
  /**
   * The type of the button.
   */
  @Prop() type: 'filled' | 'outlined' | 'dashed' | 'text' | 'link' = 'filled';

  @Prop({ reflect: true, mutable: true }) href: string;

  @Prop({ reflect: true, mutable: true }) target?: '_blank' | '_self' | '_parent' | '_top';

  /**
   * Indicates the color of button
   */
  @Prop() color: 'primary' | 'danger' | 'warning' | 'success' = 'primary';

  @Prop() disabled: boolean = false;

  @Prop() loading: boolean = false;

  @Prop() shape: 'round';

  @Prop() size: 'large' | 'default' | 'small' = 'default';

  /**
   * Making href mandatory when type is of link
   */
  componentWillLoad() {
    if (this.type == 'link' && !this.href) {
      throw new Error('href is mandatory when type is of link');
    }
    if (this.disabled) {
      this.href = undefined;
    }
  }

  render() {
    if (this.href === undefined) {
      return (
        <button
          class={`
          bui-btn 
          ${this.size ? `bui-btn--${this.size.toLowerCase()}` : ''}
          ${`bui-btn--${this.type}`}
          ${this.color}
          ${this.loading ? 'bui-btn--loading' : ''}
          ${this.disabled ? 'bui-btn--disabled' : ''}
          ${this.shape ? `bui-btn--${this.shape}` : ''} 
          `}
        >
          <slot></slot>
        </button>
      );
    } else {
      return (
        <a
          href={this.href}
          target={this.target ? this.href : '_blank'}
          class={`
          bui-btn 
          ${this.size ? `bui-btn--${this.size.toLowerCase()}` : ''}
          ${`bui-btn--${this.type}`}
          ${this.color}
          ${this.loading ? 'bui-btn--loading' : ''}
          ${this.disabled ? 'bui-btn--disabled' : ''}
          ${this.shape ? `bui-btn--${this.shape}` : ''} 
          `}
        >
          <slot></slot>
        </a>
      );
    }
  }
}
