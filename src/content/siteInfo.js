export const siteUpdateSettings = {
  enabled: true,
  autoRotate: true,
  intervalMs: 5200,
};

export const siteUpdates = [
  {
    id: 'chatbotz-launch',
    tag: 'Latest Update',
    message: 'Chatbotz is now live for AI-powered customer support and automation.',
    ctaLabel: 'Explore Chatbotz',
    ctaHref: 'https://chatbotz.co.za',
    external: true,
  },
  // {
  //   id: 'aws-partnership',
  //   tag: 'Company News',
  //   message:
  //     'DnD Software has partnered with AWS to accelerate enterprise AI delivery and cloud modernization.',
  //   ctaLabel: 'Read the Update',
  //   ctaHref: '/about',
  //   external: false,
  // },
  {
    id: 'chatbotz-promo',
    tag: 'Limited Offer',
    message: 'Save 50% for your first month on Chatbotz with promo code DND50.',
    ctaLabel: 'Claim Offer',
    ctaHref: 'https://chatbotz.co.za',
    external: true,
  },
  // {
  //   id: 'implementation-window',
  //   message: 'New implementation window opened for next-month AI and software delivery programs.',
  // },
];

// Add more entries to siteUpdates to rotate announcements in the top bar.
// Example:
// {
//   id: 'new-case-study',
//   tag: 'New Case Study', // optional
//   message: 'See how we reduced support turnaround time by 41% for a client.',
//   ctaLabel: 'Read Case Study', // optional
//   ctaHref: '/case-studies/support-automation', // optional
//   external: false, // optional (defaults to same-tab behavior when omitted)
// }

export const siteContact = {
  email: 'info@dndsoftware.co.za',
  phoneDisplay: '+1 (234) 567-890',
  phoneHref: '+1234567890',
};
