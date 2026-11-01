let activeBuild = 'ALL';
let activeInfo = null;

const filterEl = document.getElementById('buildFilters');
const gridEl = document.getElementById('buildGrid');
const detailEl = document.getElementById('buildDetail');
const layoutEl = document.getElementById('buildsLayout');

function findBuild(name) {
  return buildData.find((build) => build.weapon === name) || null;
}

function monsterIcon(name) {
  return typeof monsterIcons !== 'undefined' && monsterIcons[name] ? monsterIcons[name] : '';
}

function monsterTag(name) {
  const src = monsterIcon(name);
  return `<span class="monster-tag">${src ? `<img src="${src}" alt="" loading="lazy">` : ''}${name}</span>`;
}

function whereRow(label, value) {
  return `<div class="where-row"><span class="where-label">${label}</span><span class="where-value">${value}</span></div>`;
}

function skillChips(skills, build, where) {
  return skills.map(([name, level]) => `
    <button class="skill-chip" data-info="skill" data-key="${name}" data-build="${build.weapon}" data-where="${where}" data-level="${level || ''}">
      ${name}${level ? `<b>Lv ${level}</b>` : '<b>set</b>'}
    </button>`).join('');
}

function setChips(skills, build) {
  return skills.map(([name, level]) => {
    const type = typeof groupSkills !== 'undefined' && groupSkills[name] ? 'group' : 'set';
    return `<button class="skill-chip" data-info="${type}" data-key="${name}" data-build="${build.weapon}" data-level="${level || ''}">${name}${level ? `<b>${level} pc</b>` : '<b>set</b>'}</button>`;
  }).join('');
}

function renderFilters() {
  filterEl.innerHTML = ['ALL', ...buildData.map((build) => build.weapon)].map((weapon) => {
    const build = findBuild(weapon);
    const inner = build
      ? `<img src="assets/weapons/${build.icon}.webp" alt="" loading="lazy"><span>${build.short}</span>`
      : '<span>ALL</span>';
    return `<button class="build-filter${activeBuild === weapon ? ' active' : ''}" data-build="${weapon}" role="tab" aria-selected="${activeBuild === weapon}" title="${weapon === 'ALL' ? 'All weapons' : weapon}" aria-label="${weapon === 'ALL' ? 'All weapons' : weapon}">${inner}</button>`;
  }).join('');
}

function renderGrid() {
  const visible = activeBuild === 'ALL' ? buildData : buildData.filter((build) => build.weapon === activeBuild);
  gridEl.innerHTML = visible.map((build) => `
    <article class="build-card${activeBuild !== 'ALL' ? ' is-single' : ''}" style="--weapon-color:${build.color}">
      <div class="build-card-head">
        <span class="weapon-mark"><img src="assets/weapons/${build.icon}.webp" alt="${build.weapon} icon" loading="lazy"><small>${build.short}</small></span>
        <button class="build-title-btn" data-info="weapon" data-build="${build.weapon}" type="button">
          <span class="source-tag">${build.tag}</span>
          <span class="build-title">${build.weapon}</span>
          <span class="build-subtitle">${build.buildName}</span>
        </button>
      </div>
      <div class="build-card-body">
        <div class="build-meta">
          <span><small>WEAPON</small>${build.weaponName}</span>
          <span><small>CHARM</small>${build.charm || '—'}</span>
        </div>
        <div><h4>SET / GROUP SKILLS</h4><div class="skill-list">${setChips(build.setSkills, build)}</div></div>
        <div><h4>WEAPON SKILLS</h4><div class="skill-list">${skillChips(build.weaponSkills, build, 'weapon')}</div></div>
        <div><h4>ARMOR SKILLS</h4><div class="skill-list">${skillChips(build.armorSkills, build, 'armor')}</div></div>
        <div><h4>ARMOR LOADOUT</h4><div class="gear-list">${build.armor.map((piece) => `
          <button class="gear-chip" data-info="armor" data-key="${piece.name}" data-build="${build.weapon}" title="From ${piece.monster}">
            <img class="gear-monster" src="${monsterIcon(piece.monster)}" alt="${piece.monster} icon" loading="lazy">
            <span class="gear-text"><small>${piece.slot}</small>${piece.name}</span>
          </button>`).join('')}</div></div>
        <a class="build-source" href="${build.source}" target="_blank" rel="noopener noreferrer">Full build &amp; decorations on Game8 ↗</a>
      </div>
    </article>
  `).join('');
}

