# @tailwindcss/forms

A plugin that provides basic default form styles that are easy to override with utilities. Hopefully the successor to `@tailwindcss/custom-forms`.

## Installation

Install the plugin from npm:

```sh
# Using npm
npm install @tailwindcss/forms

# Using Yarn
yarn add @tailwindcss/forms
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
```

## Usage

[**View the live demo**](https://tailwindcss-forms.vercel.app/)

All of the basic form elements you use will now have some sensible default styles that are easy to override with utilities.

Currently we add basic utility-friendly form styles for the following form element types:

- `input[type='text']`
- `input[type='password']`
- `input[type='email']`
- `input[type='number']`
- `input[type='url']`
- `input[type='date']`
- `input[type='datetime-local']`
- `input[type='month']`
- `input[type='week']`
- `input[type='time']`
- `input[type='search']`
- `input[type='tel']`
- `input[type='checkbox']`
- `input[type='radio']`
- `select`
- `select[multiple]`
- `textarea`

**Note that for text inputs, you must add the `type="text"` attribute for these styles to take effect.** This is a necessary trade-off to avoid relying on the overly greedy `input` selector and unintentionally styling elements we don't have solutions for yet, like `input[type="range"]` for example.

Every element has been normalized/reset in a way that they look pretty great without doing anything to them at all:

```html
<!-- This just looks good! -->
<input type="text">
```

The real benefit of this plugin however is that all of these elements are easy to modify on the fly with utilities, which is not possible with user agent form styles:

```html
<!-- You can customize padding on a select element! Oh my god! -->
<select class="px-4 py-3 rounded-full">
  <!-- ... -->
</select>
```

We've baked in a few useful tricks, like making the checkbox and radio controls use `currentColor` for their checked state, so you can even customize how those look using text color utilities:

```html
<!-- This will be blue when checked -->
<input type="checkbox" class="text-blue-500">

<!-- This will be pink when checked -->
<input type="checkbox" class="text-pink-500">

<!-- This will be green when checked -->
<input type="checkbox" class="text-green-500">
```

More customization examples and best practices coming soon.