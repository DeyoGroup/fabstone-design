Frosted filter pill for category tabs on dark sections (Featured Inventory). Labels are ALL-CAPS.

```jsx
const { Pill } = window.FabstoneDesignSystem_e3db74;
<div className="fs-tabs" role="tablist">
  <Pill active>ALL</Pill>
  <Pill>MARBLE</Pill>
  <Pill>QUARTZITE</Pill>
</div>
```

Only use over dark/photographic backgrounds — the inactive state is 10% white glass. On light pages use the light variant class `fs-pill--light` from sections.css instead.
