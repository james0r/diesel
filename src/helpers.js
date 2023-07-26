import theme from '../theme.json'

export function getThemePaletteAsColorPaletteColors() {
  return theme.settings.color.palette.reduce((acc, color) => {
    return [
      ...acc,
      {
        name: color.slug,
        color: color.color,
      }
    ];
  }, [])
}