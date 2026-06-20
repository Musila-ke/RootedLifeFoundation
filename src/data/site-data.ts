export const stats = [
  { value: "100+", label: "Warriors Supported" },
  { value: "50+", label: "Community Events" },
  { value: "30+", label: "Partner Organizations" },
  { value: "10K+", label: "Lives Reached" },
] as const;

export const programs = [
  {
    title: "Warrior Support Network",
    tagline: "Community-Centered Mentorship",
    description:
      "A peer mentorship program connecting newly diagnosed individuals with trained warrior mentors who provide emotional support, resource navigation, and lived-experience guidance.",
    href: "/programs#warrior-support",
    image: "/images/programs-support.jpg",
  },
  {
    title: "Education & Awareness",
    tagline: "Knowledge is Power",
    description:
      "School-based and community workshops that demystify sickle cell disease, combat stigma, and promote early diagnosis through culturally competent health education.",
    href: "/programs#education",
    image: "/images/programs-education.jpg",
  },
  {
    title: "Environmental Justice Initiative",
    tagline: "Clean Air, Healthy Lives",
    description:
      "Addressing environmental triggers by planting trees, improving indoor air quality, and advocating for cleaner neighborhoods in communities disproportionately affected by SCD.",
    href: "/programs#environmental",
    image: "/images/programs-environmental.jpg",
  },
  {
    title: "Advocacy & Policy",
    tagline: "Systemic Change",
    description:
      "Amplifying the voices of sickle cell warriors in policy conversations — from healthcare access to environmental justice — at local, state, and national levels.",
    href: "/programs#advocacy",
    image: "/images/programs-advocacy.jpg",
  },
] as const;

export const events = [
  {
    title: "Annual SCD Awareness Walk",
    date: "September 19, 2026",
    location: "Freedom Park, Charlotte NC",
    description:
      "Join hundreds of warriors, families, and allies for our flagship awareness walk. Music, speakers, resource fair, and community celebration.",
    href: "/events#awareness-walk",
    type: "Flagship",
  },
  {
    title: "Warrior Wellness Workshop",
    date: "October 10, 2026",
    location: "Virtual",
    description:
      "A half-day virtual workshop on pain management strategies, nutrition for SCD, mental health support, and navigating insurance.",
    href: "/events#wellness-workshop",
    type: "Workshop",
  },
  {
    title: "Tree Planting Day",
    date: "November 7, 2026",
    location: "Westside Community, Charlotte NC",
    description:
      "Hands-on community reforestation to improve air quality in neighborhoods with high SCD prevalence. Tools, trees, and training provided.",
    href: "/events#tree-planting",
    type: "Environmental",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Rooted Life didn't just give me resources — they gave me a community. For the first time, I felt like I wasn't navigating this alone.",
    author: "Tanya R.",
    role: "SCD Warrior & Mentor",
  },
  {
    quote:
      "The environmental justice work opened my eyes. Since the tree planting in our neighborhood, I've noticed fewer crises. This is life-changing.",
    author: "Kevin A.",
    role: "Community Advocate",
  },
  {
    quote:
      "As a parent of a warrior, the support network gave me tools I didn't know existed. I finally have hope.",
    author: "Sharon M.",
    role: "Parent of SCD Warrior",
  },
] as const;

export const blogPosts = [
  {
    title: "Understanding Sickle Cell Crises: What's Happening in the Body",
    excerpt:
      "A deep dive into the biology of sickling, triggers for crises, and what modern pain management looks like.",
    date: "May 28, 2026",
    author: "Dr. Amina Diallo",
    href: "/blog/understanding-sickle-cell-crises",
    category: "Education",
  },
  {
    title: "Clean Air, Stronger Warriors: Our Tree Planting Impact",
    excerpt:
      "How 500 new trees are already improving air quality in Charlotte's SCD-heavy neighborhoods — and what's next.",
    date: "April 15, 2026",
    author: "Chen Wei",
    href: "/blog/clean-air-stronger-warriors",
    category: "Environmental",
  },
  {
    title: "Warrior Spotlight: Malik's Journey from Patient to Advocate",
    excerpt:
      "After decades of managing SCD in silence, Malik Johnson turned his pain into purpose. His story is why we do this work.",
    date: "March 22, 2026",
    author: "Rooted Life Team",
    href: "/blog/warrior-spotlight-malik",
    category: "Warrior Stories",
  },
  {
    title: "Finding Strength in Community: Tanya's Story",
    excerpt:
      "After years of managing SCD in silence, Tanya found a support network that changed everything. Now she mentors other warriors.",
    date: "February 10, 2026",
    author: "Rooted Life Team",
    href: "/blog/warrior-spotlight-tanya",
    category: "Warrior Stories",
  },
  {
    title: "Breathing Easier: Kevin's Story",
    excerpt:
      "After the tree planting initiative came to his neighborhood, Kevin noticed a real difference in his quality of life.",
    date: "January 18, 2026",
    author: "Rooted Life Team",
    href: "/blog/warrior-spotlight-kevin",
    category: "Warrior Stories",
  },
] as const;

