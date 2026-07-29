export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#060816]">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/75 animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="h-2 w-2 rounded-full bg-white/35 animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="h-2 w-2 rounded-full bg-white/15 animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
        <p className="font-display text-xs uppercase tracking-[0.34em] text-slate-400">
          Loading
        </p>
      </div>
    </div>
  );
}
