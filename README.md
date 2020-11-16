# @tailwindcss/forms

A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.

## Installation

> Note that @tailwindcss/forms is designed for Tailwind CSS v2.0, which is currently in alpha.

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

All of the basic form elements you use will now have some simple default styles that are easy to override with utilities.

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

Every element has been normalized/reset to a simple visually consistent style that is easy to customize with utilities, even elements like `<select>` or `<input type="checkbox">` that normally need to be reset with `appearance: none` and customized using custom CSS:

```html
<!-- You can actually customize padding on a select element now: -->
<select class="px-4 py-3 rounded-full">
  <!-- ... -->
</select>

<!-- Or change a checkbox color using text color utilities: -->
<input type="checkbox" class="rounded text-pink-500" />
```

More customization examples and best practices coming soon.