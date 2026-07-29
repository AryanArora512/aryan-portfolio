import { architectureDiagrams, type ArchitectureDiagram, type ArchNode, type ArchEdge } from "../content";

// Server Component — static SVG, zero JS
export function SystemDesign() {
  return (
    <section id="system-design" aria-labelledby="system-design-heading" className="py-24 lg:py-32">
      <div className="section-shell">
        <header className="mb-14">
          <p className="section-eyebrow">System Design</p>
          <h2 id="system-design-heading" className="section-heading mt-4">
            How I design systems
          </h2>
          <p className="section-copy mt-5">
            Three architecture diagrams from production work. Each annotation explains the
            decision behind the component, not just what it is.
          </p>
        </header>

        <div className="flex flex-col gap-8">
          {architectureDiagrams.map((diagram) => (
            <DiagramCard key={diagram.id} diagram={diagram} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DiagramCard({ diagram }: { diagram: ArchitectureDiagram }) {
  return (
    <div className="surface-panel overflow-hidden rounded-3xl p-6 sm:p-8">
      <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
        {diagram.title}
      </h3>

      {/* SVG diagram */}
      <div className="mt-6 overflow-x-auto">
        <ArchSVG diagram={diagram} />
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4" aria-label="Diagram legend">
        {(
          [
            { type: "client", label: "Client" },
            { type: "server", label: "Server" },
            { type: "db", label: "Database" },
            { type: "service", label: "Service" },
            { type: "cloud", label: "Cloud" },
            { type: "ai", label: "AI" },
          ] as { type: ArchNode["type"]; label: string }[]
        ).map(({ type, label }) => (
          <div key={type} className="flex items-center gap-1.5">
            <span
              className={`h-2.5 w-2.5 rounded-sm arch-legend-${type}`}
              aria-hidden="true"
            />
            <span className="text-xs text-slate-500">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function nodeColorClass(type: ArchNode["type"]): string {
  const map: Record<ArchNode["type"], string> = {
    client:  "stroke-cyan-400/40 fill-cyan-400/8 text-cyan-200",
    server:  "stroke-violet-400/40 fill-violet-400/8 text-violet-200",
    db:      "stroke-emerald-400/40 fill-emerald-400/8 text-emerald-200",
    service: "stroke-slate-400/30 fill-slate-400/6 text-slate-300",
    cloud:   "stroke-amber-400/35 fill-amber-400/6 text-amber-200",
    ai:      "stroke-pink-400/40 fill-pink-400/8 text-pink-200",
  };
  return map[type];
}

function legendColorStyle(type: ArchNode["type"]): string {
  const map: Record<ArchNode["type"], string> = {
    client:  "rgba(34,211,238,0.4)",
    server:  "rgba(167,139,250,0.4)",
    db:      "rgba(52,211,153,0.4)",
    service: "rgba(148,163,184,0.3)",
    cloud:   "rgba(251,191,36,0.35)",
    ai:      "rgba(244,114,182,0.4)",
  };
  return map[type];
}

function ArchSVG({ diagram }: { diagram: ArchitectureDiagram }) {
  const COL_W = 200;
  const ROW_H = 130;
  const NODE_W = 168;
  const NODE_H = 72;
  const PAD_X = 16;
  const PAD_Y = 24;

  const cols = Math.max(...diagram.nodes.map((n) => n.col)) + 1;
  const rows = Math.max(...diagram.nodes.map((n) => n.row)) + 1;

  const svgW = cols * COL_W + PAD_X * 2;
  const svgH = rows * ROW_H + PAD_Y * 2;

  function nodeCenter(node: ArchNode) {
    return {
      cx: PAD_X + node.col * COL_W + NODE_W / 2,
      cy: PAD_Y + node.row * ROW_H + NODE_H / 2,
    };
  }

  function nodeById(id: string): ArchNode | undefined {
    return diagram.nodes.find((n) => n.id === id);
  }

  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH}`}
      width={svgW}
      height={svgH}
      role="img"
      aria-labelledby={`${diagram.id}-svg-title`}
      aria-describedby={`${diagram.id}-svg-desc`}
      className="max-w-full"
    >
      <title id={`${diagram.id}-svg-title`}>{diagram.title}</title>
      <desc id={`${diagram.id}-svg-desc`}>{diagram.description}</desc>

      {/* Edge lines */}
      {diagram.edges.map((edge: ArchEdge) => {
        const fromNode = nodeById(edge.from);
        const toNode = nodeById(edge.to);
        if (!fromNode || !toNode) return null;
        const { cx: x1, cy: y1 } = nodeCenter(fromNode);
        const { cx: x2, cy: y2 } = nodeCenter(toNode);
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        return (
          <g key={`${edge.from}-${edge.to}`}>
            <line
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="rgba(148,163,184,0.2)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#arrowhead)"
            />
            {edge.label && (
              <text
                x={midX} y={midY - 6}
                textAnchor="middle"
                fontSize="9"
                fill="rgba(148,163,184,0.55)"
                fontFamily="monospace"
              >
                {edge.label}
              </text>
            )}
          </g>
        );
      })}

      {/* Arrowhead marker */}
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="rgba(148,163,184,0.3)" />
        </marker>
      </defs>

      {/* Nodes */}
      {diagram.nodes.map((node: ArchNode) => {
        const x = PAD_X + node.col * COL_W;
        const y = PAD_Y + node.row * ROW_H;
        const colorClass = nodeColorClass(node.type);
        const borderColor = legendColorStyle(node.type);

        return (
          <g key={node.id} aria-label={`${node.label}: ${node.sublabel}`}>
            <rect
              x={x} y={y}
              width={NODE_W} height={NODE_H}
              rx="10"
              stroke={borderColor}
              strokeWidth="1.5"
              fill={`${borderColor.replace("0.4", "0.07").replace("0.35", "0.06").replace("0.3", "0.05")}`}
              className={colorClass}
            />
            <text
              x={x + NODE_W / 2} y={y + 26}
              textAnchor="middle"
              fontSize="12"
              fontWeight="600"
              fontFamily="system-ui, sans-serif"
              fill="rgba(255,255,255,0.9)"
            >
              {node.label}
            </text>
            <text
              x={x + NODE_W / 2} y={y + 43}
              textAnchor="middle"
              fontSize="9.5"
              fontFamily="monospace"
              fill="rgba(148,163,184,0.65)"
            >
              {node.sublabel}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
