import { useEffect, useRef, useState } from "react";

const REVIEWS = [
  {
    name: "Raul Munoz",
    rating: 5,
    date: "a month ago",
    text: "Amazing tortas! The Torta Mega is absolutely incredible — 3 meats, 3 jamon, 3 quesos with avocado and all the fixings. Huge portions at a great price. This place is a hidden gem in Phoenix!",
    avatar: "RM",
  },
  {
    name: "Maria G.",
    rating: 5,
    date: "2 months ago",
    text: "Best tortas in Phoenix! Open late which is perfect. The Torta Doble is my go-to — double the meat, double the flavor. Friendly staff and very authentic.",
    avatar: "MG",
  },
  {
    name: "Jose R.",
    rating: 5,
    date: "3 months ago",
    text: "Late night cravings solved! Open until 2am, the food is always fresh and delicious. The Torta Especial with carne, jamon, and queso is phenomenal. Highly recommend!",
    avatar: "JR",
  },
  {
    name: "Ana L.",
    rating: 5,
    date: "2 weeks ago",
    text: "Authentic Mexican tortas at its finest. The bread is perfectly toasted, meat is juicy, and everything is loaded. The aguas frescas are also amazing. Will be back!",
    avatar: "AL",
  },
  {
    name: "Carlos M.",
    rating: 5,
    date: "1 month ago",
    text: "Since 1988 and still going strong! You can taste the tradition in every bite. The Torta Super is a beast — 2 carnes, 2 jamones, 2 quesos. Worth every penny.",
    avatar: "CM",
  },
  {
    name: "Sandra T.",
    rating: 4,
    date: "3 weeks ago",
    text: "Great late night spot. The Hamburguesa Mega is huge and delicious. Love that they also serve aguas frescas. Prices are very reasonable for the portion size.",
    avatar: "ST",
  },
];

const TORTAS = [
  {
    name: "Torta Sencilla",
    description: "Jamon, Queso y Aguacate",
    price: "$10.00",
  },
  {
    name: "Torta Doble",
    description: "Doble Jamon, Doble Queso (No Carne), Aguacate y Verdura",
    price: "$12.00",
  },
  {
    name: "Torta Especial",
    description: "Carne, Jamon, Queso, Aguacate y Verdura",
    price: "$13.00",
  },
  {
    name: "Torta Super",
    description: "2 Carnes, 2 Jamones, 2 Quesos, Aguacate y Verdura",
    price: "$14.00",
  },
  {
    name: "Torta Mega",
    description: "3 Carnes, 3 Jamones, 3 Quesos, Aguacate, Verdura y Aderezos",
    price: "$16.00",
  },
];

const HAMBURGUESAS = [
  {
    name: "Hamburguesa Sencilla",
    description: "Carne, Verdura y Aguacate",
    price: "$10.00",
  },
  {
    name: "Hamburguesa Doble",
    description: "Carne, Jamon, Queso, Aguacate, Verdura y Aderezos",
    price: "$12.00",
  },
  {
    name: "Hamburguesa Especial",
    description: "Carne, Jamon, Queso, Aguacate, Verdura y Aderezos",
    price: "$13.00",
  },
  {
    name: "Hamburguesa Super",
    description: "2 Carnes, 2 Jamones, 2 Quesos, Aguacate, Verdura y Aderezos",
    price: "$14.00",
  },
  {
    name: "Hamburguesa Mega",
    description: "3 Carnes, 3 Jamones, 3 Quesos, Aguacate, Verdura y Aderezos",
    price: "$16.00",
  },
];

