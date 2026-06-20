import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/site-data";

const blogContent: Record<string, { body: string[] }> = {
  "understanding-sickle-cell-crises": {
    body: [
      "Sickle cell disease affects millions worldwide, yet many people — including some who live with it — don't fully understand what happens in the body during a crisis. A sickle cell crisis occurs when sickle-shaped red blood cells block blood flow to tissues, causing severe pain and potential organ damage.",
      "The sickling process is triggered by low oxygen levels in the blood. When sickle hemoglobin (HbS) loses oxygen, it polymerizes into rigid rods that deform the red blood cell into a crescent or sickle shape. These misshapen cells are less flexible than normal red blood cells and get stuck in small blood vessels.",
      "Common triggers include dehydration, cold or hot weather extremes, high altitude, infections, stress, and physical overexertion. Each person's triggers can be different, which is why personalized care plans are essential.",
      "Modern pain management for sickle cell crises has evolved significantly. Treatment now includes individualized pain plans that combine non-opioid and opioid medications, alongside non-pharmacological approaches like heat therapy, hydration, distraction techniques, and cognitive behavioral therapy.",
      "At Rooted Life Foundation, we work to ensure every warrior has access to a comprehensive pain management plan and understands their own triggers. Knowledge is the first line of defense.",
    ],
  },
  "clean-air-stronger-warriors": {
    body: [
      "In April 2026, Rooted Life Foundation completed the planting of 500 native trees across Charlotte neighborhoods with the highest prevalence of sickle cell disease. This milestone represents a major step in our Environmental Justice Initiative, which addresses the link between air quality and SCD crisis frequency.",
      "Research has shown that poor air quality — particularly particulate matter and ozone — can trigger sickle cell crises. Communities of color, which bear a disproportionate burden of SCD, are also more likely to be located near highways, industrial facilities, and other sources of air pollution.",
      "Our tree planting strategy focused on three high-impact corridors in Charlotte's west and north sides, where SCD prevalence is highest. Each tree was selected for its air-purifying capacity: oaks, maples, and dogwoods that absorb significant CO₂ and trap particulate matter.",
      "Early monitoring data from sensors installed near planting sites shows a measurable improvement in local air quality. Particulate matter (PM2.5) levels have dropped by an average of 8% in the immediate vicinity of planting clusters. Residents have reported fewer crises and better breathing days.",
      "This is just the beginning. Our goal is to plant 2,000 trees by 2028 and advocate for green infrastructure investments in every neighborhood with elevated SCD rates. Clean air is a health equity issue, and we're committed to fighting for it.",
    ],
  },
  "warrior-spotlight-malik": {
    body: [
      "Malik Johnson was diagnosed with sickle cell disease at six months old. For decades, he managed his condition in relative silence, navigating frequent hospitalizations, chronic pain, and the isolation that comes with a disease most people don't understand.",
      "Everything changed when he walked into a support group meeting and realized he wasn't alone. 'For the first time, I met people who didn't need me to explain what a crisis felt like. They just knew,' Malik says.",
      "Today, Malik serves as our Programs Director, building the peer mentorship infrastructure that reaches hundreds of families across the Carolinas. His personal experience with SCD gives him a credibility and empathy that no degree can replace.",
      "'The system wasn't designed for us,' he says. 'So we have to design our own. Peer support, education, environmental justice — these aren't separate issues. They're all part of what it means to actually care for someone with SCD.'",
      "Malik's journey from patient to advocate to leader embodies the mission of Rooted Life Foundation. His story reminds us that the most powerful resource in the SCD community is the community itself.",
    ],
  },
  "warrior-spotlight-tanya": {
    body: [
      "For years, Tanya R. managed her sickle cell disease in silence. The pain crises, the missed work, the hospital visits, the exhaustion — she carried it all without letting most people in her life know what she was going through.",
      "'I didn't want to be seen as weak or like I was making excuses,' she says. 'There's so much stigma around chronic illness, especially in the Black community. You're supposed to be strong and push through.'",
      "Tanya's turning point came when she attended a Rooted Life Foundation community workshop. For the first time, she saw other warriors — people who looked like her, talked like her, and shared her experiences — standing openly and proudly.",
      "She joined a support group, then became a mentor herself. Now she helps newly diagnosed warriors navigate the emotional and practical challenges of life with SCD. 'The first thing I tell them is: you're not alone. That's the most important message.'",
      "'Rooted Life didn't just give me resources,' Tanya says. 'They gave me a community. For the first time, I felt like I wasn't navigating this alone.'",
    ],
  },
  "warrior-spotlight-kevin": {
    body: [
      "Kevin A. grew up in a Charlotte neighborhood with one of the highest rates of sickle cell disease in the state. He also grew up near a major highway, breathing air that made his condition worse.",
      "'I always knew the air felt heavy, but I didn't connect it to my crises until I started tracking them,' Kevin says. 'The bad days lined up with the bad air days.'",
      "When the Rooted Life Foundation launched its tree planting initiative, Kevin's neighborhood was one of the first targeted. Native trees were planted along streets, near schools, and in community spaces — creating green buffers against air pollution.",
      "The impact was noticeable within months. Kevin tracked his crisis frequency before and after the planting. 'I went from having two or three crises a month to maybe one every other month. That's not a coincidence. That's cleaner air.'",
      "Kevin is now a community advocate, speaking at events about the connection between environmental justice and health equity. 'This isn't just about trees,' he says. 'It's about saying every neighborhood deserves to be healthy. Every warrior deserves to breathe easy.'",
    ],
  },
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.href.replace("/blog/", ""),
  }));
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <div className="min-h-screen bg-white">
      <BlogPostContent params={params} />
    </div>
  );
}

async function BlogPostContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.href === `/blog/${slug}`);
  const content = blogContent[slug];

  if (!post || !content) notFound();

  return (
    <>
      <section className="relative bg-brand-950 pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.12)_0%,transparent_60%)]" />
        <div className="container-page relative z-10">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-1 text-sm text-neutral-400 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <span className="block text-xs font-semibold tracking-[0.15em] text-brand-400 uppercase">
            {post.category}
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-4 text-sm text-neutral-400">
            <span>By {post.author}</span>
            <span className="h-1 w-1 rounded-full bg-neutral-600" />
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
              {content.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-16 border-t border-neutral-200 pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back to all articles
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
