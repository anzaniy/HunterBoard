function tutorialIcon(monster) {
  const source = monsterIcons[monster.name];
  return source
    ? `<img src="${source}" alt="" width="128" height="128" loading="lazy" />`
    : '<span class="tutorial-icon-missing" aria-hidden="true">?</span>';
}

function tutorialCard(monster) {
  const update = monster.update ? `<span class="tutorial-update">${monster.update}</span>` : '';
  return `<article class="tutorial-card">
    <div class="tutorial-card-icon">${tutorialIcon(monster)}</div>
    <div class="tutorial-card-copy">
      <span class="tutorial-size">${monster.size} MONSTER ${update}</span>
      <h3>${monster.name}</h3>
      <span class="tutorial-status">TUTORIAL COMING SOON</span>
    </div>
  </article>`;
}

const largeTutorials = tutorialMonsters.filter((monster) => monster.size === 'LARGE');
const smallTutorials = tutorialMonsters.filter((monster) => monster.size === 'SMALL');
document.getElementById('largeTutorials').innerHTML = largeTutorials.map(tutorialCard).join('');
document.getElementById('smallTutorials').innerHTML = smallTutorials.map(tutorialCard).join('');
document.getElementById('tutorialCount').textContent = `${tutorialMonsters.length} MONSTERS ON THE LIST`;
