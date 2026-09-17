import type { SiteContent } from './types'

export const en: SiteContent = {
  locale: 'en',
  localeName: 'English',
  meta: {
    home: {
      title: 'Dash Cam App — Turn Your Phone Into a Dashcam | DriveCam',
      description:
        'DriveCam turns your phone into a powerful dash cam. Loop recording with GPS, private storage, voice control and incident reports. Free on iPhone and Android.',
    },
    // TODO: placeholder prices — replace with real RevenueCat values once the DriveCam project exists in RevenueCat
    pricing: {
      title: 'Pricing — Free Dash Cam App vs PRO | DriveCam',
      description:
        'Start free or go PRO: monthly or one-time lifetime unlock. Maximum video quality, unlimited storage control, live streaming and driving stats. No account needed.',
    },
    guide: {
      title: 'How to Turn Your Phone Into a Dashcam — Guide | DriveCam',
      description:
        'A practical guide to setting up a phone dashcam: mounting, video settings, battery and heat management, and what the law says about dash cams.',
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
      { label: 'Features', to: '/#features' },
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
      { label: 'Features', to: '/#features' },
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
      'DriveCam is the car camera recorder that turns the phone you carry into a reliable witness on every drive. Loop-recorded video with GPS, speed and time stamped in — stored privately on your phone, never in your gallery. No hardware to buy, no cables to run, no account to create.',
    primaryCta: 'Get DriveCam free',
    secondaryCta: 'See what PRO unlocks',
    badges: ['Free plan available', 'Works offline', 'Private by design'],
    hud: {
      rec: 'REC',
      timer: '02:41',
      speed: '87',
      speedUnit: 'km/h',
      limit: '90',
      coords: '40.4168° N · 3.7038° W',
      status: 'GPS LOCKED',
      stamp: '2026-03-14 18:42:07',
    },
  },
  stats: {
    eyebrow: 'Built for the road',
    items: [
      { value: '1 tap', label: 'From mount to recording' },
      { value: '100%', label: 'Footage stored locally, never uploaded' },
      { value: '0', label: 'DriveCam files in your photo gallery' },
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
          'Yes. The free plan covers everyday recording: loop recording, GPS stamps, night mode, voice control and the private gallery. PRO — a small monthly subscription or a one-time lifetime purchase — unlocks maximum video quality, full storage control, live streaming and driving statistics. You can also unlock a 7-day PRO trial by watching a few short rewarded ads.',
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
    note: 'Free plan available · PRO from a small monthly fee or one-time lifetime purchase',
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
      'One app, two ways to use it. Start free, then unlock everything with a monthly subscription or a single lifetime purchase. No account, no tracking, no hidden fees.',
    trust:
      'Purchases handled securely by the App Store and Google Play · Cancel the monthly plan anytime',
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
        key: 'monthly',
        name: 'PRO Monthly',
        badge: null,
        price: '$2.99',
        period: 'per month',
        summary: 'Every PRO feature, month to month. Cancel whenever you want.',
        features: [
          'High and Maximum video quality',
          'Full loop duration control',
          'Custom storage limits up to unlimited',
          'Live streaming to your own server',
          'Complete driving statistics and history',
          'Ad-free experience',
        ],
        ctaLabel: 'Start monthly PRO',
        popular: false,
      },
      {
        key: 'lifetime',
        name: 'PRO Lifetime',
        badge: 'Best value',
        price: '$19.99',
        period: 'one-time purchase',
        summary: 'Pay once, keep PRO forever — including all future updates.',
        features: [
          'Everything in PRO Monthly',
          'One payment, yours forever',
          'All future PRO features included',
          'The best deal if you keep driving with DriveCam',
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
        question: 'What is the difference between monthly and lifetime?',
        answer:
          'The features are identical. Monthly spreads the cost and can be cancelled anytime; lifetime is a single payment that keeps PRO forever, including all future updates. If you plan to keep the app, lifetime is cheaper within a year.',
      },
      {
        question: 'How do I restore a purchase on a new phone?',
        answer:
          'Open the PRO screen and tap Restore Purchases. As long as you are signed in with the same App Store or Google Play account, your PRO unlocks automatically — nothing is stored on our side.',
      },
      {
        question: 'How do I cancel the monthly subscription?',
        answer:
          'Cancel from your App Store or Google Play subscription settings — one tap, no emails, no retention tricks. You keep PRO until the end of the period you already paid for.',
      },
      {
        question: 'Why are prices shown in dollars?',
        answer:
          'Your app store applies local pricing automatically at checkout and shows the exact amount in your currency before you confirm.',
      },
    ],
  },
  guide: {
    eyebrow: 'Setup guide',
    title: 'How to turn your phone into a dashcam',
    description:
      'Everything you need to set up a phone dash cam that actually holds up on real roads — mounting, settings, battery, heat, and what the law expects from you.',
    intro: [
      'A phone dash cam is not just "a camera pointed at the road". To be useful when it matters, it needs to record in loops, survive summer heat, keep the screen on (or off) intelligently, and stamp the footage with the facts you will need later: when, where and how fast.',
      'This guide walks through a setup that works — and the mistakes that make phone dash cams fail right when someone needs the footage.',
    ],
    updated: 'Last updated: March 2026',
    sections: [
      {
        id: 'device',
        number: '01',
        title: 'Pick the right phone',
        paragraphs: [
          'Any reasonably modern iPhone or Android phone works as a dash cam. But the perfect candidate is often the phone sitting unused in a drawer: a dedicated dash cam phone can stay in the car, permanently mounted and permanently charging — while your daily phone keeps living in your pocket.',
        ],
        bullets: [
          'A phone with a decent rear camera (1080p is plenty for evidence)',
          'Enough storage headroom — DriveCam rotates clips, but give it 2–5 GB',
          'Battery health matters: a phone that shuts down in heat will betray you in July',
          'Keep GPS enabled — it is what makes footage legally useful',
        ],
      },
      {
        id: 'mount',
        number: '02',
        title: 'Mount it like you mean it',
        paragraphs: [
          'Position decides whether your footage is useful or worthless. The camera should see the road ahead and as much of the scene as possible — not the sky, not your dashboard, not the back of your mirror.',
        ],
        bullets: [
          'Top-center of the windshield, or on the dashboard behind the wiper line',
          'Keep it clear of airbags and anything that blocks your view of the road',
          'Portrait or landscape both work — DriveCam can lock orientation',
          'Route the charging cable so it never crosses your controls',
          'Clean the glass where you mount it; a greasy spot blurs everything',
        ],
      },
      {
        id: 'settings',
        number: '03',
        title: 'Set up DriveCam in five minutes',
        paragraphs: [
          'Install DriveCam, open it and grant the permissions it asks for: camera, microphone, location and notifications. Then walk through these settings once — after that, recording is a single tap.',
        ],
        bullets: [
          'Loop duration: 1–2 minutes keeps clip sizes manageable and storage predictable',
          'Video quality: pick the highest your phone handles comfortably day after day',
          'Storage limit: set 2–5 GB so cleanup happens automatically',
          'Enable screen wake while charging, or background recording with the screen off',
          'Turn on GPS data stamping — speed and coordinates are your best evidence',
        ],
      },
      {
        id: 'extras',
        number: '04',
        title: 'Voice, stats and safety nets',
        paragraphs: [
          'Once the basics work, turn on the features that make the camera feel like serious gear — and the ones that protect you when conditions get rough.',
        ],
        bullets: [
          'Voice control: start and stop recording, lock clips and take photos without touching the phone',
          'Speed display and speed-limit alerts for calm, aware driving',
          'Night mode: automatic brightness boost when the light drops',
          'Low-battery alerts so recording wraps up gracefully, not mid-clip',
        ],
      },
      {
        id: 'heat',
        number: '05',
        title: 'Beat heat and battery drain',
        paragraphs: [
          'Heat is the number one killer of phone dash cams. A phone on a windshield in direct sun can hit its thermal limit within minutes — which is exactly why DriveCam monitors temperature and pauses recording before damage is done.',
        ],
        bullets: [
          'Park in shade or point the phone away from the sun when the car is off',
          'Direct an air vent toward the phone on hot days',
          'Keep the phone charging while recording — GPS and camera drain batteries fast',
          'In winter, batteries drain quicker; a low-battery threshold keeps things predictable',
        ],
      },
      {
        id: 'incident',
        number: '06',
        title: 'After an incident: lock it, report it',
        paragraphs: [
          'When something happens, your only jobs are: keep the clip and hand over the facts. DriveCam is built for both.',
        ],
        bullets: [
          'Lock the clip so automatic cleanup can never touch it',
          'Generate the incident report PDF: date, time, GPS, map, maximum speed, duration',
          'Share footage directly with your insurer or the police from the app',
          'Save a copy somewhere safe before the phone changes hands',
        ],
      },
      {
        id: 'law',
        number: '07',
        title: 'What does the law say?',
        paragraphs: [
          'Dash cam rules differ by country — and sometimes by state or region. Recording the road is generally allowed, but audio recording, specific mounting positions, or publishing footage online can be restricted. Check your local rules before mounting a camera, and never let a dash cam become a distraction. DriveCam is an aid, not a substitute for attention.',
        ],
        bullets: [],
      },
    ],
    ctaTitle: 'Ready to try it on your own windshield?',
    ctaBody:
      'DriveCam is free to download for iPhone and Android. This whole guide describes the app — minus the setup.',
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
          'PRO features are unlocked through in-app purchases processed by the App Store or Google Play. Lifetime is a one-time purchase; monthly subscriptions renew automatically until cancelled in your store account. Refunds are handled by the store that processed the payment.',
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
