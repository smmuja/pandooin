const footerSocial = [
  {
    id: 1,
    name: "facebook icon",
    iconSrc: "/assets/svg/footer-social-facebook.svg",
    url: "https://www.facebook.com/people/Zamrood-by-Pandooin/100094528566390/",
  },
  {
    id: 2,
    name: "instagram icon",
    iconSrc: "/assets/svg/footer-social-instagram.svg",
    url: "https://www.instagram.com/zamrood.asia/",
  },
  {
    id: 1,
    name: "email icon",
    iconSrc: "/assets/svg/footer-social-email.svg",
    url: "mailto:zamrood@pandooin.com",
  },
];

export function Footer() {
  return (
    <>
      <div className="bg-green-tosca text-white-paper flex flex-col lg:flex-row justify-around items-center mt-10 py-5 px-3 gap-5">
        <div>
          <p>© 2023 Zamrood by PT Teknologi Pandu Wisata</p>
        </div>
        <div className="flex gap-5">
          {footerSocial.map((item) => (
            <a href={item.url} key={item.name}>
              <img src={item.iconSrc} alt={item.name} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
