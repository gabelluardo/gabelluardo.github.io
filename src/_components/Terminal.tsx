import type { MetaData } from "lume/plugins/metas.ts";

export default ({ metas, text, blink }: Lume.Data) => (
  <div
    class={`typeme ${blink && "blink"}`}
    style={{ width: `${width(text, metas)}ch` }}
  >
    <span class="text-secondary">{metas?.site}&nbsp;</span>
    <span class="text-background">~&nbsp;</span>
    <span class="cursor">$&nbsp;</span>
    {text}
  </div>
);

function width(text: string, metas?: MetaData): number {
  return (metas?.site ?? "").length + 5 + text.length;
}
