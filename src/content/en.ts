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
      { label: 'Pricing', to: '/pricing/' },
      { label: 'Features', to: '/features/' },
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
      { label: 'Pricing', to: '/pricing/' },
      { label: 'Features', to: '/features/' },
      { label: 'FAQ', to: '/#faq' },
      { label: 'Contact', to: '/#contact' },
    ],
    legalTitle: 'Legal',
    legalLinks: [
      { label: 'Privacy policy', to: '/legal/' },
      { label: 'Terms of use', to: '/legal/#terms' },
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
      'If nothing happened, write to drodriguez.apps@gmail.com directly. I usually reply within 1–2 days.',
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
          'For any privacy question, contact drodriguez.apps@gmail.com.',
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
      'Questions about these terms or how DriveCam handles data? Write to drodriguez.apps@gmail.com and you will get an answer from the person who built the app.',
  },
  notFound: {
    title: 'This road leads nowhere.',
    description:
      'The page you were looking for does not exist. Let us get you back to the useful part.',
    cta: 'Back to DriveCam',
  },
}
