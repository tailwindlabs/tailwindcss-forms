const svgToDataUri = require('mini-svg-data-uri')
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const [baseFontSize, { lineHeight: baseLineHeight }] = defaultTheme.fontSize.base
const { spacing, borderWidth, borderRadius } = defaultTheme

function resolveColor(color, opacityVariableName) {
  return color.replace('<alpha-value>', `var(${opacityVariableName}, 1)`)
}

function rulesValueBuilder(theme) {
  return {
    baseAppearance: theme('forms.baseAppearance', 'none'),
    basebackgroundColor: theme('forms.basebackgroundColor', colors.gray[500]),
    baseBorderColor: theme('forms.baseBorderColor', colors.gray[500]),
    baseBorderWith: theme('forms.baseBorderWith', borderWidth['DEFAULT']),
    baseBorderRadius: theme('forms.baseBorderRadius', borderRadius['DEFAULT']),
    baseTextColor: theme('forms.baseTextColor', colors.gray[500]),
    basePaddingTop: theme('forms.basePaddingTop', spacing[2]),
    basePaddingRight: theme('forms.basePaddingRight', spacing[3]),
    basePaddingBottom: theme('forms.basePaddingBottom', spacing[2]),
    basePaddingLeft: theme('forms.basePaddingLeft', spacing[3]),
    baseFontSize: theme('forms.baseFontSize', baseFontSize),
    baseLineHeight: theme('forms.baseLineHeight', baseLineHeight),
    baseTwShadow: theme('forms.baseTwShadow', `0 0 ${colors.black}`),
    baseFocusOutline: theme('forms.baseFocusOutline', '2px solid transparent'),
    baseFocusOutlineOffset: theme('forms.baseFocusOutlineOffset', '2'),
    baseFocusTwRingInset: theme('forms.baseFocusTwRingInset', 'var(--tw-empty,/*!*/ /*!*/)'),
    baseFocusTwRingOffsetWidth: theme('forms.baseFocusTwRingOffsetWidth', '0'),
    baseFocusTwRingOffsetColor: theme('forms.baseFocusTwRingOffsetColor', colors.white),
    baseFocusTwRingColor: theme('forms.baseFocusTwRingColor', colors.blue[600]),
    baseFocusTwRingOffsetShadow: theme(
      'forms.baseFocusTwRingOffsetShadow',
      `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`
    ),
    baseFocusTwRingShadow: theme(
      'forms.baseFocusTwRingShadow',
      `var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)`
    ),
    baseFocusBoxShadow: theme(
      'forms.baseFocusBoxShadow',
      `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`
    ),
    baseFocusBorderColor: theme('forms.baseFocusBorderColor', colors.blue[600]),
    basePlaceholderTextColor: theme('forms.basePlaceholderTextColor', colors.gray[500]),
    basePlaceholderOpacity: theme('forms.basePlaceholderOpacity', '1'),
    webkitDatetimePadding: theme('forms.webkitDatetimePadding', '0'),
    webkitDatetimeMinHeight: theme('forms.webkitDatetimeMinHeight', '1.5em'),
    webkitDatetimeTextAlign: theme('forms.webkitDatetimeTextAlign', 'inherit'),
    webkitDatetimeDisplay: theme('forms.webkitDatetimeDisplay', 'inline-flex'),
    webkitDatetimePaddingTop: theme('forms.webkitDatetimePaddingTop', 0),
    webkitDatetimePaddingBottom: theme('forms.webkitDatetimePaddingBottom', 0),
    selectBackgroundColor: theme('forms.selectBackgroundColor', colors.gray[500]),
    selectBackgroundImage: theme(
      'forms.selectBackgroundImage',
      `url("${svgToDataUri(
        `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${resolveColor(
          theme('forms.selectBackgroundColor', colors.gray[500]),
          '--tw-stroke-opacity'
        )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
      )}")`
    ),
    selectBackgroundPosition: theme('forms.selectBackgroundPosition', `right ${spacing[2]} center`),
    selectBackgroundRepeat: theme('forms.selectBackgroundRepeat', 'no-repeat'),
    selectBackgroundSize: theme('forms.selectBackgroundSize', `1.5em 1.5em`),
    selectPaddingRight: theme('forms.selectPaddingRight', spacing[10]),
    selectPrintColorAdjust: theme('forms.selectPrintColorAdjust', 'exact'),
    selectMultipleBackgroundImage: theme('forms.selectMultipleBackgroundImage', 'initial'),
    selectMultipleBackgroundPosition: theme('forms.selectMultipleBackgroundPosition', 'initial'),
    selectMultipleBackgroundRepeat: theme('forms.selectMultipleBackgroundRepeat', 'unset'),
    selectMultipleBackgroundSize: theme('forms.selectMultipleBackgroundSize', 'initial'),
    selectMultiplePaddingRight: theme('forms.selectMultiplePaddingRight', spacing[3]),
    selectMultiplePrintColorAdjust: theme('forms.selectMultiplePrintColorAdjust', 'unset'),
    checkboxAppearance: theme('forms.checkboxAppearance', 'none'),
    checkboxPadding: theme('forms.checkboxPadding', '0'),
    checkboxPrintColorAdjust: theme('forms.checkboxPrintColorAdjust', colors.blue[600]),
    checkboxDisplay: theme('forms.checkboxDisplay', 'inline-block'),
    checkboxVerticalAlign: theme('forms.checkboxVerticalAlign', 'middle'),
    checkboxBackgroundOrigin: theme('forms.checkboxBackgroundOrigin', 'border-box'),
    checkboxUserSelect: theme('forms.checkboxUserSelect', 'none'),
    checkboxFlexShrink: theme('forms.checkboxFlexShrink', '0'),
    checkboxHeight: theme('forms.checkboxHeight', spacing[4]),
    checkboxWidth: theme('forms.checkboxWidth', spacing[4]),
    checkboxColor: theme('forms.checkboxColor', colors.blue[600]),
    checkboxBackgroundColor: theme('forms.checkboxBackgroundColor', colors.white),
    checkboxBorderColor: theme('forms.checkboxBorderColor', colors.gray[500]),
    checkboxBorderWidth: theme('forms.checkboxBorderWidth', borderWidth['DEFAULT']),
    checkboxTWShadow: theme('forms.checkboxTWShadow', `0 0 ${colors.black}`),
    checkboxBorderRadius: theme('forms.checkboxBorderRadius', borderRadius['none']),
    radioBorderRadius: theme('forms.radioBorderRadius', '100%'),

    checkboxFocusOutline: theme('forms.checkboxFocusOutline', '2px solid transparent'),
    checkboxFocusOutlineOffset: theme('forms.checkboxFocusOutlineOffset', '2px'),
    checkboxFocusTwRingInset: theme(
      'forms.checkboxFocusTwRingInset',
      'var(--tw-empty,/*!*/ /*!*/)'
    ),
    checkboxFocusTwRingOffsetWidth: theme('forms.checkboxFocusTwRingOffsetWidth', '2px'),
    checkboxFocusTwRingOffsetColor: theme('forms.checkboxFocusTwRingOffsetColor', '#fff'),
    checkboxFocusTwRingColor: theme('forms.checkboxFocusTwRingColor', colors.blue[600]),
    checkboxFocusTwRingOffsetShadow: theme(
      'forms.checkboxTwRingOffsetShadow',
      `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`
    ),
    checkboxFocusTwRingShadow: theme(
      'forms.checkboxTwRingShadow',
      `var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)`
    ),
    checkboxFocusBoxShadow: theme(
      'forms.checkboxBoxShadow',
      `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`
    ),

    checkboxBackgroundSize: theme('forms.checkboxBackgroundSize', `100% 100%`),
    checkboxBackgroundPosition: theme('forms.checkboxBackgroundPosition', `center`),
    checkboxBackgroundRepeat: theme('forms.checkboxBackgroundRepeat', `no-repeat`),
    checkboxBackgroundFillColor: theme('forms.checkboxBackgroundFillColor', colors.white),
    checkboxBackgroundImage: theme(
      'forms.checkboxBackgroundImage',
      `url("${svgToDataUri(
        `<svg viewBox="0 0 16 16" fill="${theme(
          'forms.checkboxBackgroundFillColor',
          colors.white
        )}" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`
      )}")`
    ),
    checkboxCheckedBackgroundFillColor: theme(
      'forms.checkboxCheckedBackgroundFillColor',
      colors.white
    ),
    checkboxCheckedBackgroundColor: theme('forms.checkboxCheckedBackgroundColor', `currentColor`),
    checkboxCheckedBackgroundImage: theme(
      'forms.checkboxCheckedBackgroundImage',
      `url("${svgToDataUri(
        `<svg viewBox="0 0 16 16" fill="${theme(
          'forms.checkboxCheckedBackgroundColor',
          colors.white
        )}" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`
      )}")`
    ),
    radioCheckedBackgroundFillColor: theme('forms.radioCheckedBackgroundFillColor', colors.white),

    radioCheckedBackgroundImage: theme(
      'forms.radioCheckedBackgroundImage',
      `url("${svgToDataUri(
        `<svg viewBox="0 0 16 16" fill="${theme(
          'forms.radioBackgroundFillColor',
          colors.white
        )}" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`
      )}")`
    ),

    checkboxCheckedHoverBorderColor: theme('forms.checkboxCheckedHoverBorderColor', 'transparent'),
    checkboxCheckedHoverBackgroundColor: theme(
      'forms.checkboxCheckedHoverBackgroundColor',
      'currentColor'
    ),

    checkboxIndeterminateBorderColor: theme(
      'forms.checkboxIndeterminateBorderColor',
      `transparent`
    ),
    checkboxIndeterminateBackgroundColor: theme(
      'forms.checkboxIndeterminateBackgroundColor',
      `currentColor`
    ),
    checkboxIndeterminateBackgroundSize: theme(
      'forms.checkboxIndeterminateBackgroundSize',
      `100% 100%`
    ),
    checkboxIndeterminateBackgroundPosition: theme(
      'forms.checkboxIndeterminateBackgroundPosition',
      `center`
    ),
    checkboxIndeterminateBackgroundRepeat: theme(
      'forms.checkboxIndeterminateBackgroundRepeat',
      `no-repeat`
    ),

    checkboxIndeterminateHoverBorderColor: theme(
      'forms.checkboxIndeterminateHoverBorderColor',
      'transparent'
    ),
    checkboxIndeterminateHoverBackgroundColor: theme(
      'forms.checkboxIndeterminateHoverBackgroundColor',
      'currentColor'
    ),

    fileBackground: theme('forms.fileBackground', 'unset'),
    fileBorderColor: theme('forms.fileBorderColor', 'inherit'),
    fileBorderWidth: theme('forms.fileBorderWidth', '0'),
    fileBorderRadius: theme('forms.fileBorderRadius', '0'),
    filepadding: theme('forms.filepadding', '0'),
    fileFontSize: theme('forms.fileFontSize', 'unset'),
    fileLineHeight: theme('forms.fileLineHeight', 'inherit'),
    fileFocusOutline: theme('forms.fileFocusOutline', [
      `1px solid ButtonText`,
      `1px auto -webkit-focus-ring-color`,
    ]),
  }
}

