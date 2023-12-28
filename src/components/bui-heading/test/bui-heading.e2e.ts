import { newE2EPage } from '@stencil/core/testing';

describe('bui-heading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bui-heading level="1">Heading One</bui-heading>');

    const element = await page.find('bui-heading');
    expect(element).toHaveClass('hydrated');
  });
});
