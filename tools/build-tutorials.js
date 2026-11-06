const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const template = fs.readFileSync(path.join(__dirname, 'tutorial-template.html'), 'utf8');
const dataSource = fs.readFileSync(path.join(root, 'wilds/tutorials-data.js'), 'utf8');
const iconsSource = fs.readFileSync(path.join(root, 'wilds/monster-icons.js'), 'utf8');
const contentSource = fs.readFileSync(path.join(root, 'wilds/tutorials-content.js'), 'utf8');
const tutorialMonsters = new Function(`${dataSource}; return tutorialMonsters;`)();
const tutorialContent = new Function(`${contentSource}; return tutorialContent;`)();
const monsterIcons = JSON.parse(iconsSource.slice(iconsSource.indexOf('{'), iconsSource.lastIndexOf('}') + 1));

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]));

const bulletList = (items) => `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;

const sourceList = (sources) => sources
  .map((source) => `<li><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer nofollow">${escapeHtml(source.label)}</a></li>`)
  .join('');

const videoPlayer = (video, icon) => `<div class="tutorial-video" data-video-id="${video.youtubeId}" data-video-title="${escapeHtml(video.title)}">
          <button class="tutorial-video-facade" type="button">
            <img class="tutorial-video-bg" src="../assets/monsters/${icon}" alt="" />
            <span class="tutorial-play" aria-hidden="true"></span>
            <span class="tutorial-video-copy">
              <strong>${escapeHtml(video.title)}</strong>
              <span>${escapeHtml(video.creator)} · YouTube</span>
            </span>
          </button>
        </div>`;

const videoLinks = (primary, backup) => {
  const watch = `https://www.youtube.com/watch?v=${primary.youtubeId}`;
  const lines = [
    `<p class="tutorial-video-credit">Video by <a href="${escapeHtml(primary.channelUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(primary.creator)}</a> · <a href="${watch}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a></p>`,
  ];
  if (backup) {
    lines.push(`<p class="tutorial-video-credit">Backup guide: <a href="https://www.youtube.com/watch?v=${backup.youtubeId}" target="_blank" rel="noopener noreferrer">${escapeHtml(backup.title)}</a> by ${escapeHtml(backup.creator)}</p>`);
  }
  return lines.join('\n        ');
};

let count = 0;
for (const monster of tutorialMonsters) {
  if (monster.size !== 'LARGE') continue;
  if (!monster.page) throw new Error(`Missing page path for ${monster.name}`);
  const icon = path.basename(monsterIcons[monster.name] || '');
  if (!icon) throw new Error(`Missing icon for ${monster.name}`);
  const content = tutorialContent[monster.name];
  if (!content) throw new Error(`Missing tutorial content for ${monster.name}`);
  const primary = (content.videos || []).find((video) => video.rank === 'primary');
  const backup = (content.videos || []).find((video) => video.rank !== 'primary');
  if (!primary) throw new Error(`Missing primary video for ${monster.name}`);

  const description = `${monster.name} fight guide for Monster Hunter Wilds: overview, key mechanics, dangerous attacks, punish windows, weaknesses, breakable parts and sources.`;

  const html = template
    .replaceAll('{{name}}', escapeHtml(monster.name))
    .replaceAll('{{slug}}', path.basename(monster.page, '.html'))
    .replaceAll('{{icon}}', icon)
    .replaceAll('{{regions}}', escapeHtml(monster.regions.join(' · ')))
    .replaceAll('{{description}}', escapeHtml(description))
    .replaceAll('{{confidence}}', escapeHtml(content.confidence.toUpperCase()))
    .replaceAll('{{overview}}', escapeHtml(content.overview))
    .replaceAll('{{mechanics}}', bulletList(content.mechanics))
    .replaceAll('{{tells}}', bulletList(content.tells))
    .replaceAll('{{strategy}}', bulletList(content.strategy))
    .replaceAll('{{element}}', escapeHtml(content.element))
    .replaceAll('{{parts}}', escapeHtml(content.parts))
    .replaceAll('{{items}}', escapeHtml(content.items))
    .replaceAll('{{update}}', escapeHtml(content.update))
    .replaceAll('{{sources}}', sourceList(content.sources))
    .replaceAll('{{videoPlayer}}', videoPlayer(primary, icon))
    .replaceAll('{{videoLinks}}', videoLinks(primary, backup));

  fs.writeFileSync(path.join(root, 'wilds', monster.page), html);
  count += 1;
}

console.log(`Built ${count} tutorial pages.`);