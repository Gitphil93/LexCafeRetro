import Nav from "./components/Nav";
import Section from "./components/Section";
import PriceList from "./components/PriceList";

import hotImg from "./assets/hot.jpg";
import juiceImg from "./assets/juicy.jpg";
import cosyImg from "./assets/cosy.jpg";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#hot">Hoppa till innehåll</a>

      <Nav
        items={[
          { id: "hot", label: "Hot" },
          { id: "juicy", label: "Juicy" },
          { id: "cosy", label: "Cosy" },
        ]}
      />

      <main>
       
        <Section id="hot" bg={hotImg} align="center" title="Hot">
          <p className="ribbon-left">
            Hot freshly ground black coffee or a cup of exquisite tea?
          </p>
          <p className="ribbon-right">
            We give you that perfect cup every time.
          </p>
          <PriceList
            items={[
              { name: "Mocha Latte", price: "€ 7.50" },
              { name: "Caffe Formaggio", price: "€ 5.00" },
              { name: "Espresso", price: "€ 3.50" },
              { name: "Chai Verde Latte", price: "€ 5.50" },
            ]}
          />
        </Section>

        <Section id="juicy" bg={juiceImg} align="center" title="Juicy">
          <p className="ribbon-left">
            Ripe fruit - freshly squeezed.
          </p>
          <p className="ribbon-right">
            It&apos;s as simple as that. Chunky or smooth - it&apos;s your choice.
          </p>
          <PriceList
            items={[
              { name: "Branched Apricots", price: "€ 4.20" },
              { name: "Deep Rasberries", price: "€ 3.50" },
              { name: "Smooth Oranges", price: "€ 6.50" },
            ]}
          />
        </Section>

        <Section id="cosy" bg={cosyImg} align="center" title="Cosy">
          <p className="ribbon-left">
            Hang around. Enjoy the settings.
          </p>
          <p className="ribbon-right">
            Use our fast WiFi. Borrow a newspaper or a novel.
          </p>

          <div className="panel contact">
            <div>Mon-Sun&nbsp;&nbsp;&nbsp; 8am – 11pm</div>
            <div>Caffe Retro&nbsp;&nbsp; Canto VI</div>
            <div>0123-45 67 89&nbsp;&nbsp; caffe@lorem.pge</div>
          </div>
        </Section>
      </main>
    </>
  );
}
