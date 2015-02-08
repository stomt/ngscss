---
title: Manifest
type: page
---

Manifest
========

Now that we’ve touched on naming and piecemeal ideas, lets put it all together. NGSCSS expects the following setup wherever your styles are found:

```text
app.scss
foundation/
  _reset.scss
  _helpers.scss
  _config.scss
  _base.scss
  _tools.scss
components/
```

The `Features` reside inside their particular directories in the AngularJS application. `app.scss` is used as the manifest and inbox (more on that later). Application as a name is derived from the Rails asset pipeline, and all other files are Sass partials imported in.

Post compile, `app.css` is included on each site page and various settings can be employed for compression.

Imports
-------

Files found in Foundation are imported into the manifest in a particular order, while Components and Structures are typically included alphabetically:

```scss
// *************************************
//
//   Project Name
//   -> Manifest
//
// *************************************

// -------------------------------------
//   Foundation
// -------------------------------------

@import "foundation/_reset";
@import "foundation/_config";
@import "foundation/_helpers";
@import "foundation/_base";
@import "foundation/_tools";

// -------------------------------------
//   Vendor
// -------------------------------------

// Vendor imports

// -------------------------------------
//   Components
// -------------------------------------

// Component imports

// -------------------------------------
//   Features
// -------------------------------------

// Feature imports

// -------------------------------------
//   Inbox
// -------------------------------------
```

Inbox
-----

Collaboration with developers can sometimes be difficult, but we've found a way to help mitigate that (at least as it relates to CSS). At the bottom of the `app.scss` file, there's a comment block that looks like this:

```scss
// -------------------------------------
//   Inbox
// -------------------------------------
```

You can add any temporary styles to this section, which will allow the maintainer of the CSS to rewrite or sort the styles appropriately. We've found that developers respect (and even enjoy) this system, since they're free from stressing over the proper placement or structure of a style rule.
