export function setActiveMenuItem(state, activeMenuItemTitle) {
  state.sections.forEach(i => (i.active = false))

  const menuItem = state.sections.find(i => i.name === activeMenuItemTitle)

  if (menuItem) {
    menuItem.active = true
  }
}
