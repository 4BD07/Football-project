fetch('js/clubs.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('clubs-container');

        for (const clubName in data) {
          const club = data[clubName];

          const card = document.createElement('div');
          card.className = 'club-card';

          card.innerHTML = `
            <img src="${club.logo}" alt="${clubName}" class="imgClub">
            <h3>${clubName}</h3>
            <p><strong>Country:</strong> ${club.country}</p>
            <p><strong>Founded:</strong> ${club.founded}</p>
            <p><strong>Stadium:</strong> ${club.stadium}</p>
          `;

          container.appendChild(card);
        }
      })
      .catch(error => {
        console.error('Error loading clubs.json:', error);
      });