/**
 * Set up Google Analytics.
 *
 * See:
 *  https://developers.google.com/analytics/devguides/collection/gtagjs
 */

// eslint-disable-next-line no-var
var gtag;

export const initAnalytics = () => {
  let GA_MEASUREMENT_ID;

  switch (import.meta.env.SNOWPACK_PUBLIC_CORAL_ENV) {
    case 'production':
      GA_MEASUREMENT_ID = 'G-F02XBW0HR3';
      break;
    case 'staging':
      GA_MEASUREMENT_ID = 'G-71V1JT8G2B';
      break;
    case 'development':
      console.info('Skipping installing gtag in development');
      return;
    default:
      console.warn('Unexpected environment: ' + import.meta.env.SNOWPACK_PUBLIC_CORAL_ENV);
      return;
  }

  let gtagScriptNode = document.createElement('script');
  gtagScriptNode.setAttribute(
    'src',
    'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID,
  );

  let head = document.head;
  head.insertBefore(gtagScriptNode, head.firstElementChild);

  // @ts-ignore
  window.dataLayer = window.dataLayer || [];
  gtag = window.gtag = (...args: any[]) => {
    // @ts-ignore
    window.dataLayer.push(args);
  };

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
  });
};