export const impactSections = [
  {
    title: "Warriors Supported",
    description:
      "Direct one-on-one mentorship, resource navigation, and emotional support for individuals and families managing sickle cell disease.",
    stat: "100+",
    detail: "Active warrior-mentor matches",
  },
  {
    title: "Community Events",
    description:
      "Awareness walks, wellness workshops, school programs, and cultural events that bring the community together around SCD education.",
    stat: "50+",
    detail: "Events since founding",
  },
  {
    title: "Partner Organizations",
    description:
      "Hospitals, schools, faith institutions, environmental groups, and policy organizations working alongside us to advance health equity.",
    stat: "30+",
    detail: "Active partnerships",
  },
  {
    title: "Trees Planted",
    description:
      "Native trees planted in neighborhoods with high SCD prevalence to improve air quality and reduce environmental triggers.",
    stat: "500+",
    detail: "Trees across Charlotte",
  },
] as const;

export const partners = [
  { name: "Atrium Health", category: "Healthcare" },
  { name: "SCDAA of the Carolinas", category: "Nonprofit" },
  { name: "Clean Air Carolina", category: "Environmental" },
  { name: "Johnson C. Smith University", category: "Education" },
  { name: "Novant Health", category: "Healthcare" },
  { name: "American Red Cross", category: "Healthcare" },
] as const;

export const teamMembers = [
  { name: "Dr. Amina Diallo", role: "Executive Director", bio: "Hematologist and public health advocate." },
  { name: "Malik Johnson", role: "Programs Director", bio: "SCD warrior and peer support pioneer." },
  { name: "Chen Wei", role: "Environmental Health Lead", bio: "Air quality and climate justice specialist." },
  { name: "Rosa Garcia", role: "Community Outreach Coordinator", bio: "Bilingual organizer serving BIPOC communities." },
  { name: "Darnell Flowers", role: "Board Chair", bio: "Healthcare administration leader." },
  { name: "Dr. Lisa Park", role: "Medical Advisor", bio: "Pediatric hematologist-oncologist." },
];

export const volunteerRoles = [
  { title: "Event Volunteer", commitment: "4-6 hours per event", description: "Help set up, run, and break down community events and awareness walks." },
  { title: "Mentor", commitment: "2 hours per week", description: "Provide one-on-one support to SCD warriors navigating their journey." },
  { title: "Workshop Facilitator", commitment: "3 hours per month", description: "Lead educational sessions on SCD management, advocacy, or wellness." },
  { title: "Administrative Support", commitment: "5-10 hours per week", description: "Assist with donor management, communications, and program coordination." },
  { title: "Tree Planting Volunteer", commitment: "Per event", description: "Join our environmental team for community tree planting and greening projects." },
];

export const supportServices = [
  { title: "Peer Mentorship", description: "Connect with trained mentors who understand the warrior journey firsthand." },
  { title: "Resource Navigation", description: "Help with insurance, disability benefits, treatment access, and financial aid." },
  { title: "Support Groups", description: "Virtual and in-person groups for warriors, parents, caregivers, and siblings." },
  { title: "Educational Materials", description: "Free guides on pain management, nutrition, crisis planning, and school advocacy." },
  { title: "Mental Health Support", description: "Counseling referrals and wellness workshops tailored to the SCD community." },
];
