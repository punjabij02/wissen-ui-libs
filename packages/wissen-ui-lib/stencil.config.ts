import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'wissen-ui-lib',
  outputTargets: [
    react({
      componentCorePackage: '@wissen-libs/wissen-ui-lib',
      proxiesFile: '../wissen-react-lib/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    angularOutputTarget({
      componentCorePackage: '@wissen-libs/wissen-ui-lib',
      directivesProxyFile: '../wissen-angular-lib/projects/angular-library/src/stencil-generated/components.ts',
      directivesArrayFile: '../wissen-angular-lib/projects/angular-library/src/stencil-generated/index.ts',
    }),
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
};
