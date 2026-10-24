// Lumik's drawings (copies of design/lumik.svg and design/lumik-sleep.svg in src/assets — keep them the same),
// made ready to inline: gradient ids prefixed per instance, and the open eyes grouped so they can blink.
import awakeSource from '../assets/lumik.svg?raw';
import asleepSource from '../assets/lumik-sleep.svg?raw';

function prepare(source: string, id: string, attributes: string, eyes: boolean) {
  let svg = source
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/id="(\w+)"/g, `id="${id}-$1"`)
    .replace(/url\(#(\w+)\)/g, `url(#${id}-$1)`)
    .replace(/width="256" height="256"/, `${attributes} aria-hidden="true" focusable="false"`);
  if (eyes) {
    // The six shapes of the open eyes, whites to highlights, become one group that blinks.
    const start = svg.indexOf('<ellipse cx="20" cy="31"');
    const lastHighlight = svg.indexOf('<circle cx="31.1" cy="30.2"');
    const end = svg.indexOf('/>', lastHighlight) + 2;
    svg = svg.slice(0, start) + '<g class="lumik-eyes">' + svg.slice(start, end) + '</g>' + svg.slice(end);
  }
  return svg;
}

/** `attributes` sizes or places the drawing: `width="26" height="26"`, or `x=… y=… width=… height=…` inside another SVG. */
export const lumikAwake = (id: string, attributes: string) => prepare(awakeSource, id, attributes, true);
export const lumikAsleep = (id: string, attributes: string) => prepare(asleepSource, `${id}-sleep`, attributes, false);