function effectParagraphs(effect) {
  return effect
    .split(/(?=\d pc:)/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => `<li>${part}</li>`)
    .join('');
}

function detailShell({ eyebrow, title, subtitle, body, meta = [], where = '', source, sourceLabel = 'Source: Game8' }) {
  const metaHtml = meta.length
    ? `<dl class="detail-meta">${meta.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join('')}</dl>`
    : '';
  return `
    <div class="detail-inner">
      <span class="detail-eyebrow">${eyebrow}</span>
      <h3>${title}</h3>
      ${subtitle ? `<p class="detail-sub">${subtitle}</p>` : ''}
      ${body ? `<div class="detail-body">${body}</div>` : ''}
      ${where ? `<div class="where-get"><h4>WHERE TO GET</h4>${where}</div>` : ''}
      ${metaHtml}
      <a class="build-source" href="${source}" target="_blank" rel="noopener noreferrer">${sourceLabel} ↗</a>
    </div>`;
}

function renderDetail() {
  if (!detailEl) return;
  if (activeBuild === 'ALL') {
    layoutEl.classList.add('is-all');
    detailEl.hidden = true;
    detailEl.innerHTML = '';
    return;
  }

  layoutEl.classList.remove('is-all');
  detailEl.hidden = false;

  const build = findBuild(activeBuild);
  const info = activeInfo || { type: 'weapon' };
  const usedIn = build.buildName;

  if (info.type === 'weapon') {
    detailEl.innerHTML = detailShell({
      eyebrow: 'WEAPON TYPE',
      title: build.weapon,
      subtitle: build.buildName,
      body: `<p>${build.blurb}</p>`,
      meta: [['RECOMMENDED WEAPON', build.weaponName], ['CHARM', build.charm || '—'], ['USE', 'Click a skill, set bonus, group skill or armor piece to see its description and where to get it.']],
      source: build.source,
    });
    return;
  }

  if (info.type === 'skill') {
    const description = skillDescriptions[info.key] || 'Description not recorded.';
    const where = info.where === 'weapon' ? 'Weapon skill' : 'Armor skill';
    detailEl.innerHTML = detailShell({
      eyebrow: where.toUpperCase(),
      title: info.key,
      subtitle: info.level ? `Lv ${info.level} in ${usedIn}` : usedIn,
      body: `<p>${description}</p>`,
      meta: [['BUILD', usedIn], ['WEAPON', build.weaponName]],
      source: build.source,
    });
    return;
  }

  if (info.type === 'set') {
    const set = setBonuses[info.key];
    const src = typeof setSkillSources !== 'undefined' ? setSkillSources[info.key] : null;
    const worn = src ? build.armor.filter((piece) => piece.set === src.set) : [];
    const effect = set ? `<p><strong>${set.bonus}</strong></p><ul class="detail-effect">${effectParagraphs(set.effect)}</ul>` : '<p>Description not recorded.</p>';
    const where = src
      ? [
          whereRow('EQUIPMENT', `${src.set} Armor Set${worn.length ? ` · ${worn.map((piece) => `${piece.name} (${piece.slot})`).join(', ')}` : ''}`),
          whereRow('MONSTER', monsterTag(src.monster)),
          whereRow('HOW TO CRAFT', `Forge ${worn.length ? worn.map((piece) => piece.name).join(', ') : 'the set'} with ${src.monster} materials.`),
        ].join('')
      : '';
    detailEl.innerHTML = detailShell({
      eyebrow: 'SET BONUS',
      title: info.key,
      subtitle: set ? `Grants ${set.bonus}` : '',
      body: effect,
      where,
      meta: [['PIECES WORN', info.level ? `${info.level} pc` : '—'], ['BUILD', usedIn]],
      source: src ? src.url : build.source,
      sourceLabel: src ? 'Armor set on Game8' : 'Source: Game8',
    });
    return;
  }

  if (info.type === 'group') {
    const group = groupSkills[info.key];
    const src = typeof groupSkillSources !== 'undefined' ? groupSkillSources[info.key] : null;
    const worn = build.armor.filter((piece) => piece.group === info.key);
    const monsters = [...new Set(worn.map((piece) => piece.monster))];
    const where = src
      ? [
          whereRow('EQUIPMENT', worn.length
            ? worn.map((piece) => `${piece.name} (${piece.slot})`).join(', ')
            : `${src.sets.join(', ')} γ pieces`),
          whereRow('MONSTER', (monsters.length ? monsters : src.sets).map(monsterTag).join('')),
          whereRow('HOW IT WORKS', `Activates with ${src.piecesRequired} pieces that carry ${info.key}. ${src.note}`),
        ].join('')
      : '';
    detailEl.innerHTML = detailShell({
      eyebrow: 'GROUP SKILL',
      title: info.key,
      subtitle: group ? `Grants ${group.bonus}` : '',
      body: group ? `<ul class="detail-effect"><li>${group.effect}</li></ul>` : '<p>Description not recorded.</p>',
      where,
      meta: [['BUILD', usedIn], ['WEAPON', build.weaponName]],
      source: src ? src.url : build.source,
      sourceLabel: src ? 'Group skill list' : 'Source: Game8',
    });
    return;
  }

  if (info.type === 'armor') {
    const piece = build.armor.find((item) => item.name === info.key);
    const setLabel = piece ? `${piece.set} ${piece.variant}` : 'Armor';
    const bonus = piece
      ? build.setSkills.map(([name]) => name).find((name) => (setSkillSources[name] || {}).set === piece.set)
      : '';
    const where = piece
      ? [
          whereRow('EQUIPMENT', `${setLabel} Armor Set · ${piece.slot}`),
          whereRow('MONSTER', monsterTag(piece.monster)),
          piece.group
            ? whereRow('GROUP SKILL', `${piece.group}${groupSkills[piece.group] ? ` (${groupSkills[piece.group].bonus})` : ''}`)
            : '',
          bonus ? whereRow('SET BONUS', bonus) : '',
        ].join('')
      : '';
    detailEl.innerHTML = detailShell({
      eyebrow: `ARMOR · ${(piece ? piece.slot : 'Piece').toUpperCase()}`,
      title: info.key,
      subtitle: `${setLabel} armor · ${usedIn}`,
      body: piece
        ? `<p>Forged from ${piece.monster} materials — hunt ${piece.monster} to craft this piece. Defense, slots and decorations are listed on the armor-set page.</p>`
        : '<p>Armor piece not recorded for this build.</p>',
      where,
      meta: [['SLOT', piece ? piece.slot : '—'], ['BUILD', usedIn], ['WEAPON', build.weaponName]],
      source: piece ? piece.url : build.source,
      sourceLabel: 'Armor set on Game8',
    });
  }
}

