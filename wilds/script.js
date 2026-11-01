// Curated quest dataset for Monster Hunter Wilds.
// HRP, star rank, target monsters, and monster HP: Kiranico v1.040.
// Zenny values and event objectives/rewards: in-game quest details + Fextralife event quest table.
// `time` is a rough community estimate for the efficiency ranking, not official data.
// Event quests without a published HRP value use 0 and are shown as "—".
const quests = [
  {
    name: 'Guardian Zoh Shia', type: 'ASSIGNMENT', stars: 3, hr: 7, xp: 225, zenny: 10080, time: 18,
    objective: 'Slay the Zoh Shia',
    monsters: [{ name: 'Zoh Shia', hp: 16200 }],
    unique: 'Zoh Shia materials',
    rewards: ['Zoh Shia materials', 'Monster parts from carves and quest rewards'],
  },
  {
    name: 'Frozen Lord on the Precipice', type: 'ASSIGNMENT', stars: 6, hr: 30, xp: 1200, zenny: 21960, time: 18,
    objective: 'Hunt the Jin Dahaad',
    monsters: [{ name: 'Jin Dahaad', hp: 26640 }],
    unique: 'Damascus α / Dober α',
    rewards: ['Jin Dahaad materials', 'Materials for Damascus α / Dober α armor'],
  },
  {
    name: 'Roaring Rey Dau', type: 'ASSIGNMENT', stars: 6, hr: 30, xp: 1080, zenny: 21600, time: 16,
    objective: 'Hunt the Rey Dau',
    monsters: [{ name: 'Rey Dau', hp: 18000 }],
    unique: 'Rey Dau materials',
    rewards: ['Rey Dau materials', 'Monster parts from carves and quest rewards'],
  },
  {
    name: 'Awaking From a Dream', type: 'ASSIGNMENT', stars: 7, hr: 40, xp: 1625, zenny: 22320, time: 18,
    objective: 'Hunt the Arkveld',
    monsters: [{ name: 'Arkveld', hp: 21320 }],
    unique: 'Arkveld materials',
    rewards: ['Arkveld materials', 'Monster parts from carves and quest rewards'],
  },
  {
    name: 'Thundering Flowers', type: 'ASSIGNMENT', stars: 5, hr: 15, xp: 1694, zenny: 18000, time: 20,
    objective: 'Hunt the Guardian Fulgur Anjanath and Lala Barina',
    monsters: [{ name: 'Guardian Fulgur Anjanath', hp: 11250 }, { name: 'Lala Barina', hp: 9000 }],
    unique: 'Guardian Fulgur Anjanath / Lala Barina',
    rewards: ['Guardian Fulgur Anjanath materials', 'Lala Barina materials'],
  },
  {
    name: 'Shrouded in Black', type: 'ASSIGNMENT', stars: 6, hr: 35, xp: 2343, zenny: 34560, time: 25,
    objective: 'Hunt the Gore Magala and Blangonga',
    monsters: [{ name: 'Gore Magala', hp: 18360 }, { name: 'Blangonga', hp: 6750 }],
    unique: 'Gore Magala materials',
    rewards: ['Gore Magala materials', 'Blangonga materials'],
  },
  {
    name: 'The Chains of Life', type: 'OPTIONAL', stars: 7, hr: 40, xp: 1625, zenny: 22320, time: 18,
    objective: 'Hunt the Arkveld',
    monsters: [{ name: 'Arkveld', hp: 21320 }],
    unique: 'Arkveld materials',
    rewards: ['Arkveld materials', 'Monster parts from carves and quest rewards'],
  },
  {
    name: 'King of the Skies', type: 'OPTIONAL', stars: 5, hr: 9, xp: 935, zenny: 19080, time: 15,
    objective: 'Hunt the Rathalos',
    monsters: [{ name: 'Rathalos', hp: 13500 }],
    unique: 'Rathalos materials',
    rewards: ['Rathalos materials', 'Monster parts from carves and quest rewards'],
  },
  {
    name: 'Armor Like a Mountain', type: 'OPTIONAL', stars: 5, hr: 9, xp: 935, zenny: 19080, time: 16,
    objective: 'Hunt the Gravios',
    monsters: [{ name: 'Gravios', hp: 16500 }],
    unique: 'Armor spheres',
    rewards: ['Gravios materials', 'Armor Spheres'],
  },
  {
    name: 'Opposition', type: 'OPTIONAL', stars: 5, hr: 31, xp: 935, zenny: 20160, time: 15,
    objective: 'Hunt the Xu Wu',
    monsters: [{ name: 'Xu Wu', hp: 13500 }],
    unique: 'Xu Wu materials',
    rewards: ['Xu Wu materials', 'Monster parts from carves and quest rewards'],
  },
  {
    name: 'When Frost Falls', type: 'OPTIONAL', stars: 6, hr: 40, xp: 1200, zenny: 21960, time: 18,
    objective: 'Hunt the Jin Dahaad',
    monsters: [{ name: 'Jin Dahaad', hp: 26640 }],
    unique: 'Jin Dahaad materials',
    rewards: ['Jin Dahaad materials', 'Monster parts from carves and quest rewards'],
  },
  {
    name: 'Misty Depths', type: 'OPTIONAL', stars: 6, hr: 35, xp: 1140, zenny: 20880, time: 17,
    objective: 'Hunt the Gore Magala',
    monsters: [{ name: 'Gore Magala', hp: 18360 }],
    unique: 'Gore Magala materials',
    rewards: ['Gore Magala materials', 'Monster parts from carves and quest rewards'],
  },
  {
    name: 'Anguish and Atrocity', type: 'EVENT', stars: 5, hr: 21, xp: 0, zenny: 18000, time: 15,
    objective: 'Hunt the Guardian Doshaguma',
    monsters: [{ name: 'Guardian Doshaguma', hp: null, note: 'Event scaling' }],
    unique: 'Bonus HRP',
    rewards: ['Bonus Hunter Rank Points — the main HR farm quest'],
    note: 'Reward is HRP instead of a unique item. HRP per clear is not published; measure it in-game.',
  },
  {
    name: 'Hungry for Ore?', type: 'EVENT', stars: 8, hr: 41, xp: 0, zenny: 55440, time: 20,
    objective: 'Hunt 2 Tempered Gravios',
    monsters: [{ name: 'Gravios', variant: 'Tempered', hp: null, note: '×2' }],
    unique: 'Worn Pickaxe → Pickaxe weapons',
    rewards: ['Worn Pickaxe', 'Materials for Mad Scavenger Pickaxe', 'Materials for Mining Pickaxe (Long Sword)'],
  },
  {
    name: "Every Hunter's Dream", type: 'EVENT', stars: 8, hr: 41, xp: 0, zenny: 107280, time: 30,
    objective: 'Hunt all target monsters (multi-hunt)',
    monsters: [
      { name: 'Quematrice', variant: 'Tempered', hp: null, note: '×4, community-reported' },
      { name: 'Mizutsune', variant: 'Tempered', hp: null, note: 'community-reported' },
    ],
    unique: 'Master Craftsman’s Blueprint / pendant',
    rewards: ['Shatterseal great sword materials', 'Master Craftsman’s Blueprint', 'Pendant'],
    note: 'Target list is community-reported; the in-game quest card only lists "all target monsters".',
  },
  {
    name: 'Meat at the Heart of Wyveria', type: 'EVENT', stars: 8, hr: 41, xp: 0, zenny: 36000, time: 25,
    objective: 'Hunt all target monsters',
    monsters: [{ name: 'Not recorded', hp: null, note: 'check in-game quest card' }],
    unique: 'Tasty Blades / Well-done Steak Strap',
    rewards: ['Materials for Tasty Blades (Dual Blades)', 'Well-done Steak Strap'],
  },
  {
    name: 'A Silent Flash', type: 'EVENT', stars: 8, hr: 50, xp: 0, zenny: 36000, time: 20,
    objective: 'Hunt the Arch-tempered Rey Dau',
    monsters: [{ name: 'Rey Dau', variant: 'Arch-tempered', hp: null }],
    unique: 'Rey Dau Certificate γ → Rey Dau γ',
    rewards: ['Rey Dau Certificate γ', 'Materials for the Rey Dau γ armor set'],
  },
  {
    name: 'These Roots Run Deep', type: 'EVENT', stars: 8, hr: 50, xp: 0, zenny: 36000, time: 20,
    objective: 'Hunt the Arch-tempered Uth Duna',
    monsters: [{ name: 'Uth Duna', variant: 'Arch-tempered', hp: null }],
    unique: 'Uth Duna Certificate γ → Uth Duna γ',
    rewards: ['Uth Duna Certificate γ', 'Materials for the Uth Duna γ armor set'],
  },
  {
    name: 'Specter of Their Sins', type: 'EVENT', stars: 9, hr: 100, xp: 0, zenny: 39600, time: 25,
    objective: 'Slay the Gogmazios',
    monsters: [{ name: 'Gogmazios', hp: null }],
    unique: 'Mutated Armaments / Gogmazios gear',
    rewards: ['Gogmazios materials', 'Materials for Gogmazios α / β armor', 'Mutated Armaments'],
  },
  {
    name: 'Planetes Protocol (Savage)', type: 'EVENT', stars: 9, hr: 100, xp: 0, zenny: 39600, time: 25,
    objective: 'Slay the Omega Planetes',
    monsters: [{ name: 'Omega Planetes', hp: null }],
    unique: 'Omega Data 2.0 → Omega α',
    rewards: ['Omega Data 2.0', 'Materials for Omega Attire α, Omega’s Rod, Omega’s Sword', 'Floating OMG pendant', 'Manderville Mambo gesture'],
  },
  {
    name: 'Neon Neopterons', type: 'EVENT', stars: 4, hr: 16, xp: 0, zenny: 15120, time: 15,
    objective: 'Slay 15 Neopterons',
    monsters: [{ name: 'Neopterons (small monsters)', hp: null, note: '×15' }],
    unique: '7 Jigglysquirm pendants',
    rewards: ['Colorful pendant materials', '7 Jigglysquirm pendants'],
  },
];

