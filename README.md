# @tryvienna/ui

A source-distributed React component library for Vienna plugin developers, built on Radix UI, Tailwind CSS v4, and CVA (class-variance-authority). Plugins render inside Vienna's UI and inherit its Tailwind configuration and theme tokens automatically.

## Installation

```bash
pnpm add @tryvienna/ui
```

### Required peer dependencies

```bash
pnpm add react react-dom lucide-react
```

Radix UI primitives are also required as peer dependencies. Install the ones used by the components you consume (e.g., `@radix-ui/react-dialog`, `@radix-ui/react-checkbox`). See `peerDependencies` in `package.json` for the full list.

Some peer dependencies are optional and only needed if you use specific components:

| Dependency | Used by |
|---|---|
| `react-day-picker` | Calendar |
| `react-hook-form` + `@hookform/resolvers` + `zod` | Form |
| `recharts` | Chart, ChartBlock |
| `embla-carousel-react` | Carousel |
| `highlight.js` + `marked` + `mermaid` | Markdown, MermaidBlock |

## Quick Start

Import the stylesheet once at your plugin's root:

```tsx
import "@tryvienna/ui/styles.css";
```

Then use components:

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from "@tryvienna/ui";

function MyPlugin() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello from my plugin</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default" size="default" onClick={() => alert("Clicked")}>
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}
```

## Import Patterns

The package exposes four entry points:

```tsx
// Everything (components, hooks, utils)
import { Button, Dialog, cn, useCompactMode } from "@tryvienna/ui";

// Components only
import { Button, Input, Select } from "@tryvienna/ui/components";

// Hooks only
import { useCompactMode } from "@tryvienna/ui/hooks";

// Utilities only (cn class-name helper)
import { cn } from "@tryvienna/ui/utils";

// Stylesheet (import once at app root)
import "@tryvienna/ui/styles.css";
```

## Component Categories

**Form Controls** -- Button, Checkbox, Combobox, Form, InlineEdit, Input, Label, RadioGroup, RichSelect, Select, Slider, Switch, Textarea, Toggle, ToggleGroup

**Layout and Display** -- Accordion, AspectRatio, Card, Collapsible, ContentProvider, ContentSection, DrawerLayout, Pagination, ScrollArea, Separator, Skeleton, Spinner, Table, Tabs

**Overlays** -- AlertDialog, ConfirmDialog, Dialog, Drawer, FullscreenOverlay, HoverCard, Popover, Sheet, Tooltip

**Navigation** -- Breadcrumb, NavigationMenu, NavSidebar

**Menus** -- Command, ContextMenu, DropdownMenu, Menubar

**Data Display** -- Alert, Avatar, Badge, Calendar, Chart, ChartBlock, EmptyState, LoadingState, MetadataList, Progress, Status, Timeline

**Sidebar** -- Sidebar (compound component with trigger, content, rail, menu, group, etc.)

**Composed** -- EntityCard, FileTree, FileIcons, SearchFilterBar

**Rich Content** -- Markdown, MarkdownEditor, MermaidBlock

**Utility** -- KeyboardHint, NotificationToast (Sonner), FullscreenButton

## Theming

The library ships three themes using an OKLCH color system with an 8pt spacing grid (4px sub-steps):

| Theme | CSS class | Description |
|---|---|---|
| Drift Light | (default, no class) | Light mode with warm-tinted grays |
| Drift Gold | `.dark` | Dark mode with gold accent tones |
| VS Code Dark+ | `.dark.theme-vscode` | Familiar VS Code dark palette |

Themes are activated by setting the appropriate class on a parent element (typically `<html>` or `<body>`). All design tokens are exposed as CSS custom variables in `@tryvienna/ui/styles.css` and are consumed by components via Tailwind utilities.

## CSS Targeting

Every component renders a `data-slot` attribute (e.g., `data-slot="button"`, `data-slot="card-header"`). Use these for targeted styling when you need to override defaults:

```css
[data-slot="card-header"] {
  padding-block: 12px;
}
```

## Accessibility

All interactive components are built on Radix UI primitives and meet WCAG AA standards out of the box. This includes full keyboard navigation, focus management, ARIA attributes, and screen reader support.

## License

Apache-2.0
