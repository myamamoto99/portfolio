export default function HomePage() {
  return (
    <section className="grid h-full content-start items-start gap-6 pt-2">
      <div className="relative overflow-hidden rounded-3xl border border-[var(--ui-border-soft)] bg-[var(--ui-surface-base)] p-6 shadow-[0_20px_48px_-32px_var(--ui-shadow-elevated)] md:p-8">
        <div className="relative">
         <h3 className="text-base font-semibold text-[var(--ui-text-strong)]">About Me</h3>

          <p className="mt-5 text-base leading-7 text-[var(--ui-text-muted)] md:text-[17px]">
            I&apos;m Mirei (but everyone calls me Mimi) - an Engineering Manager and
            frontend engineer based in Brooklyn, NY. I spend my days leading a team
            of engineers at FactSet, where I architect large-scale Vue/TypeScript
            applications and bridge the gap between engineering, product, and design.
          </p>
          <p className="mt-4 text-base leading-7 text-[var(--ui-text-muted)] md:text-[17px]">
            Outside of work, I run marathons, hike, read constantly, and never turn
            down a good game - puzzles, board games, video games, spikeball,
            whatever&apos;s on the table. I also cross-stitch and bake, which helps me
            stay balanced. This site is my playground for learning React, Next.js,
            and Redux.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--ui-border-soft)] bg-[var(--ui-surface-base)] p-6 shadow-[0_18px_40px_-34px_var(--ui-shadow-elevated)]">
          <h3 className="text-base font-semibold text-[var(--ui-text-strong)]">What You&apos;ll Find Here</h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--ui-text-muted)]">
            <li className="rounded-lg bg-[var(--ui-surface-subtle)] px-3 py-2">My React learning project and UI experiments.</li>
            <li className="rounded-lg bg-[var(--ui-surface-subtle)] px-3 py-2">A running log of my completed marathons and race highlights.</li>
            <li className="rounded-lg bg-[var(--ui-surface-subtle)] px-3 py-2">A curated list of online puzzle games I keep coming back to.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-[var(--ui-border-soft)] bg-[var(--ui-surface-base)] p-6 shadow-[0_18px_40px_-34px_var(--ui-shadow-elevated)]">
          <h3 className="text-base font-semibold text-[var(--ui-text-strong)]">Skills &amp; Stack</h3>

          <div className="mt-4 space-y-4 text-sm leading-6 text-[var(--ui-text-muted)]">
            <div className="rounded-lg bg-[var(--ui-surface-subtle)] px-3 py-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ui-text-strong)]">Currently Learning</p>
              <p className="mt-1">React, Next.js, Redux</p>
            </div>

            <div className="rounded-lg bg-[var(--ui-surface-subtle)] px-3 py-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ui-text-strong)]">Languages &amp; Technologies</p>
              <p className="mt-1">JavaScript, TypeScript, SQL, HTML, CSS</p>
            </div>

            <div className="rounded-lg bg-[var(--ui-surface-subtle)] px-3 py-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ui-text-strong)]">Frameworks &amp; Tools</p>
              <p className="mt-1">Vue.js, Node.js, Vuex, Pinia, XState, REST APIs, Git, GitHub Actions, CI/CD pipelines</p>
            </div>

            <div className="rounded-lg bg-[var(--ui-surface-subtle)] px-3 py-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ui-text-strong)]">Concepts</p>
              <p className="mt-1">Frontend architecture, API integration, state management, agile development, UI/UX principles, production debugging</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