// Expand the curated rows with the complete fixed quest list from Kiranico.
// Curated rows win, because they contain richer HP/reward details.
if (typeof questCatalog !== 'undefined') {
  questCatalog.forEach((catalogQuest) => {
    if (quests.some((quest) => quest.name === catalogQuest.name)) return;
    const monsterNames = (catalogQuest.target || '').split(' + ').filter(Boolean);
    const normalizedType = catalogQuest.type.includes('ASSIGN') ? 'ASSIGNMENT' : catalogQuest.type.includes('OPTIONAL') ? 'OPTIONAL' : catalogQuest.type;
    quests.push({
      name: catalogQuest.name,
      type: normalizedType,
      stars: catalogQuest.stars || 0,
      hr: catalogQuest.hr || 0,
      xp: catalogQuest.xp || 0,
      zenny: catalogQuest.zenny || 0,
      time: catalogQuest.time || 50,
      objective: 'Hunt target monster(s)',
      target: catalogQuest.target || 'Target not recorded',
      monsters: monsterNames.map((name) => ({ name, note: 'Monster HP not recorded' })),
      unique: catalogQuest.unique || 'Standard quest rewards not recorded',
      rewards: ['Standard quest rewards not recorded'],
      source: catalogQuest.source,
    });
  });
}

// Add official event/challenge quests while avoiding duplicate curated rows.
quests.push(...eventQuests.filter((eventQuest) => !quests.some((quest) => quest.name === eventQuest.name)));
quests.forEach((quest) => {
  if (!quest.monsters) quest.monsters = [{ name: quest.target || 'Target monster', note: 'Monster HP not recorded in official schedule' }];
  if (!quest.rewards) quest.rewards = quest.unique && quest.unique !== 'Not recorded' ? [quest.unique] : ['Standard quest rewards not recorded'];
  if (!quest.objective) quest.objective = `Hunt ${quest.target || 'all target monsters'}`;
});

