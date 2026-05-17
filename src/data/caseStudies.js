import {
  Code,
  BarChart2,
  MessageSquare,
  Monitor,
  Search,
  Zap,
} from "react-feather";

export const caseStudies = [
  {
    id: 1,
    slug: "business-website-redesign",
    title: "Business Website Redesign",
    category: "Web Development",
    shortDescription:
      "A modern responsive website built to improve brand trust, speed, and customer enquiries.",
    heroSummary:
      "SkillSprint Technologies redesigned a business website with a faster, cleaner, mobile-friendly structure focused on trust, SEO, and customer enquiries.",
    clientType: "Service Business",
    timeline: "3 Weeks",
    mainResult: "40% faster page load",
    servicesUsed: ["Web Development", "SEO", "Responsive Design"],
    challenge:
      "The business had an outdated website with slow loading speed, weak mobile experience, and unclear service presentation. Visitors were not converting into enquiries because the page structure and CTAs were not strong enough.",
    solution:
      "We rebuilt the website with a modern responsive layout, optimized page structure, stronger service sections, lightweight assets, clear call-to-action buttons, and SEO-friendly content hierarchy.",
    processSteps: [
      {
        title: "Discovery",
        description:
          "Reviewed the old website, business goals, target audience, and conversion issues.",
      },
      {
        title: "Planning",
        description:
          "Created a cleaner page structure with better content flow and CTA placement.",
      },
      {
        title: "Design",
        description:
          "Designed a modern responsive interface with brand-focused visuals.",
      },
      {
        title: "Development",
        description:
          "Built optimized frontend sections with fast loading and clean code.",
      },
      {
        title: "Launch",
        description:
          "Tested responsiveness, speed, SEO basics, and deployed the final version.",
      },
    ],
    keyFeatures: [
      "Responsive website layout",
      "SEO-friendly page structure",
      "Fast loading sections",
      "Clear CTA placement",
      "Modern brand-focused UI",
      "Mobile-first experience",
    ],
    results: [
      {
        metric: "40%",
        label: "Faster Page Load",
      },
      {
        metric: "Better",
        label: "Mobile Experience",
      },
      {
        metric: "Improved",
        label: "CTA Visibility",
      },
      {
        metric: "Stronger",
        label: "Brand Trust",
      },
    ],
    techStack: ["React", "Tailwind CSS", "SEO", "Responsive Design"],
    tags: ["React", "Responsive", "SEO"],
    metric: "40% faster page load",
    icon: Code,
    gradient: "from-[#374b82]/20 to-[#4f68b3]/10",
    reportPdf: "/reports/business-website-redesign.pdf",
    whatsappMessage:
      "Hi SkillSprint Technologies, I want to know more about your Business Website Redesign case study.",
  },
  {
    id: 2,
    slug: "lead-generation-campaign",
    title: "Lead Generation Campaign",
    category: "Digital Marketing",
    shortDescription:
      "A targeted digital campaign designed to improve online visibility and qualified customer leads.",
    heroSummary:
      "SkillSprint Technologies planned and optimized a lead generation campaign to improve visibility, landing page clarity, and enquiry quality.",
    clientType: "Local Business",
    timeline: "4 Weeks",
    mainResult: "2.5x enquiry growth",
    servicesUsed: ["Digital Marketing", "SEO", "Landing Page Optimization"],
    challenge:
      "The business was getting online visitors but very few serious enquiries. The landing page lacked clarity, campaign targeting was broad, and the enquiry flow was not optimized.",
    solution:
      "We improved the campaign structure, optimized landing page content, added stronger CTAs, improved keyword targeting, and created a cleaner enquiry journey for potential customers.",
    processSteps: [
      {
        title: "Research",
        description:
          "Studied audience intent, competitors, keywords, and existing campaign gaps.",
      },
      {
        title: "Strategy",
        description:
          "Planned campaign structure, targeting, landing page flow, and CTA placement.",
      },
      {
        title: "Optimization",
        description:
          "Improved page content, campaign messaging, and enquiry conversion points.",
      },
      {
        title: "Tracking",
        description:
          "Added basic performance tracking for campaign and enquiry measurement.",
      },
      {
        title: "Improvement",
        description:
          "Refined campaign direction based on early performance insights.",
      },
    ],
    keyFeatures: [
      "Keyword-focused campaign structure",
      "Landing page improvement",
      "Clear enquiry CTA flow",
      "Performance tracking setup",
      "Audience-focused messaging",
      "SEO-ready content structure",
    ],
    results: [
      {
        metric: "2.5x",
        label: "Enquiry Growth",
      },
      {
        metric: "Better",
        label: "Lead Quality",
      },
      {
        metric: "Higher",
        label: "CTA Engagement",
      },
      {
        metric: "Improved",
        label: "Online Visibility",
      },
    ],
    techStack: ["SEO", "Google Ads", "Analytics", "Landing Page"],
    tags: ["SEO", "Ads", "Analytics"],
    metric: "2.5x enquiry growth",
    icon: BarChart2,
    gradient: "from-[#374b82]/15 to-[#5c7ac8]/10",
    reportPdf: "/reports/lead-generation-campaign.pdf",
    whatsappMessage:
      "Hi SkillSprint Technologies, I want to know more about your Lead Generation Campaign case study.",
  },
  {
    id: 3,
    slug: "customer-support-chatbot",
    title: "Customer Support Chatbot",
    category: "Automation",
    shortDescription:
      "An automated chatbot flow that helps customers get quick answers and reduces manual support effort.",
    heroSummary:
      "SkillSprint Technologies created a chatbot support flow to answer repeated customer questions, collect enquiries, and reduce manual response effort.",
    clientType: "Service Team",
    timeline: "2 Weeks",
    mainResult: "24/7 response system",
    servicesUsed: ["Chatbot Automation", "Workflow Automation", "Support Flow"],
    challenge:
      "The team was spending too much time answering repeated questions manually. Customers also had to wait for basic information like services, availability, and contact details.",
    solution:
      "We created a structured chatbot flow with FAQs, service information, enquiry collection, and automated response paths to improve customer support availability.",
    processSteps: [
      {
        title: "FAQ Mapping",
        description:
          "Collected repeated customer questions and grouped them into support flows.",
      },
      {
        title: "Flow Planning",
        description:
          "Designed conversation paths for services, enquiries, and support topics.",
      },
      {
        title: "Automation",
        description:
          "Built chatbot responses and enquiry collection logic.",
      },
      {
        title: "Testing",
        description:
          "Tested user flows, fallback messages, and common customer journeys.",
      },
      {
        title: "Launch",
        description:
          "Delivered a ready-to-use chatbot support system.",
      },
    ],
    keyFeatures: [
      "Automated FAQ responses",
      "Service enquiry collection",
      "24/7 customer support flow",
      "Simple fallback messages",
      "Lead capture ready",
      "Reduced manual replies",
    ],
    results: [
      {
        metric: "24/7",
        label: "Response Availability",
      },
      {
        metric: "Reduced",
        label: "Manual Support",
      },
      {
        metric: "Faster",
        label: "Customer Replies",
      },
      {
        metric: "Better",
        label: "Enquiry Handling",
      },
    ],
    techStack: ["Chatbot", "Automation", "CRM Flow", "Support System"],
    tags: ["Chatbot", "Automation", "CRM"],
    metric: "24/7 response system",
    icon: MessageSquare,
    gradient: "from-[#2f3f70]/20 to-[#374b82]/10",
    reportPdf: "/reports/customer-support-chatbot.pdf",
    whatsappMessage:
      "Hi SkillSprint Technologies, I want to know more about your Customer Support Chatbot case study.",
  },
];