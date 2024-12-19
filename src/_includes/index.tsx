export const layout = "base.tsx";

export default ({
  contacts,
  interests,
  projects,
  children,
  comp,
}: Lume.Data) => (
  <>
    <comp.Terminal blink text="whoami" />
    <main class="content">
      <ul class="links">
        {contacts.map((item: { name: string; url: string }) => (
          <li key={item.name}>
            <a class="contact-link" href={item.url}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      {children}
      <comp.Terminal text="cat interests.md" />
      <h3># Interests</h3>
      <ul>
        {interests.map((item: string) => <li key={item}>{format(item)}</li>)}
      </ul>
      <comp.Terminal text="cat projects.md" />
      <h3 style={{ backgroundColor: "#bf616a" }}># Projects</h3>
      <ul>
        {projects.map((item: { name: string; url: string }) => (
          <li key={item.name}>
            <a class="project-link" href={item.url}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <footer>
        Styled with the&nbsp;
        <a href="https://github.com/nordtheme">Nord theme</a>
      </footer>
    </main>
  </>
);

function format(s: string) {
  if (!s.includes("&&")) {
    return s;
  }

  const parts = s.split("&&");

  return parts.map((part, index) => (
    <span key={part.trim()}>
      {part.trim()}
      {index < parts.length - 1 && <span style={{ color: "#bf616a" }}>&&</span>}
    </span>
  ));
}
