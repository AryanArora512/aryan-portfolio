export default function Loading() {
  return (
    <article className="py-24 lg:py-32">
      <div className="section-shell">
        <header className="mb-16 md:mb-24">
          <div className="h-4 w-24 bg-white/10 rounded animate-pulse mb-6" />
          <div className="h-12 md:h-16 w-3/4 bg-white/10 rounded animate-pulse mb-6" />
          <div className="h-6 w-full max-w-2xl bg-white/5 rounded animate-pulse" />
        </header>

        <div className="space-y-16">
          <div className="h-48 w-full bg-white/5 rounded-2xl animate-pulse" />
          
          <div className="space-y-4">
            <div className="h-8 w-48 bg-white/10 rounded animate-pulse mb-6" />
            <div className="h-4 w-full bg-white/5 rounded animate-pulse" />
            <div className="h-4 w-full bg-white/5 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-white/5 rounded animate-pulse" />
          </div>

          <div className="space-y-4">
            <div className="h-8 w-48 bg-white/10 rounded animate-pulse mb-6" />
            <div className="h-32 w-full bg-white/5 rounded-2xl animate-pulse" />
          </div>
        </div>
      </div>
    </article>
  );
}
