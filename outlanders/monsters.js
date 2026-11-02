// Monster board for Monster Hunter Outlanders.
// Renders the roster in outlanders/monsters-data.js with filter, search, sort,
// pagination and a per-monster detail dropdown.
const MONSTER_WIKI_BASE = 'https://monsterhunterwiki.org/wiki/';
const MONSTER_LIST_URL = 'https://monsterhunterwiki.org/wiki/MHOutlanders/Monsters';
const monstersPerPage = 10;

let monsterPage = 1;
let selectedMonster = null;

const $ = (id) => document.getElementById(id);
const pad = (value) => String(value).padStart(2, '0');

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function monsterUrl(monster) {
  if (!monster.page) return MONSTER_LIST_URL;
  return MONSTER_WIKI_BASE + encodeURIComponent(monster.name.replace(/\s+/g, '_'));
}

function statusLabel(monster) {
  return monster.upcoming ? 'UPCOMING' : 'LAUNCH';
}

function originLabel(monster) {
  if (monster.upcoming) return 'NOT YET IN ROSTER';
  return monster.debut ? 'FIRST APPEARANCE' : 'RETURNING MONSTER';
}

function speciesLabel(monster) {
  return monster.radiant ? 'RADIANT SPECIES' : 'STANDARD SPECIES';
}

function activeSizes() {
  return new Set(Array.from(document.querySelectorAll('.size-filter:checked')).map((input) => input.value));
}

function monsterHaystack(monster) {
  return [
    monster.name,
    monster.size,
    monster.radiant ? 'radiant' : 'standard standard species',
    originLabel(monster),
    statusLabel(monster),
    monster.flagship ? 'flagship ruger aidal' : '',
  ].filter(Boolean).join(' ').toLowerCase();
}

function nameCellHtml(monster) {
  const tags = [];
  if (monster.radiant) tags.push('<span class="tag">RADIANT</span>');
  if (monster.flagship) tags.push('<span class="tag">FLAGSHIP</span>');
  if (monster.upcoming) tags.push('<span class="tag">UPCOMING</span>');
  return `<span class="monster-name"><span>${escapeHtml(monster.name)}</span>${tags.join('')}</span>`;
}

function detailRowHtml(monster) {
  const link = monsterUrl(monster);
  const linkLabel = monster.page
    ? `${escapeHtml(monster.name)} — Monster Hunter Wiki`
    : `${escapeHtml(monster.name)} (no article yet) — full roster`;

  const facts = [
    `<li><strong>${monster.size === 'LARGE' ? 'Large monster' : 'Small monster'}</strong><em>size class used by the wiki roster</em></li>`,
    monster.radiant
      ? '<li><strong>Radiant species</strong><em>altered by Radiantite, Aesoland’s crystal resource</em></li>'
      : '<li><strong>Standard species</strong><em>not part of the Radiant family</em></li>',
    `<li><strong>${originLabel(monster)}</strong><em>${monster.debut ? 'first appears in Monster Hunter Outlanders' : 'appeared in an earlier Monster Hunter title'}</em></li>`,
    monster.upcoming
      ? '<li><strong>Outside the launch roster</strong><em>listed by the wiki under upcoming monsters</em></li>'
      : '<li><strong>In the launch roster</strong><em>confirmed to appear in the released game</em></li>',
    `<li><strong>${monster.page ? 'Wiki article available' : 'No wiki article yet'}</strong><em>${monster.page ? 'elemental and stat data may be added there first' : 'the roster lists the name without a dedicated page'}</em></li>`,
  ].join('');

  const summary = monster.flagship
    ? 'Flagship monster of Monster Hunter Outlanders, and the only base species created for this game that the roster lists as large.'
    : monster.radiant
      ? 'Radiant species: a monster changed by Radiantite, with altered appearance and behaviour rather than a simple recolour.'
      : 'Standard species: a Monster Hunter monster carried into the Aesoland roster.';

  const meta = `${monster.size} MONSTER · ${speciesLabel(monster)} · ${originLabel(monster)} · ${statusLabel(monster)}`;

  return `<tr class="detail-row"><td colspan="6" class="detail-cell">
    <div class="quest-detail">
      <div class="qd-head">
        <div>
          <span class="qd-label">MONSTER FILE</span>
          <h3 id="qdName">${escapeHtml(monster.name)}</h3>
          <p id="qdMeta">${meta}</p>
        </div>
      </div>
      <p class="qd-objective">${summary}</p>
      <div class="qd-grid">
        <div class="qd-block">
          <h4>WHAT THIS BOARD RECORDS</h4>
          <ul>${facts}</ul>
        </div>
        <div class="qd-block">
          <h4>READ MORE</h4>
          <ul>
            <li><strong><a class="qd-link" href="${link}" target="_blank" rel="noopener noreferrer">${linkLabel}</a></strong><em>source page for this entry</em></li>
            <li><strong>Weaknesses and stats</strong><em>not published by CAPCOM for Outlanders yet — nothing is estimated here</em></li>
          </ul>
        </div>
      </div>
      <div class="qd-foot"><span><b>${monster.size === 'LARGE' ? 'Large' : 'Small'}</b> size class</span><span class="qd-note">Roster source: Monster Hunter Wiki, revision of 2 November 2026.</span></div>
    </div>
  </td></tr>`;
}

