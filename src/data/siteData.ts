import { ServiceItem, ProjectItem, ProcessStep, ValueItem, SiteProfile } from '../types';

export const siteProfile: SiteProfile = {
  brandName: 'DECENT WEB ENGINEERING COM.PK',
  professionalTitle: 'Professional Web Designer',
  businessCategory: 'Web Design & Digital Solutions',
  targetAudience: 'Worldwide clients, business owners, startups, entrepreneurs, companies, and agencies.',
  location: 'Worldwide Remote · Based in Pakistan (GMT+5)',
  availability: 'Open for International Client Engagements',
  whatsappPlaceholder: '+92 316 6097993',
  emailPlaceholder: 'muhammedumairamjadkhan85@gmail.com',
  portraitImage: '/src/assets/images/hero_portrait_placeholder_1793597538488.jpg',
  studioImage: '/src/assets/images/about_designer_studio_1793597539170.jpg',
};

export const servicesData: ServiceItem[] = [
  {
    id: 'business-website-design',
    number: '01',
    title: 'Business Website Design',
    category: 'Corporate & Commercial',
    iconName: 'Building2',
    shortDescription: 'Professional, credibility-driven corporate websites designed to build trust and convert international inquiries.',
    fullDescription: 'A corporate website is the digital headquarters of your business. I create polished, strategic corporate websites that articulate your value proposition, reinforce credibility, and turn prospective enterprise buyers into qualified inquiries.',
    businessBenefits: [
      'Establishes immediate market authority and credibility with global partners',
      'Engineered for maximum lead conversion and clear user pathways',
      'Compliant with international accessibility and SEO best practices',
      'Optimized page speeds reducing bounce rates and customer drop-off'
    ],
    keyFeatures: [
      'Bespoke layout architecture tailored to brand positioning',
      'Interactive service showcases and case study matrices',
      'Clean lead capture funnels and strategic call-to-actions',
      'Multi-currency and international timezone considerations'
    ],
    targetAudience: [
      'B2B Companies & Consultancies',
      'Architecture & Engineering Firms',
      'Technology & SaaS Providers',
      'Professional Service Practices'
    ],
    deliverables: [
      'Complete responsive multi-page architecture',
      'Interactive contact and quotation request forms',
      'Performance audit and SEO foundation setup',
      'Deployment assistance and documentation'
    ]
  },
  {
    id: 'landing-page-design',
    number: '02',
    title: 'Landing Page Design',
    category: 'Conversion Optimization',
    iconName: 'Target',
    shortDescription: 'High-converting, laser-focused landing pages engineered for product launches, ad campaigns, and lead generation.',
    fullDescription: 'When driving targeted paid traffic or launching a product, every pixel must serve a purpose. My landing page designs strip away distractions to present compelling value propositions, structured social proof, and irresistible conversion triggers.',
    businessBenefits: [
      'Significantly lowers customer acquisition costs (CAC)',
      'Sharp focus on single-action conversion: sales, demos, or email capture',
      'Microsecond load times tested for ad campaign performance',
      'Structured layout optimized for A/B testing variations'
    ],
    keyFeatures: [
      'Frictionless visual hierarchy leading directly to action',
      'Benefit-driven copy layout and interactive feature highlights',
      'Mobile-first responsive interaction ergonomics',
      'Clean integration hooks for analytics and CRM tracking'
    ],
    targetAudience: [
      'Product Launch Campaigns',
      'Digital Advertisers & Performance Marketers',
      'Startup MVP Validation',
      'Event and Webinar Registrations'
    ],
    deliverables: [
      'High-converting single-page layout',
      'Conversion tracking & event trigger points',
      'Speed-optimized interactive components',
      'Cross-browser and mobile verification'
    ]
  },
  {
    id: 'ecommerce-website-design',
    number: '03',
    title: 'E-commerce Website Design',
    category: 'Retail & Commerce',
    iconName: 'ShoppingBag',
    shortDescription: 'Modern, high-retention digital storefronts crafted to showcase products elegantly and optimize checkout flow.',
    fullDescription: 'From high-end luxury boutiques to scalable product catalogs, I design e-commerce experiences where aesthetics and checkout efficiency unite. Every product presentation is designed to spark desire and drive frictionless transactions.',
    businessBenefits: [
      'Higher average order value through deliberate visual merchandising',
      'Reduced cart abandonment with streamlined, transparent checkout steps',
      'Mobile-optimized shopping ergonomics for on-the-go buyers',
      'Scalable catalog architecture designed to grow with your inventory'
    ],
    keyFeatures: [
      'Interactive product image galleries and zoom capabilities',
      'Intuitive filter and search navigation systems',
      'Frictionless shopping cart drawers and sticky purchase bars',
      'Trust markers, transparent policies, and security indicators'
    ],
    targetAudience: [
      'Direct-to-Consumer (DTC) Brands',
      'Boutique Fashion & Luxury Goods',
      'Specialty Artisan & Hardware Creators',
      'International Digital Goods Merchants'
    ],
    deliverables: [
      'Storefront layout, collection grids, and product pages',
      'Interactive shopping cart drawer and checkout flow UX',
      'Mobile payment integration readiness',
      'Product catalog styling guidelines'
    ]
  },
  {
    id: 'wordpress-website-development',
    number: '04',
    title: 'WordPress Website Development',
    category: 'Content Management',
    iconName: 'Code2',
    shortDescription: 'Bespoke, lightweight WordPress solutions that give you full editorial control without bloat or slow performance.',
    fullDescription: 'Forget bloated off-the-shelf themes. I build custom, clean WordPress websites that empower your marketing team with intuitive content editing while maintaining military-grade performance, clean code, and robust security.',
    businessBenefits: [
      'Easy non-technical content management for your internal team',
      'Zero unnecessary plugin bloat ensuring lightning-fast load times',
      'Custom block templates built strictly around your brand guidelines',
      'Full ownership and portability of your site content and database'
    ],
    keyFeatures: [
      'Tailored Gutenberg block components matching your design system',
      'Custom post types and advanced taxonomies for complex data',
      'Hardened security configuration and automated backup guidance',
      'Clean PHP / modern React headless hybrid integration capability'
    ],
    targetAudience: [
      'Content-heavy Publications & Blogs',
      'Corporate Teams Needing Weekly Updates',
      'Non-profits and Educational Platforms',
      'Growing Small-to-Medium Businesses'
    ],
    deliverables: [
      'Custom WordPress theme development',
      'Modular Gutenberg blocks library',
      'Admin editorial training walkthrough & manual',
      'Security and SEO plugin optimization'
    ]
  },
  {
    id: 'ui-ux-design',
    number: '05',
    title: 'UI/UX Design',
    category: 'Product & Experience',
    iconName: 'Layers',
    shortDescription: 'Intuitive digital product interfaces, design systems, and user journeys shaped by empathy and behavioral ergonomics.',
    fullDescription: 'Exceptional digital experiences begin with deep empathy for the end user. I design comprehensive user interfaces and interaction systems for web applications, SaaS dashboards, and digital portals that make complex tasks effortless.',
    businessBenefits: [
      'Accelerated developer handoff with structured design tokens and components',
      'Reduced user churn through intuitive mental models and zero-friction flows',
      'Consistent brand experience across every digital touchpoint',
      'Validated usability reducing post-launch revision expenses'
    ],
    keyFeatures: [
      'Comprehensive design systems with accessible contrast ratios',
      'Interactive high-fidelity prototypes demonstrating micro-interactions',
      'User journey mapping and informational architecture blueprints',
      'Atomic component libraries with responsive state definitions'
    ],
    targetAudience: [
      'SaaS Founders & Product Teams',
      'Enterprise Web Portals',
      'Digital Agencies seeking Senior UI Design',
      'Web Application Developers needing UI Polish'
    ],
    deliverables: [
      'Complete UI component library and design system',
      'Interactive clickable user flows and prototypes',
      'Developer handoff documentation with spacing tokens',
      'Responsive viewports for mobile, tablet, and desktop'
    ]
  },
  {
    id: 'custom-website-design',
    number: '06',
    title: 'Custom Website Design',
    category: 'Bespoke Solutions',
    iconName: 'Compass',
    shortDescription: 'Unique, tailor-made digital experiences built from the ground up to reflect your exact brand distinction.',
    fullDescription: 'When off-the-shelf solutions cannot convey your uniqueness, custom website design provides the answer. Every layout, typography decision, color interplay, and animation is tailored specifically to your distinct business identity.',
    businessBenefits: [
      '100% differentiation from cookie-cutter competitor sites',
      'No technical debt or restrictive framework constraints',
      'Tailored functionality built around your exact commercial workflow',
      'Memorable brand experience that elevates your perceived value'
    ],
    keyFeatures: [
      'One-of-a-kind art direction and aesthetic composition',
      'Custom interactive calculators, selectors, or visualizers',
      'Handcrafted micro-animations that reward user curiosity',
      'Modern modular codebase engineered for longevity'
    ],
    targetAudience: [
      'Visionary Entrepreneurs & Founders',
      'Luxury Brands & Creative Studios',
      'Specialized Tech Companies',
      'Disruptive Startups'
    ],
    deliverables: [
      'Custom visual identity translated to the web',
      'Bespoke interactive component development',
      'Cross-device performance optimization',
      'Source code repository and full intellectual property transfer'
    ]
  },
  {
    id: 'website-redesign',
    number: '07',
    title: 'Website Redesign',
    category: 'Evolution & Modernization',
    iconName: 'RefreshCw',
    shortDescription: 'Transform outdated, sluggish websites into modern, high-performing engines that accurately reflect your current scale.',
    fullDescription: 'If your current website no longer reflects the caliber of your company, a strategic redesign transforms your digital presence. We identify friction points in your legacy site and rebuild it into a modern, responsive powerhouse.',
    businessBenefits: [
      'Restores modern market relevance and enterprise credibility',
      'Fixes legacy mobile responsiveness bugs and broken navigation',
      'Preserves and enhances existing search engine indexing and rankings',
      'Re-energizes conversion rates and inbound inquiry volume'
    ],
    keyFeatures: [
      'Thorough audit of existing analytics and drop-off bottlenecks',
      'Careful URL mapping and 301 redirect architecture',
      'Complete visual overhaul to modern minimalist luxury standards',
      'Performance overhaul targeting sub-second load benchmarks'
    ],
    targetAudience: [
      'Companies with 3+ year old static websites',
      'Businesses undergoing rebranding or market repositioning',
      'Brands losing mobile visitors to competitors',
      'Organizations facing high bounce rates'
    ],
    deliverables: [
      'Full visual and structural modernization',
      'Content migration and SEO preservation strategy',
      'Comparative before/after performance audit',
      'Seamless production launch with zero downtime'
    ]
  },
  {
    id: 'responsive-website-design',
    number: '08',
    title: 'Responsive Website Design',
    category: 'Cross-Device Mastery',
    iconName: 'Smartphone',
    shortDescription: 'Flawless presentation and seamless ergonomics across every screen size, from smartphones to 4K displays.',
    fullDescription: 'With over 60% of international web traffic originating on mobile, a website cannot merely "shrink down." I engineer fluid layouts where touch ergonomics, typography scales, and media elements feel native to every individual display.',
    businessBenefits: [
      'Flawless experience for decision-makers browsing on phones or tablets',
      'Google Mobile-First Indexing compliance for higher visibility',
      'Zero frustrating pinching, zooming, or layout clipping for users',
      'Consistently high conversion rates regardless of access device'
    ],
    keyFeatures: [
      'Fluid typographic scales (`clamp`) adapting smoothly to screen width',
      'Thumb-friendly touch zones complying with international accessibility (44px+)',
      'Adaptive image delivery that conserves mobile bandwidth',
      'Rigorous testing across iOS, Android, macOS, and Windows browsers'
    ],
    targetAudience: [
      'Any business catering to international mobile audiences',
      'Mobile-first e-commerce and retail concepts',
      'Companies with high social media traffic referrals',
      'Modern professional service firms'
    ],
    deliverables: [
      'Fluid multi-breakpoint CSS architecture',
      'Mobile-specific navigation and quick action menus',
      'Cross-device browser compatibility sign-off',
      'Touch target & accessibility verification'
    ]
  }
];

