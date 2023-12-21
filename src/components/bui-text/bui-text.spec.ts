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
          <div></div>
        </mock:shadow-root>
      </bui-text>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [BuiText],
      html: `<bui-text text="Greetings!"></bui-text>`,
    });
    expect(root).toEqualHtml(`
      <bui-text text="Greetings!" >
        <mock:shadow-root>
          <div>
            Greetings!
          </div>
        </mock:shadow-root>
      </bui-text>
    `);
  });
});