const $ = (id) => document.getElementById(id);
const format = (number) => new Intl.NumberFormat('en-US').format(Math.max(0, Math.round(number)));
const compact = (number) => number >= 1000000 ? `${(number / 1000000).toFixed(2)}M` : number >= 1000 ? `${(number / 1000).toFixed(1)}K` : format(number);

// Selected quest name; null means the dropdown is collapsed.
let selectedQuest = quests[0].name;
let currentPage = 1;
const questsPerPage = 10;

function monsterIconFor(name) {
  const cleanName = name.replace(/^(Arch-tempered|Tempered|Guardian|Frenzied|Alpha)\s+/i, '').replace(/\s+×\d+$/i, '');
  return monsterIcons[name] || monsterIcons[cleanName] || null;
}

function questTitleHtml(quest) {
  const monsters = (quest.monsters || []).slice(0, 3);
  const icons = monsters.map((monster) => {
    const src = monsterIconFor(monster.name);
    return src ? `<img class="quest-title-icon" src="${src}" alt="${monster.name}" loading="lazy">` : '';
  }).join('');
  return `<span class="quest-title"><span class="quest-title-icons">${icons || '<span class="quest-title-icon missing">?</span>'}</span><span>${quest.name}<small>${quest.stars}★ · HR ${quest.hr}+</small></span></span>`;
}

