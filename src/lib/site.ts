export const site = {
  name: "ZynorTech Digital Solutions",
  shortName: "ZYNORTECH",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zynortech.com",
  description:
    "ZynorTech is a digital marketing agency in Chennai offering social media management, Instagram growth, Meta & Google Ads, website development, video production and branding.",
  phone: "+91 8940421562",
  whatsapp: "918940421562",
  email: "Zynortech0007c@gmail.com",
  address: { locality: "Chennai", region: "Tamil Nadu", country: "IN" },
  instagram: "https://www.instagram.com/zynortech_digitalpartner?stkn=ZDg5Mmh3YWQ2MGlp",
};

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hi! I'd like to know more about your services."
)}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  // { label: "Portfolio", href: "/portfolio" },
  { label: "Contact Us", href: "/contact" },
];

export const legalNav = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export const stats = [
  { value: "50+", label: "Happy Clients" },
  { value: "150+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

export const services = [
  {
    slug: "social-media-management", category: "marketing", title: "Social Media Management",
    text: "We handle your social media, you focus on your business.",
    intro: "A consistent, on-brand presence across every platform your customers use, planned and run by our team.",
    includes: ["Monthly content calendar", "Post design & captions", "Reels and stories", "Community replies & page handling", "Monthly performance report"],
  },
  {
    slug: "instagram-growth", category: "marketing", title: "Instagram Growth",
    text: "Grow real followers, boost engagement, build your brand.",
    intro: "Organic, audience-first growth that brings in real followers who engage and buy.",
    includes: ["Profile & bio optimisation", "Hashtag and niche research", "Reels-first content strategy", "Engagement and collaboration outreach", "Weekly insights review"],
  },
  {
    slug: "meta-ads", category: "marketing", title: "Meta Ads",
    text: "Target the right audience and get better conversions.",
    intro: "Facebook and Instagram campaigns built around your customers, budget and goals.",
    includes: ["Audience research & targeting", "Ad creative and copy", "Lead-gen and sales campaigns", "Pixel & conversion tracking", "A/B testing and optimisation"],
  },
  {
    slug: "google-ads", category: "marketing", title: "Google Ads",
    text: "Rank higher, reach more customers, grow your business.",
    intro: "Show up when customers are actively searching for what you sell.",
    includes: ["Keyword research", "Search, display and local campaigns", "Ad copy and landing-page advice", "Conversion tracking", "Budget and bid optimisation"],
  },
  {
    slug: "website-development", category: "build", title: "Website Development",
    text: "Fast, responsive & SEO friendly websites that convert.",
    intro: "Modern websites that load fast, look right on every device and turn visitors into enquiries.",
    includes: ["Custom, mobile-first design", "SEO-ready structure", "Contact forms & WhatsApp integration", "Speed optimisation", "Hosting and launch support"],
  },
  {
    slug: "mobile-app-development", category: "build", title: "Mobile App Development",
    text: "Android & iOS apps that bring your business to your customer's pocket.",
    intro: "Custom mobile apps designed and built around what your business and customers actually need.",
    includes: ["Android & iOS apps", "UI/UX design", "Backend & API integration", "App store listing & launch", "Ongoing updates & support"],
  },
  {
    slug: "video-shoot", category: "creative", title: "Video Shoot",
    text: "Professional shoots that showcase your brand's story.",
    intro: "On-location and studio shoots that give your brand standout visuals.",
    includes: ["Concept and scripting", "Product, business and reel shoots", "Professional camera and lighting", "Direction on the day", "Raw footage handover"],
  },
  {
    slug: "video-editing", category: "creative", title: "Video Editing",
    text: "Cinematic edits that engage and convert.",
    intro: "Scroll-stopping edits for reels, ads and YouTube, tuned for each platform.",
    includes: ["Reels and short-form edits", "Colour grading and sound", "Captions and motion graphics", "Ad-ready cuts", "Fast turnaround"],
  },
  {
    slug: "content-creation", category: "creative", title: "Content Creation",
    text: "Creative content that connects and converts.",
    intro: "Ideas, copy and visuals that tell your story and give people a reason to act.",
    includes: ["Content ideas and scripts", "Copywriting", "Photo and graphic creatives", "Festival and offer posts", "Brand-voice guidelines"],
  },
  {
    slug: "branding", category: "creative", title: "Branding",
    text: "Build a strong brand identity that stands out.",
    intro: "A clear identity, from logo to tone of voice, that makes your business memorable.",
    includes: ["Logo and visual identity", "Colour and typography system", "Brand guidelines", "Stationery and social kits", "Brand messaging"],
  },
  {
    slug: "graphic-design", category: "creative", title: "Graphic Design",
    text: "Stunning designs that speak your brand.",
    intro: "Designs for print and digital that keep your brand consistent everywhere.",
    includes: ["Social media creatives", "Posters, banners & brochures", "Ad creatives", "Presentations", "Print-ready files"],
  },
];

export const portfolioFilters = ["All", "Social Media", "Website Development"];

export const portfolio = [
  { slug: "overlay-1", title: "Zynortech", tagline: "Glow Naturally", category: "Social Media", instagramUrl: site.instagram, image: "/images/overlay_1.png" },
  { slug: "overlay-2", title: "Zynortech", tagline: "Modern Living", category: "Website Development", instagramUrl: site.instagram, image: "/images/overlay_2.png" },
];

export const clients = [
  { name: "Vetri Home Appliances", logo: "/images/vetri_logo.png", instagramUrl: "https://www.instagram.com/vetrideals?stkn=MW95enNoZmlicnc2aw==" },
  { name: "Mikado Fitness", logo: "/images/gym_logo.png", instagramUrl: "https://www.instagram.com/mikado_fitness_studio?stkn=MTN1YTJmbjhraGp5dA==2" },
  { name: "Jaiwin Dairy Products", logo: "/images/bavin_logo.png", instagramUrl: "https://www.instagram.com/bavin_ghee/" },
  { name: "M&T Miniatures & Toys", logo: "/images/mt_logo.png", instagramUrl: "https://www.instagram.com/miniaturestoy__s/" },
];

export const testimonials = [
  { quote: "Zynortech transformed our online presence. Leads and sales increased drastically!", name: "Priya Sharma", role: "Beauty Parlour" },
  { quote: "Their content and ad strategies are top-notch. Highly recommended!", name: "Aravind Kumar", role: "Jewellery Shop" },
  { quote: "Professional team, creative ideas and excellent support.", name: "Karthik Rajan", role: "Fitness Studio" },
];

export const whyUs = [
  { title: "Result Driven Strategies", text: "Campaigns built around real leads and sales, not vanity metrics." },
  { title: "Creative & Trusted Team", text: "Skilled marketers and designers you can rely on." },
  { title: "On-Time Delivery", text: "Content, campaigns and reports delivered on schedule, every time." },
  { title: "Affordable Packages", text: "Plans that fit growing businesses, with no hidden costs." },
  { title: "24/7 Support & Guidance", text: "A team that's reachable whenever you need help." },
];

export const processSteps = [
  { title: "Understand Your Business", text: "We start with your goals, audience and competitors." },
  { title: "Plan & Strategy", text: "A clear plan built around what will actually move the needle." },
  { title: "Create & Execute", text: "Content, campaigns and builds go live, on schedule." },
  { title: "Monitor & Optimize", text: "We track performance and refine what's working." },
  { title: "Deliver Results", text: "Regular reporting on leads, sales and growth." },
];

export const faqs = [
  { q: "How long does it take to see results?", a: "Most clients see improved engagement within 4–6 weeks; ad-driven leads can begin within the first week of launch." },
  { q: "Which platforms do you manage?", a: "Instagram, Facebook, YouTube, LinkedIn and Google Business Profile, plus Meta and Google Ads." },
  { q: "Can I get custom packages?", a: "Yes. Choose the Custom Package and tell us your goals; we'll shape a plan and quote around it." },
  { q: "Do you provide content & images?", a: "Yes. We handle shoots, video editing, graphic design and copywriting end to end." },
];

// TODO: placeholder team — swap in real names, designations, bios and
// photos (set `image` to a /images/... path) once available.
export const team = [
  {
    name: "Team Member", role: "Designation", image: null,
    bio: "[Placeholder bio — a couple of sentences on this person's role, experience and what they focus on at ZynorTech.]",
  },
  {
    name: "Team Member", role: "Designation", image: null,
    bio: "[Placeholder bio — a couple of sentences on this person's role, experience and what they focus on at ZynorTech.]",
  },
  {
    name: "Team Member", role: "Designation", image: null,
    bio: "[Placeholder bio — a couple of sentences on this person's role, experience and what they focus on at ZynorTech.]",
  },
];

export const values = [
  { title: "Results First", text: "Every plan is tied to leads, sales or enquiries, not vanity numbers." },
  { title: "Transparent", text: "Clear reporting and honest advice, with no hidden work." },
  { title: "Creative", text: "Fresh ideas and quality visuals that fit your brand." },
  { title: "Reliable", text: "On-time delivery and a team you can reach when you need us." },
];
