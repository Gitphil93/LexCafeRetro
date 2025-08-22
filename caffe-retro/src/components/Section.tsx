type Props = {
  id: string;
  title: string;
  bg: string;
  align?: "left" | "center" | "right";
  children?: React.ReactNode;
};

export default function Section({ id, title, bg, align = "center", children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`hero hero--${align}`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <header className="hero__header">
        <h2 id={`${id}-title`} className="hero__title">{title}</h2>
      </header>
      <div className="hero__content">{children}</div>
    </section>
  );
}
