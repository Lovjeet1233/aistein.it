# Icon Assets Placeholder

## Icon System

This project uses **Lucide React** for most UI icons, which provides:
- Consistent design language
- Tree-shakeable imports
- Accessibility support
- Customizable size and color

## Custom Icons Needed:

If you need custom brand or product-specific icons, place SVG files here:

### Brand Icons
- `logo-icon.svg` - Simplified icon version of the logo
- `logo-wordmark.svg` - Text-only logo version

### Custom Product Icons (if needed beyond Lucide)
- Any specialized icons specific to your product features
- Integration partner logos
- Custom illustrations

## Icon Guidelines:
- Format: SVG (vector format)
- Size: Design at 24x24px base size
- Stroke width: 2px (consistent with Lucide)
- Color: Use currentColor for flexibility
- Optimize SVGs using SVGO or similar tools

## Using Icons in Components:

```tsx
// Lucide icons (already implemented)
import { Phone, MessageSquare, Database } from "lucide-react";

// Custom SVG icons
import CustomIcon from "@/public/assets/icons/custom-icon.svg";
```

## Note:
Most icons are already handled by Lucide React in the project. Only add custom icons here if you need brand-specific or unique assets.

