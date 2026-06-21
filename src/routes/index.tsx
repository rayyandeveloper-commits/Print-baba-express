import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-print.jpg";
import pCard from "@/assets/p-card.jpg";
import pCup from "@/assets/p-cup.jpg";
import pPhoto from "@/assets/p-photo.jpg";
import pShadi from "@/assets/p-shadi.jpg";
import pFlex from "@/assets/p-flex.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE = "9525332211";
const WA = `https://wa.me/91${PHONE}`;
const TEL = `tel:+91${PHONE}`;

const products = [
  { id: "visiting", name: "Visiting Card", hindi: "विज़िटिंग कार्ड", qty: "1000 pcs", qtyHi: "1000 पीसी", desc: "Premium matte / glossy finish. Single & double-sided printing.", descHi: "प्रीमियम मैट / ग्लॉसी फिनिश। सिंगल और डबल-साइडेड प्रिंटिंग।", img: pCard, badge: "Bestseller", badgeHi: "बेस्टसेलर" },
  { id: "shadi", name: "Shadi Card", hindi: "शादी कार्ड", qty: "Custom designs", qtyHi: "कस्टम डिज़ाइन", desc: "Royal gold-foil wedding invitations with traditional motifs.", descHi: "पारंपरिक मोटिफ़ वाले रॉयल गोल्ड-फॉयल वेडिंग इनविटेशन।", img: pShadi, badge: "Wedding Season", badgeHi: "शादी सीज़न" },
  { id: "flex", name: "Flex Print", hindi: "फ्लेक्स प्रिंट", qty: "Any size", qtyHi: "किसी भी साइज़", desc: "HD outdoor banners, hoardings & event backdrops.", descHi: "एचडी आउटडोर बैनर, होर्डिंग्स और इवेंट बैकड्रॉप।", img: pFlex, badge: "Same-day", badgeHi: "एक दिन में" },
  { id: "cup", name: "Cup Print", hindi: "कप प्रिंट", qty: "Photo / Logo", qtyHi: "फोटो / लोगो", desc: "Personalised ceramic mugs — perfect gifting solution.", descHi: "पर्सनलाइज़्ड सिरेमिक मग — बेहतरीन गिफ्टिंग विकल्प।", img: pCup, badge: "Gifting", badgeHi: "गिफ्टिंग" },
  { id: "photo", name: "Photo Print + Frame", hindi: "फोटो फ्रेम", qty: "All sizes", qtyHi: "सभी साइज़", desc: "Memories in premium wooden & acrylic frames.", descHi: "प्रीमियम लकड़ी और एक्रिलिक फ्रेम में यादें।", img: pPhoto, badge: "Memories", badgeHi: "यादें" },
];

type Lang = "en" | "hi";

