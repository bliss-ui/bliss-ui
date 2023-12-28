import { newSpecPage } from '@stencil/core/testing';
import { BuiText } from '../bui-text';

describe('bui-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BuiText],
      html: `<bui-text></bui-text>`,
    });
    expect(page.root).toEqualHtml(`
      <bui-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bui-text>
    `);
  });
});
