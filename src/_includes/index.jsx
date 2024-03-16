export const layout = "./base.jsx";

export default ({ contacts, interests, projects, children, comp }) => (
  <>
    <main class="content">
      <comp.Terminal blink text="whoami" />
      <ul class="links">
        {contacts.map((item) => (
          <li>
            <a
              class="contact-link"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {children}

      <comp.Terminal text="cat interests.md" />
      <h3># Interests</h3>
      <ul>
        {interests.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <comp.Terminal text="cat projects.md" />
      <h3 style={{ backgroundColor: "#bf616a" }}># Projects</h3>
      <ul>
        {projects.map((item) => (
          <li>
            <a
              class="project-link"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </main>
    <footer>
      This site was styled with the&nbsp;
      <a href="https://github.com/nordtheme" target="_blank">
        Nord theme
      </a>
    </footer>
  </>
);
