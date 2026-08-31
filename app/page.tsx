const whatsapp = "https://wa.me/5519974066045?text=Ol%C3%A1!%20Quero%20conhecer%20a%20experi%C3%AAncia%20do%20Sonho%20de%20Crian%C3%A7a%20e%20pedir%20um%20or%C3%A7amento.";
const mapUrl = "https://share.google/bMF7Kzs4MC69HdoZk";
const fullAddress = "Avenida Antonia Pazinato Sturion, 1385 — Morumbi, Piracicaba — SP, 13420-640";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className="fill" /></svg>;
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.08 0C5.53 0 .2 5.32.2 11.87c0 2.09.55 4.13 1.59 5.92L.1 23.9l6.25-1.64a11.86 11.86 0 0 0 5.73 1.47h.01c6.54 0 11.87-5.32 11.87-11.87 0-3.17-1.23-6.15-3.46-8.36ZM12.09 21.7h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.83 9.83 0 0 1-1.51-5.23C2.24 6.43 6.66 2 12.08 2a9.83 9.83 0 0 1 6.98 2.89 9.83 9.83 0 0 1 2.9 6.97c0 5.42-4.42 9.84-9.87 9.84Zm5.4-7.38c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.57-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.71.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" /></svg>;
}

const benefits = [
  ["Responsável de festa", "Coordenador de monitores"],
  ["Recepcionista", "Monitores infantis"],
  ["Segurança", "Acompanhamento pré-festa"],
  ["Garçons", "Convite virtual"],
  ["Cortesia para pai, mãe e aniversariante", "Decorações temáticas"],
  ["Recreação com brincadeiras e gincanas", "Brinquedos divertidos e seguros"],
];

