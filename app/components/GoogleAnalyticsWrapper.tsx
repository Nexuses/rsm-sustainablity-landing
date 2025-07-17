"use client"

import { GoogleAnalytics } from 'nextjs-google-analytics'
import { GA_TRACKING_ID } from '../google-analytics.config'

export default function GoogleAnalyticsWrapper() {
  return <GoogleAnalytics trackPageViews gaMeasurementId={GA_TRACKING_ID} />
} 