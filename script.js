const list = document.getElementById("episode-list");

episodes.forEach(ep => {
  const card = document.createElement("div");
  card.className = "card";
  
  card.innerHTML = `
    <h2>${ep.title}</h2>
    <p>${ep.description}</p>
    <audio controls>
      <source src="${ep.audioUrl}" type="audio/mpeg">
      你的浏览器不支持播放音频。
    </audio>
  `;

  list.appendChild(card);
});
