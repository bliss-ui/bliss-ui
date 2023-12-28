import { newSpecPage } from '@stencil/core/testing';
import { BuiHeading } from '../bui-heading';

describe('bui-heading', () => {
  describe('for heading level one', () => {
    it('renders h1', async () => {
      const page = await newSpecPage({
        components: [BuiHeading],
        html: `<bui-heading level="1">Heading One</bui-heading>`,
      });
      expect(page.root).toEqualHtml(`
      <bui-heading level="1">
        <h1 class="bui-heading bui-heading-level-1">
          Heading One
        </h1>
      </bui-heading>
    `);
    });
  });

  describe('for heading level two', () => {
    it('renders h2', async () => {
      const page = await newSpecPage({
        components: [BuiHeading],
        html: `<bui-heading level="2">Heading Two</bui-heading>`,
      });
      expect(page.root).toEqualHtml(`
      <bui-heading level="2">
        <h2 class="bui-heading bui-heading-level-2">
          Heading Two
        </h2>
      </bui-heading>
    `);
    });
  });

  describe('for heading level three', () => {
    it('renders h3', async () => {
      const page = await newSpecPage({
        components: [BuiHeading],
        html: `<bui-heading level="3">Heading Three</bui-heading>`,
      });
      expect(page.root).toEqualHtml(`
      <bui-heading level="3">
        <h3 class="bui-heading bui-heading-level-3">
          Heading Three
        </h3>
      </bui-heading>
    `);
    });
  });

  describe('for heading level four', () => {
    it('renders h4', async () => {
      const page = await newSpecPage({
        components: [BuiHeading],
        html: `<bui-heading level="4">Heading Four</bui-heading>`,
      });
      expect(page.root).toEqualHtml(`
      <bui-heading level="4">
        <h4 class="bui-heading bui-heading-level-4">
          Heading Four
        </h4>
      </bui-heading>
    `);
    });
  });

  describe('for heading level five', () => {
    it('renders h5', async () => {
      const page = await newSpecPage({
        components: [BuiHeading],
        html: `<bui-heading level="5">Heading Five</bui-heading>`,
      });
      expect(page.root).toEqualHtml(`
      <bui-heading level="5">
        <h5 class="bui-heading bui-heading-level-5">
          Heading Five
        </h5>
      </bui-heading>
    `);
    });
  });

  describe('for heading level six', () => {
    it('renders h6', async () => {
      const page = await newSpecPage({
        components: [BuiHeading],
        html: `<bui-heading level="6">Heading Six</bui-heading>`,
      });
      expect(page.root).toEqualHtml(`
      <bui-heading level="6">
        <h6 class="bui-heading bui-heading-level-6">
          Heading Six
        </h6>
      </bui-heading>
    `);
    });
  });
});
