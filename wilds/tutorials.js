function tutorialIcon(monster) {
  const source = monsterIcons[monster.name];
  return source
    ? `<img src="${source}" alt="" width="128" height="128" loading="lazy" />`
    : '<span class="tutorial-icon-missing" aria-hidden="true">?</span>';
}

function tutorialCard(monster) {
  const update = monster.update ? `<span class="tutorial-update">${monster.update}</span>` : '';
  const tag = monster.page ? 'a' : 'article';
  const href = monster.page ? ` href="${monster.page}"` : '';
  const status = monster.page
    ? '<span class="tutorial-status tutorial-status-open">OPEN TUTORIAL →</span>'
    : '<span class="tutorial-status">TUTORIAL PAGE COMING SOON</span>';
  return `<${tag} class="tutorial-card"${href}>
    <span class="tutorial-card-icon">${tutorialIcon(monster)}</span>
    <span class="tutorial-card-copy">
      <span class="tutorial-size">${monster.size} MONSTER ${update}</span>
      <span class="tutorial-card-name">${monster.name}</span>
      ${status}
    </span>
  </${tag}>`;
}

function renderTutorials() {
  const query = document.getElementById('tutorialSearch').value.trim().toLowerCase();
  const regions = new Set(Array.from(document.querySelectorAll('.region-filter:checked')).map((input) => input.value));
  const visible = tutorialMonsters.filter((monster) => {
    if (query && !monster.name.toLowerCase().includes(query)) return false;
    return monster.regions.some((region) => regions.has(region));
  });
  const renderGroup = (size) => {
    const monsters = visible.filter((monster) => monster.size === size);
    return monsters.length ? monsters.map(tutorialCard).join('') : '<p class="tutorial-empty">No monsters match the current search and region filters.</p>';
  };
  const large = visible.filter((monster) => monster.size === 'LARGE');
  const small = visible.filter((monster) => monster.size === 'SMALL');
  document.getElementById('largeTutorials').innerHTML = renderGroup('LARGE');
  document.getElementById('smallTutorials').innerHTML = renderGroup('SMALL');
  document.getElementById('largeTutorialCount').textContent = large.length;
  document.getElementById('smallTutorialCount').textContent = small.length;
  document.getElementById('tutorialCount').textContent = `${visible.length} OF ${tutorialMonsters.length} MONSTERS`;
}

document.getElementById('tutorialSearch').addEventListener('input', renderTutorials);
document.querySelectorAll('.region-filter').forEach((input) => input.addEventListener('change', renderTutorials));
renderTutorials();