const copy: Record<Lang, any> = {
  en: {
    langLabel: "हिन्दी",
    nav: { products: "Products", why: "Why Us", process: "Process", order: "Order" },
    hero: {
      tag: "Motihari's Trusted Printing Press",
      title1: "हर प्रिंट का",
      title1Alt: "The solution for every print",
      title2: "समाधान",
      title3: "एक ही नाम —",
      titleBrand: "Print Baba",
      subtitle: "आपके बिज़नेस को दें एक professional touch या बनाएं अपने खास पलों को यादगार। Affordable, fast & excellent custom printing services — straight from Motihari.",
      ctaOrder: "Start Your Order",
      ctaWhatsapp: "WhatsApp Us",
      stats: [["5,000+", "Happy Clients"], ["24h", "Fast Delivery"], ["100%", "Quality Promise"]],
      marquee: ["Visiting Cards", "✦", "Shadi Cards", "✦", "Flex Banners", "✦", "Cup Printing", "✦", "Photo Frames", "✦", "Bill Books", "✦", "Stickers", "✦", "Brochures", "✦"],
      heroImgLabel: "Cards • Shadi • Flex • Mug • Frame",
      ratingTitle: "4.9 / 5 Rating",
      ratingSub: "Motihari customers",
    },
    products: {
      kicker: "Our Products",
      heading: "Choose your product",
      sub: "Tap any product below to start an instant order on WhatsApp.",
      help: "Need help? Call us",
      selected: "Selected",
      orderNow: "Order Now",
    },
    why: {
      kicker: "Why Print Baba",
      heading: "Motihari's most loved printing partner.",
      feats: [
        { t: "Affordable Rates", d: "किफायती दामों में बेहतरीन क्वालिटी।", i: "₹" },
        { t: "Lightning Fast", d: "Same-day & next-day delivery available।", i: "⚡" },
        { t: "Custom Designs", d: "Free design support from our experts।", i: "✦" },
        { t: "Trusted Locally", d: "Motihari में 5000+ संतुष्ट ग्राहक।", i: "♥" },
      ],
    },
    process: {
      kicker: "How it works",
      heading: "3 simple steps to your perfect print.",
      sub: "From idea to delivery — हम पूरे सफर में आपके साथ हैं।",
      cta: "Start on WhatsApp",
      steps: [
        { n: "01", t: "Choose Your Product", d: "Pick from visiting card, shadi card, flex, cup or photo frame।" },
        { n: "02", t: "Share Your Design", d: "Send us your design or let our team craft one for you — free of cost।" },
        { n: "03", t: "Approve & Receive", d: "Sample preview भेजेंगे, approve करते ही print और delivery।" },
      ],
    },
    order: {
      kicker: "Place your order",
      heading: "Let's print something beautiful.",
      sub: "नमस्ते 🙏 Welcome to Print Baba. Fill the form below or call/WhatsApp us directly.",
      callTitle: "Call Direct",
      waTitle: "WhatsApp",
      waLabel: "Chat Now",
      fieldProduct: "Selected Product",
      fieldName: "Your Name",
      fieldPhone: "Phone Number",
      fieldReq: "Requirement",
      reqPlaceholder: "Qty, size, design details…",
      submit: "Send on WhatsApp",
      thanks: "Thank you from the heart for choosing Print Baba 🙏",
    },
    footer: {
      tag: "Your trusted printing partner — Motihari, Bihar.",
      products: "Products",
      contact: "Contact",
      rights: "All rights reserved",
    },
  },
  hi: {
    langLabel: "English",
    nav: { products: "प्रोडक्ट्स", why: "क्यों हम", process: "प्रक्रिया", order: "ऑर्डर" },
    hero: {
      tag: "मोतिहारी की भरोसेमंद प्रिंटिंग प्रेस",
      title1: "हर प्रिंट का",
      title1Alt: "",
      title2: "समाधान",
      title3: "एक ही नाम —",
      titleBrand: "Print Baba",
      subtitle: "आपके बिज़नेस को दें एक प्रोफेशनल टच या बनाएं अपने खास पलों को यादगार। किफायती, तेज़ और बेहतरीन कस्टम प्रिंटिंग सेवाएं — सीधे Motihari से।",
      ctaOrder: "ऑर्डर शुरू करें",
      ctaWhatsapp: "WhatsApp करें",
      stats: [["5,000+", "खुश ग्राहक"], ["24h", "तेज़ डिलीवरी"], ["100%", "क्वालिटी वादा"]],
      marquee: ["विज़िटिंग कार्ड", "✦", "शादी कार्ड", "✦", "फ्लेक्स बैनर", "✦", "कप प्रिंट", "✦", "फोटो फ्रेम", "✦", "बिल बुक", "✦", "स्टिकर", "✦", "ब्रोशर", "✦"],
      heroImgLabel: "कार्ड • शादी • फ्लेक्स • मग • फ्रेम",
      ratingTitle: "4.9 / 5 रेटिंग",
      ratingSub: "मोतिहारी के ग्राहक",
    },
    products: {
      kicker: "हमारे प्रोडक्ट्स",
      heading: "अपना प्रोडक्ट चुनें",
      sub: "नीचे किसी भी प्रोडक्ट पर टैप करें और WhatsApp पर तुरंत ऑर्डर शुरू करें।",
      help: "मदद चाहिए? कॉल करें",
      selected: "चयनित",
      orderNow: "अभी ऑर्डर करें",
    },
    why: {
      kicker: "Print Baba क्यों",
      heading: "मोतिहारी का सबसे पसंदीदा प्रिंटिंग पार्टनर।",
      feats: [
        { t: "किफायती दरें", d: "किफायती दामों में बेहतरीन क्वालिटी।", i: "₹" },
        { t: "बिजली की रफ़्तार", d: "एक दिन और अगले दिन की डिलीवरी उपलब्ध।", i: "⚡" },
        { t: "कस्टम डिज़ाइन", d: "हमारे एक्सपर्ट्स से मुफ्त डिज़ाइन सपोर्ट।", i: "✦" },
        { t: "स्थानीय भरोसा", d: "मोतिहारी में 5000+ संतुष्ट ग्राहक।", i: "♥" },
      ],
    },
    process: {
      kicker: "यह कैसे काम करता है",
      heading: "3 आसान चरणों में अपना परफेक्ट प्रिंट पाएं।",
      sub: "आइडिया से डिलीवरी तक — हम पूरे सफर में आपके साथ हैं।",
      cta: "WhatsApp पर शुरू करें",
      steps: [
        { n: "०१", t: "अपना प्रोडक्ट चुनें", d: "विज़िटिंग कार्ड, शादी कार्ड, फ्लेक्स, कप या फोटो फ्रेम में से चुनें।" },
        { n: "०२", t: "डिज़ाइन साझा करें", d: "अपना डिज़ाइन भेजें या हमारी टीम को बनाने दें — बिल्कुल मुफ्त।" },
        { n: "०३", t: "अप्रूव करें और पाएं", d: "सैंपल प्रिव्यू भेजेंगे, अप्रूव करते ही प्रिंट और डिलीवरी।" },
      ],
    },
    order: {
      kicker: "अपना ऑर्डर दें",
      heading: "आइए कुछ खूबसूरत प्रिंट करवाएं।",
      sub: "नमस्ते 🙏 Print Baba में आपका स्वागत है। नीचे फॉर्म भरें या सीधा कॉल / WhatsApp करें।",
      callTitle: "सीधा कॉल करें",
      waTitle: "WhatsApp",
      waLabel: "अभी चैट करें",
      fieldProduct: "चुना हुआ प्रोडक्ट",
      fieldName: "आपका नाम",
      fieldPhone: "फोन नंबर",
      fieldReq: "आवश्यकताएं",
      reqPlaceholder: "मात्रा, साइज़, डिज़ाइन विवरण…",
      submit: "WhatsApp पर भेजें",
      thanks: "Print Baba को चुनने के लिए हृदय से धन्यवाद 🙏",
    },
    footer: {
      tag: "आपका भरोसेमंद प्रिंटिंग पार्टनर — मोतिहारी, बिहार।",
      products: "प्रोडक्ट्स",
      contact: "संपर्क करें",
      rights: "सर्वाधिकार सुरक्षित",
    },
  },
};

