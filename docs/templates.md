---
sidebar_position: 3
---

# Templates

CSS templates are used to style your LinkSharer page.

## Standard Templates

Standard templates are made by the community and fully support all the required CSS features.

### Usage

Add `@{templateName}` in the [`template` field](configuration) where `{templateName}` is one of the [available standard templates](#available-standard-templates).

### Available Standard Templates

Here's a list of standard templates you can use:

- **@minimal-blue**: minimal design based on blue.
- **@minimal-monochrome**: minimal design based on black and white (and shades of gray).
- **@monochrome**: infitine background with black and wite content.
- **@landscape**: a natural landscape on the background.
- **@dotted-monochrome**: dotted background based on black content.

## Custom Templates

You're welcome to create your custom template, either starting from one of the [available standard templates](#available-standard-templates) or creating one from scratch.

### Usage

Add the url to the template in the [`template` field](configuration).
Plase note that all the required css variables must be provided in your the template.

### Example

```css title="static/myCustomTemplate.css"
:root {
  ...;
}
```

```ts title="user/config.ts"
const config: Config = {
  template: 'myCustomTemplate.css',
  ...
}
```
