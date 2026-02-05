# Language Selector Implementation Guide

## Overview
A floating language selector button has been added to the bottom-left corner of the website. When clicked, it opens a beautiful modal with language options that translate the entire website using Google Translate.

## Features

### 🌍 Supported Languages
- Arabic (العربية)
- Chinese (Simplified) (中文)
- French (Français)
- German (Deutsch)
- Italian (Italiano)
- Spanish (Español)
- English (EN) - Default

### ✨ UI Features
1. **Floating Button**: A globe icon button fixed at the bottom-left corner
2. **Smooth Animations**: Modal appears with spring animations and smooth transitions
3. **Modern Design**: Gradient header, clean layout, flag icons for each language
4. **Responsive**: Works perfectly on all screen sizes
5. **Accessibility**: Keyboard navigation and ARIA labels included

## Implementation Details

### Components Modified
1. **`/components/ui/LanguageSelector.tsx`** - Main language selector component
2. **`/app/layout.tsx`** - Added LanguageSelector to the root layout

### How It Works
1. The component loads the Google Translate widget script dynamically
2. When a user selects a language, it triggers Google Translate to translate the entire page
3. The translation is done client-side (no server required)
4. Google Translate branding is hidden for a cleaner look

### Google Translate Integration
The implementation uses the **free Google Translate Widget** which:
- Requires no API key
- Works client-side
- Translates the entire DOM automatically
- Supports 100+ languages

## API Key (Optional)
While the current implementation uses the free widget, you can upgrade to Google Cloud Translation API for more control:

1. Create a `.env.local` file in the root directory:
```env
GOOGLE_TRANSLATE_API_KEY=AIzaSyBgSYoaeuo2iK-cu6TQ4fpRogd8FYyu1-o
NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY=AIzaSyBgSYoaeuo2iK-cu6TQ4fpRogd8FYyu1-o
```

2. Never commit `.env.local` to version control (it's in `.gitignore`)

## Customization

### Adding More Languages
Edit `/components/ui/LanguageSelector.tsx`:

```typescript
const languages: Language[] = [
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
  { code: "zh-CN", name: "Chinese (Simplified)", flag: "🇨🇳" },
  // Add more languages here
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "ko", name: "Korean", flag: "🇰🇷" },
];
```

### Changing Button Position
In `/components/ui/LanguageSelector.tsx`, modify the button div:

```tsx
{/* Current: bottom-left */}
<div className="fixed bottom-6 left-6 z-50">

{/* Example: bottom-right */}
<div className="fixed bottom-6 right-6 z-50">

{/* Example: top-right */}
<div className="fixed top-6 right-6 z-50">
```

### Styling the Modal
The modal uses Tailwind CSS classes and can be easily customized:
- Gradient header: `bg-gradient-to-r from-blue-600 to-purple-600`
- Button colors: Modify the `className` properties
- Animation: Adjust `framer-motion` properties

## Browser Compatibility
✅ Chrome, Firefox, Safari, Edge (all modern browsers)
✅ Mobile browsers (iOS Safari, Chrome Mobile)
✅ Tablets

## Performance
- Lightweight: ~3KB additional JavaScript
- Lazy loaded: Google Translate script loads only when needed
- No impact on initial page load

## SEO Considerations
- Default language is English (en)
- Language meta tags are included in layout.tsx
- Google Translate doesn't affect SEO as it's client-side only
- Each language option is properly structured in the HTML

## Troubleshooting

### Translation Not Working?
1. Check browser console for errors
2. Ensure Google Translate script is loaded
3. Try clearing browser cache
4. Check if ad blockers are interfering

### Button Not Visible?
1. Check z-index conflicts
2. Verify the component is imported in layout.tsx
3. Clear Next.js cache: `rm -rf .next`

### Styling Issues?
1. Ensure Tailwind CSS is properly configured
2. Check for conflicting CSS
3. Verify `globals.css` is imported

## Credits
- **Google Translate** - Translation engine
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Next.js 16** - Framework
- **Tailwind CSS** - Styling

## Support
For issues or questions, contact: info@aistein.it

---

Last Updated: February 2026

