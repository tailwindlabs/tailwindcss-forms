declare function plugin(options?: Partial<{ strategy: 'base' | 'class', disableOutlines: boolean }>): { handler: () => void }

declare namespace plugin {
  const __isOptionsFunction: true
}

export = plugin