function sortMonsters(list, sort) {
  const copy = [...list];
  if (sort === 'radiant') {
    return copy.sort((a, b) => Number(b.radiant) - Number(a.radiant) || a.name.localeCompare(b.name));
  }
  if (sort === 'size') {
    return copy.sort((a, b) => (a.size === b.size ? a.name.localeCompare(b.name) : a.size === 'LARGE' ? -1 : 1));
  }
  if (sort === 'new') {
    return copy.sort((a, b) => Number(b.debut) - Number(a.debut) || a.name.localeCompare(b.name));
  }
  if (sort === 'status') {
    return copy.sort((a, b) => Number(a.upcoming) - Number(b.upcoming) || a.name.localeCompare(b.name));
  }
  return copy.sort((a, b) => a.name.localeCompare(b.name));
}

function renderMonsters() {
  const sort = $('sortMonster').value;
  const sizes = activeSizes();
  const showRadiant = $('filterRadiant').checked;
  const showUpcoming = $('filterUpcoming').checked;
  const query = ($('monsterSearch') ? $('monsterSearch').value : '').trim().toLowerCase();

  const visible = outlanderMonsters.filter((monster) => {
    if (!sizes.has(monster.size)) return false;
    if (!showRadiant && monster.radiant) return false;
    if (!showUpcoming && monster.upcoming) return false;
    return !query || monsterHaystack(monster).includes(query);
  });

  // Keep the open dropdown inside the filtered list.
  if (selectedMonster && !visible.some((monster) => monster.name === selectedMonster)) {
    selectedMonster = visible.length ? visible[0].name : null;
  }

  const list = sortMonsters(visible, sort);

  const countEl = $('monsterCount');
  if (countEl) countEl.textContent = `${visible.length} of ${outlanderMonsters.length} entries`;

  const totalPages = Math.max(1, Math.ceil(list.length / monstersPerPage));
  monsterPage = Math.min(monsterPage, totalPages);
  const start = (monsterPage - 1) * monstersPerPage;
  const pageItems = list.slice(start, start + monstersPerPage);

  if (!list.length) {
    const emptyMessage = query
      ? `No monsters match &ldquo;${escapeHtml(query)}&rdquo;. Try a different name, or tick more filters above.`
      : 'No monsters match the selected filters. Tick at least one size class above.';
    $('monsterTable').innerHTML = `<tr><td colspan="6" class="empty-row">${emptyMessage}</td></tr>`;
    renderPagination(0);
    return;
  }

  $('monsterTable').innerHTML = pageItems.map((monster) => {
    const row = `<tr class="quest-row${monster.name === selectedMonster ? ' is-selected' : ''}">
      <td>${nameCellHtml(monster)}</td>
      <td><span class="type">${monster.size}</span></td>
      <td class="target">${monster.radiant ? 'Radiant' : 'Standard'}</td>
      <td>${monster.debut ? 'First appearance' : 'Returning'}</td>
      <td>${monster.upcoming ? '<span class="monster-upcoming">Upcoming</span>' : 'Launch roster'}</td>
      <td><button class="choose ${monster.name === selectedMonster ? 'active' : ''}" data-monster="${escapeHtml(monster.name)}" aria-expanded="${monster.name === selectedMonster}">SELECT</button></td>
    </tr>`;
    return monster.name === selectedMonster ? row + detailRowHtml(monster) : row;
  }).join('');

  document.querySelectorAll('.choose').forEach((button) => button.addEventListener('click', () => {
    selectedMonster = selectedMonster === button.dataset.monster ? null : button.dataset.monster;
    renderMonsters();
  }));

  renderPagination(totalPages, list.length);
}

