fetch('episodes.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('episodes');
    data.forEach(ep => {
      const section = document.createElement('section');
      section.className = 'episode';
      section.innerHTML = `
        <h2>${ep.title}</h2>
        <p>${ep.desc}</p>
        <iframe src="${ep.iframe}" allowfullscreen></iframe>
      `;
      container.appendChild(section);
    });
  });

