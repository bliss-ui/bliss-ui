import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import postcssRTLCSS from 'postcss-rtlcss';

export const config: Config = {
  namespace: 'bliss-ui',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/styles/index.scss'],
    }),
    postcss({
      plugins: [
        postcssRTLCSS({
          ltrPrefix: [':host(:not([dir="rtl"]))', ':host([dir="ltr"])'],
          rtlPrefix: ':host([dir="rtl"])',
          processKeyFrames: true,
        }),
      ],
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
