import { useState, useRef } from "react";

const initialCars = [
  {
    carNo: 101,
    carName: "Audi A6",
    carColor: "Black",
    carPrice: 10652121,
    imgs: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    features: [
      "Automatic Transmission",
      "23 km/l Mileage",
      "Petrol Engine",
      "5 Seater",
      "Sunroof",
    ],
    discount: 0,
  },
  {
    carNo: 102,
    carName: "BMW 5 Series",
    carColor: "White",
    carPrice: 9875000,
    imgs: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    features: [
      "Automatic Transmission",
      "21 km/l Mileage",
      "Diesel Engine",
      "5 Seater",
      "360° Camera",
    ],
    discount: 0,
  },
  {
    carNo: 103,
    carName: "Mercedes C-Class",
    carColor: "Silver",
    carPrice: 11200000,
    imgs: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    features: [
      "Automatic Transmission",
      "20 km/l Mileage",
      "Petrol Engine",
      "5 Seater",
      "Panoramic Sunroof",
    ],
    discount: 0,
  },
  {
    carNo: 104,
    carName: "Toyota Camry",
    carColor: "Red",
    carPrice: 2550000,
    imgs: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80",
    features: [
      "Automatic Transmission",
      "18 km/l Mileage",
      "Hybrid Engine",
      "5 Seater",
      "Apple CarPlay",
    ],
    discount: 0,
  },
  {
    carNo: 105,
    carName: "Hyundai Tucson",
    carColor: "Blue",
    carPrice: 1875000,
    imgs: "https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?w=800&q=80",
    features: [
      "Automatic Transmission",
      "16 km/l Mileage",
      "Petrol Engine",
      "5 Seater",
      "ADAS Safety",
    ],
    discount: 0,
  },
  {
    carNo: 106,
    carName: "Honda City",
    carColor: "Grey",
    carPrice: 2240000,
    imgs: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
    features: [
      "CVT Transmission",
      "18 km/l Mileage",
      "Petrol Engine",
      "5 Seater",
      "Lane Watch",
    ],
    discount: 0,
  },
  {
    carNo: 107,
    carName: "Ford Mustang",
    carColor: "White",
    carPrice: 3010000,
    imgs: "https://images.unsplash.com/photo-1584345604476-8ec5f452d1f6?w=800&q=80",
    features: [
      "Manual Transmission",
      "12 km/l Mileage",
      "V8 Engine",
      "4 Seater",
      "Sport Mode",
    ],
    discount: 0,
  },
  {
    carNo: 108,
    carName: "Kia Seltos",
    carColor: "Green",
    carPrice: 1985000,
    imgs: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80",
    features: [
      "Automatic Transmission",
      "16 km/l Mileage",
      "Diesel Engine",
      "5 Seater",
      "Bose Sound",
    ],
    discount: 0,
  },
  {
    carNo: 109,
    carName: "Tesla Model 3",
    carColor: "Black",
    carPrice: 7500000,
    imgs: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    features: [
      "Autopilot",
      "500 km Range",
      "Electric Motor",
      "5 Seater",
      "OTA Updates",
    ],
    discount: 0,
  },
  {
    carNo: 110,
    carName: "Mahindra XUV700",
    carColor: "Brown",
    carPrice: 2490000,
    imgs: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    features: [
      "Automatic Transmission",
      "15 km/l Mileage",
      "Diesel Engine",
      "7 Seater",
      "ADAS Level 2",
    ],
    discount: 0,
  },
];

const brands = [
  "All",
  ...new Set(initialCars.map((c) => c.carName.split(" ")[0])),
];

const formatPrice = (price) => "₹" + price.toLocaleString("en-IN");

const discountedPrice = (price, pct) => Math.round(price - (price * pct) / 100);

