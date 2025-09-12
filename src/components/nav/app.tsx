import CardNav from './CardNav'


const logo = "/arlanap.png";

const App = () => {
  const items = [
    {
      label: "Hakkımda",
      bgColor: "#111111",
      textColor: "#ffffff",
      links: [
        { label: "Biz Kimiz", ariaLabel: "Hakkımda Biz Kimiz", href: "/hakkimda" },
        { label: "Misyon, Vizyonumuz", ariaLabel: "Hakkımda Misyon, Vizyonumuz ", href: "/hakkimizda#bizmisviz" }
      ]
    },
    {
      label: "Galeri",
      bgColor: "#1a1a1a",
      textColor: "#ffffff",
      links: [
        { label: "Sanat Galerimiz", ariaLabel: "Galeri Sanat Galerimiz", href: "#" },
        { label: "Enerji Estetiği", ariaLabel: "Galeri Enerji Estetiği", href: "#" },
      ]
    },
    {
      label: "İletişim",
      bgColor: "#222222",
      textColor: "#ffffff",
      links: [
        { label: "İletişim", ariaLabel: "Email us", href: "#" },
        { label: "Sosyal Medya", ariaLabel: "Twitter", href: "#" },
        { label: "Lokasyon", ariaLabel: "LinkedIn", href: "#" }
      ]
    }
  ];

  return (
    <CardNav
      logo={logo}
      logoAlt="Ortadoğu Elektrik Logo"
      logoHref="/"                 // ✅ Logo tıklanınca anasayfa
      items={items}
      baseColor="#000000"
      menuColor="#ffffff"
      buttonBgColor="#ffffff"
      buttonTextColor="#000000"
      ease="power3.out"
    />
  );
};

export default App;
