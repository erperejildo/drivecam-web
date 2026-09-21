import type { SiteContent } from './types'

export const en: SiteContent = {
  locale: 'en',
  localeName: 'English',
  meta: {
    home: {
      title: 'Dashcam App for iPhone & Android — Free Dash Cam | DriveCam',
      description:
        'DriveCam is the dash cam app and car camera recorder that turns your phone into a witness. Loop recording with GPS, private storage and voice control. Free on iPhone and Android.',
    },
    features: {
      title: 'Dashcam Features — Loop Recording, GPS & Voice Control | DriveCam',
      description:
        'All the features of a dashcam in one car camera app: loop recording, GPS speed stamp, offline voice control, night mode, heat protection and driving stats.',
    },
    pricing: {
      title: 'Dashcam Pro Pricing — Free Plan vs Lifetime PRO | DriveCam',
      description:
        'Start free or unlock dashcam PRO forever with a one-time purchase. Maximum video quality, storage control, live streaming and driving stats. No account.',
    },
    guide: {
      title: 'How to Turn Your Phone Into a Dashcam — Guide | DriveCam',
      description:
        'A practical guide to turning your phone into a dashcam: mounting, the best video settings, battery and heat management — and the rules to check before you record.',
    },
    blog: {
      title: 'Dashcam Blog & Driving Guides — DriveCam',
      description:
        'Practical guides, hardware comparisons, accident evidence advice, and smartphone dashcam tips to keep you safe and save money on the road.',
    },
    privacy: {
      title: 'Privacy Policy — DriveCam',
      description:
        'How DriveCam handles your data: footage stays on your device, no account, no uploads. Read our full privacy policy.',
    },
    terms: {
      title: 'Terms & Conditions — DriveCam',
      description:
        'Terms of use for DriveCam dash cam app. Licensing, safety notice, purchases and limitation of liability.',
    },
    legal: {
      title: 'Privacy Policy & Terms — DriveCam',
      description:
        'How DriveCam handles your data: footage stays on your device, no account, no uploads. Read the full privacy policy and terms of use.',
    },
    notFound: {
      title: 'Page Not Found — DriveCam',
      description:
        'The page you are looking for does not exist. Head back to the DriveCam home page.',
    },
  },
  header: {
    homeLabel: 'DriveCam home',
    links: [
      { label: 'How it works', to: '/guide/' },
      { label: 'Features', to: '/features/' },
      { label: 'Pricing', to: '/pricing/' },
      { label: 'Blog', to: '/blog/' },
      { label: 'FAQ', to: '/#faq' },
      { label: 'Contact', to: '/#contact' },
    ],
    cta: 'Get the app',
  },
  footer: {
    tagline:
      'The dash cam app that turns the phone in your pocket into a reliable witness on every drive. Private, offline-first, no hardware needed.',
    navTitle: 'Explore',
    links: [
      { label: 'Home', to: '/' },
      { label: 'How to set it up', to: '/guide/' },
      { label: 'Features', to: '/features/' },
      { label: 'Pricing', to: '/pricing/' },
      { label: 'Blog', to: '/blog/' },
      { label: 'FAQ', to: '/#faq' },
      { label: 'Contact', to: '/#contact' },
    ],
    legalTitle: 'Legal',
    legalLinks: [
      { label: 'Privacy policy', to: '/privacy/' },
      { label: 'Terms & conditions', to: '/terms/' },
    ],
    contactTitle: 'Support',
    contactBody:
      'Bug reports, feature ideas or just feedback — every message is read and answered.',
    stores: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.drodriguez.drivecam',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/es/app/drivecam-car-camera-recorder/id6791342778',
      },
    ],
    madeByPrefix: 'Designed and built by',
    madeByBrand: 'Axis Labs',
    madeByHref: 'https://axislabs.eu',
    rights: 'All rights reserved.',
  },
  hero: {
    eyebrow: 'Dash cam app · iPhone & Android',
    title: 'Your phone is already a',
    titleAccent: 'dashcam.',
    description:
      'DriveCam is the car camera recorder that turns your phone into a reliable witness on every drive. Loop-recorded video with GPS, speed and time stamped in — stored privately on your phone, never in your gallery. No hardware to buy, no cables to run, no account to create.',
    primaryCta: 'Get DriveCam free',
    secondaryCta: 'See what PRO unlocks',
    badges: ['Free plan available', 'Works offline', 'Private by design'],
  },
  stats: {
    eyebrow: 'Built for the road',
    items: [
      { value: '1 tap', label: 'From mount to recording' },
      { value: '100%', label: 'Footage stored locally, never uploaded' },
      { value: '1/2/3 min', label: 'Loop segments, old clips rotate out' },
    ],
  },
  gap: {
    eyebrow: 'The problem',
    title: 'The road does not give you second takes.',
    description:
      'A fender bender, a staged accident, a brake-checker, a hit-and-run in a parking lot. In every one of those moments it is your word against theirs — and without footage, the conversation rarely ends in your favor.',
    points: [
      {
        title: 'Witnesses drive on',
        description:
          'By the time you pull over, the person who saw everything is already gone. Insurance claims and police reports turn into arguments you cannot win without evidence.',
      },
      {
        title: 'Dedicated dash cams cost more than they should',
        description:
          'A decent hardware dash cam means paying for a device, wiring it to your fuse box, buying memory cards and hoping it survived another summer on the windshield.',
      },
      {
        title: 'Regular camera apps get in the way',
        description:
          'Recording video with your normal camera app fills your gallery with hour-long clips, triggers cloud backups you never asked for, and stops the moment you need the phone.',
      },
    ],
    closing:
      'The gap was never the camera. It was the software that turns the phone you already own into a dependable drive recorder.',
  },
  solution: {
    eyebrow: 'The fix',
    title: 'A complete drive recorder, built around your phone.',
    description:
      'DriveCam was designed for the road from day one: mount your phone, tap record, and drive. Loop recording, GPS stamps, night mode, voice control — even heat protection is handled for you.',
    steps: [
      {
        number: '01',
        title: 'Mount and open',
        description:
          'Any phone holder works. Open DriveCam and the full-screen preview frames the road ahead instantly — no menus, no fiddling at a red light.',
      },
      {
        number: '02',
        title: 'Tap record, drive',
        description:
          'One tap starts loop recording. Clips are cut into 1, 2 or 3-minute segments and the oldest rotate out automatically, so storage never silently fills up.',
      },
      {
        number: '03',
        title: 'Keep the proof',
        description:
          'Speed, GPS and time are stamped into every clip. Lock the ones that matter, share them instantly, or generate a police-ready incident report in seconds.',
      },
    ],
    note: 'Already have an old phone in a drawer? Perfect. It becomes a dedicated dash cam, and your daily phone never leaves your pocket.',
  },
  benefits: {
    eyebrow: 'Why DriveCam',
    title: 'Not just a recorder. Your side of the story.',
    description:
      'Every feature exists to answer one question: when something happens, will you have what you need to prove it?',
    items: [
      {
        icon: 'shield',
        title: 'Evidence when it matters',
        description:
          'A dated, GPS-stamped incident report with map, maximum speed and duration — generated from the footage itself, ready to hand to police or your insurer.',
      },
      {
        icon: 'mic',
        title: 'Drive hands-free',
        description:
          'Start recording, lock a clip, take a photo or switch night mode with your voice. Fully offline, so it works in tunnels and dead zones.',
      },
      {
        icon: 'lock',
        title: 'Your footage stays yours',
        description:
          'Videos live in a private folder inside the app — never in your gallery, never uploaded to a cloud, never scanned by anyone else.',
      },
      {
        icon: 'thermo',
        title: 'Built for long drives',
        description:
          'Thermal protection, low-battery alerts and background recording keep the camera running from the first mile to the last, screen off.',
      },
    ],
  },
  features: {
    eyebrow: 'Feature tour',
    title: 'Everything a dash cam should do',
    description: 'Including the things hardware dash cams forgot.',
    items: [
      {
        icon: 'clip',
        title: 'Loop recording',
        description:
          '1, 2 or 3-minute segments rotate automatically. Set it once and never think about storage again.',
      },
      {
        icon: 'gps',
        title: 'GPS data stamp',
        description:
          'Speed, coordinates and timestamp burned into the video — unarguable proof of where and when.',
      },
      {
        icon: 'gauge',
        title: 'Speed limit alerts',
        description: 'Live speed readout with a speed-limit badge and an over-speed chime.',
      },
      {
        icon: 'moon',
        title: 'Night mode',
        description:
          'Automatically brightens late drives when the light drops, using the ambient light sensor.',
      },
      {
        icon: 'mic',
        title: 'Offline voice control',
        description:
          'Record, stop, lock a clip, take a photo, toggle night mode or the screen — no internet needed.',
      },
      {
        icon: 'battery',
        title: 'Background recording',
        description:
          'Keep filming with the screen off, with battery thresholds that protect your phone.',
      },
      {
        icon: 'camera',
        title: 'Camera selection',
        description: 'Use the front or rear camera — whatever fits your mount and your car.',
      },
      {
        icon: 'chart',
        title: 'Driving stats',
        description:
          'Distance, trips, average and max speed, hard braking — with personal bests to beat.',
      },
      {
        icon: 'stream',
        title: 'Live streaming',
        description:
          'Broadcast your drive over your own private server with full control of the feed.',
      },
      {
        icon: 'float',
        title: 'Picture-in-picture',
        description:
          'Keep an eye on the road while the phone does something else, with PiP on Android.',
      },
      {
        icon: 'photo',
        title: 'Private gallery',
        description:
          'Browse, play, lock and share clips from inside the app — with locked clips protected from cleanup.',
      },
      {
        icon: 'mount',
        title: 'Service tracker',
        description:
          'Log maintenance and get calendar alerts before the next oil change sneaks up on you.',
      },
    ],
  },
  faq: {
    eyebrow: 'Questions',
    title: 'Everything you were about to ask',
    description: 'Short answers. Real ones.',
    items: [
      {
        question: 'Is DriveCam really free?',
        answer:
          'Yes. The free plan covers everyday recording: loop recording, GPS stamps, night mode, voice control and the private gallery. PRO — a single one-time purchase — unlocks maximum video quality, full storage control, live streaming and driving statistics. You can also unlock a 7-day PRO trial by watching a few short rewarded ads.',
      },
      {
        question: 'How is this different from a hardware dash cam?',
        answer:
          'No device to buy, no wiring, no memory cards. DriveCam uses the phone already mounted on your windshield — or the old phone sitting in a drawer — as a full drive recorder. Same evidence, zero extra hardware.',
      },
      {
        question: 'Where are my recordings stored?',
        answer:
          'In a private folder inside the app. They never appear in your phone gallery, are never uploaded anywhere, and stay fully under your control. Set a storage limit and DriveCam rotates old clips automatically so the app never balloons in size.',
      },
      {
        question: 'Will it overheat or drain my battery?',
        answer:
          'DriveCam monitors phone temperature and pauses recording with a cooling notice before things get dangerous. Battery alerts let you set a low-battery threshold, and background recording keeps screen-off power use low.',
      },
      {
        question: 'Does it record with the screen off?',
        answer:
          'Yes. Background recording keeps capturing with the screen off — on Android through a foreground service, on iPhone through background audio. Your phone can stay locked while DriveCam keeps filming.',
      },
      {
        question: 'Do I need an internet connection?',
        answer:
          'No. Recording, GPS stamping and even voice control work fully offline. Internet is only used for optional live streaming to your own server, ads in the free plan, and store purchases.',
      },
    ],
  },
  download: {
    eyebrow: 'Get started',
    title: 'Start driving with a witness.',
    description:
      'Download DriveCam free for iPhone or Android. It takes one tap to start recording — and it might become the most important app on your phone.',
    note: 'Free plan available · Unlock PRO forever with a one-time purchase',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Questions, ideas, or a bug to report?',
    description:
      'I am the developer behind DriveCam and I answer every message myself. Whether you found a bug, want a feature, or just want to say hi — write to me. Your email app will open with everything already filled in.',
    nameLabel: 'Your name',
    namePlaceholder: 'Alex Driver',
    emailLabel: 'Your email',
    emailPlaceholder: 'you@example.com',
    messageLabel: 'Your message',
    messagePlaceholder:
      'Tell me what happened, what you would love to see, or what drove you crazy…',
    submitLabel: 'Open in my email app',
    hint: 'This form opens your email app — nothing is sent to any server and nothing is stored on this website.',
    successTitle: 'Your email app should have opened',
    successBody:
      'If nothing happened, write to info@drivecam.store directly. I usually reply within 1–2 days.',
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'Free to drive. PRO when you are ready.',
    description:
      'One app, two ways to use it. Start free, then unlock everything with a single purchase — yours forever. No account, no tracking, no hidden fees.',
    trust:
      'Purchases handled securely by the App Store and Google Play · One-time payment, no subscription · Prices include applicable taxes',
    plans: [
      {
        key: 'free',
        name: 'Free',
        badge: null,
        price: '$0',
        period: 'forever',
        summary: 'Everything you need to start recording your drives today.',
        features: [
          'Loop recording in 1-minute segments',
          'GPS data stamp — speed, time, location',
          'Private in-app gallery and player',
          'Storage limit with automatic cleanup',
          'Night mode',
          'Offline voice control',
          'Incident report PDF',
          'Optional: 7-day PRO trial via rewarded ads',
        ],
        ctaLabel: 'Download free',
        popular: false,
      },
      {
        key: 'lifetime',
        name: 'PRO Lifetime',
        badge: 'Best value',
        price: '$24.99',
        period: 'one-time purchase',
        summary: 'Pay once, keep PRO forever — including all future updates.',
        features: [
          'High and Maximum video quality',
          'Full loop duration and storage control',
          'Live streaming to your own server',
          'Complete driving statistics and history',
          'Ad-free experience',
          'One payment, yours forever — future PRO features included',
        ],
        ctaLabel: 'Unlock lifetime PRO',
        popular: true,
      },
    ],
    trial: {
      eyebrow: 'Try before you pay',
      title: 'Test PRO with three short ads',
      description:
        'Not sure yet? Watch three short rewarded videos in the free plan and unlock a 7-day PRO trial. No payment details, no commitment — just the full app for a week.',
    },
    faqTitle: 'Pricing questions',
    faq: [
      {
        question: 'Is the free plan really usable, or just a demo?',
        answer:
          'Really usable. The free plan records, loops, stamps GPS and keeps your clips private — the core job of a dash cam. PRO adds quality tiers, storage control, live streaming and driving statistics on top.',
      },
      {
        question: 'Do I have to pay again when new PRO features arrive?',
        answer:
          'No. PRO Lifetime is a single payment: everything is unlocked now, and every future PRO feature is included. No renewals, no reminders, no subscription to manage.',
      },
      {
        question: 'How do I restore a purchase on a new phone?',
        answer:
          'Open the PRO screen and tap Restore Purchases. As long as you are signed in with the same App Store or Google Play account, your PRO unlocks automatically — nothing is stored on our side.',
      },
      {
        question: 'Is the price the same in every country?',
        answer:
          'Prices follow your local App Store or Google Play storefront, including applicable taxes, so the amount you see at checkout is final. The price on this page adapts to the country you are visiting from.',
      },
    ],
  },
  guide: {
    eyebrow: 'Setup guide',
    title: 'How to turn your phone into a dashcam',
    description:
      'A short, practical setup: mount it right, set it once, and know the local rules before you record.',
    intro: [
      'Good dashcam footage does not happen by accident. With the right mount, a five-minute setup and a little heat management, your phone can record reliable evidence on every drive.',
    ],
    sections: [
      {
        id: 'mount',
        number: '01',
        title: 'Mount it right',
        paragraphs: [
          'Any modern iPhone or Android works — an old phone in a drawer is ideal, since it can stay mounted and charged in the car. Place it top-center of the windshield or on the dashboard, seeing the road ahead and never blocking your view.',
        ],
        bullets: [
          'Camera with GPS enabled — it makes the footage useful',
          'Clear of airbags and your line of sight',
          'Route the charging cable away from the controls',
        ],
      },
      {
        id: 'settings',
        number: '02',
        title: 'Set up DriveCam in five minutes',
        paragraphs: [
          'Install DriveCam, open it and grant the permissions it asks for: camera, microphone, location and notifications. Then walk through these settings once — after that, recording is a single tap.',
        ],
        bullets: [
          'Loop duration: 1–2 minutes keeps clips and storage manageable',
          'Storage limit: 2–5 GB cleans up automatically',
          'Turn on GPS stamping — speed and coordinates are your best evidence',
        ],
      },
      {
        id: 'extras',
        number: '03',
        title: 'Voice, stats and safety nets',
        paragraphs: [
          'Once the basics work, enable the features that make daily driving easier and safer.',
        ],
        bullets: [
          'Voice control: record, lock clips and take photos hands-free',
          'Speed display and speed-limit alerts',
          'Night mode and low-battery alerts',
        ],
      },
      {
        id: 'heat',
        number: '04',
        title: 'Beat heat and battery drain',
        paragraphs: [
          'Heat is the number one killer of phone dash cams. DriveCam monitors temperature and pauses recording before damage is done — help it by keeping the phone out of direct sun and charging while recording.',
        ],
        bullets: [
          'Park in shade or move the phone out of the sun',
          'Point an air vent at the phone on hot days',
          'Keep it charging while recording — GPS and camera drain fast',
        ],
      },
      {
        id: 'incident',
        number: '05',
        title: 'After an incident: lock it, report it',
        paragraphs: [
          'When something happens, your only jobs are to keep the clip and hand over the facts. DriveCam is built for both.',
        ],
        bullets: [
          'Lock the clip so cleanup can never touch it',
          'Generate the incident report PDF with GPS, map and max speed',
          'Share it with your insurer or the police from the app',
        ],
      },
    ],
    lawTitle: 'Check the rules where you drive',
    lawNote:
      'Dash cam rules differ from country to country — sometimes even between regions. Before mounting a camera, check the current regulations that apply where you drive. DriveCam is an aid, not legal advice.',
    ctaTitle: 'Ready to try it on your own windshield?',
    ctaBody: 'DriveCam is free on iPhone and Android.',
  },
  blog: {
    eyebrow: 'Knowledge & Insights',
    title: 'Dashcam Insights, Guides & Comparisons',
    description:
      'In-depth guides on accident evidence, hardware vs smartphone comparisons, and how to turn any device into a reliable witness.',
    readArticle: 'Read article',
    backToBlog: 'Back to all articles',
    publishedOn: 'Published',
    estimatedRead: 'read',
    tableOfContentsTitle: 'Table of contents',
    faqTitle: 'Frequently asked questions',
    ctaTitle: 'Turn your smartphone into a dashcam today',
    ctaBody:
      'Download DriveCam for free on iPhone and Android. Continuous loop recording, real-time GPS telemetry, and automatic incident reporting.',
    ctaButton: 'Get DriveCam free',
    articles: [
      {
        slug: 'dashcam-accident-court-evidence',
        title: 'How Dashcam Footage Protects You in Court and Claims',
        description:
          'Learn how dash cam video evidence proves innocence in car accidents, refutes fraudulent claims in court, and speeds up insurance payouts.',
        date: '2026-09-18',
        dateFormatted: 'September 18, 2026',
        readTime: '6 min read',
        category: 'Legal & Insurance',
        keywords: [
          'dashcam accident evidence',
          'dashcam court admissible',
          'prove innocence car accident',
          'dashcam insurance claim fault',
        ],
        sections: [
          {
            id: 'the-he-said-she-said-trap',
            title: '1. The "He-Said, She-Said" Trap in Contested Crashes',
            paragraphs: [
              'Nearly 50% of two-vehicle collisions in urban intersections result in conflicting driver accounts. Without independent corroboration, insurance adjusters frequently default to 50/50 shared liability — causing your premiums to surge for years despite you having done nothing wrong.',
              'A dashcam fundamentally changes the dynamic. It acts as an objective, unbiased witness that cannot be intimidated, distracted, or misremember traffic signal colors.',
            ],
            callout: {
              type: 'stat',
              title: 'Insurance Fact',
              text: 'Insurers resolve claims with clear dashcam footage up to 4x faster, with a 92% reduction in prolonged court disputes.',
            },
          },
          {
            id: 'court-admissibility',
            title: '2. Is Dashcam Footage Legally Admissible in Court?',
            paragraphs: [
              'In the United States, the UK, and most European jurisdictions, digital video evidence is fully admissible in civil and traffic courts provided it meets the standard authentication rules. The proponent must demonstrate that the video has not been manipulated or tampered with.',
              'To guarantee that your recordings are accepted as rock-solid evidence, the footage must satisfy three evidentiary criteria: unbroken continuous recording segments, accurate timestamps synchronized with real-world time, and verifiable location telemetry.',
            ],
            bullets: [
              'Unbroken loop continuity: Proves nothing was deleted immediately prior to impact.',
              'Sub-second GPS timestamps: Correlates precisely with traffic light change sequences.',
              'Real-time speed overlay: Refutes unsubstantiated claims of excessive speed or reckless driving.',
            ],
          },
          {
            id: 'staged-accidents-fraud',
            title: '3. Defeating "Crash for Cash" and Staged Fraud',
            paragraphs: [
              'Organized insurance fraud rings specifically target drivers in high-traffic corridors. Common tactics include "swoop and squat" maneuvers — where an accomplice vehicle cuts off another car, forcing the lead car to slam its brakes without cause, causing you to rear-end them.',
              'By default, rear-end collisions carry a legal presumption of fault against the trailing driver. Dashcam video is often the only physical evidence that can overcome this presumption by showing the brake lights never illuminated or that the driver intentionally caused the crash.',
            ],
          },
          {
            id: 'incident-reporting-post-crash',
            title: '4. Immediate Post-Crash Action: What to Do on the Scene',
            paragraphs: [
              'Immediately following a collision, adrenaline and shock make it difficult to gather vital details. Do not rely on your memory. Pull over safely, secure the recording, and preserve the scene.',
              'DriveCam includes a dedicated Incident Report generator. With a single tap, the app extracts the exact crash timestamp, maps your coordinates, computes your speed at impact, and exports a standardized PDF ready for police officers and your insurance claims adjuster on scene.',
            ],
            callout: {
              type: 'tip',
              title: 'Best Practice',
              text: 'Never hand your unlocked personal phone to the other driver. Export or share the PDF incident report or locked clip directly.',
            },
          },
        ],
        faqs: [
          {
            question: 'Can dashcam footage be used against me if I am at fault?',
            answer:
              'Yes. In legal discovery, relevant video footage within your possession can be subpoenaed by the opposing party or requested by police. Always drive attentively and adhere to posted speed limits.',
          },
          {
            question: 'Does DriveCam upload my accident footage to any cloud server?',
            answer:
              'No. DriveCam operates 100% offline. All video files, GPS tracks, and incident reports remain in your device’s private sandboxed storage until you choose to share them.',
          },
        ],
        cta: {
          title: 'Never drive without an undeniable witness',
          body: 'Install DriveCam for free and record every commute with sub-second GPS timestamps and automatic incident logging.',
          buttonText: 'Get DriveCam free',
        },
      },
      {
        slug: 'best-dashcams-comparison-save-money',
        title: 'Dashcam Comparison: Garmin, Nextbase vs DriveCam',
        description:
          'Compare Garmin 67W, Nextbase 622GW, and Vantrue N4 Pro against DriveCam. See how using your phone saves $150–$400 with better optics and zero SD card failures.',
        date: '2026-09-14',
        dateFormatted: 'September 14, 2026',
        readTime: '8 min read',
        category: 'Hardware Comparison',
        keywords: [
          'dashcam comparison',
          'best dashcams on the market',
          'garmin vs phone dashcam',
          'nextbase alternative',
          'save money dashcam',
        ],
        sections: [
          {
            id: 'the-true-cost-of-hardware',
            title: '1. The True Cost of Buying a Dedicated Dashcam',
            paragraphs: [
              'Dedicated automotive dashcams seem straightforward until you calculate the full checkout price. Beyond the camera unit ($140–$380), you must purchase a high-end endurance microSD card ($30–$50), a 12V-to-fuse hardwire kit ($25), and often pay $100+ for professional installation to hide unsightly wires behind car A-pillar trim panels.',
              'Total first-year investment for a brand-name dashcam typically runs between $250 and $550. Meanwhile, the smartphone in your pocket already packs an image sensor and neural processor that vastly outclasses the budget chips used in hardware dashcams.',
            ],
          },
          {
            id: 'market-comparison-table',
            title: '2. Side-by-Side Market Comparison (2026)',
            paragraphs: [
              'Here is how the most popular standalone dashcams on the market compare directly against the DriveCam smartphone solution:',
            ],
            table: {
              headers: [
                'Feature / Model',
                'Garmin 67W',
                'Nextbase 622GW',
                'Vantrue N4 Pro',
                'DriveCam (Phone)',
              ],
              rows: [
                ['Initial Cost', '$259.99', '$299.99', '$379.99', '$0 Free / $24.99 PRO'],
                [
                  'Installation Required',
                  'Fuse tap / Wires',
                  'Click&Go mount',
                  'Hardwire / 3 cables',
                  'Suction/MagSafe mount (10s)',
                ],
                [
                  'Storage Medium',
                  'MicroSD (wear prone)',
                  'MicroSD',
                  'MicroSD',
                  'High-speed phone NVMe/UFS flash',
                ],
                [
                  'Screen & UI',
                  'Tiny 2.0" LCD (320p)',
                  '3.0" Touchscreen',
                  '3.19" Non-touch LCD',
                  'Your phone OLED / Retina display',
                ],
                [
                  'Export Speed',
                  'Slow Wi-Fi 2.4GHz',
                  'Slow Wi-Fi / Bluetooth',
                  'Wi-Fi 5GHz',
                  'Instant local share & AirDrop',
                ],
                [
                  'Voice Commands',
                  'Yes (proprietary)',
                  'Alexa integration',
                  'Yes (basic English)',
                  'Completely offline voice control',
                ],
                [
                  'Cloud Subscriptions',
                  'Vault ($9.99/mo)',
                  'Emergency SOS ($5/mo)',
                  'None',
                  'None (0 recurring fees)',
                ],
              ],
            },
          },
          {
            id: 'optical-and-sensor-superiority',
            title: '3. Why Smartphone Sensors Produce Better Video',
            paragraphs: [
              'Most hardware dashcams use economy sensors like the Sony Starvis paired with low-cost plastic optical elements. They struggle with high contrast, blowing out oncoming LED headlights and blurring license plates.',
              'In contrast, modern iPhones and Android devices feature multi-element glass lenses, optical image stabilization, and multi-exposure real-time HDR processed by advanced Neural Engines. DriveCam harnesses these camera pipelines to capture legible plates in harsh shadows and rain.',
            ],
            callout: {
              type: 'tip',
              title: 'SD Card Failures',
              text: 'MicroSD cards in windshield cameras endure high thermal cycles and frequent rewrite corruptions. Smartphones use military-grade internal flash storage with advanced wear leveling, eliminating corrupted clip surprises.',
            },
          },
          {
            id: 'total-savings-summary',
            title: '4. Summary of Savings: Put $300+ Back in Your Pocket',
            paragraphs: [
              'By utilizing DriveCam on your current phone or a spare older phone, you pocket over $300 in savings immediately. You avoid cabin wiring disassembly, eliminate recurring cloud subscriptions, and gain instant footage review on a high-resolution display right when you need it.',
            ],
          },
        ],
        faqs: [
          {
            question: 'Will continuous recording drain or damage my phone battery?',
            answer:
              'DriveCam features intelligent thermal monitoring and low-battery auto-stop thresholds. When plugged into standard 12V car power, the screen can be dimmed or turned off while recording continues in the background, minimizing heat.',
          },
          {
            question: 'Does DriveCam require internet or a cellular data connection?',
            answer:
              'No. DriveCam operates 100% offline. GPS speed and telemetry are read directly from your phone’s satellite receiver without using any mobile data.',
          },
        ],
        cta: {
          title: 'Save hundreds on hardware without sacrificing security',
          body: 'Why buy expensive hardware you don’t need? Turn your phone into a high-definition dashcam in seconds.',
          buttonText: 'Start with DriveCam free',
        },
      },
      {
        slug: 'how-to-turn-old-phone-into-dashcam',
        title: 'How to Turn an Old Phone into a Dedicated Dashcam',
        description:
          'Step-by-step guide to repurposing an old smartphone into a permanent car dashcam. Windshield mounting, thermal safety, power routing, and settings.',
        date: '2026-09-08',
        dateFormatted: 'September 8, 2026',
        readTime: '7 min read',
        category: 'Setup Guide',
        keywords: [
          'turn old phone into dashcam',
          'repurpose old smartphone dash cam',
          'diy phone dashcam setup',
          'phone car camera',
        ],
        sections: [
          {
            id: 'why-repurpose-old-phone',
            title: '1. Why That Drawer-Spare Phone Is the Ultimate Dashcam',
            paragraphs: [
              'Most households have an older smartphone sitting in a desk drawer — an iPhone 11, Galaxy S10, or Pixel 5 that still functions perfectly. Repurposing it as a dedicated, permanently mounted vehicle camera keeps your primary phone free while saving you hundreds of dollars on standalone hardware.',
              'With high-resolution 4K/1080p sensors, fast internal flash storage, and built-in GPS receivers, older phones outperform cheap $50 dashboard cameras in every measurable metric.',
            ],
          },
          {
            id: 'step-1-device-prep',
            title: '2. Step 1: Wipe and Prepare the Device',
            paragraphs: [
              'Before mounting the phone in your vehicle, optimize it for dedicated recording duties:',
            ],
            bullets: [
              'Factory reset the device: Removes unnecessary background services, notifications, and battery drains.',
              'Enable Airplane Mode: Keeps the device completely offline, eliminating background network wakeups.',
              'Install DriveCam: Download the app from the App Store or Google Play and grant camera, microphone, and location permissions.',
              'Set Screen Lock to "Never" or configure DriveCam\'s built-in Screen Dimmer to prevent OLED burn-in.',
            ],
          },
          {
            id: 'step-2-mounting-and-power',
            title: '3. Step 2: Windshield Mounting & Cable Routing',
            paragraphs: [
              'A stable mount is crucial for crisp video. Choose a heavy-duty suction mount or a magnetic MagSafe-compatible windshield bracket.',
              'Position the phone directly behind or beside the rearview mirror. This placement ensures an unobstructed, centered perspective of the road while complying with windshield obstruction laws in most jurisdictions.',
              'Route a braided USB-C or Lightning cable along the headliner seam, down the rubber door weatherstripping, and under the glovebox into a 12V cigarette lighter charger (delivering at least 2.4A / 15W).',
            ],
          },
          {
            id: 'step-3-thermal-management',
            title: '4. Step 3: Battery & Thermal Safeguards',
            paragraphs: [
              'Windshields can get hot during summer parking. Lithium batteries degrade quickly if charged continuously under direct high heat. Follow these practical safeguards:',
            ],
            bullets: [
              'Do not leave the phone in direct sunlight when parked for extended periods in summer heat.',
              'Aim a dashboard A/C air vent slightly toward the phone mount to maintain cool airflow during daytime driving.',
              'DriveCam features integrated thermal throttling: if internal battery temperatures exceed safe limits, the app automatically finalizes the clip, alerts the driver, and pauses recording until safe operating temperatures return.',
            ],
            callout: {
              type: 'warning',
              title: 'Summer Warning',
              text: 'In extreme climates (>38°C / 100°F ambient), remove the phone from the mount and tuck it inside your glovebox when parked in unshaded lots.',
            },
          },
          {
            id: 'step-4-drivecam-config',
            title: '5. Step 4: Recommended DriveCam Settings',
            paragraphs: [
              'For a dedicated car phone setup, configure DriveCam for maximum hands-free convenience:',
            ],
            bullets: [
              'Loop Segment Duration: Set to 2 minutes for the ideal balance between file size and rapid emergency export.',
              'Storage Allocation: Dedicate 10 GB to 20 GB — enough for several hours of continuous rolling history.',
              'Offline Voice Commands: Turn on "Save Clip" and "Take Photo" voice triggers so you never touch the screen while driving.',
              'Background Recording: Enable so the phone can record even if you toggle navigation or turn the display off.',
            ],
          },
        ],
        faqs: [
          {
            question: 'Can I leave the phone permanently plugged into the car?',
            answer:
              'In modern vehicles, 12V cigarette sockets automatically shut off when the ignition is switched off. If your vehicle supplies constant 12V power, unplug the adapter when parking for multiple days to avoid vehicle battery drain.',
          },
          {
            question: 'Does an old phone need a SIM card for GPS to work?',
            answer:
              'No. Smartphone GPS antennas connect directly to satellites in orbit and calculate real-time coordinates and speed completely free of charge without any SIM card or cellular subscription.',
          },
        ],
        cta: {
          title: 'Give your old phone a powerful second life',
          body: 'Turn that unused phone into a full-featured windshield dashcam in less than 5 minutes. Free on iOS and Android.',
          buttonText: 'Download DriveCam free',
        },
      },
    ],
  },
  legal: {
    eyebrow: 'Legal',
    title: 'Privacy policy & terms of use',
    updated: 'Last updated: March 2026',
    privacyTitle: 'Privacy policy',
    privacy: [
      {
        id: 'who-we-are',
        title: '1. Who we are',
        paragraphs: [
          'DriveCam is a mobile application developed by Axis Labs ("we", "us"). This policy explains what the app does with your information. The short version: your footage and your location stay on your device.',
          'For any privacy question, contact info@drivecam.store.',
        ],
      },
      {
        id: 'stored-on-device',
        title: '2. What stays on your device',
        paragraphs: [
          'Video recordings, photos, GPS data burned into videos, settings and your service log are stored locally on your device, inside the app\u2019s private storage. We do not operate servers that receive your footage, and we cannot access, view or recover it.',
        ],
      },
      {
        id: 'permissions',
        title: '3. Permissions the app requests',
        paragraphs: [
          'Camera: to record video and photos. Microphone: to capture audio with your videos and to listen for voice commands (processed offline on your device). Location: to stamp speed, coordinates and time into recordings and to power driving statistics. Notifications: for alerts such as low battery or saved clips. Background modes: to keep recording while the screen is off.',
        ],
      },
      {
        id: 'third-parties',
        title: '4. Third-party services',
        paragraphs: [
          'Ads (free plan, Android): the free plan displays ads through Google AdMob, which may process device identifiers and approximate data as described in Google\u2019s privacy policy. PRO removes ads.',
          'Purchases: payments are processed entirely by the App Store or Google Play. We never see your payment details.',
          'Live streaming (optional): if you configure your own streaming server, your device sends the stream directly to that server. We do not operate or receive it.',
        ],
      },
      {
        id: 'website',
        title: '5. This website',
        paragraphs: [
          'This website does not use analytics, advertising pixels or tracking cookies. The only local storage used is your language preference. The contact form opens your email app; nothing you type is transmitted to or stored by this website.',
        ],
      },
      {
        id: 'children',
        title: '6. Children',
        paragraphs: [
          'DriveCam is not directed at children under 13, and we do not knowingly collect personal information from them.',
        ],
      },
      {
        id: 'changes',
        title: '7. Changes to this policy',
        paragraphs: [
          'We may update this policy as the app evolves. Material changes will be reflected on this page with a new "last updated" date.',
        ],
      },
    ],
    termsTitle: 'Terms of use',
    terms: [
      {
        id: 'license',
        title: '1. License',
        paragraphs: [
          'DriveCam grants you a personal, non-transferable license to use the app on devices you own or control, in accordance with the App Store and Google Play terms that apply to your download.',
        ],
      },
      {
        id: 'not-a-substitute',
        title: '2. Drive safely',
        paragraphs: [
          'DriveCam is an aid. It is not a substitute for attentive driving, and it cannot guarantee the capture, quality or preservation of any recording. Always obey traffic laws and keep your attention on the road. Do not interact with the phone while driving.',
        ],
      },
      {
        id: 'purchases',
        title: '3. Purchases',
        paragraphs: [
          'PRO features are unlocked through in-app purchases processed by the App Store or Google Play. PRO Lifetime is a single, one-time payment — it does not renew. Refunds are handled by the store that processed the payment.',
        ],
      },
      {
        id: 'liability',
        title: '4. Limitation of liability',
        paragraphs: [
          'To the maximum extent permitted by law, DriveCam and Axis Labs are not liable for indirect or consequential damages arising from the use of the app, including lost recordings or failed captures. The app is provided "as is".',
        ],
      },
      {
        id: 'law',
        title: '5. Applicable law',
        paragraphs: [
          'These terms are governed by the laws of Spain, without prejudice to consumer rights granted by the legislation of your country of residence.',
        ],
      },
    ],
    contactNote:
      'Questions about these terms or how DriveCam handles data? Write to info@drivecam.store and you will get an answer from the person who built the app.',
  },
  notFound: {
    title: 'This road leads nowhere.',
    description:
      'The page you were looking for does not exist. Let us get you back to the useful part.',
    cta: 'Back to DriveCam',
  },
}
