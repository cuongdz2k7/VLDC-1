const fs = require("fs");
const path = require("path");

const inputPath = process.argv[2];
const outputPath = process.argv[3];

if (!inputPath || !outputPath) {
  console.error("Usage: node generate-incline-fbd.js input.json output.svg");
  process.exit(1);
}

const cfg = JSON.parse(fs.readFileSync(inputPath, "utf8"));

const W = cfg.canvas?.width ?? 1100;
const H = cfg.canvas?.height ?? 720;
const theta = ((cfg.slopeAngleDeg ?? 25) * Math.PI) / 180;
const cable = (((cfg.cableAngleDeg ?? 31) + (cfg.slopeAngleDeg ?? 25)) * Math.PI) / 180;
const cx = cfg.body?.cx ?? 540;
const cy = cfg.body?.cy ?? 365;
const bw = cfg.body?.width ?? 190;
const bh = cfg.body?.height ?? 82;

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function point(x, y) {
  return `${x.toFixed(1)},${y.toFixed(1)}`;
}

function arrow(id, color) {
  return `
    <marker id="${id}" markerWidth="6" markerHeight="6" refX="5.3" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="${color}"/>
    </marker>`;
}

function line(x1, y1, x2, y2, cls, marker) {
  return `<line class="${cls}" x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" marker-end="url(#${marker})"/>`;
}

function label(text, x, y, cls = "label") {
  return `<text class="${cls}" x="${x.toFixed(1)}" y="${y.toFixed(1)}">${esc(text)}</text>`;
}

function polarArrow(angle, len, cls, marker, labelText, labelOffset = 18) {
  const x2 = cx + len * Math.cos(angle);
  const y2 = cy - len * Math.sin(angle);
  const lx = cx + (len + labelOffset) * Math.cos(angle);
  const ly = cy - (len + labelOffset) * Math.sin(angle);
  return [
    line(cx, cy, x2, y2, cls, marker),
    label(labelText, lx - 16, ly + 6, "force-label"),
  ].join("\n");
}

const slopeX1 = 135;
const slopeY1 = 565;
const slopeLen = 830;
const slopeX2 = slopeX1 + slopeLen * Math.cos(theta);
const slopeY2 = slopeY1 - slopeLen * Math.sin(theta);
const normal = theta + Math.PI / 2;
const downSlope = theta + Math.PI;
const upSlope = theta;

const bodyTransform = `translate(${cx} ${cy}) rotate(${-cfg.slopeAngleDeg})`;
const axleY = bh / 2 + 2;

