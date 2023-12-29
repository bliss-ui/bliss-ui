import { newE2EPage } from '@stencil/core/testing';

describe('bui-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bui-button></bui-button>');

    const element = await page.find('bui-button');
    expect(element).toHaveClass('hydrated');
  });
});