export default function CarShowroom() {
  const [cars, setCars] = useState(initialCars);
  const [activeBrand, setActiveBrand] = useState("All");
  const [editingDiscount, setEditingDiscount] = useState(null);
  const [discountInput, setDiscountInput] = useState("");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const heroRef = useRef(null);
  const carsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });

  const filteredCars =
    activeBrand === "All" ? cars : (
      cars.filter((c) => c.carName.startsWith(activeBrand))
    );

  const applyDiscount = (carNo) => {
    const pct = parseFloat(discountInput);
    if (isNaN(pct) || pct < 0 || pct > 90) return;
    setCars((prev) =>
      prev.map((c) => (c.carNo === carNo ? { ...c, discount: pct } : c)),
    );
    setEditingDiscount(null);
    setDiscountInput("");
  };

  const removeDiscount = (carNo) => {
    setCars((prev) =>
      prev.map((c) => (c.carNo === carNo ? { ...c, discount: 0 } : c)),
    );
  };

  const handleContact = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setContactForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div style={s.root}>
      {/* ── NAV ── */}
      <nav style={s.nav}>
        <span style={s.navLogo}>🏎 FORTUNE</span>
        <div style={s.navLinks}>
          {[
            ["Showroom", carsRef],
            ["About", aboutRef],
            ["Contact", contactRef],
          ].map(([label, ref]) => (
            <button key={label} style={s.navBtn} onClick={() => scrollTo(ref)}>
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section ref={heroRef} style={s.hero}>
        <div style={s.heroOverlay} />
        <div style={s.heroContent}>
          <p style={s.heroEyebrow}>Chennai · Bangalore · Madurai · Vellore</p>
          <h1 style={s.heroTitle}>
            Fortune Car
            <br />
            Showroom
          </h1>
          <p style={s.heroSub}>
            Premium automobiles. Unmatched prices. Drive your dream today.
          </p>
          <button style={s.heroBtn} onClick={() => scrollTo(carsRef)}>
            Explore Fleet →
          </button>
        </div>
      </section>

      {/* ── FILTER + CARS ── */}
      <section ref={carsRef} style={s.section}>
        <h2 style={s.sectionTitle}>Our Fleet</h2>
        <p style={s.sectionSub}>Browse {cars.length} premium vehicles</p>

        {/* Filter */}
        <div style={s.filterRow}>
          {brands.map((b) => (
            <button
              key={b}
              style={{
                ...s.filterBtn,
                ...(activeBrand === b ? s.filterBtnActive : {}),
              }}
              onClick={() => setActiveBrand(b)}
            >
              {b}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div style={s.grid}>
          {filteredCars.map((car) => {
            const hasDiscount = car.discount > 0;
            const newPrice =
              hasDiscount ? discountedPrice(car.carPrice, car.discount) : null;
            const isEditing = editingDiscount === car.carNo;

            return (
              <div key={car.carNo} style={s.card}>
                {/* Discount badge */}
                {hasDiscount && <div style={s.badge}>{car.discount}% OFF</div>}

                {/* Image */}
                <div style={s.imgBox}>
                  <img src={car.imgs} alt={car.carName} style={s.img} />
                </div>

                {/* Info */}
                <div style={s.cardBody}>
                  <h3 style={s.carName}>{car.carName}</h3>
                  <div style={s.infoGrid}>
                    {[
                      ["ID", car.carNo],
                      ["Color", car.carColor],
                    ].map(([l, v]) => (
                      <div key={l} style={s.infoRow}>
                        <span style={s.infoLabel}>{l}</span>
                        <span style={s.infoColon}>:</span>
                        <span style={s.infoVal}>{v}</span>
                      </div>
                    ))}
                    <div style={s.infoRow}>
                      <span style={s.infoLabel}>Price</span>
                      <span style={s.infoColon}>:</span>
                      <span style={s.infoVal}>
                        {hasDiscount ?
                          <span>
                            <span style={s.strikePrice}>
                              {formatPrice(car.carPrice)}
                            </span>
                            <span style={s.newPrice}>
                              {" "}
                              {formatPrice(newPrice)}
                            </span>
                          </span>
                        : <span style={s.regularPrice}>
                            {formatPrice(car.carPrice)}
                          </span>
                        }
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <p style={s.featTitle}>Features</p>
                  <ul style={s.featList}>
                    {car.features.map((f, i) => (
                      <li key={i} style={s.featItem}>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Discount controls */}
                  <div style={s.discountArea}>
                    {isEditing ?
                      <div style={s.discountInputRow}>
                        <input
                          type="number"
                          min="0"
                          max="90"
                          placeholder="0–90 %"
                          value={discountInput}
                          onChange={(e) => setDiscountInput(e.target.value)}
                          style={s.discountInput}
                          autoFocus
                        />
                        <button
                          style={s.applyBtn}
                          onClick={() => applyDiscount(car.carNo)}
                        >
                          Apply
                        </button>
                        <button
                          style={s.cancelBtn}
                          onClick={() => setEditingDiscount(null)}
                        >
                          ✕
                        </button>
                      </div>
                    : <div style={s.discountBtnRow}>
                        <button
                          style={s.setDiscountBtn}
                          onClick={() => {
                            setEditingDiscount(car.carNo);
                            setDiscountInput(car.discount || "");
                          }}
                        >
                          {hasDiscount ? "✏ Edit Discount" : "＋ Add Discount"}
                        </button>
                        {hasDiscount && (
                          <button
                            style={s.removeBtn}
                            onClick={() => removeDiscount(car.carNo)}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    }
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section ref={aboutRef} style={s.aboutSection}>
        <div style={s.aboutInner}>
          <div style={s.aboutText}>
            <p style={s.aboutEyebrow}>Est. 2005</p>
            <h2 style={s.aboutTitle}>Why Fortune?</h2>
            <p style={s.aboutBody}>
              For over two decades, Fortune Car Showroom has been Tamil Nadu's
              most trusted name in premium automobiles. We don't just sell cars
              — we match people with machines that fit their life.
            </p>
            <div style={s.statsRow}>
              {[
                ["5000+", "Cars Sold"],
                ["20+", "Years"],
                ["8", "Branches"],
                ["4.9★", "Rating"],
              ].map(([n, l]) => (
                <div key={l} style={s.statBox}>
                  <span style={s.statNum}>{n}</span>
                  <span style={s.statLabel}>{l}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={s.branchBox}>
            <p style={s.branchTitle}>Our Branches</p>
            {[
              "Chennai",
              "Bangalore",
              "Trichy",
              "Madurai",
              "Hosur",
              "Vellore",
              "Villupuram",
              "Theni",
              "Dindigul",
            ].map((b) => (
              <div key={b} style={s.branchItem}>
                📍 {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section ref={contactRef} style={s.section}>
        <h2 style={s.sectionTitle}>Contact Us</h2>
        <p style={s.sectionSub}>We'd love to hear from you</p>
        <div style={s.contactGrid}>
          {/* Info */}
          <div style={s.contactInfo}>
            <div style={s.contactInfoCard}>
              <p style={s.contactInfoTitle}>Get in Touch</p>
              {[
                ["📞", "Phone", "+91 73585 21197"],
                ["✉", "Email", "sales@fortunecars.in"],
                ["🕐", "Hours", "Mon–Sat, 9am–7pm"],
              ].map(([icon, l, v]) => (
                <div key={l} style={s.contactRow}>
                  <span style={s.contactIcon}>{icon}</span>
                  <div>
                    <div style={s.contactRowLabel}>{l}</div>
                    <div style={s.contactRowVal}>{v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleContact} style={s.form}>
            {submitted && (
              <div style={s.successMsg}>
                ✅ Message sent! We'll call you back soon.
              </div>
            )}
            <input
              style={s.formInput}
              placeholder="Your Name"
              value={contactForm.name}
              onChange={(e) =>
                setContactForm({ ...contactForm, name: e.target.value })
              }
              required
            />
            <input
              style={s.formInput}
              placeholder="Email Address"
              type="email"
              value={contactForm.email}
              onChange={(e) =>
                setContactForm({ ...contactForm, email: e.target.value })
              }
              required
            />
            <textarea
              style={{ ...s.formInput, height: "120px", resize: "vertical" }}
              placeholder="Your message or enquiry..."
              value={contactForm.message}
              onChange={(e) =>
                setContactForm({ ...contactForm, message: e.target.value })
              }
              required
            />
            <button type="submit" style={s.submitBtn}>
              Send Message →
            </button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={s.footer}>
        <p style={s.footerLogo}>🏎 FORTUNE CAR SHOWROOM</p>
        <p style={s.footerText}>
          © 2025 Fortune Cars. All rights reserved. · Chennai, Bangalore,
          Madurai & more
        </p>
      </footer>
    </div>
  );
}

// ── STYLES ──
const GOLD = "#F5C518";
const DARK = "#0A0A0F";
const CARD_BG = "#13131A";
const SURFACE = "#1A1A24";
const TEXT = "#F0EEE8";
const MUTED = "#8A8A9A";
const ACCENT = "#F5C518";

const s = {
  root: {
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    background: DARK,
    color: TEXT,
    minHeight: "100vh",
  },

  // NAV
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
    height: "60px",
    background: "rgba(10,10,15,0.92)",
    backdropFilter: "blur(12px)",
    borderBottom: `1px solid rgba(245,197,24,0.15)`,
  },
  navLogo: {
    fontSize: "18px",
    fontWeight: 700,
    color: GOLD,
    letterSpacing: "2px",
  },
  navLinks: { display: "flex", gap: "8px" },
  navBtn: {
    background: "none",
    border: "none",
    color: MUTED,
    fontSize: "14px",
    cursor: "pointer",
    padding: "6px 14px",
    borderRadius: "6px",
    transition: "color 0.2s",
    fontFamily: "inherit",
  },

  // HERO
  hero: {
    position: "relative",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    background: `linear-gradient(135deg, #0A0A0F 0%, #1A0A2E 50%, #0A1628 100%)`,
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse at 70% 50%, rgba(245,197,24,0.08) 0%, transparent 60%)",
  },
  heroContent: {
    position: "relative",
    zIndex: 1,
    padding: "0 60px",
    maxWidth: "700px",
  },
  heroEyebrow: {
    fontSize: "12px",
    letterSpacing: "3px",
    color: GOLD,
    textTransform: "uppercase",
    marginBottom: "20px",
  },
  heroTitle: {
    fontSize: "clamp(48px, 8vw, 88px)",
    fontWeight: 800,
    lineHeight: 1.05,
    marginBottom: "24px",
    background: `linear-gradient(135deg, ${TEXT} 60%, ${GOLD})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  heroSub: {
    fontSize: "18px",
    color: MUTED,
    marginBottom: "40px",
    lineHeight: 1.6,
  },
  heroBtn: {
    background: GOLD,
    color: DARK,
    border: "none",
    padding: "16px 36px",
    fontSize: "15px",
    fontWeight: 700,
    borderRadius: "8px",
    cursor: "pointer",
    letterSpacing: "0.5px",
  },

  // SECTIONS
  section: { padding: "100px 40px", maxWidth: "1300px", margin: "0 auto" },
  sectionTitle: {
    fontSize: "40px",
    fontWeight: 800,
    textAlign: "center",
    marginBottom: "8px",
  },
  sectionSub: {
    fontSize: "16px",
    color: MUTED,
    textAlign: "center",
    marginBottom: "48px",
  },

  // FILTER
  filterRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "48px",
  },
  filterBtn: {
    padding: "8px 20px",
    borderRadius: "20px",
    border: `1px solid rgba(245,197,24,0.25)`,
    background: "transparent",
    color: MUTED,
    fontSize: "13px",
    cursor: "pointer",
    transition: "all 0.2s",
    fontFamily: "inherit",
  },
  filterBtnActive: {
    background: GOLD,
    color: DARK,
    borderColor: GOLD,
    fontWeight: 700,
  },

  // GRID + CARD
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "28px",
  },
  card: {
    background: CARD_BG,
    border: `1px solid rgba(245,197,24,0.15)`,
    borderRadius: "16px",
    overflow: "hidden",
    position: "relative",
    transition: "transform 0.3s, box-shadow 0.3s",
  },

  badge: {
    position: "absolute",
    top: "16px",
    right: "16px",
    zIndex: 2,
    background: "#E8321A",
    color: "white",
    fontSize: "12px",
    fontWeight: 800,
    padding: "5px 12px",
    borderRadius: "20px",
    letterSpacing: "0.5px",
  },

  imgBox: {
    width: "100%",
    height: "210px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: { width: "100%", height: "100%", objectFit: "cover", display: "block" },

  cardBody: { padding: "20px 24px 24px" },
  carName: {
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: "14px",
    color: TEXT,
  },

  infoGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    marginBottom: "16px",
  },
  infoRow: {
    display: "grid",
    gridTemplateColumns: "56px 14px 1fr",
    fontSize: "14px",
  },
  infoLabel: { color: MUTED, fontWeight: 500 },
  infoColon: { color: MUTED, textAlign: "center" },
  infoVal: { color: TEXT, fontWeight: 500 },
  strikePrice: {
    textDecoration: "line-through",
    color: MUTED,
    fontSize: "13px",
  },
  newPrice: { color: GOLD, fontWeight: 700, fontSize: "15px" },
  regularPrice: { color: TEXT, fontWeight: 600 },

  featTitle: {
    fontSize: "13px",
    fontWeight: 700,
    color: GOLD,
    textTransform: "uppercase",
    letterSpacing: "1px",
    marginBottom: "8px",
  },
  featList: { paddingLeft: "18px", marginBottom: "20px" },
  featItem: {
    fontSize: "13px",
    color: MUTED,
    lineHeight: "1.9",
    listStyleType: "square",
  },

  discountArea: {
    borderTop: `1px solid rgba(245,197,24,0.1)`,
    paddingTop: "16px",
  },
  discountBtnRow: { display: "flex", gap: "8px" },
  setDiscountBtn: {
    flex: 1,
    background: "rgba(245,197,24,0.1)",
    border: `1px solid rgba(245,197,24,0.3)`,
    color: GOLD,
    fontSize: "12px",
    fontWeight: 600,
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  removeBtn: {
    background: "rgba(232,50,26,0.1)",
    border: `1px solid rgba(232,50,26,0.3)`,
    color: "#E8321A",
    fontSize: "12px",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  discountInputRow: { display: "flex", gap: "8px", alignItems: "center" },
  discountInput: {
    flex: 1,
    background: SURFACE,
    border: `1px solid rgba(245,197,24,0.3)`,
    borderRadius: "8px",
    padding: "8px 12px",
    color: TEXT,
    fontSize: "14px",
    fontFamily: "inherit",
    outline: "none",
  },
  applyBtn: {
    background: GOLD,
    border: "none",
    color: DARK,
    fontSize: "13px",
    fontWeight: 700,
    padding: "8px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  cancelBtn: {
    background: "transparent",
    border: `1px solid ${MUTED}`,
    color: MUTED,
    fontSize: "13px",
    padding: "8px 10px",
    borderRadius: "8px",
    cursor: "pointer",
    fontFamily: "inherit",
  },

  // ABOUT
  aboutSection: { background: SURFACE, padding: "100px 40px" },
  aboutInner: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 360px",
    gap: "60px",
    alignItems: "start",
  },
  aboutText: {},
  aboutEyebrow: {
    fontSize: "12px",
    color: GOLD,
    letterSpacing: "3px",
    textTransform: "uppercase",
    marginBottom: "12px",
  },
  aboutTitle: { fontSize: "44px", fontWeight: 800, marginBottom: "20px" },
  aboutBody: {
    fontSize: "16px",
    color: MUTED,
    lineHeight: 1.8,
    marginBottom: "40px",
    maxWidth: "540px",
  },
  statsRow: { display: "flex", gap: "24px", flexWrap: "wrap" },
  statBox: { display: "flex", flexDirection: "column", gap: "4px" },
  statNum: { fontSize: "32px", fontWeight: 800, color: GOLD },
  statLabel: {
    fontSize: "12px",
    color: MUTED,
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  branchBox: {
    background: CARD_BG,
    border: `1px solid rgba(245,197,24,0.15)`,
    borderRadius: "16px",
    padding: "28px",
  },
  branchTitle: {
    fontSize: "14px",
    fontWeight: 700,
    color: GOLD,
    textTransform: "uppercase",
    letterSpacing: "1px",
    marginBottom: "16px",
  },
  branchItem: {
    fontSize: "14px",
    color: MUTED,
    padding: "8px 0",
    borderBottom: `1px solid rgba(255,255,255,0.05)`,
    lineHeight: 1.5,
  },

  // CONTACT
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1.5fr",
    gap: "40px",
    alignItems: "start",
  },
  contactInfo: {},
  contactInfoCard: {
    background: CARD_BG,
    border: `1px solid rgba(245,197,24,0.15)`,
    borderRadius: "16px",
    padding: "32px",
  },
  contactInfoTitle: {
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: "24px",
    color: TEXT,
  },
  contactRow: {
    display: "flex",
    gap: "16px",
    alignItems: "flex-start",
    marginBottom: "20px",
  },
  contactIcon: { fontSize: "22px", marginTop: "2px" },
  contactRowLabel: {
    fontSize: "11px",
    color: MUTED,
    textTransform: "uppercase",
    letterSpacing: "1px",
    marginBottom: "2px",
  },
  contactRowVal: { fontSize: "15px", color: TEXT, fontWeight: 500 },
  form: { display: "flex", flexDirection: "column", gap: "16px" },
  formInput: {
    background: CARD_BG,
    border: `1px solid rgba(245,197,24,0.2)`,
    borderRadius: "10px",
    padding: "14px 16px",
    color: TEXT,
    fontSize: "15px",
    fontFamily: "inherit",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  },
  submitBtn: {
    background: GOLD,
    color: DARK,
    border: "none",
    padding: "15px",
    fontSize: "15px",
    fontWeight: 700,
    borderRadius: "10px",
    cursor: "pointer",
    fontFamily: "inherit",
    letterSpacing: "0.3px",
  },
  successMsg: {
    background: "rgba(29,158,117,0.15)",
    border: "1px solid rgba(29,158,117,0.4)",
    color: "#1D9E75",
    padding: "12px 16px",
    borderRadius: "10px",
    fontSize: "14px",
  },

  // FOOTER
  footer: {
    background: "#060609",
    borderTop: `1px solid rgba(245,197,24,0.1)`,
    padding: "40px",
    textAlign: "center",
  },
  footerLogo: {
    fontSize: "16px",
    fontWeight: 700,
    color: GOLD,
    letterSpacing: "3px",
    marginBottom: "10px",
  },
  footerText: { fontSize: "13px", color: MUTED },
};
