# @wissen-libs/wissen-ui-lib (Wissen UI library)

## Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:
and run:

```bash
npm install
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

To run the local build in watch mode, run:

```bash
npm start
```

To open storybook, run:

```bash
npm run storybook
```

## Naming Components

We recommend prefix the component name with `ws-` untill it is decided otherwise.

## Publishing and consuming the components

Publish the package to [@wissen-libs/wissen-ui-lib](https://www.npmjs.com/package/@wissen-libs/wissen-ui-lib)

Install the package
```
npm install @wissen-libs/wissen-ui-lib --save
```

### Consuming in React

use web component anywhere in JSX
```
<div>
  <ws-input value ="wissen" />
</div>
```

### Consuming in Angular

Add the changes in main.ts of angular app
```
import { defineCustomElements } from '@wissen-libs/wissen-ui-lib/loader';
defineCustomElements();
```

Add CUSTOM_ELEMENTS_SCHEMA to app.module.ts
```
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
```

Add CUSTOM_ELEMENTS_SCHEMA as schema in @NgModule  
Then you can use the element anywhere in your template, JSX, html etc

```
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
```