function renderPagination(totalPages, totalItems = 0) {
  const pagination = $('pagination');
  if (!pagination) return;
  if (totalPages <= 1) {
    pagination.innerHTML = '';
    return;
  }

  const visiblePages = (() => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, index) => index + 1);
    const keep = new Set([1, totalPages, monsterPage - 1, monsterPage, monsterPage + 1]);
    if (monsterPage <= 4) [2, 3, 4, 5].forEach((page) => keep.add(page));
    if (monsterPage >= totalPages - 3) [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1].forEach((page) => keep.add(page));
    const sorted = [...keep].filter((page) => page >= 1 && page <= totalPages).sort((a, b) => a - b);
    const output = [];
    let previous = 0;
    sorted.forEach((page) => {
      if (previous && page - previous > 1) output.push('gap');
      output.push(page);
      previous = page;
    });
    return output;
  })();

  const pages = visiblePages.map((page) => {
    if (page === 'gap') return '<span class="page-gap" aria-hidden="true">…</span>';
    return `<button class="page-number${page === monsterPage ? ' active' : ''}" data-page="${page}" aria-current="${page === monsterPage ? 'page' : 'false'}">${page}</button>`;
  }).join('');

  pagination.innerHTML = `<button class="page-arrow" data-page="${monsterPage - 1}" ${monsterPage === 1 ? 'disabled' : ''}>← PREV</button><span class="page-list">${pages}</span><span class="page-total">${(monsterPage - 1) * monstersPerPage + 1}–${Math.min(monsterPage * monstersPerPage, totalItems)} OF ${totalItems}</span><button class="page-arrow" data-page="${monsterPage + 1}" ${monsterPage === totalPages ? 'disabled' : ''}>NEXT →</button>`;
  pagination.querySelectorAll('[data-page]').forEach((button) => button.addEventListener('click', () => {
    if (button.disabled) return;
    monsterPage = Number(button.dataset.page);
    renderMonsters();
  }));
}

function renderTotals() {
  const large = outlanderMonsters.filter((monster) => monster.size === 'LARGE' && !monster.upcoming).length;
  const small = outlanderMonsters.filter((monster) => monster.size === 'SMALL' && !monster.upcoming).length;
  const radiant = outlanderMonsters.filter((monster) => monster.radiant).length;
  const upcoming = outlanderMonsters.filter((monster) => monster.upcoming).length;
  const set = (id, value) => {
    const el = $(id);
    if (el) el.textContent = pad(value);
  };
  set('totalConfirmed', outlanderMonsters.length - upcoming);
  set('totalLarge', large);
  set('totalSmall', small);
  set('totalRadiant', radiant);
  set('totalUpcoming', upcoming);
}

$('sortMonster').addEventListener('change', () => {
  monsterPage = 1;
  renderMonsters();
});
document.querySelectorAll('.size-filter').forEach((input) => input.addEventListener('change', () => {
  monsterPage = 1;
  selectedMonster = null;
  renderMonsters();
}));
['filterRadiant', 'filterUpcoming'].forEach((id) => {
  const input = $(id);
  if (!input) return;
  input.addEventListener('change', () => {
    monsterPage = 1;
    selectedMonster = null;
    renderMonsters();
  });
});
$('monsterSearch').addEventListener('input', () => {
  monsterPage = 1;
  renderMonsters();
});

renderTotals();
renderMonsters();