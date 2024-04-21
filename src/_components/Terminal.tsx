export default ({ metas, text, blink }: Lume.Data) => (
  <div class={blink && "typeme"}>
    <span class="text-secondary">{metas?.site}&nbsp;</span>
    <span class="text-background">~&nbsp;</span>
    <span class="cursor">$&nbsp;</span>
    {text}
  </div>
);
