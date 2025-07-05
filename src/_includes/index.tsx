export const layout = "base.tsx";

export default ({
  contacts,
  interests,
  projects,
  children,
  comp,
}: Lume.Data) => (
  <>
    {/* Outsize becaouse of the typeme classs */}
    <comp.Terminal text="ls -aa contacts" />

    <main class="content">
      <div class="ls-output">
        {contacts.map((
          item: { name: string; url?: string },
        ) => (
          <a
            key={item.name}
            class={item.url ? "contact" : "no-link"}
            href={item.url}
          >
            {item.name}
          </a>
        ))}
      </div>

      <comp.Terminal blink text="whoami" />
      {children}

      <comp.Terminal text="cat interests.md" />
      <h3># Interests</h3>
      <ul>
        {interests.map((item: string) => <li key={item}>{format(item)}</li>)}
      </ul>

      <comp.Terminal text="cat projects.md" />
      <h3># Projects</h3>
      <ul>
        {projects.map((item: { name: string; url: string }) => (
          <li key={item.name}>
            <a class="project" href={item.url}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </main>

    <footer class="content">
      Styled with the&nbsp;
      <a href="https://github.com/nordtheme">Nord theme</a>
    </footer>
  </>
);

function format(s: string) {
  if (!s.includes("&&")) {
    return <span>{s}</span>;
  }

  const parts = s.split("&&");

  return parts.map((part, index) => (
    <span key={part.trim()}>
      {part.trim()}
      {index < parts.length - 1 && (
        <span style={{ color: "#bf616a" }}>&nbsp;&&&nbsp;</span>
      )}
    </span>
  ));
}
