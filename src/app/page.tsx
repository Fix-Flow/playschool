import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import WaveDivider from "@/components/WaveDivider";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import GalleryGrid from "@/components/GalleryGrid";
import FAQAccordion from "@/components/FAQAccordion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import {
  Sparkles,
  BookOpen,
  Users,
  Palette,
  Music,
  Trophy,
  Camera,
  Star,
  ClipboardCheck,
  Heart,
  TreePine,
  Dumbbell,
  HelpCircle,
} from "lucide-react";

/* ─── Section Wrapper ───────────────────────────────────────── */
function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`py-20 sm:py-24 lg:py-28 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

function SectionBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-5 py-2 text-xs font-bold uppercase tracking-widest text-candy-600 shadow-card mb-5 border border-candy-100">
      {icon}
      {label}
    </span>
  );
}

function SectionTitle({
  id,
  badge,
  badgeIcon,
  title,
  subtitle,
}: {
  id: string;
  badge: string;
  badgeIcon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <ScrollReveal>
      <div className="mb-16 text-center">
        <SectionBadge icon={badgeIcon} label={badge} />
        <h2
          id={`${id}-heading`}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-ink mb-5 leading-tight"
        >
          {title}
        </h2>
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-ink-light leading-relaxed">
          {subtitle}
        </p>
      </div>
    </ScrollReveal>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content" role="main" className="flex-1">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section
          id="home"
          className="relative min-h-screen flex flex-col overflow-hidden pt-20"
          style={{ background: 'var(--color-background)' }}
          aria-labelledby="home-heading"
        >
          {/* Floating decorations */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-candy-100 opacity-60 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-ocean-100 opacity-50 blur-3xl" />
            <div className="absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full bg-sunny-100 opacity-40 blur-3xl" />

            <span className="absolute top-24 left-[8%] text-5xl sm:text-6xl" style={{ animation: 'float 5s ease-in-out infinite' }}>☁️</span>
            <span className="absolute top-40 right-[12%] text-4xl sm:text-5xl" style={{ animation: 'float 4s ease-in-out infinite 1s' }}>⭐</span>
            <span className="absolute bottom-44 left-[15%] text-4xl" style={{ animation: 'float-slow 6s ease-in-out infinite 0.5s' }}>🎈</span>
            <span className="absolute top-[55%] right-[8%] text-4xl" style={{ animation: 'float 5s ease-in-out infinite 2s' }}>🌈</span>
            <span className="absolute bottom-32 right-[25%] text-3xl hidden sm:block" style={{ animation: 'float-slow 7s ease-in-out infinite 1.5s' }}>☁️</span>
            <span className="absolute top-[30%] left-[5%] text-3xl hidden lg:block" style={{ animation: 'float 6s ease-in-out infinite 3s' }}>✨</span>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 flex-1 flex items-center w-full">
            <div className="grid items-center gap-12 lg:grid-cols-2 w-full">
              {/* Hero Text */}
              <div className="text-center lg:text-left" style={{ animation: 'slide-up 0.8s ease-out' }}>
                {/* Enrollment shimmer banner */}
                <span className="relative inline-flex items-center gap-2 rounded-full bg-sunny-100 border border-sunny-300 px-5 py-2 text-xs font-bold uppercase tracking-widest text-sunny-800 mb-8 overflow-hidden">
                  <Star size={14} className="text-sunny-500" />
                  Now Enrolling for 2026-27
                  {/* Shimmer effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[drift_3s_ease-in-out_infinite]" aria-hidden="true" />
                </span>

                <h1
                  id="home-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-heading text-ink leading-[1.1] mb-6"
                >
                  Where Every Day{" "}
                  <br className="hidden sm:block" />
                  is a{" "}
                  <span className="bg-gradient-to-r from-candy-400 via-lavender-400 to-ocean-400 bg-clip-text text-transparent">
                    New Adventure
                  </span>
                  {" "}🎨
                </h1>

                <p className="text-lg sm:text-xl text-ink-light leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                  A joyful, safe space where little ones learn through play,
                  creativity, and wonder. Watch your child bloom! 🌸
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <a
                    href="#admissions"
                    className="inline-flex items-center gap-2.5 rounded-full bg-candy-400 px-9 py-4 text-base font-bold text-white shadow-glow-pink transition-all duration-300 hover:bg-candy-500 hover:shadow-lg hover:scale-105 active:scale-95"
                  >
                    <Heart size={20} />
                    Enroll Your Child
                  </a>
                  <a
                    href="#programs"
                    className="inline-flex items-center gap-2.5 rounded-full border-2 border-ocean-300 bg-white px-9 py-4 text-base font-bold text-ocean-600 transition-all duration-300 hover:bg-ocean-50 hover:border-ocean-400 hover:scale-105 active:scale-95"
                  >
                    <BookOpen size={20} />
                    Explore Programs
                  </a>
                </div>

                {/* Trust badges */}
                <div className="mt-12 flex flex-wrap items-center gap-4 sm:gap-6 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 shadow-card text-sm font-semibold text-ink-light">
                    <Users size={18} className="text-ocean-400" />
                    <span>500+ Happy Families</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 shadow-card text-sm font-semibold text-ink-light">
                    <Trophy size={18} className="text-sunny-500" />
                    <span>10+ Years of Joy</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 shadow-card text-sm font-semibold text-ink-light">
                    <Star size={18} className="text-candy-400" />
                    <span>4.9★ Rated</span>
                  </div>
                </div>
              </div>

              {/* Hero Visual */}
              <div
                className="relative flex items-center justify-center"
                style={{ animation: 'slide-up 0.8s ease-out 0.2s both' }}
              >
                <div className="relative h-80 w-80 sm:h-[22rem] sm:w-[22rem] lg:h-[26rem] lg:w-[26rem]">
                  <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-candy-200 animate-[spin_30s_linear_infinite]" />
                  <div className="absolute inset-5 rounded-full border-[3px] border-dashed border-ocean-200 animate-[spin_25s_linear_infinite_reverse]" />
                  <div className="absolute inset-10 rounded-full border-[3px] border-dashed border-sunny-200 animate-[spin_35s_linear_infinite]" />

                  <div className="absolute inset-14 flex items-center justify-center rounded-full bg-gradient-to-br from-candy-50 via-sunny-50 to-ocean-50 shadow-card border-2 border-white">
                    <div className="text-center px-4">
                      <span className="block text-7xl mb-3">👶</span>
                      <span className="text-base font-bold font-heading text-ink">
                        Your child&apos;s<br />happy place
                      </span>
                    </div>
                  </div>

                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-card-hover border border-lavender-100" style={{ animation: 'float 4s ease-in-out infinite' }}>
                    <Palette size={24} className="text-lavender-400" />
                  </div>
                  <div className="absolute bottom-6 -left-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-card-hover border border-candy-100" style={{ animation: 'float 4s ease-in-out infinite 1s' }}>
                    <Music size={24} className="text-candy-400" />
                  </div>
                  <div className="absolute bottom-6 -right-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-card-hover border border-ocean-100" style={{ animation: 'float 4s ease-in-out infinite 2s' }}>
                    <BookOpen size={24} className="text-ocean-400" />
                  </div>
                  <div className="absolute top-1/2 -left-6 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-card-hover border border-sunny-100 hidden sm:flex" style={{ animation: 'float 5s ease-in-out infinite 0.5s' }}>
                    <TreePine size={20} className="text-leaf-400" />
                  </div>
                  <div className="absolute top-1/2 -right-6 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-card-hover border border-lavender-100 hidden sm:flex" style={{ animation: 'float 5s ease-in-out infinite 1.5s' }}>
                    <Star size={20} className="text-sunny-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-auto relative z-20">
            <WaveDivider fillColor="var(--color-bubble-pink)" />
          </div>
        </section>

        {/* ── ABOUT ────────────────────────────────────────── */}
        <Section id="about" className="bg-bubble-pink">
          <SectionTitle
            id="about"
            badge="About Us"
            badgeIcon={<Heart size={14} />}
            title="A Place Where Childhood Blooms 🌻"
            subtitle="For over a decade, PlaySchl has been fostering creativity, curiosity, and confidence in young minds through our unique play-based curriculum."
          />
          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Heart, bg: 'bg-candy-50', text: 'text-candy-400', border: 'border-candy-100', title: 'Safe & Nurturing', desc: 'Every corner of our space is designed to make children feel secure, loved, and free to explore the world around them.', emoji: '🏡' },
              { icon: Sparkles, bg: 'bg-ocean-50', text: 'text-ocean-400', border: 'border-ocean-100', title: 'Play-Based Learning', desc: 'Children learn best through play. Our curriculum blends fun activities with developmentally appropriate learning goals.', emoji: '✨' },
              { icon: Users, bg: 'bg-lavender-50', text: 'text-lavender-400', border: 'border-lavender-100', title: 'Expert Educators', desc: 'Our trained and passionate team brings warmth, patience, and expertise to every single interaction with your child.', emoji: '👩‍🏫' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className={`group rounded-3xl border-2 ${item.border} bg-white p-8 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 hover:border-transparent h-full`}>
                  <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg} ${item.text} transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]`}>
                    <item.icon size={28} />
                  </div>
                  <h3 className="mb-2.5 text-xl font-bold font-heading text-ink">
                    {item.emoji} {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-light">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>

        <WaveDivider className="bg-bubble-pink" fillColor="var(--color-mint-foam)" />

        {/* ── PROGRAMS ─────────────────────────────────────── */}
        <Section id="programs" className="bg-mint-foam">
          <SectionTitle
            id="programs"
            badge="Our Programs"
            badgeIcon={<BookOpen size={14} />}
            title="Tailored for Every Little Explorer 🚀"
            subtitle="From playgroup to pre-primary, each program is crafted to match your child's developmental stage and curiosity level."
          />
          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
            {[
              { emoji: '🐣', name: 'Playgroup', age: '1.5 – 2.5 years', desc: 'Sensory exploration, motor skill development, and social bonding through guided play.', borderColor: 'border-t-candy-400' },
              { emoji: '🌱', name: 'Nursery', age: '2.5 – 3.5 years', desc: 'Language enrichment, basic numeracy concepts, and creative arts with structured activities.', borderColor: 'border-t-ocean-400' },
              { emoji: '🚀', name: 'Junior KG', age: '3.5 – 4.5 years', desc: 'Reading readiness, logical thinking, and hands-on science experiments for curious minds.', borderColor: 'border-t-lavender-400' },
              { emoji: '🌟', name: 'Senior KG', age: '4.5 – 5.5 years', desc: 'School readiness, advanced concepts, leadership skills, and confidence building.', borderColor: 'border-t-sunny-400' },
              { emoji: '🎨', name: 'Art & Craft', age: 'All Ages', desc: 'Weekly creative workshops covering painting, clay modeling, origami, and mixed media art.', borderColor: 'border-t-leaf-400' },
              { emoji: '🎵', name: 'Music & Movement', age: 'All Ages', desc: 'Rhythm, melody, and dance sessions that develop coordination and self-expression.', borderColor: 'border-t-candy-400' },
            ].map((program) => (
              <StaggerItem key={program.name}>
                <div className={`group relative overflow-hidden rounded-3xl border-2 border-white bg-white p-8 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 border-t-4 ${program.borderColor} h-full`}>
                  <span className="mb-4 block text-5xl">{program.emoji}</span>
                  <h3 className="mb-1.5 text-xl font-bold font-heading text-ink">{program.name}</h3>
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-ocean-500">{program.age}</p>
                  <p className="text-sm leading-relaxed text-ink-light">{program.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>

        <WaveDivider className="bg-mint-foam" fillColor="var(--color-sky-wash)" />

        {/* ── ACTIVITIES ───────────────────────────────────── */}
        <Section id="activities" className="bg-sky-wash">
          <SectionTitle
            id="activities"
            badge="Daily Activities"
            badgeIcon={<Sparkles size={14} />}
            title="A Day Full of Wonders ✨"
            subtitle="Every day at PlaySchl is packed with fun, learning, and discovery. Here's a glimpse of what makes our days special."
          />
          <StaggerContainer className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" staggerDelay={0.06}>
            {[
              { icon: BookOpen, label: 'Story Time', emoji: '📚', border: 'border-candy-100' },
              { icon: Palette, label: 'Art & Craft', emoji: '🎨', border: 'border-lavender-100' },
              { icon: Music, label: 'Music & Dance', emoji: '🎵', border: 'border-ocean-100' },
              { icon: Users, label: 'Group Play', emoji: '🤝', border: 'border-sunny-200' },
              { icon: Sparkles, label: 'Science Fun', emoji: '🔬', border: 'border-sky-100' },
              { icon: Dumbbell, label: 'Sports', emoji: '⚽', border: 'border-leaf-100' },
              { icon: Camera, label: 'Show & Tell', emoji: '🎤', border: 'border-candy-100' },
              { icon: Heart, label: 'Yoga & Calm', emoji: '🧘', border: 'border-lavender-100' },
            ].map((activity) => (
              <StaggerItem key={activity.label}>
                <div className={`group flex flex-col items-center gap-3 rounded-3xl border-2 ${activity.border} bg-white p-6 sm:p-8 text-center transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 hover:border-transparent`}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <span className="text-3xl">{activity.emoji}</span>
                  </div>
                  <span className="text-sm font-bold font-heading text-ink">{activity.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>

        <WaveDivider className="bg-sky-wash" fillColor="var(--color-lemon-mist)" />

        {/* ── GALLERY ──────────────────────────────────────── */}
        <Section id="gallery" className="bg-lemon-mist">
          <SectionTitle
            id="gallery"
            badge="Gallery"
            badgeIcon={<Camera size={14} />}
            title="Moments That Matter 📸"
            subtitle="A visual peek into the joy, creativity, and learning happening at PlaySchl every day."
          />
          <ScrollReveal>
            <GalleryGrid />
          </ScrollReveal>
        </Section>

        <WaveDivider className="bg-lemon-mist" fillColor="var(--color-lavender-wash)" />

        {/* ── TESTIMONIALS ─────────────────────────────────── */}
        <Section id="testimonials" className="bg-lavender-wash">
          <SectionTitle
            id="testimonials"
            badge="Testimonials"
            badgeIcon={<Star size={14} />}
            title="What Parents Say 💬"
            subtitle="Don't just take our word for it — hear from the families who've experienced the PlaySchl difference."
          />
          <ScrollReveal>
            <TestimonialsCarousel />
          </ScrollReveal>
        </Section>

        <WaveDivider className="bg-lavender-wash" fillColor="var(--color-background)" />

        {/* ── ADMISSIONS ───────────────────────────────────── */}
        <Section id="admissions">
          <SectionTitle
            id="admissions"
            badge="Admissions"
            badgeIcon={<ClipboardCheck size={14} />}
            title="Begin Your Child's Journey 🎒"
            subtitle="Our admissions process is simple, transparent, and designed to welcome every family warmly."
          />
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <StaggerContainer className="space-y-7">
              {[
                { step: 1, title: 'Enquire Online or Visit', desc: 'Reach out via WhatsApp, phone, or visit our campus for a warm welcome and tour.', color: 'bg-candy-400', emoji: '👋' },
                { step: 2, title: 'Meet the Team', desc: "Have a conversation with our educators about your child's needs and our approach.", color: 'bg-ocean-400', emoji: '🤝' },
                { step: 3, title: 'Complete Registration', desc: "Fill out a simple form and submit the required documents to secure your child's spot.", color: 'bg-lavender-400', emoji: '📝' },
                { step: 4, title: 'Welcome Aboard!', desc: "Receive your welcome kit and get ready for your child's exciting new journey! 🎉", color: 'bg-sunny-400', emoji: '🎉' },
              ].map((item) => (
                <StaggerItem key={item.step}>
                  <div className="flex gap-5 group">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.color} text-white font-bold text-lg font-heading shadow-card transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]`}>
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading text-ink">{item.emoji} {item.title}</h3>
                      <p className="text-sm text-ink-light leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal delay={0.2} direction="right">
              <div className="rounded-3xl bg-gradient-to-br from-candy-400 via-candy-500 to-lavender-500 p-10 sm:p-12 text-white text-center shadow-float relative overflow-hidden">
                <div className="absolute top-4 right-6 text-4xl opacity-20" aria-hidden="true">🎈</div>
                <div className="absolute bottom-6 left-6 text-3xl opacity-20" aria-hidden="true">⭐</div>

                <ClipboardCheck size={44} className="mx-auto mb-5 opacity-90" />
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading mb-4">
                  Admissions Open<br />2026–27 🎓
                </h3>
                <p className="text-sm sm:text-base leading-relaxed opacity-90 mb-8 max-w-sm mx-auto">
                  Limited seats available. Secure your child&apos;s place in our nurturing learning community today.
                </p>
                <a
                  href="https://wa.me/911234567890?text=Hi!%20I'd%20like%20to%20enquire%20about%20admissions%20for%20my%20child."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-white px-9 py-4 text-base font-bold text-candy-500 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                >
                  💬 Enquire on WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </div>
        </Section>

        <WaveDivider style={{ background: 'var(--color-background)' }} fillColor="var(--color-sky-wash)" />

        {/* ── FAQ ──────────────────────────────────────────── */}
        <Section id="faq" className="bg-sky-wash">
          <SectionTitle
            id="faq"
            badge="FAQ"
            badgeIcon={<HelpCircle size={14} />}
            title="Got Questions? We've Got Answers! 🙋"
            subtitle="Here are answers to the most common questions from parents. Can't find what you're looking for? Reach out to us!"
          />
          <ScrollReveal>
            <FAQAccordion />
          </ScrollReveal>
        </Section>

        <WaveDivider className="bg-sky-wash" fillColor="var(--color-bubble-pink)" />

        {/* ── CONTACT ──────────────────────────────────────── */}
        <Section id="contact" className="bg-bubble-pink">
          <SectionTitle
            id="contact"
            badge="Contact Us"
            badgeIcon={<Heart size={14} />}
            title="We'd Love to Hear from You 💌"
            subtitle="Have questions? Want to schedule a visit? Reach out — we're always happy to help!"
          />
          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { emoji: '📍', title: 'Visit Us', content: '123 Learning Lane, Education District, City - 500001', link: '#', linkLabel: 'Get Directions →', border: 'border-candy-100' },
              { emoji: '📞', title: 'Call Us', content: '+91 12345 67890', link: 'tel:+911234567890', linkLabel: 'Call Now →', border: 'border-ocean-100' },
              { emoji: '✉️', title: 'Email Us', content: 'hello@playschl.com', link: 'mailto:hello@playschl.com', linkLabel: 'Send Email →', border: 'border-lavender-100' },
            ].map((card) => (
              <StaggerItem key={card.title}>
                <div className={`group rounded-3xl border-2 ${card.border} bg-white p-8 text-center transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 hover:border-transparent h-full`}>
                  <span className="mb-5 block text-5xl">{card.emoji}</span>
                  <h3 className="mb-2.5 text-xl font-bold font-heading text-ink">{card.title}</h3>
                  <p className="mb-5 text-sm text-ink-light">{card.content}</p>
                  <a
                    href={card.link}
                    className="text-sm font-bold text-candy-500 transition-colors hover:text-candy-600"
                  >
                    {card.linkLabel}
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>
      </main>

      <Footer />
      <WhatsAppWidget />
    </>
  );
}