const html = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">${esc(cfg.title ?? "Free body diagram")}</title>
  <desc id="desc">${esc(cfg.description ?? "")}</desc>
  <defs>
    ${arrow("arrow-red", "#dc2626")}
    ${arrow("arrow-blue", "#2563eb")}
    ${arrow("arrow-green", "#15803d")}
    ${arrow("arrow-purple", "#7c3aed")}
    ${arrow("arrow-gray", "#374151")}
    <style>
      .bg { fill: #fbfaf7; }
      .card { fill: #fff; stroke: #ddd6ce; stroke-width: 2; rx: 18; }
      .title { font: 700 30px Arial, sans-serif; fill: #111827; }
      .subtitle { font: 500 17px Arial, sans-serif; fill: #4b5563; }
      .label { font: 600 19px Arial, sans-serif; fill: #374151; }
      .force-label { font: italic 700 17px Georgia, serif; fill: #111827; }
      .small { font: 500 16px Arial, sans-serif; fill: #6b7280; }
      .slope { stroke: #8b7d70; stroke-width: 6; stroke-linecap: round; }
      .slope-fill { fill: #e7e5e4; stroke: none; }
      .dash { stroke: #78716c; stroke-width: 2.5; stroke-dasharray: 9 8; fill: none; }
      .body { fill: #f59e42; stroke: #7c2d12; stroke-width: 4; }
      .window { fill: #dbeafe; stroke: #7c2d12; stroke-width: 3; }
      .wheel { fill: #1f2937; stroke: #111827; stroke-width: 3; }
      .wheel-inner { fill: #9ca3af; }
      .force-red { stroke: #dc2626; stroke-width: 2.6; stroke-linecap: round; }
      .force-blue { stroke: #2563eb; stroke-width: 2.6; stroke-linecap: round; }
      .force-green { stroke: #15803d; stroke-width: 2.6; stroke-linecap: round; }
      .force-purple { stroke: #7c3aed; stroke-width: 2.6; stroke-linecap: round; }
      .axis { stroke: #374151; stroke-width: 1.9; stroke-linecap: round; }
      .component { stroke: #9ca3af; stroke-width: 1.5; stroke-dasharray: 6 6; }
      .angle { fill: none; stroke: #374151; stroke-width: 2.5; }
    </style>
  </defs>

  <rect class="bg" width="${W}" height="${H}"/>
  <rect class="card" x="34" y="30" width="${W - 68}" height="${H - 60}"/>

  <text class="title" x="64" y="78">${esc(cfg.title)}</text>
  <text class="subtitle" x="64" y="108">${esc(cfg.subtitle)}</text>

  <polygon class="slope-fill" points="${point(slopeX1, slopeY1)} ${point(slopeX2, slopeY2)} ${point(slopeX2, slopeY1)}"/>
  <line class="slope" x1="${slopeX1}" y1="${slopeY1}" x2="${slopeX2}" y2="${slopeY2}"/>
  <path class="angle" d="M ${slopeX1 + 78} ${slopeY1} A 78 78 0 0 0 ${(slopeX1 + 78 * Math.cos(theta)).toFixed(1)} ${(slopeY1 - 78 * Math.sin(theta)).toFixed(1)}"/>
  ${label(`${cfg.slopeAngleDeg}°`, slopeX1 + 95, slopeY1 - 25, "label")}

  <line class="dash" x1="${(cx - 30).toFixed(1)}" y1="${(cy + 90).toFixed(1)}" x2="${(cx + 260 * Math.cos(theta) - 30).toFixed(1)}" y2="${(cy + 90 - 260 * Math.sin(theta)).toFixed(1)}"/>
  <line class="dash" x1="${cx}" y1="${cy}" x2="${(cx + 230 * Math.cos(cable)).toFixed(1)}" y2="${(cy - 230 * Math.sin(cable)).toFixed(1)}"/>
  <path class="angle" d="M ${(cx + 120 * Math.cos(theta)).toFixed(1)} ${(cy - 120 * Math.sin(theta)).toFixed(1)} A 120 120 0 0 0 ${(cx + 120 * Math.cos(cable)).toFixed(1)} ${(cy - 120 * Math.sin(cable)).toFixed(1)}"/>
  ${label(`${cfg.cableAngleDeg}°`, cx + 128 * Math.cos(theta + 0.25), cy - 128 * Math.sin(theta + 0.25), "label")}

  <g transform="${bodyTransform}">
    <rect class="body" x="${(-bw / 2).toFixed(1)}" y="${(-bh / 2).toFixed(1)}" width="${bw}" height="${bh}" rx="15"/>
    <path class="window" d="M -52 -42 L 6 -42 L 36 -8 L -75 -8 Z"/>
    <circle class="wheel" cx="-60" cy="${axleY}" r="24"/>
    <circle class="wheel-inner" cx="-60" cy="${axleY}" r="9"/>
    <circle class="wheel" cx="68" cy="${axleY}" r="24"/>
    <circle class="wheel-inner" cx="68" cy="${axleY}" r="9"/>
  </g>

  ${polarArrow(cable, 145, "force-green", "arrow-green", "T")}
  ${polarArrow(normal, 100, "force-blue", "arrow-blue", "N")}
  ${polarArrow(-Math.PI / 2, 125, "force-red", "arrow-red", "mg", 10)}
  ${polarArrow(upSlope, 125, "axis", "arrow-gray", "x", 8)}
  ${polarArrow(normal, 85, "axis", "arrow-gray", "y", 8)}

  <line class="component" x1="${cx}" y1="${cy}" x2="${(cx + 130 * Math.cos(downSlope)).toFixed(1)}" y2="${(cy - 130 * Math.sin(downSlope)).toFixed(1)}"/>
  ${label("mg sinθ", cx + 130 * Math.cos(downSlope) - 70, cy - 130 * Math.sin(downSlope) + 30, "small")}
  <line class="component" x1="${cx}" y1="${cy}" x2="${(cx - 115 * Math.cos(normal)).toFixed(1)}" y2="${(cy + 115 * Math.sin(normal)).toFixed(1)}"/>
  ${label("mg cosθ", cx - 115 * Math.cos(normal) - 78, cy + 115 * Math.sin(normal) + 6, "small")}

  <text class="small" x="64" y="${H - 92}">FBD: các lực tác dụng lên xe gồm trọng lực mg, pháp tuyến N, lực căng T. Không có ma sát.</text>
  <text class="small" x="64" y="${H - 62}">Trục x chọn dọc mặt phẳng nghiêng; trục y vuông góc mặt phẳng nghiêng.</text>
</svg>
`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, html, "utf8");
console.log(`Wrote ${outputPath}`);