export default function Home() {
  return <main className="home-page">
    <header className="home-topbar">
      <a className="home-brand" href="#inicio" aria-label="Sonho de Criança — início"><img src="/media/logo.png" alt="Sonho de Criança" /></a>
      <nav aria-label="Navegação principal">
        <a href="#experiencia">A experiência</a>
        <a href="#credibilidade">Credibilidade</a>
        <a href="#estrutura">O espaço</a>
        <a href="/cardapios">Cardápios</a>
      </nav>
      <a className="home-nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Pedir orçamento <Arrow /></a>
    </header>

    <section className="home-hero" id="inicio">
      <video autoPlay muted loop playsInline poster="/media/poster.jpg" aria-label="Conheça o espaço Sonho de Criança"><source src="https://sonho-de-crianca-buffet.matheusnastaro5.chatgpt.site/media/sonho-video.mp4" type="video/mp4" /></video>
      <div className="home-hero-overlay" />
      <div className="home-hero-content">
        <p className="home-kicker home-kicker-light">Descubra a</p>
        <h1>Experiência<br /><em>que encanta</em></h1>
        <p className="home-hero-copy">Um espaço completo para celebrar os momentos mais importantes da infância com diversão, cuidado e memórias para a vida toda.</p>
        <a className="home-button home-button-pink" href={whatsapp} target="_blank" rel="noreferrer">Quero conhecer <Arrow /></a>
      </div>
      <div className="home-hero-bottom"><span>Buffet infantil em Piracicaba</span><span>Desde 2002</span></div>
    </section>

    <section className="home-credibility" id="credibilidade">
      <div className="home-section-intro"><p className="home-kicker">Credibilidade que</p><h2>Se constrói<br /><em>com o tempo</em></h2></div>
      <div className="home-stats">
        <article><strong>24</strong><span>anos de mercado</span><p>Uma história construída com muito trabalho, comprometimento e paixão por celebrar.</p></article>
        <article><strong>7</strong><span>anos consecutivos<br />Top of Mind</span><p>O reconhecimento de quem confia e escolhe o Sonho de Criança para momentos especiais.</p></article>
        <article><strong>5.500<sup>+</sup></strong><span>festas realizadas</span><p>Experiência comprovada na realização de festas marcantes, alegres e inesquecíveis.</p></article>
      </div>
      <div className="home-floating-shapes" aria-hidden="true"><span>✦</span><span>◆</span><span>●</span></div>
    </section>

    <section className="home-experience" id="experiencia">
      <div className="home-experience-heading"><p className="home-kicker home-kicker-pink">Uma festa sem preocupações</p><h2>Você comemora o momento...<br /><em>Nós cuidamos de tudo</em></h2><p>para ser inesquecível!</p></div>
      <div className="home-benefits">{benefits.flatMap((pair) => pair.map((benefit) => <div className="home-benefit" key={benefit}><span>✓</span>{benefit}</div>))}</div>
    </section>

    <section className="home-gallery" id="estrutura">
      <div className="home-gallery-copy"><p className="home-kicker">Um lugar para viver histórias</p><h2>Brincar, imaginar<br /><em>e celebrar.</em></h2><p>Cada ambiente foi pensado para encantar as crianças e acolher toda a família. Do primeiro sorriso ao último parabéns, tudo acontece com conforto, segurança e muita diversão.</p><a className="home-button home-button-dark" href={whatsapp} target="_blank" rel="noreferrer">Agendar uma visita <Arrow /></a></div>
      <div className="home-gallery-images"><figure className="home-gallery-main"><img src="/media/infantil-hd.jpeg" alt="Espaço lúdico infantil com casinhas e mercadinho" /><figcaption>Imaginar</figcaption></figure><figure><img src="/media/jogos-hd.jpeg" alt="Área de jogos com pebolim e mesa de sinuca" /><figcaption>Brincar</figcaption></figure><figure><img src="/media/ambiente-hd.jpeg" alt="Salão do Sonho de Criança preparado para receber uma festa" /><figcaption>Celebrar</figcaption></figure></div>
    </section>

    <section className="home-legacy"><div className="home-legacy-number">24</div><div><p className="home-kicker home-kicker-light">Uma história feita de histórias</p><h2>O próximo capítulo<br /><em>pode ser o seu.</em></h2></div><p>Você traz o sonho. A gente cuida de cada detalhe para transformar a comemoração em uma experiência que encanta de verdade.</p></section>

    <section className="home-questions" id="perguntas"><div><p className="home-kicker">Antes da festa</p><h2>Vamos começar a<br /> imaginar esse dia?</h2></div><div className="home-faq"><details><summary>Como faço para pedir um orçamento?<span>×</span></summary><p>É só chamar a equipe pelo WhatsApp. Conte a data que você imagina e os primeiros detalhes da comemoração para iniciar a conversa.</p></details><details><summary>Posso conhecer melhor o espaço?<span>×</span></summary><p>Sim. Fale com a equipe pelo WhatsApp para combinar a melhor forma de conhecer o Sonho de Criança.</p></details><details open><summary>Onde fica o Sonho de Criança?<span>×</span></summary><p>Estamos na <a className="home-map-link" href={mapUrl} target="_blank" rel="noreferrer">{fullAddress} <Arrow /></a></p></details></div></section>

    <section className="home-final" id="contato"><p className="home-kicker home-kicker-light">Vamos começar?</p><h2>Seu momento especial<br /><em>merece ser inesquecível.</em></h2><a className="home-button home-button-pink" href={whatsapp} target="_blank" rel="noreferrer">Falar com a nossa equipe <Arrow /></a></section>

    <footer className="home-footer"><a href="#inicio"><img src="/media/logo.png" alt="Sonho de Criança" /></a><p>Buffet infantil · Piracicaba/SP</p><a href="https://instagram.com/sonhodecriancabuffet" target="_blank" rel="noreferrer">@sonhodecriancabuffet</a></footer>
    <a className="instagram-float" href="https://instagram.com/sonhodecriancabuffet" target="_blank" rel="noreferrer" aria-label="Acessar o Instagram do Sonho de Criança"><InstagramIcon /></a>
    <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp"><span>WhatsApp</span><WhatsAppIcon /></a>
  </main>;
}
