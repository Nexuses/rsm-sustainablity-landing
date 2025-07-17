# Google Analytics Setup

This project has been configured with Google Analytics using the `nextjs-google-analytics` package.

## Configuration

The Google Analytics tracking ID is: `G-PK0FKYJDE0`

## Files Created/Modified

1. **`app/components/GoogleAnalyticsWrapper.tsx`** - Main GA component
2. **`app/google-analytics.config.ts`** - Configuration and utility functions
3. **`hooks/use-google-analytics.ts`** - Custom hook for tracking events
4. **`app/layout.tsx`** - Already includes the GoogleAnalyticsWrapper

## Usage

### Basic Page View Tracking

Page views are automatically tracked when users navigate between pages.

### Custom Event Tracking

Use the `useGoogleAnalytics` hook in your components:

```tsx
import { useGoogleAnalytics } from '@/hooks/use-google-analytics'

export default function MyComponent() {
  const { trackButtonClick, trackFormSubmission, trackLinkClick } = useGoogleAnalytics()

  const handleButtonClick = () => {
    trackButtonClick('cta-button', 'hero-section')
    // Your button logic here
  }

  const handleFormSubmit = () => {
    trackFormSubmission('contact-form')
    // Your form submission logic here
  }

  const handleLinkClick = () => {
    trackLinkClick('Learn More', '/about')
    // Your link click logic here
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Click Me</button>
      <form onSubmit={handleFormSubmit}>
        {/* form content */}
      </form>
      <a href="/about" onClick={handleLinkClick}>Learn More</a>
    </div>
  )
}
```

### Available Tracking Functions

- `trackButtonClick(buttonName, location?)` - Track button clicks
- `trackFormSubmission(formName)` - Track form submissions
- `trackLinkClick(linkText, linkUrl)` - Track link clicks
- `trackScroll(section, percentage)` - Track scroll engagement
- `trackCustomEvent(action, category, label?, value?)` - Track custom events
- `trackCustomPageView(url)` - Track custom page views

### Manual Event Tracking

You can also use the utility functions directly:

```tsx
import { trackEvent } from '@/app/google-analytics.config'

// Track a custom event
trackEvent('purchase', 'ecommerce', 'premium-plan', 99.99)
```

## Verification

1. Open your website in a browser
2. Open Developer Tools (F12)
3. Go to the Network tab
4. Look for requests to `google-analytics.com` or `googletagmanager.com`
5. You should see requests being sent to your tracking ID

## Testing in Development

The Google Analytics configuration includes debug mode for development:

```tsx
debugMode: process.env.NODE_ENV === 'development'
```

This will provide additional logging in the browser console when in development mode.

## Privacy and GDPR

The current setup has `defaultConsent: 'granted'`. For GDPR compliance, you may want to implement a consent management system that asks users for permission before tracking.

## Troubleshooting

1. **No tracking data appearing**: Check that the tracking ID is correct
2. **Events not firing**: Ensure the component is client-side rendered
3. **Page views not tracking**: Verify the GoogleAnalyticsWrapper is in your layout
4. **Console errors**: Check that the `nextjs-google-analytics` package is installed

## Additional Configuration

You can modify the `GA_CONFIG` object in `app/google-analytics.config.ts` to adjust:

- Debug mode settings
- Consent management
- Page view event parameters
- Custom dimensions and metrics 