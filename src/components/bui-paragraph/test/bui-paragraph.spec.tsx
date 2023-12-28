import { newSpecPage } from '@stencil/core/testing';
import { BuiParagraph } from '../bui-paragraph';

describe('bui-paragraph', () => {
  it('renders without any props', async () => {
    const page = await newSpecPage({
      components: [BuiParagraph],
      html: `<bui-paragraph></bui-paragraph>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-paragraph>
        <p class="bui-paragraph"></p>
     </bui-paragraph>
    `);
  });

  it('renders with ellipsis prop', async () => {
    const page = await newSpecPage({
      components: [BuiParagraph],
      html: `<bui-paragraph ellipsis></bui-paragraph>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-paragraph ellipsis>
        <p class="bui-paragraph bui-paragraph-ellipsis"></p>
      </bui-paragraph>
    `);
  });

  it('renders with strong prop', async () => {
    const page = await newSpecPage({
      components: [BuiParagraph],
      html: `<bui-paragraph strong></bui-paragraph>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-paragraph strong>
        <p class="bui-paragraph bui-paragraph-strong"></p>
      </bui-paragraph>
    `);
  });

  it('renders with italic prop', async () => {
    const page = await newSpecPage({
      components: [BuiParagraph],
      html: `<bui-paragraph italic></bui-paragraph>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-paragraph italic>
        <p class="bui-paragraph bui-paragraph-italic"></p>
      </bui-paragraph>
    `);
  });

  it('renders with underlined prop', async () => {
    const page = await newSpecPage({
      components: [BuiParagraph],
      html: `<bui-paragraph underlined></bui-paragraph>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-paragraph underlined>
        <p class="bui-paragraph bui-paragraph-underlined"></p>
      </bui-paragraph>
    `);
  });

  it('renders with disabled prop', async () => {
    const page = await newSpecPage({
      components: [BuiParagraph],
      html: `<bui-paragraph disabled></bui-paragraph>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-paragraph disabled>
        <p class="bui-paragraph bui-paragraph-disabled"></p>
      </bui-paragraph>
    `);
  });

  it('renders with code prop', async () => {
    const page = await newSpecPage({
      components: [BuiParagraph],
      html: `<bui-paragraph code></bui-paragraph>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-paragraph code>
        <code class="bui-paragraph bui-paragraph-code"></code>
      </bui-paragraph>
    `);
  });

  it('renders with color prop', async () => {
    const page = await newSpecPage({
      components: [BuiParagraph],
      html: `<bui-paragraph color="primary"></bui-paragraph>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-paragraph color="primary">
        <p class="bui-paragraph bui-paragraph-primary"></p>
      </bui-paragraph>
    `);
  });

  it('renders with primary color prop', async () => {
    const page = await newSpecPage({
      components: [BuiParagraph],
      html: `<bui-paragraph color="primary"></bui-paragraph>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-paragraph color="primary">
        <p class="bui-paragraph bui-paragraph-primary"></p>
      </bui-paragraph>
    `);
  });

  it('renders with secondary color prop', async () => {
    const page = await newSpecPage({
      components: [BuiParagraph],
      html: `<bui-paragraph color="secondary"></bui-paragraph>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-paragraph color="secondary">
        <p class="bui-paragraph bui-paragraph-secondary"></p>
      </bui-paragraph>
    `);
  });

  it('renders with success color prop', async () => {
    const page = await newSpecPage({
      components: [BuiParagraph],
      html: `<bui-paragraph color="success"></bui-paragraph>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-paragraph color="success">
        <p class="bui-paragraph bui-paragraph-success"></p>
      </bui-paragraph>
    `);
  });

  it('renders with warning color prop', async () => {
    const page = await newSpecPage({
      components: [BuiParagraph],
      html: `<bui-paragraph color="warning"></bui-paragraph>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-paragraph color="warning">
        <p class="bui-paragraph bui-paragraph-warning"></p>
      </bui-paragraph>
    `);
  });

  it('renders with danger color prop', async () => {
    const page = await newSpecPage({
      components: [BuiParagraph],
      html: `<bui-paragraph color="danger"></bui-paragraph>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-paragraph color="danger">
        <p class="bui-paragraph bui-paragraph-danger"></p>
      </bui-paragraph>
    `);
  });
});
