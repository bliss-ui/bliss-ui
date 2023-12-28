import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'bui-paragraph',
  styleUrl: 'bui-paragraph.scss',
  shadow: false,
})
export class BuiParagraph {
  /**
   * Display ellipsis when text overflows, can configure rows and expandable by using object
   */
  @Prop() ellipsis: boolean = false;

  /**
   * Strong font weight
   */
  @Prop() strong: boolean = false;

  /**
   * Italic font style
   */
  @Prop() italic: boolean = false;

  /**
   * Underline text decoration
   */
  @Prop() underlined: boolean = false;

  /**
   * Disabled text
   */
  @Prop() disabled: boolean = false;

  /**
   * Code text
   */
  @Prop() code: boolean = false;

  /**
   * Color of the text
   */
  @Prop() color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

  render() {
    // Todo: Handle Ellipsis behavior logic

    const classes = `bui-paragraph ${this.ellipsis ? 'bui-paragraph-ellipsis' : ''} ${this.strong ? 'bui-paragraph-strong' : ''} ${this.italic ? 'bui-paragraph-italic' : ''} ${
      this.underlined ? 'bui-paragraph-underlined' : ''
    } ${this.color ? `bui-paragraph-${this.color}` : ''}`;

    if (this.disabled) {
      return (
        <p class="bui-paragraph bui-paragraph-disabled">
          <slot></slot>
        </p>
      );
    }

    if (this.code) {
      return (
        <code class="bui-paragraph bui-paragraph-code">
          <slot></slot>
        </code>
      );
    }

    return (
      <Host>
        <p class={classes}>
          <slot></slot>
        </p>
      </Host>
    );
  }
}
