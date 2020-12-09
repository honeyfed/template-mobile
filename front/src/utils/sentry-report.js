import * as Sentry from '@sentry/browser';

function getPerformanceMemory() {
  if (window.performance && window.performance.memory) {
    return {
      totalJSHeapSize: window.performance.memory.totalJSHeapSize,
      usedJSHeapSize: window.performance.memory.usedJSHeapSize,
      jsHeapSizeLimit: window.performance.memory.jsHeapSizeLimi,
    };
  }
  return { };
}

export function reportSentry(message) {
  const sentryMessage = {
    additional: {
      memory: getPerformanceMemory(),
    },
    message,
  };
  Sentry.captureMessage(JSON.stringify(sentryMessage));
}
