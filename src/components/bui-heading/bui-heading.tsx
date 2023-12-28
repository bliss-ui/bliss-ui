import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'bui-heading',
  styleUrl: 'bui-heading.scss',
  shadow: false,
})
export class BuiHeading {
  /**
   * The level of the heading.
   */
  @Prop() level: number = 1 | 2 | 3 | 4 | 5 | 6;

  render() {
    const classes = `bui-heading bui-heading-level-${this.level}`;

    switch (this.level) {
      case 1:
        return (
          <h1 class={classes}>
            <slot></slot>
          </h1>
        );
      case 2:
        return (
          <h2 class={classes}>
            <slot></slot>
          </h2>
        );
      case 3:
        return (
          <h3 class={classes}>
            <slot></slot>
          </h3>
        );
      case 4:
        return (
          <h4 class={classes}>
            <slot></slot>
          </h4>
        );
      case 5:
        return (
          <h5 class={classes}>
            <slot></slot>
          </h5>
        );
      case 6:
        return (
          <h6 class={classes}>
            <slot></slot>
          </h6>
        );
      default:
        return (
          <h1 class={classes}>
            <slot></slot>
          </h1>
        );
    }
  }
}
