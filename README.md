<p align="center">
  This repository contains all the essential components of the design system of Blend Metrics, and <br> you can use these components by following the below <a href="#installation-instructions">installation instructions</a>
<p>

## Installation instructions

First, install `@blend-metrics/ui` from npm:

```sh
npm install @blend-metrics/ui
```

Now each component can be imported individually as a React component:

```js
import { Button } from "@blend-metrics/ui";
import { Switch } from "@blend-metrics/ui";

function MyComponent() {
  return (
    <div>
      <Button>Sign up</Button>
      <p>...</p>
    </div>
  );
}

function MyAnotherComponent() {
  return (
    <div>
      <Switch />
      <p>...</p>
    </div>
  );
}
```