function Index() {
  const [selected, setSelected] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", note: "" });
  const [lang, setLang] = useState<Lang>("hi");

  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
  }, [lang]);

  const sendWhatsApp = () => {
    const product = products.find((p) => p.id === selected);
    const productLabel = lang === "hi" ? product?.hindi ?? product?.name : product?.name;
    const text = encodeURIComponent(
      `नमस्ते Print Baba 🙏\n\nProduct: ${productLabel ?? "General Enquiry"}\nName: ${form.name}\nPhone: ${form.phone}\nNote: ${form.note}`,
    );
    window.open(`${WA}?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="bg-ink text-[11px] sm:text-xs text-card/90">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 h-8 flex items-center justify-end gap-4">
          <button
            onClick={() => setLang((l) => (l === "hi" ? "en" : "hi"))}
            className="inline-flex items-center gap-1.5 rounded-full border border-card/20 bg-card/10 px-2.5 py-0.5 hover:bg-card/20 transition"
            aria-label={lang === "hi" ? "Switch to English" : "हिन्दी में बदलें"}
          >
            <span className={`px-1 ${lang === "en" ? "font-semibold text-card" : "text-card/60"}`}>EN</span>
            <span className="text-card/40">/</span>
            <span className={`px-1 ${lang === "hi" ? "font-semibold text-card" : "text-card/60"}`}>हिन्दी</span>
          </button>
        </div>
      </div>
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-warm text-primary-foreground font-display font-extrabold shadow-warm">PB</span>
            <span className="font-display font-extrabold text-lg tracking-tight">Print Baba</span>
            <span className="hidden sm:inline text-xs text-muted-foreground border-l border-border pl-2 ml-1">Motihari</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#products" className="hover:text-primary transition">{t.nav.products}</a>
            <a href="#why" className="hover:text-primary transition">{t.nav.why}</a>
            <a href="#process" className="hover:text-primary transition">{t.nav.process}</a>
            <a href="#order" className="hover:text-primary transition">{t.nav.order}</a>
          </nav>
          <a href={TEL} className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-elegant hover:scale-[1.02] active:scale-95 transition">
            <PhoneIcon /> {PHONE}
          </a>
        </div>
      </header>

      <section id="top" className="relative">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-14 lg:pt-20 pb-20 grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-saffron animate-pulse" />
              {t.hero.tag}
            </span>
            <h1 className="mt-5 font-display font-extrabold text-[2.8rem] sm:text-6xl lg:text-7xl leading-[0.98]">
              {lang === "en" ? t.hero.title1Alt : t.hero.title1}{" "}
              <span className="text-gradient-warm">{t.hero.title2}</span>,<br />
              {t.hero.title3} <span className="italic">{t.hero.titleBrand}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#order" className="inline-flex items-center gap-2 rounded-full bg-gradient-warm text-primary-foreground px-6 py-3.5 font-semibold shadow-elegant hover:translate-y-[-2px] transition">
                {t.hero.ctaOrder} <ArrowIcon />
              </a>
              <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/15 bg-card px-6 py-3.5 font-semibold hover:border-primary hover:text-primary transition">
                <WhatsAppIcon /> {t.hero.ctaWhatsapp}
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {t.hero.stats.map(([k, v]: [string, string]) => (
                <div key={v}>
                  <dt className="font-display text-3xl font-extrabold text-gradient-warm">{k}</dt>
                  <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-gold opacity-20 blur-3xl rounded-[3rem]" />
            <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-elegant animate-float">
              <img src={heroImg} alt={lang === "hi" ? "Print Baba प्रीमियम प्रिंटिंग प्रोडक्ट्स" : "Print Baba premium printing products"} width={1920} height={1080} className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink/80 to-transparent">
                <p className="text-card font-display text-sm tracking-wider uppercase">{t.hero.heroImgLabel}</p>
              </div>
            </div>
            <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 rounded-2xl bg-card border border-border px-4 py-3 shadow-warm">
              <div className="w-10 h-10 rounded-full bg-gradient-warm grid place-items-center text-primary-foreground font-bold">★</div>
              <div>
                <p className="text-sm font-semibold leading-tight">{t.hero.ratingTitle}</p>
                <p className="text-xs text-muted-foreground">{t.hero.ratingSub}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-y border-border bg-card/50 overflow-hidden py-4">
          <div className="flex gap-12 whitespace-nowrap animate-marquee font-display text-2xl text-muted-foreground">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 px-6">
                {t.hero.marquee.map((t2: string, j: number) => (
                  <span key={j} className={j % 2 ? "text-saffron" : ""}>{t2}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{t.products.kicker}</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold max-w-2xl leading-tight">
              {lang === "hi" ? "अपना प्रोडक्ट चुनें" : "Choose your product"}<span className="text-gradient-warm">.</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl">{t.products.sub}</p>
          </div>
          <a href={TEL} className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            {t.products.help} <ArrowIcon />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => {
            const active = selected === p.id;
            const displayName = lang === "hi" ? p.hindi : p.name;
            const displayQty = lang === "hi" ? p.qtyHi : p.qty;
            const displayDesc = lang === "hi" ? p.descHi : p.desc;
            const displayBadge = lang === "hi" ? p.badgeHi : p.badge;
            return (
              <button
                key={p.id}
                onClick={() => { setSelected(p.id); document.getElementById("order")?.scrollIntoView({ behavior: "smooth" }); }}
                className={`group text-left relative rounded-3xl overflow-hidden border bg-card transition-all duration-300 hover:-translate-y-1.5 ${active ? "border-primary shadow-elegant ring-2 ring-primary/40" : "border-border hover:border-primary/40 hover:shadow-warm"} ${i === 1 ? "lg:row-span-2" : ""}`}
              >
                <div className={`relative overflow-hidden ${i === 1 ? "aspect-[4/5] lg:aspect-[3/5]" : "aspect-[4/3]"}`}>
                  <img src={p.img} alt={displayName} loading="lazy" width={800} height={800} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute top-4 left-4 rounded-full bg-card/95 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                    {displayBadge}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-2xl font-bold">{displayName}</h3>
                      <p className="font-hindi text-muted-foreground">{lang === "hi" ? p.name : p.hindi}</p>
                    </div>
                    <span className="text-xs font-semibold rounded-full bg-secondary text-secondary-foreground px-3 py-1.5 whitespace-nowrap">{displayQty}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{displayDesc}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                      {t.products.orderNow} <ArrowIcon />
                    </span>
                    {active && <span className="text-xs font-bold text-saffron uppercase tracking-wider">✓ {t.products.selected}</span>}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section id="why" className="relative bg-ink text-card py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-gradient-page" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">{t.why.kicker}</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold max-w-3xl leading-tight">
            {lang === "hi" ? "मोतिहारी का सबसे पसंदीदा " : "Motihari's most loved "}<span className="text-gradient-gold">{lang === "hi" ? "प्रिंटिंग पार्टनर।" : "printing partner."}</span>
          </h2>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.why.feats.map((f: { t: string; d: string; i: string }) => (
              <div key={f.t} className="group relative rounded-2xl border border-card/10 bg-card/[0.04] p-7 hover:bg-card/[0.08] transition">
                <div className="w-12 h-12 rounded-xl bg-gradient-warm grid place-items-center font-display text-2xl font-bold text-primary-foreground shadow-elegant">{f.i}</div>
                <h3 className="mt-5 font-display text-xl font-bold text-card">{f.t}</h3>
                <p className="mt-2 text-sm text-card/70 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{t.process.kicker}</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold leading-tight">
              {lang === "hi" ? "3 आसान चरणों में अपना " : "3 simple steps to your "}<span className="text-gradient-warm">{lang === "hi" ? "परफेक्ट प्रिंट पाएं।" : "perfect print."}</span>
            </h2>
            <p className="mt-4 text-muted-foreground">{t.process.sub}</p>
            <a href={WA} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-semibold hover:bg-primary transition">
              <WhatsAppIcon /> {t.process.cta}
            </a>
          </div>
          <ol className="space-y-5">
            {t.process.steps.map((s: { n: string; t: string; d: string }) => (
              <li key={s.n} className="group relative rounded-3xl border border-border bg-card p-7 hover:shadow-warm hover:border-primary/30 transition">
                <div className="flex items-start gap-5">
                  <span className="font-display text-5xl font-extrabold text-gradient-gold leading-none">{s.n}</span>
                  <div>
                    <h3 className="font-display text-2xl font-bold">{s.t}</h3>
                    <p className="mt-2 text-muted-foreground">{s.d}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="order" className="relative py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden border border-border bg-card shadow-elegant">
            <div className="absolute inset-0 bg-gradient-warm opacity-95" />
            <div className="absolute inset-0 grain" />
            <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-10 p-8 sm:p-12 lg:p-16 text-primary-foreground">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-80">{t.order.kicker}</p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold leading-tight">
                  {lang === "hi" ? "आइए कुछ खूबसूरत " : "Let's print something "}<em className="not-italic underline decoration-gold decoration-4 underline-offset-4">{lang === "hi" ? "प्रिंट करवाएं।" : "beautiful."}</em>
                </h2>
                <p className="mt-5 text-primary-foreground/90 max-w-md leading-relaxed">
                  {t.order.sub}
                </p>

                <div className="mt-8 space-y-3">
                  <a href={TEL} className="flex items-center gap-4 rounded-2xl bg-background/10 backdrop-blur border border-background/20 px-5 py-4 hover:bg-background/15 transition">
                    <div className="w-11 h-11 rounded-xl bg-background/15 grid place-items-center"><PhoneIcon /></div>
                    <div>
                      <p className="text-xs uppercase tracking-wider opacity-75">{t.order.callTitle}</p>
                      <p className="font-display text-xl font-bold">+91 {PHONE}</p>
                    </div>
                  </a>
                  <a href={WA} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl bg-background/10 backdrop-blur border border-background/20 px-5 py-4 hover:bg-background/15 transition">
                    <div className="w-11 h-11 rounded-xl bg-background/15 grid place-items-center"><WhatsAppIcon /></div>
                    <div>
                      <p className="text-xs uppercase tracking-wider opacity-75">{t.order.waTitle}</p>
                      <p className="font-display text-xl font-bold">{t.order.waLabel}</p>
                    </div>
                  </a>
                </div>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); sendWhatsApp(); }} className="rounded-3xl bg-card text-foreground p-7 shadow-elegant">
                <div className="mb-5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t.order.fieldProduct}</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {products.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setSelected(p.id)}
                        className={`text-xs font-semibold rounded-full px-3 py-1.5 border transition ${selected === p.id ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary/40"}`}
                      >
                        {lang === "hi" ? p.hindi : p.name}
                      </button>
                    ))}
                  </div>
                </div>

                <Field label={t.order.fieldName} value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder={lang === "hi" ? "आपका नाम" : "John Doe"} />
                <Field label={t.order.fieldPhone} value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder={lang === "hi" ? "10-अंकों का मोबाइल" : "10-digit mobile"} type="tel" />

                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t.order.fieldReq}</span>
                  <textarea
                    value={form.note}
                    onChange={(e) => setForm({ ...form, note: e.target.value })}
                    rows={3}
                    placeholder={t.order.reqPlaceholder}
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </label>

                <button type="submit" className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-warm text-primary-foreground font-semibold py-3.5 shadow-elegant hover:scale-[1.01] active:scale-95 transition">
                  <WhatsAppIcon /> {t.order.submit}
                </button>
                <p className="mt-3 text-xs text-center text-muted-foreground">{t.order.thanks}</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-warm text-primary-foreground font-display font-extrabold shadow-warm">PB</span>
              <span className="font-display font-extrabold text-lg">Print Baba</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">{t.footer.tag}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">{t.footer.products}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {products.map((p) => <li key={p.id}><a href="#products" className="hover:text-primary">{lang === "hi" ? p.hindi : p.name}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">{t.footer.contact}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href={TEL} className="hover:text-primary">📞 +91 {PHONE}</a></li>
              <li><a href={WA} className="hover:text-primary">💬 WhatsApp</a></li>
              <li>📍 {lang === "hi" ? "मोतिहारी, बिहार" : "Motihari, Bihar"}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Print Baba Motihari • {t.footer.rights}
        </div>
      </footer>

      <a href={WA} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 grid place-items-center w-14 h-14 rounded-full bg-gradient-warm text-primary-foreground shadow-elegant hover:scale-110 transition animate-float" aria-label={lang === "hi" ? "WhatsApp पर चैट करें" : "Chat on WhatsApp"}>
        <WhatsAppIcon />
      </a>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <label className="block mb-4">
      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </label>
  );
}

function PhoneIcon() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z"/></svg>); }
function WhatsAppIcon() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>); }
function ArrowIcon() { return (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>); }
