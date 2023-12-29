import { newSpecPage } from '@stencil/core/testing';
import { BuiButton } from '../bui-button';

describe('bui-button', () => {
  it('for default button', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button>Default Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button>
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--filled primary" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        Default Button
      </bui-button>
    `);
  });

  it('for size small', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button size="small">Small Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button size="small">
        <mock:shadow-root>
        <button class="bui-btn bui-btn--small bui-btn--filled primary" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        Small Button
      </bui-button>
    `);
  });

  it('for size large', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button size="large">Large Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button size="large">
        <mock:shadow-root>
        <button class="bui-btn bui-btn--large bui-btn--filled primary" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        Large Button
      </bui-button>
    `);
  });

  it(' for type "filled" color "primary" ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="filled" color="primary">Filled Primary Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="filled" color="primary">
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--filled primary" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        Filled Primary Button
      </bui-button>
    `);
  });

  it(' for type "filled" color "danger" ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="filled" color="danger">Filled Danger Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="filled" color="danger">
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--filled danger" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        Filled Danger Button
      </bui-button>
    `);
  });

  it(' for type "filled" color "warning" ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="filled" color="warning">Filled Warning Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="filled" color="warning">
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--filled warning" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        Filled Warning Button
      </bui-button>
    `);
  });

  it(' for type "filled" color "success" ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="filled" color="success">Filled Success Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="filled" color="success">
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--filled success" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        Filled Success Button
      </bui-button>
    `);
  });

  it(' for type "outlined" color "primary" ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="outlined" color="primary">outlined Primary Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="outlined" color="primary">
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--outlined primary" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        outlined Primary Button
      </bui-button>
    `);
  });

  it(' for type "outlined" color "danger" ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="outlined" color="danger">outlined Danger Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="outlined" color="danger">
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--outlined danger" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        outlined Danger Button
      </bui-button>
    `);
  });

  it(' for type "outlined" color "warning" ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="outlined" color="warning">outlined Warning Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="outlined" color="warning">
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--outlined warning" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        outlined Warning Button
      </bui-button>
    `);
  });

  it(' for type "outlined" color "success" ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="outlined" color="success">outlined Success Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="outlined" color="success">
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--outlined success" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        outlined Success Button
      </bui-button>
    `);
  });

  it(' for type "dashed" color "primary" ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="dashed" color="primary">dashed Primary Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="dashed" color="primary">
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--dashed primary" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        dashed Primary Button
      </bui-button>
    `);
  });

  it(' for type "dashed" color "danger" ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="dashed" color="danger">dashed Danger Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="dashed" color="danger">
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--dashed danger" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        dashed Danger Button
      </bui-button>
    `);
  });

  it(' for type "dashed" color "warning" ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="dashed" color="warning">dashed Warning Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="dashed" color="warning">
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--dashed warning" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        dashed Warning Button
      </bui-button>
    `);
  });

  it(' for type "dashed" color "success" ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="dashed" color="success">dashed Success Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="dashed" color="success">
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--dashed success" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        dashed Success Button
      </bui-button>
    `);
  });

  it(' for type "text" color "primary" ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="text" color="primary">text Primary Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="text" color="primary">
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--text primary" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        text Primary Button
      </bui-button>
    `);
  });

  it(' for type "text" color "danger" ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="text" color="danger">text Danger Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="text" color="danger">
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--text danger" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        text Danger Button
      </bui-button>
    `);
  });

  it(' for type "text" color "warning" ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="text" color="warning">text Warning Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="text" color="warning">
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--text warning" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        text Warning Button
      </bui-button>
    `);
  });

  it(' for type "text" color "success" ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="text" color="success">text Success Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="text" color="success">
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--text success" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        text Success Button
      </bui-button>
    `);
  });

  it(' for type "link" color "primary" ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="link" href="https://www.google.com" color="primary">link Primary Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="link" color="primary" href="https://www.google.com">
        <mock:shadow-root>
        <a href="https://www.google.com" target="_blank" class="bui-btn bui-btn--default bui-btn--link primary" >
          <slot></slot>
        </a>
        </mock:shadow-root>
        link Primary Button
      </bui-button>
    `);
  });

  it(' for type "link" color "danger" ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="link" href="https://www.google.com" color="danger">link Danger Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="link" color="danger" href="https://www.google.com">
        <mock:shadow-root>
        <a href="https://www.google.com" target="_blank" class="bui-btn bui-btn--default bui-btn--link danger" >
          <slot></slot>
        </a>
        </mock:shadow-root>
        link Danger Button
      </bui-button>
    `);
  });

  it(' for type "link" color "warning" ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="link" color="warning" href="https://www.google.com">link Warning Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="link" color="warning" href="https://www.google.com">
        <mock:shadow-root>
        <a href="https://www.google.com" target="_blank" class="bui-btn bui-btn--default bui-btn--link warning" >
          <slot></slot>
        </a>
        </mock:shadow-root>
        link Warning Button
      </bui-button>
    `);
  });

  it(' for type "link" color "success" ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="link" color="success" href="https://www.google.com">link Success Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="link" color="success" href="https://www.google.com">
        <mock:shadow-root>
        <a href="https://www.google.com" target="_blank" class="bui-btn bui-btn--default bui-btn--link success" >
          <slot></slot>
        </a>
        </mock:shadow-root>
        link Success Button
      </bui-button>
    `);
  });

  it(' for Filled disabled button ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="filled" disabled >Filled Disabled Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="filled" disabled>
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--filled primary bui-btn--disabled" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        Filled Disabled Button
      </bui-button>
    `);
  });

  it(' for outlined disabled button ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="outlined" disabled >outlined Disabled Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="outlined" disabled>
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--outlined primary bui-btn--disabled" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        outlined Disabled Button
      </bui-button>
    `);
  });

  it(' for dashed disabled button ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="dashed" disabled >dashed Disabled Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="dashed" disabled>
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--dashed primary bui-btn--disabled" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        dashed Disabled Button
      </bui-button>
    `);
  });

  it(' for text disabled button ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="text" disabled >text Disabled Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="text" disabled>
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--text primary bui-btn--disabled" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        text Disabled Button
      </bui-button>
    `);
  });

  it(' for link disabled button ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button type="link" href="https://www.google.com" disabled >link Disabled Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button type="link" href="https://www.google.com" disabled>
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--link primary bui-btn--disabled" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        link Disabled Button
      </bui-button>
    `);
  });

  it(' for round button ', async () => {
    const page = await newSpecPage({
      components: [BuiButton],
      html: `<bui-button shape="round" >Round Button</bui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-button shape="round" >
        <mock:shadow-root>
        <button class="bui-btn bui-btn--default bui-btn--filled primary bui-btn--round" >
          <slot></slot>
        </button>
        </mock:shadow-root>
        Round Button
      </bui-button>
    `);
  });
});
