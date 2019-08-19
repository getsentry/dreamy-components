![](https://i.imgur.com/NIggrRK.gif)

### Dreamy Components

Sentry Dreamy Components are a series of compiled animated SVGs. They are framework agnostic and can be imported directly from a node module using your favorite loader, similarly to `@material-ui/icons`;


### Usage

For performance reasons, I recommend using the `object` tag and an inline loader like webpack's `file-loader`:

```
import React from 'react';
import emails from 'sentry-dreamy-components/dist/emails.svg';

return <object type="image/svg+xml" data={emails}></object>;
```

### Making design changes

As of Dreamy Components V2, this project will make heavy use of Figma. To edit copy, colors, avatars, etc., check out
[this open file](https://www.figma.com/file/DoS7E7LzdboGbdMAN9tDu1Xf/dreamy-ui).

Anything in the `exports` page will be turned into an svg and bundled in with the package the next time a package
developer updates the package.

For quality assurance, you will need to run the application in development and check your changes in storybook before merging into the repo. The same goes for keyframe animations. I will occasionally rebuild the components from Figma, but if you want a copy change, the easiest way is to rebuild yourself as shown below.

### Committing design changes and keyframe animation changes

First, grab this repo and download development dependencies. You will need a relatively new version of Node and a package manager like NPM or Yarn:

```
git clone git@github.com:getsentry/dreamy-components.git
cd dreamy-components
yarn
```

To pull from Figma:

```
yarn run get
```

To check changes in storybook:

```
yarn start

```

To watch for css changes in development:

```
yarn run watch
```

### Adding keyframe animations

As of V2 this package makes usage of Figma's ability to export SVGs with their layer name as an ID. Keyframe animations can be written in a css file of the same name, and attached to these IDs:

```
#release-1, #release-2, #release-3, #release-4 {
  animation: 0.3s resolve ease-out;
  transform-origin: center center;
}
```

SVGO will automatically inline all styles. That, combined with the recommended use of the `object` tag means you will not need to worry about css namespace issues.
