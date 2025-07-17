export const GA_TRACKING_ID = 'G-PK0FKYJDE0'

// Google Analytics configuration
export const GA_CONFIG = {
  measurementId: GA_TRACKING_ID,
  debugMode: process.env.NODE_ENV === 'development',
  defaultConsent: 'granted',
  pageViewEvent: true,
  pageViewEventName: 'page_view',
  pageViewEventParameters: {
    send_page_title: true,
    send_page_location: true,
  },
}

// Custom event tracking function
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Page view tracking function
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Declare gtag on window object for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, any>
    ) => void
    dataLayer: any[]
  }
} 