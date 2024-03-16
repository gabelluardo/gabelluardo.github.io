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
          <li>
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
        {interests.map((item: string) => (
          <li>{item}</li>
        ))}
      </ul>

      <comp.Terminal text="cat projects.md" />
      <h3 style={{ backgroundColor: "#bf616a" }}># Projects</h3>
      <ul>
        {projects.map((item: { name: string; url: string }) => (
          <li>
            <a class="project-link" href={item.url}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </main>
    <footer>
      This site was styled with the&nbsp;
      <a href="https://github.com/nordtheme">Nord theme</a>
    </footer>
  </>
);
