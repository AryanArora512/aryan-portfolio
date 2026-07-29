import { skillCategories } from "../content";

// Server Component — static, zero JS hydration cost
export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-24 lg:py-32">
      <div className="section-shell">
        <header className="mb-14">
          <p className="section-eyebrow">Technical Skills</p>
          <h2 id="skills-heading" className="section-heading mt-4">
            Technologies in production use
          </h2>
          <p className="section-copy mt-5">
            Every technology listed here has been used in a real, shipped product — not a
            tutorial or side experiment.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.label}
              className="surface-panel rounded-2xl p-5"
            >
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-1.5" role="list" aria-label={`${category.label} technologies`}>
                {category.technologies.map((tech) => (
                  <span key={tech} className="tech-badge" role="listitem">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
