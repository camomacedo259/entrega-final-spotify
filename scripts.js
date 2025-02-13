document.addEventListener("DOMContentLoaded", () => {
  const artistsData = [
    { name: "Henrique & Juliano", image: "./img/artista-henrique-juliano.jpg" },
    { name: "Jorge & Mateus", image: "./img/artista-jorge-mateus.jpg" },
    { name: "Zé Neto & Cristiano", image: "./img/artista-ze-neto.jpg" },
    { name: "Gusttavo Lima", image: "./img/artista-gustavo-limma.jpg" },
    { name: "Luan Santana", image: "./img/artista-luan-santana.jpg" },
    { name: "Matheus & Kauan", image: "./img/artista-mateus-kauan.jpg" },
    { name: "MC Tudo", image: "./img/artista-mc-tuto.jpg" },
  ];

  const albumsData = [
    {
      name: "White Noise (Sleep & Relaxation Sounds)",
      artist: "Sleepy John",
      image: "./img/album-white-noise.jpg",
    },
    {
      name: "O Céu Explica Tudo (Ao Vivo)",
      artist: "Henrique & Juliano",
      image: "./img/album-ceu-explica.jpg",
    },
    {
      name: "Nada como um dia após o outro",
      artist: "Racionais",
      image: "./img/album-vida-loka.jpg",
    },
    {
      name: "HIT ME HARD AND SOFT",
      artist: "Billie Eilish",
      image: "./img/album-hit-me.jpg",
    },
    { name: "CAJU", artist: "Liniker", image: "./img/album-caju.jpg" },
    {
      name: "333",
      artist: "Matuê",
      image: "./img/album-333.jpg",
    },
    {
      name: "333Escândalo Íntimo",
      artist: "Luísa Sonza",
      image: "./img/album-escandalo.jpg",
    },
  ];

  const artistGrid = document.querySelector(".artists-grid");
  const albumsGrid = document.querySelector(".albums-grid");

  function createCard(data, type) {
    const card = document.createElement("div");
    card.classList.add(`${type}-card`);
    card.innerHTML = `
      <img src="${data.image}" alt="${data.name}" />
      <h3>${data.name}</h3>
      ${type === "artist" ? "<p>Artista</p>" : `<p>${data.artist}</p>`}
    `;
    return card;
  }

  artistsData.forEach((artist) => {
    const artistCard = createCard(artist, "artist");
    artistGrid.appendChild(artistCard);
  });

  albumsData.forEach((album) => {
    const albumCard = createCard(album, "album");
    albumsGrid.appendChild(albumCard);
  });
});