function detailRowHtml(quest) {
  const monsters = quest.monsters.map((monster) => {
    const variant = monster.variant ? `<span class="tag">${monster.variant}</span>` : '';
    const detail = monster.hp ? `${format(monster.hp)} HP (1 player)` : monster.note || 'HP not recorded';
    const cleanName = monster.name.replace(/^(Arch-tempered|Tempered|Guardian|Frenzied|Alpha)\s+/i, '').replace(/\s+×\d+$/i, '');
    const icon = monsterIcons[cleanName] || monsterIcons[monster.name];
    const image = icon ? `<img class="monster-icon" src="${icon}" alt="${monster.name} icon" loading="lazy">` : '<span class="monster-icon missing">?</span>';
    return `<li class="monster-item">${image}<div>${variant}<strong>${monster.name}</strong><em>${detail}</em></div></li>`;
  }).join('');

  const rewards = [
    quest.xp
      ? `<li><strong>${format(quest.xp)} HRP</strong><em>rank progress per clear</em></li>`
      : '<li><strong>HRP not published</strong><em>event rank points are unconfirmed</em></li>',
    quest.zenny
      ? `<li><strong>${format(quest.zenny)}z</strong><em>quest reward money</em></li>`
      : '<li><strong>Zenny not published</strong><em>official schedule lists no payout</em></li>',
    ...quest.rewards.map((reward) => `<li><strong>${reward}</strong></li>`),
  ].join('');

  const meta = `${quest.stars}★ · HR ${quest.hr}+ · ${quest.type} | ${quest.xp ? `${format(quest.xp)} HRP` : 'HRP not published'} · ${quest.zenny ? `${format(quest.zenny)}z` : 'Zenny not published'} · ${quest.time} min*`;

  return `<tr class="detail-row"><td colspan="8" class="detail-cell">
    <div class="quest-detail">
      <div class="qd-head">
        <div>
          <span class="qd-label">SELECTED QUEST</span>
          <h3 id="qdName">${quest.name}</h3>
          <p id="qdMeta">${meta}</p>
        </div>
      </div>
      <p class="qd-objective">${quest.objective ? `Objective: ${quest.objective}` : ''}</p>
      <div class="qd-grid">
        <div class="qd-block">
          <h4>TARGET MONSTERS</h4>
          <ul>${monsters}</ul>
        </div>
        <div class="qd-block">
          <h4>REWARDS</h4>
          <ul>${rewards}</ul>
        </div>
      </div>
      <div class="qd-foot"><span><b>${quest.time} min</b> per run (estimate)</span>${quest.note ? `<span class="qd-note">${quest.note}</span>` : ''}</div>
    </div>
  </td></tr>`;
}

function selectedTypes() {
  const checked = document.querySelectorAll('.type-filter:checked');
  return new Set(Array.from(checked).map((input) => input.value));
}

