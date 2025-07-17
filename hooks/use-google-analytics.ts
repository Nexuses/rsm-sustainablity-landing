import { useCallback } from 'react'
import { trackEvent, trackPageView, GA_TRACKING_ID } from '@/app/google-analytics.config'

export const useGoogleAnalytics = () => {
  const trackCustomEvent = useCallback((
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    trackEvent(action, category, label, value)
  }, [])

  const trackCustomPageView = useCallback((url: string) => {
    trackPageView(url)
  }, [])

  const trackButtonClick = useCallback((buttonName: string, location?: string) => {
    trackEvent('click', 'button', buttonName, undefined)
  }, [])

  const trackFormSubmission = useCallback((formName: string) => {
    trackEvent('submit', 'form', formName, undefined)
  }, [])

  const trackLinkClick = useCallback((linkText: string, linkUrl: string) => {
    trackEvent('click', 'link', linkText, undefined)
  }, [])

  const trackScroll = useCallback((section: string, percentage: number) => {
    trackEvent('scroll', 'engagement', section, percentage)
  }, [])

  return {
    trackCustomEvent,
    trackCustomPageView,
    trackButtonClick,
    trackFormSubmission,
    trackLinkClick,
    trackScroll,
    GA_TRACKING_ID,
  }
} 