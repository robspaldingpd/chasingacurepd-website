import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Story | Chasing a Cure Parkinson's Foundation",
  description:
    "How a Christmas morning promise became a foundation. The story of Sue, Wendy, and a commitment to never stop until a cure is found.",
  openGraph: {
    title: "Our Story | Chasing a Cure Parkinson's Foundation",
    description:
      "How a Christmas morning promise became a foundation. The story of Sue, Wendy, and a commitment to never stop until a cure is found.",
    url: "https://chasingacurepd.org/about",
    images: [{ url: "/photos/wendy-speaking-at-lake.jpg", width: 1200, height: 630, alt: "Wendy Chase speaking at Concert for a Cure" }],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(160deg, #1A1A1A 0%, #2B2B2B 100%)",
          padding: "140px 24px 96px",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: 20,
            }}
          >
            Our story
          </div>
          <h1
            style={{
              fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.1,
              color: "#FFFFFF",
              margin: "0 0 24px",
              letterSpacing: "-0.01em",
            }}
          >
            Built from a promise. Powered by volunteers. Focused on a cure.
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.7)",
              margin: 0,
              maxWidth: 760,
              textWrap: "auto" as const,
            }}
          >
            On Christmas morning 2017, Wendy Chase sat across the breakfast table from her mom,
            Sue, wishing she could give her a gift Parkinson&apos;s could not take away. With
            treatments no longer helping, Wendy promised to raise money for The Michael J. Fox
            Foundation to help fund a cure, and Sue loved the gift.
          </p>
        </div>
      </section>

      {/* ── MAIN NARRATIVE ── */}
      <section style={{ background: "#FDF7F7", padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 280px",
            gap: 64,
            alignItems: "start",
          }}
          className="narrative-grid"
        >
          {/* Text */}
          <div
            className="narrative-text"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 18,
              lineHeight: 1.8,
              color: "#2B2B2B",
            }}
          >

          <p style={{ margin: "0 0 24px" }}>
            My mom&apos;s name was Sue Chase. If you asked her friends about her, every single
            one of them would tell you the same thing, that when Sue looked at you, when Sue
            listened to you, you felt like you were her only and very best friend in the world.
            That was her gift. She made people feel seen.
          </p>

          <p style={{ margin: "0 0 24px" }}>
            And on Christmas morning 2017, medicine had given all it could, so love gave her what Parkinson&apos;s could not take away: a promise.
          </p>

          <p style={{ margin: "0 0 24px" }}>
            I knew it before anyone said it out loud. Because of my background and my
            experience, I understood what the treatment options were, and I had watched her
            try every single one. There was nothing left. The team had done everything they
            could. No more appointments that mattered. No more medications that would turn
            the tide. Only a miracle could save her now, and I already knew the miracle
            wasn&apos;t coming.
          </p>

          <p style={{ margin: "0 0 24px" }}>
            But my mom never knew that. Or if she did, she never let it stop her. She fought
            with a kind of grit I will admire for the rest of my life. She had strength I still
            cannot fathom. She never gave up hope, not once, not until the very end.
          </p>

          <p style={{ margin: "0 0 24px" }}>
            Christmas morning is supposed to feel like joy. Like gratitude. Like the celebration
            of a Savior born into the world. That Christmas morning felt like none of those things.
            It felt out of place. It felt like the air had been let out of the room.
          </p>

          <p style={{ margin: "0 0 24px" }}>
            I sat with her and I had nothing to give her. No gift in the world could bring her
            joy anymore, because hope, the kind the doctors can offer, was done. And in that
            silence, in that hollow, unbearable silence, God winked at me.
          </p>

          <p style={{ margin: "0 0 24px" }}>
            Words came out of my mouth before I knew I was going to say them.
          </p>

          <blockquote
            style={{
              borderLeft: "3px solid #A97C7C",
              paddingLeft: 28,
              margin: "36px 0",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(20px, 2.5vw, 26px)",
                lineHeight: 1.5,
                color: "#000000",
                margin: 0,
                textWrap: "auto" as const,
              }}
            >
              &ldquo;Mom, what if we started raising money? What if we tried<br />to find a cure for Parkinson&apos;s?&rdquo;
            </p>
          </blockquote>

          <p style={{ margin: "0 0 24px" }}>
            And my mom lit up. I watched her heart grow right there in front of me. She looked
            at me and she said,{" "}
            <em>Let&apos;s do that. Let&apos;s make sure no other family has to go through this.</em>
          </p>

          <p style={{ margin: "0 0 24px" }}>
            That was the beginning.
          </p>

          <p style={{ margin: "0 0 24px" }}>
            In April of 2018, we started the Chasing a Cure Parkinson&apos;s Foundation, a
            name that blends my family&apos;s name, Chase, with my husband Rob&apos;s family
            name, Spalding. Because Parkinson&apos;s took from both sides. Because this fight
            was never just mine. My mom helped shape the vision. She was there at the beginning.
            She did not get to see the rest.
          </p>

          <p style={{ margin: "0 0 24px" }}>
            Just after the next Christmas, Parkinson&apos;s took her from us. On her last
            conscious night, before hospice began and before she went home to heaven, she made
            me promise her something. She asked me to never stop. Never stop until a cure
            is found.
          </p>

          <blockquote
            style={{
              background: "#1A1A1A",
              borderRadius: 12,
              padding: "36px 40px",
              margin: "40px 0",
              border: "none",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(20px, 2.5vw, 26px)",
                lineHeight: 1.5,
                color: "#FFFFFF",
                margin: "0 0 16px",
                textWrap: "auto" as const,
              }}
            >
              &ldquo;My mom fought with everything she had. Her miracle<br />didn&apos;t come. Let&apos;s be somebody else&apos;s.&rdquo;
            </p>
            <footer style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", fontStyle: "normal" }}>
             Wendy Chase
            </footer>
          </blockquote>
          </div>{/* end text column */}

          {/* Sue Chase photo, right column, sticky so it stays visible as text scrolls */}
          <div style={{ position: "sticky", top: 100 }}>
            <Image
              src="/photos/sue-chase.avif"
              alt="Sue Chase"
              width={280}
              height={360}
              style={{
                borderRadius: 12,
                objectFit: "cover",
                width: "100%",
                height: "auto",
                boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
              }}
            />
            <div style={{ fontSize: 13, color: "#9B9FAE", marginTop: 10, letterSpacing: "0.04em", textAlign: "center" }}>
              Sue Chase · 1950–2018
            </div>
          </div>

        </div>{/* end narrative grid */}
      </section>

      {/* ── FOUNDERS ── */}
      <section style={{ background: "#F6F1E6", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#6B6F7D",
              marginBottom: 48,
              textAlign: "center",
            }}
          >
            The co-founders
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}
            className="founders-grid"
          >
            {/* Wendy */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 1px 2px rgba(20,33,61,0.06), 0 8px 24px rgba(20,33,61,0.06)",
              }}
            >
              <div style={{ position: "relative", height: 280, overflow: "hidden" }}>
                <Image
                  src="/photos/wendy-speaking-at-lake.jpg"
                  alt="Wendy Chase speaking at Concert for a Cure"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 20%" }}
                />
              </div>
              <div style={{ padding: "32px 32px 36px" }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A97C7C", marginBottom: 8 }}>Co-founder</div>
                <h3 style={{ fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif", fontWeight: 400, fontSize: "clamp(22px, 2.5vw, 28px)", color: "#000000", margin: "0 0 16px" }}>Wendy Chase</h3>
                <p style={{ fontSize: 16, lineHeight: 1.75, color: "#2B2B2B", margin: 0 }}>
                  Wendy is the driving force of the foundation. Her mother Sue died from Parkinson&apos;s in December 2017. Wendy founded Chasing a Cure Foundation the following April in her honor. A leader in the pharmaceutical and biotech industries with decades of experience, Wendy built Chasing a Cure Foundation to channel her professional expertise and personal heartbreak into something lasting.
                </p>
              </div>
            </div>

            {/* Rob */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 1px 2px rgba(20,33,61,0.06), 0 8px 24px rgba(20,33,61,0.06)",
              }}
            >
              <div style={{ position: "relative", height: 280, overflow: "hidden" }}>
                <Image
                  src="/photos/wendy-rob-mjff-event-2.jpg"
                  alt="Wendy and Rob Spalding at the Michael J. Fox Foundation MVP event"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 15%" }}
                />
              </div>
              <div style={{ padding: "32px 32px 36px" }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A97C7C", marginBottom: 8 }}>Co-founder</div>
                <h3 style={{ fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif", fontWeight: 400, fontSize: "clamp(22px, 2.5vw, 28px)", color: "#000000", margin: "0 0 16px" }}>Rob Spalding</h3>
                <p style={{ fontSize: 16, lineHeight: 1.75, color: "#2B2B2B", margin: 0 }}>
                  Rob brings a career spanning pharma, biotech, and health technology to the mission. His aunt lives with Parkinson&apos;s disease, making this work personal as well as professional. He and Wendy each bring more than two decades of life sciences leadership to a foundation built entirely on volunteer effort.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── THE CONVICTION ── */}
      <section style={{ background: "#FDF7F7", padding: "80px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#6B6F7D",
              marginBottom: 24,
            }}
          >
            Why we exist
          </div>
          <h2
            style={{
              fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 3.5vw, 40px)",
              lineHeight: 1.2,
              color: "#000000",
              textWrap: "auto" as const,
              margin: "0 0 32px",
            }}
          >
            Awareness is not what families are<br />begging for at 3 a.m.
          </h2>
          <div
            style={{
              fontSize: 18,
              lineHeight: 1.8,
              color: "#2B2B2B",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <p style={{ margin: 0, textWrap: "auto" as const }}>
              Awareness is important. But awareness is not what families are begging for at
              3 a.m. in a hospital room. Awareness is not what I was holding in my hands that
              Christmas morning when I knew my mother was leaving me. A cure is what families
              deserve.
            </p>
            <p style={{ margin: 0, textWrap: "auto" as const }}>
              The science is moving. That is the part I want you to hear. The science{" "}
              <em>is moving</em>, and it is close enough that funding it now, funding it today,
              funding it this year, actually changes when we get there. That&apos;s not a
              marketing line. That&apos;s what my career has taught me.
            </p>
          </div>
        </div>
      </section>

      {/* ── PERSONAL STAKES ── */}
      <section style={{ background: "#1A1A1A", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: 40,
              textAlign: "center",
            }}
          >
            Who we are working for
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
            className="people-grid"
          >
            {[
              {
                name: "Sue Chase",
                role: "Wendy's mom · The reason we started",
                description:
                  "When Sue looked at you, you felt like you were her only and very best friend in the world. That was her gift. She made people feel seen. She is the reason this foundation exists. She is the reason we will not stop.",
              },
              {
                name: "Homer",
                role: "Wendy's godfather · Living with Parkinson's",
                description:
                  "Homer is one of the bravest people Wendy knows. He navigates Parkinson's every day with grace and grit. He is who we are working for. He is proof that the work is not finished.",
              },
              {
                name: "Melva",
                role: "Rob's aunt · Living with Parkinson's",
                description:
                  "Melva's diagnosis made clear that Parkinson's doesn't stop at one side of the family. It took from both. This foundation was built for Melva, for Sue, and for every family still waiting.",
              },
            ].map((person) => (
              <div
                key={person.name}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: "32px 28px",
                }}
              >
                <Image
                  src="/butterfly-badge.png"
                  alt=""
                  aria-hidden="true"
                  width={44}
                  height={44}
                  style={{ borderRadius: "50%", marginBottom: 20 }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    color: "#FFFFFF",
                    margin: "0 0 6px",
                  }}
                >
                  {person.name}
                </h3>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#EDC2C1",
                    marginBottom: 16,
                  }}
                >
                  {person.role}
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: 0 }}>
                  {person.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDATION FACTS ── */}
      <section style={{ background: "#2B2B2B", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: 40,
              textAlign: "center",
            }}
          >
            The foundation
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}
            className="facts-grid"
          >
            {[
              { label: "Legal name", value: "Chasing a Cure Parkinson's Foundation" },
              { label: "Status", value: "501(c)(3) nonprofit" },
              { label: "EIN", value: "82-5107944" },
              { label: "Founded", value: "April 2018" },
              { label: "Location", value: "Fishers, Indiana" },
              { label: "Paid staff", value: "None. Fully volunteer-run." },
              { label: "Research partner", value: "Michael J. Fox Foundation / Team Fox" },
              { label: "Co-founders", value: "Wendy Chase & Rob Spalding" },
            ].map((fact) => (
              <div
                key={fact.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  padding: "20px 24px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 8,
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {fact.label}
                </div>
                <div style={{ fontSize: 16, fontWeight: 500, color: "#FFFFFF" }}>
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#FDF7F7", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 3.5vw, 40px)",
              lineHeight: 1.2,
              color: "#000000",
              margin: "0 0 16px",
            }}
          >
            The science is moving. Help us get there.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#2B2B2B", margin: "0 0 36px" }}>
            Funds raised benefit The Michael J. Fox Foundation for Parkinson&apos;s Research. No salaries. No paid staff. Science fuels hope.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/donate"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "16px 36px",
                background: "#EDC2C1",
                color: "#1A0A0A",
                borderRadius: 999,
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: 17,
                textDecoration: "none",
              }}
            >
              Fuel the Science
            </Link>
            <Link
              href="/concert"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "16px 28px",
                background: "transparent",
                color: "#000000",
                border: "1px solid #DCDDE3",
                borderRadius: 999,
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 600,
                fontSize: 17,
                textDecoration: "none",
              }}
            >
              Concert for a Cure
            </Link>
          </div>
        </div>
      </section>


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://chasingacurepd.org" },
          { "@type": "ListItem", "position": 2, "name": "Our Story", "item": "https://chasingacurepd.org/about" },
        ]
      })}} />

      <style>{`
        .narrative-text p { text-wrap: auto; }
        @media (max-width: 900px) {
          .narrative-grid { grid-template-columns: 1fr !important; }
          .narrative-grid > div:last-child { display: none; }
        }
        @media (max-width: 768px) {
          .founders-grid { grid-template-columns: 1fr !important; }
          .people-grid { grid-template-columns: 1fr !important; }
          .facts-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