function questHaystack(quest) {
  const monsterNames = (quest.monsters || []).map((monster) => `${monster.name} ${monster.variant || ''}`).join(' ');
  return [quest.name, quest.type, quest.target, quest.unique, quest.objective, monsterNames, (quest.rewards || []).join(' ')]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

function renderQuests() {
  const sort = $('sortQuest').value;
  const types = selectedTypes();
  const query = ($('questSearch') ? $('questSearch').value : '').trim().toLowerCase();
  const visible = quests.filter((quest) => types.has(quest.type) && (!query || questHaystack(quest).includes(query)));

  // Keep the dropdown inside the filtered list: if the selected quest is hidden,
  // fall back to the first visible quest (unless the user collapsed it).
  if (selectedQuest && !visible.some((quest) => quest.name === selectedQuest)) {
    selectedQuest = visible.length ? visible[0].name : null;
  }

  const list = [...visible].sort((a, b) =>
    sort === 'time' ? a.time - b.time
      : sort === 'money' ? b.zenny - a.zenny
        : sort === 'unique' ? Number(Boolean(b.unique)) - Number(Boolean(a.unique))
          : sort === 'name' ? a.name.localeCompare(b.name)
            : b.xp - a.xp
  );

  const countEl = $('filterCount');
  if (countEl) countEl.textContent = `${visible.length} of ${quests.length} quests`;

  const totalPages = Math.max(1, Math.ceil(list.length / questsPerPage));
  currentPage = Math.min(currentPage, totalPages);
  const start = (currentPage - 1) * questsPerPage;
  const pageItems = list.slice(start, start + questsPerPage);

  if (!list.length) {
    const emptyMessage = query
      ? `No quests match &ldquo;${query.replace(/</g, '&lt;').replace(/>/g, '&gt;')}&rdquo;. Try a different keyword or tick more quest types above.`
      : 'No quests match the selected types. Tick at least one type above.';
    $('questTable').innerHTML = `<tr><td colspan="8" class="empty-row">${emptyMessage}</td></tr>`;
    renderPagination(0);
    return;
  }

  $('questTable').innerHTML = pageItems.map((quest) => {
    const targets = quest.target || quest.monsters.map((m) => m.name).join(' + ');
     const row = `<tr class="quest-row${quest.name === selectedQuest ? ' is-selected' : ''}"><td>${questTitleHtml(quest)}</td><td><span class="type">${quest.type}</span></td><td class="target">${targets}</td><td>${quest.xp ? `${format(quest.xp)} HRP` : '—'}</td><td class="money">${quest.zenny ? `${format(quest.zenny)}z` : '—'}</td><td class="drop">${quest.unique}</td><td>${quest.time} min</td><td><button class="choose ${quest.name === selectedQuest ? 'active' : ''}" data-quest="${quest.name}" aria-expanded="${quest.name === selectedQuest}">SELECT</button></td></tr>`;
    return quest.name === selectedQuest ? row + detailRowHtml(quest) : row;
  }).join('');

  document.querySelectorAll('.choose').forEach((button) => button.addEventListener('click', () => {
    // Clicking the active quest again collapses its dropdown.
    selectedQuest = selectedQuest === button.dataset.quest ? null : button.dataset.quest;
    renderQuests();
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

  // Windowed page numbers: first, last and the pages around the current one.
  // Keeps the control narrow enough to fit a phone without horizontal scrolling.
  const visiblePages = (() => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, index) => index + 1);
    const keep = new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1]);
    if (currentPage <= 4) [2, 3, 4, 5].forEach((page) => keep.add(page));
    if (currentPage >= totalPages - 3) [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1].forEach((page) => keep.add(page));
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
    return `<button class="page-number${page === currentPage ? ' active' : ''}" data-page="${page}" aria-current="${page === currentPage ? 'page' : 'false'}">${page}</button>`;
  }).join('');

  pagination.innerHTML = `<button class="page-arrow" data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''}>← PREV</button><span class="page-list">${pages}</span><span class="page-total">${(currentPage - 1) * questsPerPage + 1}–${Math.min(currentPage * questsPerPage, totalItems)} OF ${totalItems}</span><button class="page-arrow" data-page="${currentPage + 1}" ${currentPage === totalPages ? 'disabled' : ''}>NEXT →</button>`;
  pagination.querySelectorAll('[data-page]').forEach((button) => button.addEventListener('click', () => {
    if (button.disabled) return;
    currentPage = Number(button.dataset.page);
    renderQuests();
  }));
}
$('sortQuest').addEventListener('change', () => {
  currentPage = 1;
  renderQuests();
});
document.querySelectorAll('.type-filter').forEach((input) => input.addEventListener('change', () => {
  currentPage = 1;
  selectedQuest = null;
  renderQuests();
}));
$('questSearch').addEventListener('input', () => {
  currentPage = 1;
  renderQuests();
});
renderQuests();
