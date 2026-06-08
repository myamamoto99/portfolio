import { homeStyles } from "@/styles/home";

export default function HomePage() {
  const featuredItems = [
    "My React project and UI experiments.",
    "A running log of my completed marathons and race highlights.",
    "A curated list of online puzzle games I keep coming back to.",
    "A baking tab with photos of my favorite creations.",
  ];

  const skillSections = [
    {
      label: "Languages & Technologies",
      value: "JavaScript, TypeScript, SQL, HTML, CSS",
    },
    {
      label: "Frameworks & Tools",
      value:
        "Vue.js, React, Redux, Next.js, Node.js, Vuex, Pinia, XState, Tailwind CSS, REST APIs, GraphQL, Git, GitHub Actions, CI/CD, Feature Flags",
    },
    {
      label: "AI & Analytics",
      value: "LLM Integration, Claude Code, GitHub Copilot, Kibana, Pendo",
    },
    {
      label: "Concepts",
      value:
        "Frontend Architecture, Internal Tooling, API Integration, State Management, A/B Testing, Agile, UI/UX, Production Debugging",
    },
  ];

  const experienceItems = [
    {
      role: "Engineering Manager / Senior Software Engineer",
      company: "FactSet",
      location: "New York, NY",
      period: "July 2021 - Present",
      highlights: [
        "Manage a team of 7 engineers (5 direct + 2 matrix), driving technical direction, sprint planning, and cross-functional delivery across multiple concurrent projects.",
        "Architected and scaled a 300+ component Vue/TypeScript frontend used by ~40,000 users.",
        "Own a customizable internal workflow platform adopted across 45 clients and serving ~40,000 users, enabling non-engineering teams to manage and deploy product configurations with minimal engineering dependency.",
        "Integrated third-party AI platforms into production applications and leverage LLM-based tools (Claude, GitHub Copilot) to accelerate development workflows and code quality.",
        "Implement and manage feature flags to support controlled rollouts and A/B testing, enabling teams to safely ship and validate changes across a large user base.",
        "Define API integration patterns across distributed UI systems, partnering with backend teams to validate data contracts and maintain production reliability.",
        "Instrumented 50+ components with analytics via Kibana and Pendo, defining and tracking adoption metrics that drive feature prioritization, deprioritization, and a full application redesign.",
        "Established and own the team&apos;s CI/CD release process via GitHub Actions, standardizing weekly production releases and reducing deployment errors across 52 annual releases.",
        "Champion frontend quality standards by triaging critical issues same-day and maintaining a near-perfect release record with only 1-2 rollbacks across ~100 production releases.",
        "Bridge engineering, product, and design across 6 stakeholders, translating business requirements into frontend specs and driving alignment from discovery through delivery.",
        "Mentor 3 engineers new to the company, onboarded 2 directly onto the team, and spearhead the New York Summer Engineering Internship Program for 5 consecutive years.",
        "Received the CEO Equity Award, granted to a select group of employees who demonstrate an exceptional commitment to FactSet values and inspire others to do the same.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "FactSet",
      location: "Remote",
      period: "June 2020 - August 2020",
      highlights: [
        "Built a GraphQL API enabling cross-system search for clients and internal teams across distributed data sources.",
        "Presented an M&A research proposal to stakeholders and led team retrospectives to track milestones and iterate on delivery.",
      ],
    },
  ];

  const educationItems = [
    {
      school: "University of Michigan",
      degree: "B.S. Computer Science | B.S. Economics",
      location: "Ann Arbor, MI",
    },
  ];

  return (
    <section className={homeStyles.section}>
      <div className={homeStyles.aboutCard}>
        <div className={homeStyles.aboutInner}>
          <h3 className={homeStyles.sectionTitle}>About Me</h3>

          <p className={`mt-5 ${homeStyles.bodyText}`}>
            I&apos;m Mirei (but everyone calls me Mimi), a Senior Frontend Engineer and Engineering
            Manager based in Brooklyn, NY. Over 5+ years at FactSet, I&apos;ve built large-scale
            Vue/TypeScript applications, architected a 300+ component frontend serving ~40,000
            users, established CI/CD infrastructure that supports 52 production releases per year,
            and owned a client workflow system adopted across 45 clients. I&apos;m strongest in
            frontend architecture, API integration, and state management, with the cross-functional
            range to align engineering, product, and design from discovery through delivery.
          </p>
          <p className={`mt-4 ${homeStyles.bodyText}`}>
            Outside of work, I run marathons, hike, read constantly, and never turn down a good game
            - puzzles, board games, video games, spikeball, whatever&apos;s on the table. I also
            cross-stitch and bake, which helps me stay balanced. This site is my playground for
            learning React, Next.js, and Redux.
          </p>
        </div>
      </div>

      <div className={homeStyles.contentGrid}>
        <div className={homeStyles.panel}>
          <h3 className={homeStyles.sectionTitle}>Experience</h3>
          <div className={homeStyles.resumeWrap}>
            {experienceItems.map((item) => (
              <article
                key={`${item.company}-${item.role}-${item.period}`}
                className={homeStyles.resumeItem}
              >
                <p className={homeStyles.resumeHeader}>
                  {item.role} <span className={homeStyles.resumeSubtle}>at {item.company}</span>
                </p>
                <p className={homeStyles.resumeMeta}>{item.location}</p>
                <p className={homeStyles.resumeMeta}>{item.period}</p>
                <ul className={homeStyles.resumeList}>
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className={homeStyles.resumeListItem}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className={homeStyles.panel}>
          <h3 className={homeStyles.sectionTitle}>Skills &amp; Stack</h3>

          <div className={homeStyles.skillsWrap}>
            {skillSections.map((section) => (
              <div key={section.label} className={homeStyles.skillItem}>
                <p className={homeStyles.skillLabel}>{section.label}</p>
                <p className={homeStyles.skillValue}>{section.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={homeStyles.panel}>
          <h3 className={homeStyles.sectionTitle}>What You&apos;ll Find Here</h3>
          <ul className={homeStyles.list}>
            {featuredItems.map((item) => (
              <li key={item} className={homeStyles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={homeStyles.panel}>
          <h3 className={homeStyles.sectionTitle}>Education</h3>
          <div className={homeStyles.resumeWrap}>
            {educationItems.map((item) => (
              <article
                key={`${item.school}-${item.degree}-${item.location}`}
                className={homeStyles.resumeItem}
              >
                <p className={homeStyles.resumeHeader}>{item.school}</p>
                <p className={homeStyles.resumeMeta}>{item.degree}</p>
                <p className={homeStyles.resumeMeta}>{item.location}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
