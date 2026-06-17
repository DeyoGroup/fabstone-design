The full site header (utility bar + main nav). Place at the top of every website screen; it's position:sticky.

```jsx
const { SiteHeader } = window.FabstoneDesignSystem_e3db74;
<SiteHeader activeItem="Live Inventory" logo="assets/images/logo-fabstone.png"
  onNavClick={(item) => go(item.label)} />
```

Adjust the `logo` path relative to your page. Nav defaults to the real site menu.
