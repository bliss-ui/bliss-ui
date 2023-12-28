import { newE2EPage } from '@stencil/core/testing';

describe('bui-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bui-text></bui-text>');

    const element = await page.find('bui-text');
    expect(element).toHaveClass('hydrated');
  });
});
