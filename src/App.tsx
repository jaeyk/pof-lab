import serenaPhoto from "../images/serena-web.jpg";

const campusImage =
  "https://images.unsplash.com/photo-1779113632457-7d798e5c8778?auto=format&fit=crop&w=1800&q=85";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function ListeningMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      className="size-11 text-[var(--ink)]"
      fill="none"
    >
      <circle
        cx="24"
        cy="24"
        r="23.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="9.5" cy="22" r="2.2" fill="currentColor" />
      <circle cx="15.5" cy="18" r="2.7" fill="currentColor" />
      <circle cx="21.5" cy="22" r="2.2" fill="currentColor" />
      <path
        d="M5.5 32c.4-4 2.7-6.5 5.8-6.5 1.2 0 2.3.4 3.2 1.1.9-2.3 2.7-3.6 5-3.6 3.2 0 5.5 2.8 5.8 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="36" cy="14" r="3" fill="currentColor" />
      <path
        d="M36 17.5v13M36 21l-5 4 3 3M31.5 40l4.5-9.5 4.5 9.5M25.5 17.5c2 1 3.2 2.4 3.7 4.2M25 23c1.6.6 2.7 1.7 3.2 3"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Eyebrow({
  children,
  onDark = false,
}: {
  children: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] ${onDark ? "text-white" : "text-[var(--ink)]"}`}
    >
      <span className="h-px w-8 bg-current" />
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[var(--paper)] text-[var(--ink)]">
      <header className="relative z-20 border-b border-[var(--line)]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 md:px-10 lg:px-16">
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label="People Organizations Futures Lab home"
          >
            <ListeningMark />
            <span className="text-sm font-bold uppercase leading-[1.1] tracking-[0.08em]">
              POF
              <br />
              Lab
            </span>
          </a>

          <nav
            className="flex items-center gap-3 text-base font-bold text-black min-[360px]:gap-4 sm:gap-8 sm:text-lg md:gap-10 md:text-xl"
            aria-label="Primary navigation"
          >
            <a className="nav-link" href="#mission">
              Mission
            </a>
            <a className="nav-link" href="#work">
              Work
            </a>
            <a className="nav-link" href="#people">
              People
            </a>
          </nav>

          <a
            href="#work"
            className="group hidden items-center gap-2 rounded-full border border-[var(--ink)] px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-[var(--ink)] hover:text-white md:flex"
          >
            Explore our work
            <ArrowIcon />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative">
          <div className="mx-auto grid max-w-[1440px] items-end gap-10 px-5 pb-10 pt-10 md:px-10 md:pb-14 md:pt-14 lg:grid-cols-[1.18fr_0.82fr] lg:px-16 lg:pt-16">
            <div className="relative z-10">
              <h1 className="max-w-5xl font-display text-[clamp(2.5rem,13vw,4rem)] leading-[0.82] tracking-[-0.06em] md:text-[clamp(4rem,9vw,9.5rem)] md:leading-[0.78]">
                People.
                <br />
                Organizations.
                <br />
                <span className="text-[var(--blue)]">Futures.</span>
              </h1>
            </div>

            <div className="relative z-10 lg:pb-3">
              <p className="max-w-xl text-lg leading-relaxed text-[var(--ink)] sm:text-xl md:text-2xl">
                A research lab advancing{" "}
                <strong className="font-bold text-[var(--blue)]">people-centered</strong> government through{" "}
                <strong className="font-bold text-[var(--blue)]">design</strong>, <strong className="font-bold text-[var(--blue)]">data</strong>, and{" "}
                <strong className="font-bold text-[var(--blue)]">technology</strong>.
              </p>
              <a
                href="#mission"
                className="mt-8 inline-flex items-center gap-3 border-b border-[var(--ink)] pb-1 text-sm font-bold uppercase tracking-[0.14em]"
              >
                Our approach
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
            <div className="relative h-[38vh] min-h-72 overflow-hidden rounded-t-[2rem] md:h-[50vh]">
              <img
                src={campusImage}
                alt="An audience watches musicians perform in a brightly lit room"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,33,46,0.48)] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-full bg-[var(--paper)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] md:bottom-8 md:left-8">
                Policy, designed with people
              </div>
              <div className="absolute bottom-6 right-6 hidden text-right text-xs leading-relaxed text-white md:block">
                Photo by Pierre Goiffon
                <br />
                via Unsplash
              </div>
            </div>
          </div>
        </section>

        <section
          id="mission"
          className="scroll-mt-8 bg-[var(--ink)] text-white"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:py-20 lg:px-16">
            <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr]">
              <Eyebrow onDark>Our mission</Eyebrow>
              <div>
                <p className="font-display text-4xl leading-[1.04] tracking-[-0.035em] md:text-6xl lg:text-7xl">
                  Stronger institutions.
                  <br />
                  Better implementation.
                  <br />
                  <span className="text-[var(--sky)]">
                    More inclusive and prosperous futures.
                  </span>
                </p>
                <p className="mt-10 max-w-3xl text-lg leading-relaxed text-white md:text-xl">
                  The POF Lab advances people-centered government by
                  strengthening organizational capacity, improving policy
                  implementation, and opening pathways toward more inclusive
                  and prosperous futures.
                </p>
                <p className="mt-8 max-w-3xl border-l border-[var(--sky)] pl-6 font-display text-2xl leading-snug text-white md:text-3xl">
                  Making policy work is like conducting an orchestra: the whole
                  is more than the sum of its parts. For the orchestra to
                  succeed, the conductor must listen to the musicians as much
                  as the musicians follow the conductor’s lead.
                </p>
              </div>
            </div>

            <div className="mt-14 grid border-t border-white/20 md:grid-cols-3">
              {[
                {
                  title: "People",
                  before: "Without ", keyword: "people", after: ", policy loses its purpose.",
                },
                {
                  title: "Organizations",
                  before: "Without effective ", keyword: "organizations", after: ", policy struggles to deliver on its promises.",
                },
                {
                  title: "Futures",
                  before: "Without imagining alternative ", keyword: "futures", after: ", policy remains constrained by the present.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="border-b border-white/20 py-9 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <h2 className="font-display text-4xl">{item.title}</h2>
                  <p className="mt-4 max-w-sm leading-relaxed text-white">
                    {item.before}
                    <strong className="font-bold text-[var(--sky)]">
                      {item.keyword}
                    </strong>
                    {item.after}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="work"
          className="scroll-mt-8 border-b border-[var(--line)]"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:py-20 lg:px-16">
            <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr]">
              <div>
                <Eyebrow>Current project</Eyebrow>
                <div className="mt-8 inline-flex rounded-full bg-[var(--sun)] px-4 py-2 text-xs font-bold uppercase tracking-[0.13em]">
                  In progress
                </div>
              </div>
              <article>
                <p className="font-mono text-base text-[var(--ink)]">
                  Research / Safety Net Programs &amp; Higher Education
                </p>
                <h2 className="mt-5 max-w-5xl font-display text-5xl leading-[0.98] tracking-[-0.035em] md:text-7xl">
                  Higher Education as{" "}
                  <span className="italic text-[var(--blue)]">
                    Safety Net Infrastructure
                  </span>
                </h2>
                <div className="mt-10 grid gap-8 border-t border-[var(--line)] pt-8 md:grid-cols-2">
                  <p className="text-xl leading-relaxed">
                    Public universities do far more than educate. They are
                    often a critical but hidden part of the social safety net.
                  </p>
                  <p className="leading-relaxed text-[var(--ink)]">
                    This project seeks to understand the vital but varied roles
                    public universities play in supporting low-income students,
                    from operating basic-needs centers to providing food
                    pantries.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="people" className="scroll-mt-8">
          <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:py-20 lg:px-16">
            <article className="grid max-w-5xl overflow-hidden rounded-[2rem] bg-[var(--blue)] text-white md:grid-cols-[0.34fr_0.66fr]">
              <div className="relative min-h-72 overflow-hidden bg-[var(--sky)] md:min-h-80">
                <img
                  src="https://github.com/jaeyk.png"
                  alt="Jae Yeon Kim"
                  className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
                />
              </div>
              <div className="flex flex-col justify-between p-7 md:p-8">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                    Lab Founder &amp; Director
                  </p>
                  <h2 className="mt-5 font-display text-4xl tracking-[-0.03em] md:text-5xl">
                    Jae Yeon Kim
                  </h2>
                  <p className="mt-4 max-w-xl leading-relaxed text-white">
                    Assistant Professor of Public Policy at the University of
                    North Carolina at Chapel Hill.
                  </p>
                </div>
                <a
                  href="https://jaeyk.github.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-fit items-center gap-3 border-b border-white/70 pb-1 text-sm font-bold uppercase tracking-[0.14em]"
                >
                  Visit Jae’s website
                  <ArrowIcon />
                </a>
              </div>
            </article>

            <div className="mt-14 grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
              <h2 className="font-display text-5xl tracking-[-0.03em]">
                Team
              </h2>
              <div className="border-t border-[var(--ink)]">
                {[
                  {
                    name: "Serena Michael Ray",
                    field: "Public Policy undergraduate",
                    photo: serenaPhoto,
                  },
                  {
                    name: "Juliet Rose Loffredo",
                    field: "Journalism and Public Policy undergraduate",
                    photo: undefined,
                  },
                ].map((person) => (
                  <article
                    key={person.name}
                    className="grid gap-4 border-b border-[var(--line)] py-8 md:grid-cols-2 md:items-center"
                  >
                    <div className="flex items-center gap-5">
                      {person.photo ? (
                        <img
                          src={person.photo}
                          alt={person.name}
                          className="size-24 shrink-0 rounded-full object-cover object-top grayscale transition duration-700 hover:grayscale-0"
                        />
                      ) : (
                        <div
                          aria-hidden="true"
                          className="flex size-24 shrink-0 items-center justify-center rounded-full bg-[var(--sky)] font-display text-3xl"
                        >
                          {person.name[0]}
                        </div>
                      )}
                      <h3 className="font-display text-3xl">{person.name}</h3>
                    </div>
                    <p className="text-base leading-relaxed text-[var(--ink)] md:text-right">
                      Research Assistant · {person.field}
                      <br />
                      University of North Carolina at Chapel Hill
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="scroll-mt-8 bg-[var(--sky)]">
          <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:py-20 lg:px-16">
            <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr]">
              <div>
                <Eyebrow>Join the lab</Eyebrow>
              </div>

              <div>
                <h2 className="max-w-4xl font-display text-5xl leading-[0.98] tracking-[-0.035em] md:text-7xl">
                  Research Assistant positions
                </h2>
                <p className="mt-8 max-w-3xl text-xl leading-relaxed">
                  POF Lab provides ample opportunities to learn how to conduct
                  research from end to end, from idea generation to research
                  presentation and communication. We use mixed methods,
                  integrating insights from computational, quantitative, and
                  qualitative approaches to strengthen the credibility of our
                  findings.
                </p>


                <p className="mt-10 max-w-3xl rounded-2xl bg-[var(--ink)] p-7 font-display text-2xl leading-snug text-white md:p-8 md:text-3xl">
                  We welcome applications from students whose career goals and sense of
                  purpose align closely with the lab’s mission and research
                  approach.
                </p>

                <p className="mt-8 max-w-3xl border-l-4 border-[var(--ink)] py-1 pl-5 text-lg font-semibold leading-relaxed">
                  Please note: If your primary goal is to quickly add another
                  line to your resume, this lab may not be the right fit.
                </p>

                <a
                  href="https://forms.gle/hMjJGYKHZkuRD3dKA"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--ink)] px-7 py-4 text-lg font-bold text-white transition-transform hover:-translate-y-0.5"
                >
                  Apply to be a Research Assistant
                  <ArrowIcon />
                </a>
                <p className="mt-6 w-fit max-w-3xl rounded-xl bg-[var(--sun)] px-5 py-3 text-lg font-bold leading-relaxed text-[var(--ink)]">
                  Applications are reviewed on a rolling basis. Please prepare
                  a CV and cover letter.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="support" className="scroll-mt-8 bg-[var(--ink)] text-white">
          <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:py-20 lg:px-16">
            <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr]">
              <div>
                <Eyebrow onDark>Support the lab</Eyebrow>
              </div>

              <div>
                <h2 className="max-w-4xl font-display text-5xl leading-[0.98] tracking-[-0.035em] md:text-7xl">
                  Support the lab
                </h2>
                <p className="mt-8 max-w-3xl text-xl leading-relaxed">
                  If you would like to support the lab’s mission, or if you
                  see an opportunity to collaborate, please email{" "}
                  <a
                    href="mailto:jaekim@unc.edu"
                    className="font-bold text-[var(--sky)] underline underline-offset-4"
                  >
                    jaekim@unc.edu
                  </a>
                  .
                </p>
                <a
                  href="mailto:jaekim@unc.edu"
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-lg font-bold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
                >
                  Email the lab
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--sun)]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 text-xs uppercase tracking-[0.12em] md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
          <div>
            <p className="font-bold">People. Organizations. Futures Lab</p>
            <p className="mt-1 normal-case tracking-normal text-[var(--ink)]">
              University of North Carolina at Chapel Hill
            </p>
          </div>
          <div className="flex items-center justify-between gap-8">
            <span>POF Lab © {new Date().getFullYear()}</span>
            <a
              href="#top"
              className="inline-flex items-center gap-2 font-bold"
            >
              Back to top
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