export const portfolioProjects: ProjectItem[] = [
  {
    id: 'aurum-horology',
    title: 'Aurum & Co. — Luxury Horology Store',
    category: 'E-commerce',
    shortDescription: 'Demonstration concept for a boutique Swiss timepiece and bespoke fragrance digital retail experience.',
    fullDescription: 'This demonstration project explores minimalist luxury e-commerce for high-ticket horology and artisan fragrances. Focused on deep black aesthetics, subtle champagne gold accents, and a frictionless 2-step checkout experience.',
    clientBrief: 'Demonstration Showcase: Crafted to exhibit high-end visual merchandising, custom product filtration, and seamless mobile commerce capabilities for international luxury brands.',
    designDecisions: [
      'Deep black canvas (#080808) to make product metal and glass finishes pop',
      'Subtle warm gold hairline borders reflecting traditional watch craftsmanship',
      'Minimalist typography paired with tabular figures for pricing precision',
      'Sticky purchase drawer allowing direct cart modification without page reload'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Stripe UX'],
    deliverables: ['Storefront Layout', 'Interactive Product Showcase', 'Cart Drawer UX', 'Mobile Ergonomics'],
    imageUrl: '/src/assets/images/demo_ecommerce_project_1793597540875.jpg',
    isPlaceholderDemo: true,
    year: '2026',
    scope: 'E-commerce Concept'
  },
  {
    id: 'aeterna-architects',
    title: 'Aeterna Architecture — Global Studio Platform',
    category: 'Business',
    shortDescription: 'Demonstration concept for an international architectural studio showcasing contemporary structures.',
    fullDescription: 'A demonstration case study in architectural storytelling. The platform showcases completed civic and residential structures through expansive full-width photography, asymmetric grid layouts, and clean typographic monographs.',
    clientBrief: 'Demonstration Showcase: Designed to demonstrate how corporate architectural and engineering firms can present complex project portfolios with clarity, restraint, and authority.',
    designDecisions: [
      'Monolithic grid layout allowing imagery to dominate without visual clutter',
      'Zero-pill metadata discipline with clean dot-separated specifications',
      'High-contrast typography using classical proportions and generous whitespace',
      'Interactive blueprint layer view for technical project drawings'
    ],
    technologies: ['React', 'Next-Gen CSS Grid', 'TypeScript', 'Responsive Image API'],
    deliverables: ['Editorial Grid Architecture', 'Project Case Studies', 'Contact & RFP Workflow', 'SEO Structure'],
    imageUrl: '/src/assets/images/demo_business_project_1793597541900.jpg',
    isPlaceholderDemo: true,
    year: '2026',
    scope: 'Corporate Identity'
  },
  {
    id: 'finvest-global',
    title: 'Finvest Global — Wealth & Asset Platform',
    category: 'UI/UX',
    shortDescription: 'Demonstration concept for an institutional wealth management dashboard and client portal.',
    fullDescription: 'A high-fidelity interface demonstration designed for institutional wealth managers and family offices. Balances dense tabular financial telemetry with modern obsidian glass aesthetics and instant readability.',
    clientBrief: 'Demonstration Showcase: Built to showcase complex data visualization, dashboard usability, and responsive charting interactions for fintech and enterprise SaaS clients.',
    designDecisions: [
      'Obsidian dark palette reducing eye fatigue during intensive portfolio reviews',
      'Tabular figures across all numerical values for instant vertical scanning',
      'Champagne gold accent curve highlighting growth metrics without aggressive neon',
      'Strict single-elevation card hierarchy maintaining spatial clarity'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'SVG Chart Engine', 'Figma Tokens'],
    deliverables: ['Executive Overview UI', 'Interactive Portfolio Chart', 'Asset Breakdown Modules', 'Design System'],
    imageUrl: '/src/assets/images/demo_saas_project_1793597540977.jpg',
    isPlaceholderDemo: true,
    year: '2026',
    scope: 'Product & Dashboard'
  },
  {
    id: 'luminary-creative',
    title: 'Luminary Media — Production Showreel & Agency',
    category: 'Custom Web',
    shortDescription: 'Demonstration concept for a boutique film production studio and creative agency.',
    fullDescription: 'Demonstration showcase built around dynamic media playback, subtle scroll-linked interactions, and an editorial dark aesthetic tailored for creative directors, cinematography houses, and motion studios.',
    clientBrief: 'Demonstration Showcase: Demonstrates custom animation pacing, video backdrop integration, and bespoke client presentation architecture.',
    designDecisions: [
      'Stark minimalist framing letting video stills and showreel previews lead',
      'Custom horizontal reel scroll interaction with smooth kinetic physics',
      'Editorial serif display typography for artistic distinction',
      'Lightweight SVG micro-controls with zero UI bloat'
    ],
    technologies: ['React', 'TypeScript', 'Motion', 'Video Scrim System'],
    deliverables: ['Custom Showreel Grid', 'Client Credits Matrix', 'Inquiry Drawer', 'Asset Optimization'],
    imageUrl: '/src/assets/images/about_designer_studio_1793597539170.jpg',
    isPlaceholderDemo: true,
    year: '2026',
    scope: 'Bespoke Experience'
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Planning',
    tagline: 'Laying the Strategic Foundation',
    description: 'We begin with a deep dive into your business objectives, target audience, competitive landscape, and functional requirements. We define the technical architecture, content strategy, and project milestones.',
    activities: [
      'In-depth business & audience discovery interview',
      'Technical requirements & platform selection',
      'Sitemap, content outline, and wireframe blueprinting',
      'Clear project timeline and deliverable roadmap'
    ]
  },
  {
    number: '02',
    title: 'Design & Strategy',
    tagline: 'Translating Vision into Visual Precision',
    description: 'I craft bespoke design directions that embody your brand identity. Using modern minimalist principles, refined typography, and purposeful layouts, we build interactive prototypes that reflect your exact distinction.',
    activities: [
      'Bespoke visual mood boards & typography system',
      'High-fidelity interactive prototype design',
      'Responsive viewports for mobile, tablet, and desktop',
      'Collaborative review and revision checkpoints'
    ]
  },
  {
    number: '03',
    title: 'Development & Testing',
    tagline: 'Clean Code, Pixel-Perfect Execution',
    description: 'Your approved design is engineered into clean, semantic, and high-performance code. Every interaction is tested across real browsers, mobile devices, and screen sizes to ensure effortless usability and speed.',
    activities: [
      'Modern, component-driven frontend architecture',
      'Cross-browser and multi-device responsiveness testing',
      'Speed optimization, asset compression, and SEO foundation',
      'Interactive form validation and tracking integration'
    ]
  },
  {
    number: '04',
    title: 'Launch & Delivery',
    tagline: 'Flawless Go-Live & Ongoing Confidence',
    description: 'We deploy your website to high-performance production hosting, connect custom domains, verify SSL certificates, and configure SEO indexing. Complete documentation is provided so you move forward with absolute confidence.',
    activities: [
      'Production deployment and DNS record configuration',
      'Search engine sitemap submission & Google Search Console verification',
      'Comprehensive code handover & client documentation walkthrough',
      'Post-launch stability check and ongoing support options'
    ]
  }
];

export const whyWorkWithMeItems: ValueItem[] = [
  {
    title: 'Modern Design Approach',
    description: 'Sophisticated minimalist aesthetics rooted in international design standards—no generic templates, no AI-slop cliches, and no visual clutter.',
    iconName: 'Sparkles'
  },
  {
    title: 'User-Focused Experiences',
    description: 'Every interaction, button position, and typographic hierarchy is intentionally structured around real user psychology and business conversion goals.',
    iconName: 'Compass'
  },
  {
    title: 'Responsive Development',
    description: 'Flawless fidelity across every viewport, from compact smartphones to 4K desktop monitors, with thumb-friendly touch targets and rapid load times.',
    iconName: 'Smartphone'
  },
  {
    title: 'Attention to Detail',
    description: 'Meticulous typographic tracking, consistent hairline borders, balanced negative space, and refined micro-interactions that elevate brand trust.',
    iconName: 'Eye'
  },
  {
    title: 'Professional Communication',
    description: 'Clear milestones, timely international status updates, transparent scope definitions, and responsive collaboration across global time zones.',
    iconName: 'MessageSquare'
  },
  {
    title: 'Quality-Focused Delivery',
    description: 'Clean, maintainable, standards-compliant code with robust SEO structure, zero console errors, and guaranteed post-launch technical integrity.',
    iconName: 'ShieldCheck'
  }
];

export const professionalValues: ValueItem[] = [
  {
    title: 'Purity of Purpose',
    description: 'Great design is not about adding elements until nothing more can fit; it is achieved when nothing more can be removed without compromising clarity and business utility.',
    iconName: 'Target'
  },
  {
    title: 'Engineering Rigor',
    description: 'Visual elegance is meaningless if code is sluggish or brittle. I treat web development as a craft, writing maintainable, accessible, and fast codebases.',
    iconName: 'Cpu'
  },
  {
    title: 'Global Client Respect',
    description: 'Working with international founders demands absolute reliability, punctual delivery, clear timezone overlap, and mutual accountability.',
    iconName: 'Globe'
  },
  {
    title: 'Measurable Outcomes',
    description: 'A website should not just be admired—it must generate inquiries, establish market authority, and deliver quantifiable return on investment.',
    iconName: 'TrendingUp'
  }
];
