---
title: Overview
type: page
---

Overview
========

**NGSCSS** [Angular SCSS] is a Scss-based CSS architecture for creating predictable and maintainable style for AngularJS Application which follow a modular feature based structure. It is based on [MVCSS](http://mvcss.io/) which is Sass based and not AngularJS specific.

CSS, for all its simplicity, is a difficult language to manage in large-scale implementations. Naming, paths to abstraction, structure, and methodologies are all free-form; NGSCSS seeks to provide order for these sorts of projects.

Keeping with an architecture motif, applications are split into three major categories: [*Foundation*][foundation], [*Components*][components], and [*Features*][features]. If Foundation represents tools, materials, and the ground level, Components are akin to creating a window, while Features mirror a number of windows and doors creating a wall.

For a very early taste, here’s what a simple Component might consist of:

```scss
// *************************************
//
//   Card
//   -> Individual style containers
//
// *************************************

.card {
  background: $c-invert;
  border-radius: $b-borderRadius;
  box-shadow: $b-boxShadow;
  padding: $b-space;
}

// -------------------------------------
//   Modifiers
// -------------------------------------

// ----- Sizes ----- //

.card--s {
  padding: $b-space-s;
}

// ----- Theme ----- //

// Hierarchy

.card--b {
  background: $c-highlight;
}

// Error

.card--error {
  border: 2px $b-borderStyle $c-error;
  box-shadow: none;
}

// -------------------------------------
//   Scaffolding
// -------------------------------------

// ----- Label ----- //

.card-label {
  font-size: $b-fontSize-s;
  font-weight: bold;
  text-transform: uppercase;
}
```

There’s no shortage of wonderful frameworks, ideas, and methods for tackling CSS across the web, and NGSCSS wouldn’t exist without ideas set forth in few of these. Take a look at the [Resources][resources] section to find out more about our architectural roots.


[components]: components
[foundation]: foundation
[resources]: resources
[features]: features