const forms = plugin.withOptions(function (options = { strategy: undefined }) {
  return function ({ addBase, addComponents, theme }) {
    const strategy = options.strategy === undefined ? ['base', 'class'] : [options.strategy]

    const r = rulesValueBuilder(theme)

    const rules = [
      {
        base: [
          "[type='text']",
          'input:where(:not([type]))',
          "[type='email']",
          "[type='url']",
          "[type='password']",
          "[type='number']",
          "[type='date']",
          "[type='datetime-local']",
          "[type='month']",
          "[type='search']",
          "[type='tel']",
          "[type='time']",
          "[type='week']",
          '[multiple]',
          'textarea',
          'select',
        ],
        class: ['.form-input', '.form-textarea', '.form-select', '.form-multiselect'],
        styles: {
          appearance: 'none',
          'background-color': r.baseAppearance,
          'border-color': resolveColor(r.baseBorderColor, '--tw-border-opacity'),
          'border-width': r.baseBorderWith,
          'border-radius': r.baseBorderRadius,
          color: resolveColor(r.baseTextColor, '--tw-border-opacity'),
          'padding-top': r.basePaddingTop,
          'padding-right': r.basePaddingRight,
          'padding-bottom': r.basePaddingBottom,
          'padding-left': r.basePaddingLeft,
          'font-size': r.baseFontSize,
          'line-height': r.baseLineHeight,
          '--tw-shadow': r.baseTwShadow,
          '&:focus': {
            outline: r.baseFocusOutline,
            'outline-offset': r.baseFocusOutlineOffset,
            '--tw-ring-inset': r.baseFocusTwRingInset,
            '--tw-ring-offset-width': r.baseFocusTwRingOffsetWidth,
            '--tw-ring-offset-color': resolveColor(
              r.baseFocusTwRingOffsetColor,
              '--tw-ring-opacity'
            ),
            '--tw-ring-color': resolveColor(r.baseFocusTwRingColor, '--tw-ring-opacity'),
            '--tw-ring-offset-shadow': r.baseFocusTwRingOffsetShadow,
            '--tw-ring-shadow': r.baseFocusTwRingShadow,
            'box-shadow': r.baseFocusBoxShadow,
            'border-color': resolveColor(r.baseFocusBorderColor, '--tw-border-opacity'),
          },
        },
      },
      {
        base: ['input::placeholder', 'textarea::placeholder'],
        class: ['.form-input::placeholder', '.form-textarea::placeholder'],
        styles: {
          color: resolveColor(r.basePlaceholderTextColor, '--tw-text-opacity'),
          opacity: r.basePlaceholderOpacity,
        },
      },
      {
        base: ['::-webkit-datetime-edit-fields-wrapper'],
        class: ['.form-input::-webkit-datetime-edit-fields-wrapper'],
        styles: {
          padding: r.webkitDatetimePadding,
        },
      },
      {
        // Unfortunate hack until https://bugs.webkit.org/show_bug.cgi?id=198959 is fixed.
        // This sucks because users can't change line-height with a utility on date inputs now.
        // Reference: https://github.com/twbs/bootstrap/pull/31993
        base: ['::-webkit-date-and-time-value'],
        class: ['.form-input::-webkit-date-and-time-value'],
        styles: {
          'min-height': r.webkitDatetimeMinHeight,
        },
      },
      {
        // In Safari on iOS date and time inputs are centered instead of left-aligned and can't be
        // changed with `text-align` utilities on the input by default. Resetting this to `inherit`
        // makes them left-aligned by default and makes it possible to override the alignment with
        // utility classes without using an arbitrary variant to target the pseudo-elements.
        base: ['::-webkit-date-and-time-value'],
        class: ['.form-input::-webkit-date-and-time-value'],
        styles: {
          'text-align': r.webkitDatetimeTextAlign,
        },
      },
      {
        // In Safari on macOS date time inputs that are set to `display: block` have unexpected
        // extra bottom spacing. This can be corrected by setting the `::-webkit-datetime-edit`
        // pseudo-element to `display: inline-flex`, instead of the browser default of
        // `display: inline-block`.
        base: ['::-webkit-datetime-edit'],
        class: ['.form-input::-webkit-datetime-edit'],
        styles: {
          display: r.webkitDatetimeDisplay,
        },
      },
      {
        // In Safari on macOS date time inputs are 4px taller than normal inputs
        // This is because there is extra padding on the datetime-edit and datetime-edit-{part}-field pseudo elements
        // See https://github.com/tailwindlabs/tailwindcss-forms/issues/95
        base: [
          '::-webkit-datetime-edit',
          '::-webkit-datetime-edit-year-field',
          '::-webkit-datetime-edit-month-field',
          '::-webkit-datetime-edit-day-field',
          '::-webkit-datetime-edit-hour-field',
          '::-webkit-datetime-edit-minute-field',
          '::-webkit-datetime-edit-second-field',
          '::-webkit-datetime-edit-millisecond-field',
          '::-webkit-datetime-edit-meridiem-field',
        ],
        class: [
          '.form-input::-webkit-datetime-edit',
          '.form-input::-webkit-datetime-edit-year-field',
          '.form-input::-webkit-datetime-edit-month-field',
          '.form-input::-webkit-datetime-edit-day-field',
          '.form-input::-webkit-datetime-edit-hour-field',
          '.form-input::-webkit-datetime-edit-minute-field',
          '.form-input::-webkit-datetime-edit-second-field',
          '.form-input::-webkit-datetime-edit-millisecond-field',
          '.form-input::-webkit-datetime-edit-meridiem-field',
        ],
        styles: {
          'padding-top': r.webkitDatetimePaddingTop,
          'padding-bottom': r.webkitDatetimePaddingBottom,
        },
      },
      {
        base: ['select'],
        class: ['.form-select'],
        styles: {
          'background-image': r.selectBackgroundImage,
          'background-position': r.selectBackgroundPosition,
          'background-repeat': r.selectBackgroundRepeat,
          'background-size': r.selectBackgroundSize,
          'padding-right': r.selectPaddingRight,
          'print-color-adjust': r.selectPrintColorAdjust,
        },
      },
      {
        base: ['[multiple]', '[size]:where(select:not([size="1"]))'],
        class: ['.form-select:where([size]:not([size="1"]))'],
        styles: {
          'background-image': r.selectMultipleBackgroundImage,
          'background-position': r.selectMultipleBackgroundPosition,
          'background-repeat': r.selectMultipleBackgroundRepeat,
          'background-size': r.selectMultipleBackgroundSize,
          'padding-right': r.selectMultiplePaddingRight,
          'print-color-adjust': r.selectMultiplePrintColorAdjust,
        },
      },
      {
        base: [`[type='checkbox']`, `[type='radio']`],
        class: ['.form-checkbox', '.form-radio'],
        styles: {
          appearance: r.checkboxAppearance,
          padding: r.checkboxPadding,
          'print-color-adjust': r.checkboxPrintColorAdjust,
          display: r.checkboxDisplay,
          'vertical-align': r.checkboxVerticalAlign,
          'background-origin': r.checkboxBackgroundOrigin,
          'user-select': r.checkboxUserSelect,
          'flex-shrink': r.checkboxFlexShrink,
          height: r.checkboxHeight,
          width: r.checkboxWidth,
          color: resolveColor(r.checkboxColor, '--tw-text-opacity'),
          'background-color': r.checkboxBackgroundColor,
          'border-color': resolveColor(r.checkboxBorderColor, '--tw-border-opacity'),
          'border-width': r.checkboxBorderWidth,
          '--tw-shadow': r.checkboxTWShadow,
        },
      },
      {
        base: [`[type='checkbox']`],
        class: ['.form-checkbox'],
        styles: {
          'border-radius': r.checkboxBorderRadius,
        },
      },
      {
        base: [`[type='radio']`],
        class: ['.form-radio'],
        styles: {
          'border-radius': r.radioBorderRadius,
        },
      },
      {
        base: [`[type='checkbox']:focus`, `[type='radio']:focus`],
        class: ['.form-checkbox:focus', '.form-radio:focus'],
        styles: {
          outline: r.checkboxFocusOutline,
          'outline-offset': r.checkboxFocusOutlineOffset,
          '--tw-ring-inset': r.checkboxFocusTwRingInset,
          '--tw-ring-offset-width': r.checkboxFocusTwRingOffsetWidth,
          '--tw-ring-offset-color': r.checkboxFocusTwRingOffsetColor,
          '--tw-ring-color': resolveColor(r.checkboxFocusTwRingColor, '--tw-ring-opacity'),
          '--tw-ring-offset-shadow': r.checkboxFocusTwRingOffsetShadow,
          '--tw-ring-shadow': r.checkboxFocusTwRingShadow,
          'box-shadow': r.checkboxFocusBoxShadow,
        },
      },
      {
        base: [`[type='checkbox']:checked`, `[type='radio']:checked`],
        class: ['.form-checkbox:checked', '.form-radio:checked'],
        styles: {
          'border-color': r.checkboxCheckedBorderColor,
          'background-color': r.checkboxCheckedBackgroundColor,
          'background-size': r.checkboxCheckedBackgroundSize,
          'background-position': r.checkboxCheckedBackgroundPosition,
          'background-repeat': r.checkboxCheckedBackgroundRepeat,
        },
      },
      {
        base: [`[type='checkbox']:checked`],
        class: ['.form-checkbox:checked'],
        styles: {
          'background-image': r.checkboxCheckedBackgroundImage,
        },
      },
      {
        base: [`[type='radio']:checked`],
        class: ['.form-radio:checked'],
        styles: {
          'background-image': r.radioCheckedBackgroundImage,
        },
      },
      {
        base: [
          `[type='checkbox']:checked:hover`,
          `[type='checkbox']:checked:focus`,
          `[type='radio']:checked:hover`,
          `[type='radio']:checked:focus`,
        ],
        class: [
          '.form-checkbox:checked:hover',
          '.form-checkbox:checked:focus',
          '.form-radio:checked:hover',
          '.form-radio:checked:focus',
        ],
        styles: {
          'border-color': r.checkboxCheckedHoverBorderColor,
          'background-color': r.checkboxCheckedHoverBackgroundColor,
        },
      },
      {
        base: [`[type='checkbox']:indeterminate`],
        class: ['.form-checkbox:indeterminate'],
        styles: {
          'background-image': `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>`
          )}")`,
          'border-color': r.checkboxIndeterminateBorderColor,
          'background-color': r.checkboxIndeterminateBackgroundColor,
          'background-size': r.checkboxIndeterminateBackgroundSize,
          'background-position': r.checkboxIndeterminateBackgroundPosition,
          'background-repeat': r.checkboxIndeterminateBackgroundRepeat,
        },
      },
      {
        base: [`[type='checkbox']:indeterminate:hover`, `[type='checkbox']:indeterminate:focus`],
        class: ['.form-checkbox:indeterminate:hover', '.form-checkbox:indeterminate:focus'],
        styles: {
          'border-color': r.checkboxIndeterminateHoverBorderColor,
          'background-color': r.checkboxIndeterminateHoverBackgroundColor,
        },
      },
      {
        base: [`[type='file']`],
        class: null,
        styles: {
          background: r.fileBackground,
          'border-color': r.fileBorderColor,
          'border-width': r.fileBorderWidth,
          'border-radius': r.fileBorderRadius,
          padding: r.filepadding,
          'font-size': r.fileFontSize,
          'line-height': r.fileLineHeight,
        },
      },
      {
        base: [`[type='file']:focus`],
        class: null,
        styles: {
          outline: r.fileFocusOutline,
        },
      },
    ]

    const getStrategyRules = (strategy) =>
      rules
        .map((rule) => {
          if (rule[strategy] === null) return null

          return { [rule[strategy]]: rule.styles }
        })
        .filter(Boolean)

    if (strategy.includes('base')) {
      addBase(getStrategyRules('base'))
    }

    if (strategy.includes('class')) {
      addComponents(getStrategyRules('class'))
    }
  }
})

module.exports = forms
