const whatsapp = "https://wa.me/5519974066045?text=Ol%C3%A1!%20Quero%20conhecer%20a%20experi%C3%AAncia%20do%20Sonho%20de%20Crian%C3%A7a%20e%20pedir%20um%20or%C3%A7amento.";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className="fill" /></svg>;
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

    <section className="home-final" id="contato"><p className="home-kicker home-kicker-light">Vamos começar?</p><h2>Seu momento especial<br /><em>merece ser inesquecível.</em></h2><a className="home-button home-button-pink" href={whatsapp} target="_blank" rel="noreferrer">Falar com a nossa equipe <Arrow /></a></section>

    <footer className="home-footer"><a href="#inicio"><img src="/media/logo.png" alt="Sonho de Criança" /></a><p>Buffet infantil · Piracicaba/SP</p><a href="https://instagram.com/sonhodecriancabuffet" target="_blank" rel="noreferrer">@sonhodecriancabuffet</a></footer>
    <a className="instagram-float" href="https://instagram.com/sonhodecriancabuffet" target="_blank" rel="noreferrer" aria-label="Acessar o Instagram do Sonho de Criança"><InstagramIcon /></a>
    <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp"><span>WhatsApp</span><b>↗</b></a>
  </main>;
}
