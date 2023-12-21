import { newSpecPage } from '@stencil/core/testing';
import { BuiText } from './bui-text';

describe('bui-text', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [BuiText],
      html: '<bui-text></bui-text>',
    });
    expect(root).toEqualHtml(`
      <bui-text>
        <mock:shadow-root>
          <div class="bui-text"></div>
        </mock:shadow-root>
      </bui-text>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [BuiText],
      html: `<bui-text text="Greetings!" color="primary"></bui-text>`,
    });
    expect(root).toEqualHtml(`
      <bui-text text="Greetings!" color="primary">
        <mock:shadow-root>
          <div class="bui-text bui-text-primary">
            Greetings!
          </div>
        </mock:shadow-root>
      </bui-text>
    `);
  });

  it('renders with primary color', async () => {
    const { root } = await newSpecPage({
      components: [BuiText],
      html: `<bui-text text="Greetings!" color="primary"></bui-text>`,
    });
    expect(root).toEqualHtml(`
      <bui-text text="Greetings!" color="primary">
        <mock:shadow-root>
          <div class="bui-text bui-text-primary">
            Greetings!
          </div>
        </mock:shadow-root>
      </bui-text>
    `);
  });

  it('renders with success color', async () => {
    const { root } = await newSpecPage({
      components: [BuiText],
      html: `<bui-text text="Greetings!" color="success"></bui-text>`,
    });
    expect(root).toEqualHtml(`
      <bui-text text="Greetings!" color="success">
        <mock:shadow-root>
          <div class="bui-text bui-text-success">
            Greetings!
          </div>
        </mock:shadow-root>
      </bui-text>
    `);
  });
});
