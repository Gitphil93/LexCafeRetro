type Item = { name: string; price: string };

export default function PriceList({ items }: { items: Item[] }) {
  return (
    <div className="panel menu">
      {items.map((it) => (
        <div key={it.name} className="menu-row">
          <span className="menu-name">{it.name}</span>
          <span className="menu-price">{it.price}</span>
        </div>
      ))}
    </div>
  );
}
