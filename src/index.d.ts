import { TailwindPluginWithOptionsFn } from 'tailwindcss/plugin'

declare const plugin: TailwindPluginWithOptionsFn<{ strategy?: 'base' | 'class' }>
export default plugin
