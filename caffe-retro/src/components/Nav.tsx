type Item = { id: string; label: string };

export default function Nav({ items }: { items: Item[] }) {
  return (
    <nav className="site-nav" aria-label="Huvudnavigation">

      <ul>
        {items.map(it => (
          <li key={it.id}>
            <a href={`#${it.id}`}>{it.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
