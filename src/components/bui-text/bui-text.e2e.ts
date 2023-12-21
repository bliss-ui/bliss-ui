import { newE2EPage } from '@stencil/core/testing';

describe('bui-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<bui-text></bui-text>');
    const element = await page.find('bui-text');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the text data', async () => {
    const page = await newE2EPage();

    await page.setContent('<bui-text text="Greetings!"></bui-text>');
    const component = await page.find('bui-text');
    const element = await page.find('bui-text >>> div');
    expect(element.textContent).toEqual(`Greetings!`);

    component.setProperty('text', 'Greetings!');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Greetings!`);
  });
});
