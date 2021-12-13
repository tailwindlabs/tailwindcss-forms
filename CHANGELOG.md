# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Remove `dist` folder and related dependencies ([#96](https://github.com/tailwindlabs/tailwindcss-forms/pull/96))

## [0.4.0] - 2021-12-09

### Changed

- Update color palette references for v3 ([#83](https://github.com/tailwindlabs/tailwindcss-forms/pull/83))
- Don't read outline.none value from config ([#89](https://github.com/tailwindlabs/tailwindcss-forms/pull/89))

## [0.3.4] - 2021-09-28

### Fixed

- Fix compatibility with `optimizeUniversalDefaults` experimental feature in Tailwind CSS v2.2 ([#81](https://github.com/tailwindlabs/tailwindcss-forms/pull/81))

## [0.3.3] - 2021-06-03

### Fixed

- Fix typo in selector when using `class` strategy that breaks background colors on checkboxes and radio buttons ([#72](https://github.com/tailwindlabs/tailwindcss-forms/pull/72))

## [0.3.2] - 2021-03-26

### Fixed

- Filter `null` rules for JIT compatibility ([b4c4e03](https://github.com/tailwindlabs/tailwindcss-forms/commit/b4c4e039337c3a5599f5b6d9eabbcc8ab9e8c8d9))

## [0.3.1] - 2021-03-26

### Fixed

- Use `base` as default strategy, not `class` ([#61](https://github.com/tailwindlabs/tailwindcss-forms/pull/61))

## [0.3.0] - 2021-03-25

### Added

- Add `class` strategy for you babies and your custom select and date picker libraries ;) ([#39](https://github.com/tailwindlabs/tailwindcss-forms/pull/39))

## [0.2.1] - 2020-11-17

### Fixed

- Fix issue where default checkbox/radio border color took precedence over user border color on focus ([d0b9fd9](https://github.com/tailwindlabs/tailwindcss-forms/commit/d0b9fd9))

## [0.2.0] - 2020-11-16

### Changed

- Update form styles to be less opinionated and encourage custom styling ([3288709](https://github.com/tailwindlabs/tailwindcss-forms/commit/3288709b59f4101511ec19f30cb2dafe7738251e))
- Update custom property names to match namespaced variables in Tailwind CSS v2.0 ([adb9807](https://github.com/tailwindlabs/tailwindcss-forms/commit/adb98078fc830d0416cb5ea2c895e997d5f0a5ec), [bbd8510](https://github.com/tailwindlabs/tailwindcss-forms/commit/bbd85102ef4a402b3c39d997c025208a33694cc4))

## [0.1.4] - 2020-11-12

### Fixed

- Fix SVG background images not rendering properly in all browsers ([#5](https://github.com/tailwindlabs/tailwindcss-forms/pull/5))

## [0.1.3] - 2020-11-12

### Changed

- Update focus styles to account for changes to `ring` API in latest Tailwind CSS 2.0 alpha ([5c16689](https://github.com/tailwindlabs/tailwindcss-forms/commit/5c166896b06475832bd8364f9f3ef5c4baec585f))

## [0.1.2] - 2020-11-11

### Fixed

- Work around iOS Safari bug that causes date inputs to render with no height when empty ([b98365b](https://github.com/tailwindlabs/tailwindcss-forms/commit/b98365b903b586bfbe7a6ae745ba64b5d87e23e3))

## [0.1.1] - 2020-11-11

### Changed

- Move `tailwindcss` to dependencies, hoping to get it working with Tailwind Play ([d625ea1](https://github.com/tailwindlabs/tailwindcss-forms/commit/d625ea11bd111a4d8cde937e36f3d229ecdf7c6a))

## [0.1.0] - 2020-11-11

Initial release!

[unreleased]: https://github.com/tailwindlabs/tailwindcss-forms/compare/v0.4.0...HEAD
[0.4.0]: https://github.com/tailwindlabs/tailwindcss-forms/compare/v0.3.3...v0.4.0
[0.3.4]: https://github.com/tailwindlabs/tailwindcss-forms/compare/v0.3.3...v0.3.4
[0.3.3]: https://github.com/tailwindlabs/tailwindcss-forms/compare/v0.3.2...v0.3.3
[0.3.2]: https://github.com/tailwindlabs/tailwindcss-forms/compare/v0.3.1...v0.3.2
[0.3.1]: https://github.com/tailwindlabs/tailwindcss-forms/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/tailwindlabs/tailwindcss-forms/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/tailwindlabs/tailwindcss-forms/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/tailwindlabs/tailwindcss-forms/compare/v0.1.4...v0.2.0
[0.1.4]: https://github.com/tailwindlabs/tailwindcss-forms/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/tailwindlabs/tailwindcss-forms/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/tailwindlabs/tailwindcss-forms/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/tailwindlabs/tailwindcss-forms/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/tailwindlabs/tailwindcss-forms/releases/tag/v0.1.0
