import { homeStyles } from "@/styles/home";

export default function HomePage() {
  const featuredItems = [
    "My React learning project and UI experiments.",
    "A running log of my completed marathons and race highlights.",
    "A curated list of online puzzle games I keep coming back to.",
  ];

  const skillSections = [
    {
      label: "Currently Learning",
      value: "React, Next.js, Redux, Tailwind CSS",
    },
    {
      label: "Languages & Technologies",
      value: "JavaScript, TypeScript, SQL, HTML, CSS",
    },
    {
      label: "Frameworks & Tools",
      value: "Vue.js, Node.js, Vuex, Pinia, XState, REST APIs, Git, GitHub Actions, CI/CD pipelines",
    },
    {
      label: "Concepts",
      value:
        "Frontend architecture, API integration, state management, agile development, UI/UX principles, production debugging",
    },
  ];

  return (
    <section className={homeStyles.section}>
      <div className={homeStyles.aboutCard}>
        <div className={homeStyles.aboutInner}>
          <h3 className={homeStyles.sectionTitle}>About Me</h3>

          <p className={`mt-5 ${homeStyles.bodyText}`}>
            I&apos;m Mirei (but everyone calls me Mimi) - an Engineering Manager and
            frontend engineer based in Brooklyn, NY. I spend my days leading a team
            of engineers at FactSet, where I architect large-scale Vue/TypeScript
            applications and bridge the gap between engineering, product, and design.
          </p>
          <p className={`mt-4 ${homeStyles.bodyText}`}>
            Outside of work, I run marathons, hike, read constantly, and never turn
            down a good game - puzzles, board games, video games, spikeball,
            whatever&apos;s on the table. I also cross-stitch and bake, which helps me
            stay balanced. This site is my playground for learning React, Next.js,
            and Redux.
          </p>
        </div>
      </div>

      <div className={homeStyles.secondaryGrid}>
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
          <h3 className={homeStyles.sectionTitle}>Skills &amp; Stack</h3>

          <div className={homeStyles.skillsWrap}>
            {skillSections.map((section) => (
              <div key={section.label} className={homeStyles.listItem}>
                <p className={homeStyles.skillLabel}>{section.label}</p>
                <p className={homeStyles.skillValue}>{section.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
