import { newE2EPage } from '@stencil/core/testing';

describe('bui-paragraph', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bui-paragraph></bui-paragraph>');

    const element = await page.find('bui-paragraph');
    expect(element).toHaveClass('hydrated');
  });
});
