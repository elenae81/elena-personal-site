# How to change fonts

### Download the file
For example `Mattone-Bold.woff2`

### Put it in the `src/assets` folder

### Modify `src/css/style.css`
Add a new `@font-face` section for your new font.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;


@font-face {
    font-family: 'Karrik';
    src: url('../assets/Karrik-Regular.woff2') format('woff2');
}

@font-face {
    font-family: 'Mattone Bold';
    src: url('../assets/Mattone-Bold.woff2') format('woff2');
}
```

### Modify `tailwind.config.js`
Tell Tailwind what to call it. Here we're creating a new one called `heading`.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Karrik", "Work Sans", "ui-sans-serif", "system-ui"],
      heading: ["Mattone Bold", "ui-sans-serif", "system-ui"],
      serif: ["Georgia", "ui-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
```

### Start using it in your HTML
Note the `font-heading` in the middle. Had you named it `blah` in `tailwind.config.js` then you would use `font-blah`.
```html
<h2 class="mb-4 text-2xl font-heading font-semibold">Contact</h2>
```