function markActiveChip() {
  gridEl.querySelectorAll('[data-info]').forEach((button) => {
    const same = activeInfo && button.dataset.info === activeInfo.type && button.dataset.key === activeInfo.key && button.dataset.build === activeBuild;
    button.classList.toggle('is-active', Boolean(same));
  });
}

function renderBuilds() {
  renderFilters();
  renderGrid();
  renderDetail();
  markActiveChip();
}

filterEl.addEventListener('click', (event) => {
  const button = event.target.closest('[data-build]');
  if (!button) return;
  activeBuild = button.dataset.build;
  activeInfo = null;
  renderBuilds();
});

// On narrow screens the detail panel sits below the build card, so bring it
// into view after a click instead of leaving the reader at the chip they pressed.
function revealDetail() {
  if (!detailEl || detailEl.hidden) return;
  if (typeof window === 'undefined' || !window.matchMedia) return;
  if (!window.matchMedia('(max-width:850px)').matches) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  detailEl.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
}

function handleInfo(button) {
  const type = button.dataset.info;
  if (type === 'weapon') {
    activeInfo = null;
    if (activeBuild === 'ALL') {
      activeBuild = button.dataset.build;
      renderBuilds();
      revealDetail();
      return;
    }
    renderDetail();
    markActiveChip();
    revealDetail();
    return;
  }
  const info = {
    type,
    key: button.dataset.key,
    level: button.dataset.level || '',
    where: button.dataset.where || '',
  };
  if (activeBuild === 'ALL') {
    activeBuild = button.dataset.build;
    activeInfo = info;
    renderBuilds();
    revealDetail();
    return;
  }
  activeInfo = info;
  renderDetail();
  markActiveChip();
  revealDetail();
}

gridEl.addEventListener('click', (event) => {
  const button = event.target.closest('[data-info]');
  if (button) handleInfo(button);
});

gridEl.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  const button = event.target.closest('[data-info]');
  if (!button) return;
  event.preventDefault();
  handleInfo(button);
});

renderBuilds();