const DRINKS = [
  { name: "Coca Cola", price: "$3.00" },
  { name: "Manzanita", price: "$3.00" },
  { name: "Aguas Frescas", price: "$4.00" },
  { name: "Sprite", price: "$3.00" },
  { name: "Dr Pepper", price: "$3.00" },
  { name: "Coca Cola Light", price: "$3.00" },
  { name: "Agua", price: "$1.50" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}`}
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function Home() {
  const [menuTab, setMenuTab] = useState<"tortas" | "hamburguesas" | "refrescos">("tortas");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroSection = useInView(0.1);
  const menuSection = useInView(0.1);
  const reviewsSection = useInView(0.1);
  const aboutSection = useInView(0.1);
  const hoursSection = useInView(0.1);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* SEO Meta tags injected via document title */}
      <title>Tortas Archi's | Authentic Mexican Tortas in Phoenix, AZ | Since 1988</title>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-red-100">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center text-white font-black text-sm leading-none border-2 border-green-700">
              TA
            </div>
            <div>
              <span className="font-black text-red-700 text-lg leading-none block">TORTAS</span>
              <span className="font-black text-green-700 text-lg leading-none block">ARCHI'S</span>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {[
              { label: "Menu", id: "menu" },
              { label: "Resenas", id: "reviews" },
              { label: "Nosotros", id: "about" },
              { label: "Horario", id: "hours" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-semibold text-gray-700 hover:text-red-700 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:6233637162"
              className="bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-800 transition-colors"
            >
              Llamanos
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
            {[
              { label: "Menu", id: "menu" },
              { label: "Resenas", id: "reviews" },
              { label: "Nosotros", id: "about" },
              { label: "Horario", id: "hours" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-base font-semibold text-gray-700 hover:text-red-700 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:6233637162"
              className="bg-red-700 text-white px-4 py-2.5 rounded-lg text-sm font-bold text-center hover:bg-red-800 transition-colors"
            >
              Llamanos: (623) 363-7162
            </a>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section
          id="hero"
          ref={heroSection.ref as React.RefObject<HTMLElement>}
          className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
          style={{
            background: "linear-gradient(135deg, #7f1d1d 0%, #991b1b 30%, #b91c1c 60%, #15803d 100%)",
          }}
        >
          {/* Decorative pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div
            className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
            style={{ opacity: heroSection.inView ? 1 : 0, transition: "opacity 0.8s ease-out" }}
          >
            {/* Since badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-6 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-yellow-300 animate-pulse inline-block" />
              Desde 1988 — Since 1988
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-2 tracking-tight drop-shadow-lg">
              TORTAS
            </h1>
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-yellow-300 tracking-tight drop-shadow-lg">
              ARCHI'S
            </h2>

            <p className="text-xl md:text-2xl font-medium mb-3 text-white/90 max-w-2xl mx-auto">
              Las mejores tortas autenticas de Phoenix, Arizona
            </p>
            <p className="text-base md:text-lg mb-10 text-white/75">
              6528 W Indian School Rd, Phoenix, AZ
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollTo("menu")}
                className="bg-white text-red-700 px-8 py-4 rounded-xl font-black text-lg hover:bg-yellow-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Ver El Menu
              </button>
              <a
                href="tel:6233637162"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-black text-lg hover:bg-yellow-300 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                </svg>
                (623) 363-7162
              </a>
            </div>

            {/* Quick info pills */}
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {[
                { icon: "🕐", text: "Jue–Sab: 7pm – 2am" },
                { icon: "📍", text: "Phoenix, AZ" },
                { icon: "⭐", text: "4.8 Estrellas" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2"
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-xs">
            <span>Scroll</span>
            <div className="w-0.5 h-8 bg-white/40 rounded-full relative overflow-hidden">
              <div className="absolute top-0 w-full h-1/2 bg-white/80 animate-bounce" />
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section
          id="menu"
          ref={menuSection.ref as React.RefObject<HTMLElement>}
          className="py-20 px-4 bg-white"
        >
          <div
            className="max-w-5xl mx-auto"
            style={{
              opacity: menuSection.inView ? 1 : 0,
              transform: menuSection.inView ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            }}
          >
            <div className="text-center mb-12">
              <span className="text-red-700 font-bold text-sm uppercase tracking-widest">Lo Que Servimos</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">Nuestro Menu</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Preparado con los mejores ingredientes frescos. Cada torta y hamburguesa es una experiencia autentica.
              </p>
              <div className="w-16 h-1 bg-red-700 rounded-full mx-auto mt-4" />
            </div>

            {/* Menu Tabs */}
            <div className="flex justify-center mb-10">
              <div className="bg-gray-100 rounded-xl p-1.5 flex gap-1">
                {(["tortas", "hamburguesas", "refrescos"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setMenuTab(tab)}
                    className={`px-5 py-2.5 rounded-lg text-sm font-bold capitalize transition-all ${
                      menuTab === tab
                        ? "bg-red-700 text-white shadow-md"
                        : "text-gray-600 hover:text-red-700"
                    }`}
                  >
                    {tab === "refrescos" ? "Refrescos" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items */}
            {menuTab === "tortas" && (
              <div className="grid gap-4">
                {TORTAS.map((item, i) => (
                  <div
                    key={item.name}
                    className="flex items-start justify-between bg-amber-50/60 border border-amber-200 rounded-xl p-5 hover:shadow-md transition-all hover:border-red-200"
                    style={{
                      animationDelay: `${i * 80}ms`,
                    }}
                  >
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg bg-red-700 flex items-center justify-center text-white text-lg flex-shrink-0">
                        🥖
                      </div>
                      <div>
                        <h3 className="font-black text-gray-900 text-lg">{item.name}</h3>
                        <p className="text-gray-500 text-sm mt-0.5">{item.description}</p>
                      </div>
                    </div>
                    <span className="font-black text-red-700 text-xl whitespace-nowrap ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
            )}

            {menuTab === "hamburguesas" && (
              <div className="grid gap-4">
                {HAMBURGUESAS.map((item, i) => (
                  <div
                    key={item.name}
                    className="flex items-start justify-between bg-green-50/60 border border-green-200 rounded-xl p-5 hover:shadow-md transition-all hover:border-green-400"
                    style={{
                      animationDelay: `${i * 80}ms`,
                    }}
                  >
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg bg-green-700 flex items-center justify-center text-white text-lg flex-shrink-0">
                        🍔
                      </div>
                      <div>
                        <h3 className="font-black text-gray-900 text-lg">{item.name}</h3>
                        <p className="text-gray-500 text-sm mt-0.5">{item.description}</p>
                      </div>
                    </div>
                    <span className="font-black text-green-700 text-xl whitespace-nowrap ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
            )}

            {menuTab === "refrescos" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DRINKS.map((item, i) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between bg-blue-50/60 border border-blue-200 rounded-xl p-4 hover:shadow-md transition-all"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🥤</span>
                      <span className="font-semibold text-gray-800">{item.name}</span>
                    </div>
                    <span className="font-black text-blue-700 text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Menu image */}
            <div className="mt-12 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src="/menu.jpg"
                alt="Tortas Archi's Menu - Complete menu with prices for tortas, hamburguesas, and drinks"
                className="w-full object-contain max-h-[600px]"
              />
              <div className="bg-gray-50 text-center py-2 text-xs text-gray-500">
                Menu oficial de Tortas Archi's — Precios pueden variar
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section
          id="reviews"
          ref={reviewsSection.ref as React.RefObject<HTMLElement>}
          className="py-20 px-4"
          style={{
            background: "linear-gradient(180deg, #fef9f0 0%, #fff7ed 100%)",
          }}
        >
          <div
            className="max-w-6xl mx-auto"
            style={{
              opacity: reviewsSection.inView ? 1 : 0,
              transform: reviewsSection.inView ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            }}
          >
            <div className="text-center mb-12">
              <span className="text-red-700 font-bold text-sm uppercase tracking-widest">Lo Que Dicen</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">Resenas de Google</h2>

              {/* Overall rating */}
              <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-md border border-amber-200 mb-4">
                <span className="text-5xl font-black text-gray-900">4.8</span>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 font-medium">Basado en resenas de Google Maps</p>
                </div>
              </div>

              <div className="w-16 h-1 bg-red-700 rounded-full mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {REVIEWS.map((review, i) => (
                <div
                  key={review.name}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 hover:shadow-lg transition-all hover:-translate-y-1"
                  style={{
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-red-700 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                      <p className="text-xs text-gray-400">{review.date}</p>
                    </div>
                  </div>
                  <StarRating rating={review.rating} />
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{review.text}</p>

                  {/* Google logo watermark */}
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-400">
                    <svg viewBox="0 0 48 48" className="w-4 h-4">
                      <path fill="#4285F4" d="M44.5 20H24v8h11.8C34.1 33.7 29.6 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.7 4.5 29.6 2 24 2 12.5 2 3 11.5 3 24s9.5 22 21 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
                      <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.7 4.5 29.6 2 24 2 16.3 2 9.7 7.4 6.3 14.7z"/>
                      <path fill="#FBBC05" d="M24 46c5.5 0 10.5-1.8 14.4-4.9l-6.6-5.6C29.9 37.1 27.1 38 24 38c-5.6 0-10.3-3.7-12-8.8l-6.9 5.4C8.9 41.3 16 46 24 46z"/>
                      <path fill="#EA4335" d="M44.5 20H24v8h11.8c-.9 2.5-2.6 4.6-4.8 6l6.6 5.6C41.8 35.7 45 30.3 45 24c0-1.3-.2-2.7-.5-4z"/>
                    </svg>
                    <span>Google Review</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="https://maps.app.goo.gl/vCQNLo9V5CarWgrA7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-red-200 text-red-700 px-6 py-3 rounded-xl font-bold hover:bg-red-50 transition-colors shadow-sm"
              >
                <svg viewBox="0 0 48 48" className="w-5 h-5">
                  <path fill="#4285F4" d="M44.5 20H24v8h11.8C34.1 33.7 29.6 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.7 4.5 29.6 2 24 2 12.5 2 3 11.5 3 24s9.5 22 21 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
                  <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.7 4.5 29.6 2 24 2 16.3 2 9.7 7.4 6.3 14.7z"/>
                  <path fill="#FBBC05" d="M24 46c5.5 0 10.5-1.8 14.4-4.9l-6.6-5.6C29.9 37.1 27.1 38 24 38c-5.6 0-10.3-3.7-12-8.8l-6.9 5.4C8.9 41.3 16 46 24 46z"/>
                  <path fill="#EA4335" d="M44.5 20H24v8h11.8c-.9 2.5-2.6 4.6-4.8 6l6.6 5.6C41.8 35.7 45 30.3 45 24c0-1.3-.2-2.7-.5-4z"/>
                </svg>
                Ver Todas las Resenas en Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          ref={aboutSection.ref as React.RefObject<HTMLElement>}
          className="py-20 px-4 bg-white"
        >
          <div
            className="max-w-5xl mx-auto"
            style={{
              opacity: aboutSection.inView ? 1 : 0,
              transform: aboutSection.inView ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-red-700 font-bold text-sm uppercase tracking-widest">Nuestra Historia</span>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-6">Desde 1988</h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Tortas Archi's ha sido un pilar de la comunidad de Phoenix por mas de 35 anos.
                  Desde 1988, hemos servido tortas autenticas mexicanas con los mejores ingredientes frescos.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Cada torta y hamburguesa es preparada con amor y tradicion. Nuestro secreto es simple:
                  ingredientes frescos, recetas autenticas, y pasion por la comida mexicana.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { num: "35+", label: "Anos de servicio" },
                    { num: "4.8", label: "Estrellas Google" },
                    { num: "100%", label: "Autentico" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center bg-red-50 rounded-xl p-4">
                      <div className="text-3xl font-black text-red-700 mb-1">{stat.num}</div>
                      <div className="text-xs text-gray-500 font-medium leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://maps.app.goo.gl/vCQNLo9V5CarWgrA7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-800 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Ver en Google Maps
                </a>
              </div>

              {/* Map embed & info card */}
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.7297827786584!2d-112.20583!3d33.4944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b67200000001%3A0x3f6f6f6f6f6f6f6f!2s6528+W+Indian+School+Rd%2C+Phoenix%2C+AZ+85033!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tortas Archi's Location on Google Maps"
                  />
                </div>

                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Direccion</p>
                      <p className="text-gray-800 font-medium text-sm">6528 W Indian School Rd</p>
                      <p className="text-gray-600 text-sm">Phoenix, AZ 85033</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Telefono</p>
                      <a href="tel:6233637162" className="text-gray-800 font-bold hover:text-red-700 transition-colors">
                        (623) 363-7162
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hours & Contact Section */}
        <section
          id="hours"
          ref={hoursSection.ref as React.RefObject<HTMLElement>}
          className="py-20 px-4"
          style={{
            background: "linear-gradient(135deg, #7f1d1d 0%, #991b1b 40%, #15803d 100%)",
          }}
        >
          <div
            className="max-w-5xl mx-auto text-white"
            style={{
              opacity: hoursSection.inView ? 1 : 0,
              transform: hoursSection.inView ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            }}
          >
            <div className="text-center mb-12">
              <span className="text-yellow-300 font-bold text-sm uppercase tracking-widest">Cuando Visitar</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">Horario & Contacto</h2>
              <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Hours */}
              <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-black text-xl mb-3">Horario</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 font-medium">Jueves</span>
                    <span className="font-bold">7:00 PM – 2:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 font-medium">Viernes</span>
                    <span className="font-bold">7:00 PM – 2:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 font-medium">Sabado</span>
                    <span className="font-bold">7:00 PM – 2:00 AM</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/20">
                    <div className="bg-yellow-400 text-gray-900 rounded-lg px-3 py-1.5 text-xs font-black text-center">
                      SOLO JUEVES A SABADO / THU–SAT ONLY
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                  </svg>
                </div>
                <h3 className="font-black text-xl mb-3">Llamanos</h3>
                <a
                  href="tel:6233637162"
                  className="text-2xl font-black text-yellow-300 hover:text-yellow-200 transition-colors block mb-2"
                >
                  (623) 363-7162
                </a>
                <p className="text-white/60 text-sm">Llama o texto para preguntas</p>
                <a
                  href="tel:6233637162"
                  className="mt-4 inline-flex items-center gap-2 bg-white text-red-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                  </svg>
                  Llamar Ahora
                </a>
              </div>

              {/* Location */}
              <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-black text-xl mb-3">Ubicacion</h3>
                <p className="text-white/90 font-medium mb-1">6528 W Indian School Rd</p>
                <p className="text-white/70 text-sm mb-4">Phoenix, AZ 85033</p>
                <a
                  href="https://maps.app.goo.gl/vCQNLo9V5CarWgrA7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-green-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Abrir en Maps
                </a>

                {/* Instagram */}
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-white/60 text-xs mb-2">Siguenos en Instagram</p>
                  <a
                    href="https://www.instagram.com/tortasarchis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/90 hover:text-yellow-300 transition-colors font-semibold text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @tortasarchis
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center text-white font-black text-sm border-2 border-green-600">
                    TA
                  </div>
                  <div>
                    <span className="font-black text-xl text-red-400">TORTAS </span>
                    <span className="font-black text-xl text-green-400">ARCHI'S</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">Autenticas Tortas Mexicanas desde 1988</p>
                <p className="text-gray-500 text-xs mt-1">6528 W Indian School Rd, Phoenix, AZ 85033</p>
              </div>

              <div className="flex flex-col items-center md:items-end gap-2">
                <a href="tel:6233637162" className="text-yellow-400 font-black text-lg hover:text-yellow-300 transition-colors">
                  (623) 363-7162
                </a>
                <p className="text-gray-500 text-sm">Jue–Sab: 7:00 PM – 2:00 AM</p>
                <div className="flex gap-3 mt-2">
                  <a
                    href="https://www.instagram.com/tortasarchis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://maps.app.goo.gl/vCQNLo9V5CarWgrA7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Google Maps"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.402 16.199 0 12 0zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-600">
              <p>© 2024 Tortas Archi's. Todos los derechos reservados.</p>
              <p>Phoenix, AZ — Authentic Mexican Food Since 1988</p>
            </div>
          </div>
        </footer>
      </main>

      {/* Structured Data for Google Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Tortas Archi's",
            "description": "Authentic Mexican torta restaurant in Phoenix, Arizona. Since 1988. Serving the best tortas and hamburguesas with fresh ingredients.",
            "url": "https://tortasarchis.com",
            "telephone": "+16233637162",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "6528 W Indian School Rd",
              "addressLocality": "Phoenix",
              "addressRegion": "AZ",
              "postalCode": "85033",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 33.4944,
              "longitude": -112.2058
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Thursday", "Friday", "Saturday"],
                "opens": "19:00",
                "closes": "02:00"
              }
            ],
            "servesCuisine": "Mexican",
            "priceRange": "$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "50",
              "bestRating": "5"
            },
            "sameAs": [
              "https://maps.app.goo.gl/vCQNLo9V5CarWgrA7",
              "https://www.instagram.com/tortasarchis"
            ],
            "foundingDate": "1988",
            "hasMenu": {
              "@type": "Menu",
              "name": "Tortas Archi's Menu",
              "hasMenuSection": [
                {
                  "@type": "MenuSection",
                  "name": "Tortas",
                  "hasMenuItem": [
                    { "@type": "MenuItem", "name": "Torta Sencilla", "description": "Jamon, Queso y Aguacate", "offers": { "@type": "Offer", "price": "10.00", "priceCurrency": "USD" } },
                    { "@type": "MenuItem", "name": "Torta Doble", "description": "Doble Jamon, Doble Queso, Aguacate y Verdura", "offers": { "@type": "Offer", "price": "12.00", "priceCurrency": "USD" } },
                    { "@type": "MenuItem", "name": "Torta Especial", "description": "Carne, Jamon, Queso, Aguacate y Verdura", "offers": { "@type": "Offer", "price": "13.00", "priceCurrency": "USD" } },
                    { "@type": "MenuItem", "name": "Torta Super", "description": "2 Carnes, 2 Jamones, 2 Quesos, Aguacate y Verdura", "offers": { "@type": "Offer", "price": "14.00", "priceCurrency": "USD" } },
                    { "@type": "MenuItem", "name": "Torta Mega", "description": "3 Carnes, 3 Jamones, 3 Quesos, Aguacate y Verdura", "offers": { "@type": "Offer", "price": "16.00", "priceCurrency": "USD" } }
                  ]
                }
              ]
            }
          }),
        }}
      />
    </>
  );
}
