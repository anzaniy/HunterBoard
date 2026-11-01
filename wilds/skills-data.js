// Descriptions for the skills, set bonuses and group skills used by the
// recommended builds. Text is copied from Game8's official skill lists:
//   Armor skills  https://game8.co/games/Monster-Hunter-Wilds/archives/482546
//   Weapon skills https://game8.co/games/Monster-Hunter-Wilds/archives/499781
//   Group skills  https://game8.co/games/Monster-Hunter-Wilds/archives/482547
//   Set bonuses   https://game8.co/games/Monster-Hunter-Wilds/archives/482548
const skillDescriptions = {
  'Adaptability': 'Grants protection against environmental damage, such as from heat or cold.',
  'Adrenaline Rush': 'Temporarily increases attack power after executing a perfectly-timed evade just as a monster attacks.',
  'Agitator': 'Increases attack power and affinity when large monsters become enraged.',
  'Airborne': 'Increases the damage caused by jumping attacks.',
  'Antivirus': 'Once infected, makes it easier to overcome the Frenzy and increases affinity if cured.',
  'Aquatic/Oilsilt Mobility': 'Grants resistance against impairments to mobility while in water, oilsilt, or streams.',
  'Artillery': "Strengthens explosive attacks like shells, Wyvern's Fire, charge blade phial attacks, and Sticky Ammo.",
  'Attack Boost': 'Increases attack power.',
  'Ballistics': 'Extends the range in which ammo and arrows have maximum power.',
  'Bind Resistance': 'Grants protection against webbed status and frostblight.',
  'Blight Resistance': 'Grants protection against all elemental blights.',
  'Burst': 'Continuously landing hits gradually increases attack and elemental attack. (Amount increased depends on weapon.)',
  'Charge Up': "Increases your power to induce stun when you hit a monster with a hammer's charged attack.",
  'Coalescence': 'Temporarily increases elemental attack power and status effects after recovering from blights or abnormal status.',
  'Constitution': 'Reduces stamina depletion when evading, blocking, or doing certain other actions.',
  'Convert Element': 'After taking elemental damage, temporarily grants you dragon element effects. (Cooldown after effect ends.)',
  'Counterstrike': 'Temporarily increases attack power after being knocked back.',
  'Critical Boost': 'Increases the damage of critical hits.',
  'Critical Element': 'Increases elemental damage (fire, water, thunder, ice, dragon) when landing critical hits.',
  'Divine Blessing': 'Has a predetermined chance of reducing the damage you take.',
  'Dragon Attack': 'Increases dragon element attack power. (Elemental attack power has a maximum limit.)',
  'Dragon Resistance': 'Increases dragon resistance. Also improves defense at higher levels.',
  'Earplugs': "Grants protection from large monsters' roars.",
  'Elemental Absorption': 'After taking elemental damage, temporarily grants you element effects. (Cooldown after effect ends)',
  'Evade Extender': 'Increases evade distance.',
  'Evade Window': 'Extends the invulnerability period when evading.',
  'Fire Attack': 'Increases fire element attack power. (Elemental attack power has a maximum limit.)',
  'Fire Resistance': 'Increases fire resistance. Also improves defense at higher levels.',
  'Flayer': 'Makes it easier to inflict wounds. Can also deal extra non-elemental damage upon buildup. (Excludes some attacks.)',
  'Flinch Free': 'Prevents knockbacks and other reactions to small damage.',
  'Focus': 'Increases the fill rate for weapons with gauges and the charge rate for weapons with charge attacks.',
  'Guard': 'Reduces knockbacks and stamina depletion when guarding.',
  'Guard Up': 'Allows you to guard against ordinarily unblockable attacks.',
  'Handicraft': 'Extends the weapon sharpness gauge. However, it will not increase the gauge past its maximum.',
  'Horn Maestro': 'Increases the effect duration of hunting horn melodies. (Effect lost when you change weapons)',
  'Latent Power': 'Temporarily increases affinity and reduces stamina depletion when certain conditions are met.',
  'Load Shells': "Improves reloading, and increases the gunlance's shell capacity and charge blade's phial capacity.",
  'Marathon Runner': 'Slows down stamina depletion for actions that continuously drain stamina (such as dashing).',
  "Master's Touch": 'Prevents your weapon from losing sharpness during critical hits.',
  'Maximum Might': 'Increases affinity if stamina is kept full for a period of time.',
  "Mind's Eye": 'Your attacks are deflected less and deal more damage to hard targets.',
  'Offensive Guard': 'Temporarily increases attack power after executing a perfectly-timed guard.',
  'Peak Performance': 'Increases attack when your health is full.',
  'Power Prolonger': 'Allows long swords, dual blades, insect glaives, switch axes, and charge blades stay powered up longer.',
  'Quick Sheathe': 'Speeds up weapon sheathing.',
  'Rapid Fire Up': 'Improves light bowgun rapid fire.',
  'Razor Sharp': 'Prevents your weapon from losing sharpness.',
  'Recovery Up': 'Increases the amount recovered when restoring health.',
  'Resentment': 'Increases attack when you have recoverable damage (the red portion of your Health Gauge).',
  'Shock Absorber': 'Disables damage reactions when you hit a friend or when a friend hits you.',
  'Speed Eating': 'Increases meat-eating and item-consumption speed.',
  'Spread/Power Shots': "Increases the attack of the bowgun's Spread Ammo and the bow's Power Shots and Quick Shots.",
  'Stamina Surge': 'Speeds up stamina recovery.',
  'Stun Resistance': 'Reduces stun duration.',
  'Tetrad Shot': 'Increases the affinity of bowgun ammo/coatings from the fourth shot and attack of the fourth and sixth shots.',
  'Weakness Exploit': "Increases the affinity of attacks that exploit a monster's weak points and wounds.",
};

// Set bonus skills. `bonus` is the skill name granted by the set; `effect`
// is the source text for the 2-piece and 4-piece thresholds.
const setBonuses = {
  "Doshaguma's Might": {
    bonus: 'Powerhouse',
    effect: '2 pc: Temporarily increases attack +10 after a successful Power Clash or Offset attack 4 pc: Temporarily increases attack +25 after a successful Power Clash or Offset attack',
  },
  "Ebony Odogaron's Power": {
    bonus: 'Burst Boost',
    effect: '2 pc: Extends the duration of the Burst skill and grants attack +8 while Burst is active. 4 pc: Further extends the duration of the Burst skill and grants attack +18 while Burst is active.',
  },
  "Jin Dahaad's Revolt": {
    bonus: 'Binding Counter',
    effect: '2 pc: Increases attack after recovering from webbed status, frostblight, being pinned, or a Power Clash. 4 pc: Greatly increases attack after recovering from webbed status, frostblight, being pinned, or a Power Clash.',
  },
  "Gore Magala's Tyranny": {
    bonus: 'Black Eclipse',
    effect: '2 pc: Infects you with Frenzy when against large monsters. 4 pc: Infects you with Frenzy and raises attack when against large monsters. Attack power increases upon recovery.',
  },
  "Arkveld's Hunger": {
    bonus: 'Hasten Recovery',
    effect: '2 pc: Regenerates a small amount of your health as you continually attack a monster. Recovery varies by weapon. 4 pc: Regenerates your health as you continually attack a monster. Recovery varies by weapon.',
  },
  "Fulgur Anjanath's Will": {
    bonus: 'Second Wind',
    effect: '2 pc: Grants an additional Stamina Gauge. 4 pc: Grants an additional long Stamina Gauge.',
  },
  "Leviathan's Fury": {
    bonus: 'Azure Bolt',
    effect: '2 pc: Temporarily increases affinity and can deal extra thunder damage upon buildup. (Excludes some attacks.) 4 pc: Further increases additional thunder damage and moderately extends the duration affinity is increased.',
  },
  'Soul of the Dark Knight': {
    bonus: 'Dark Arts/The Blackest Night',
    effect: '2 pc: Having recoverable damage increases elemental attack, and some great sword Lv 3 charged slashes are strengthened. 4 pc: Allows you to perform the special action: The Blackest Night.',
  },
  'Gogmapocalypse': {
    bonus: 'Mutual Hostility',
    effect: '2 pc: Increases elemental attack when large monsters become enraged. 4 pc: Level I effect is increased, and you gain a temporary damage barrier. (Barrier reactivates after cooldown.)',
  },
};

// Group skills. Only the groups worn by the recommended builds are listed.
const groupSkills = {
  "Lord's Soul": {
    bonus: 'Guts (Tenacity)',
    effect: 'Boosts attack and lowers defense but lets you survive one lethal hit. Afterwards, boosts defense and res.',
  },
};

// Where each set bonus comes from: the armor set that grants it and the monster
// whose materials are used to forge that set. `set` matches the `set` field on
// the armor entries in builds-data.js. Text/levels come from Game8's set-bonus
// list (https://game8.co/games/Monster-Hunter-Wilds/archives/482548); the monster
// and forging route come from the linked Game8 armor-set page.
const setSkillSources = {
  "Gore Magala's Tyranny": {
    set: 'Gore Magala',
    monster: 'Gore Magala',
    url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/503051',
  },
  "Jin Dahaad's Revolt": {
    set: 'Jin Dahaad',
    monster: 'Jin Dahaad',
    url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/503050',
  },
  'Soul of the Dark Knight': {
    set: 'Bale',
    monster: 'Omega Planetes',
    url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/553652',
  },
  'Gogmapocalypse': {
    set: 'Gogmazios',
    monster: 'Gogmazios',
    url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/571430',
  },
  "Arkveld's Hunger": {
    set: 'Arkveld',
    monster: 'Arkveld',
    url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/503053',
  },
  "Leviathan's Fury": {
    set: 'Lagiacrus',
    monster: 'Lagiacrus',
    url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/532642',
  },
  "Fulgur Anjanath's Will": {
    set: 'Guardian Fulgur',
    monster: 'Guardian Fulgur Anjanath',
    url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/503046',
  },
  "Doshaguma's Might": {
    set: 'Doshaguma',
    monster: 'Doshaguma',
    url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/502866',
  },
  "Ebony Odogaron's Power": {
    set: 'Guardian Ebony',
    monster: 'Guardian Ebony Odogaron',
    url: 'https://game8.co/games/Monster-Hunter-Wilds/archives/503038',
  },
};

// Where group skills come from. Group skills are carried by specific armor
// pieces (not whole sets) and activate once three pieces share the group skill;
// an Artian weapon can carry one as well. Equipment list verified with the
// Fextralife skill page, armor variants with the Game8 armor-set pages.
const groupSkillSources = {
  "Lord's Soul": {
    effect: 'Guts (Tenacity)',
    piecesRequired: 3,
    sets: ['Rey Dau', 'Uth Duna', 'Nu Udra', 'Jin Dahaad', 'Arkveld'],
    note: 'Only the γ (gamma) pieces of these sets carry Lord\'s Soul.',
    url: 'https://monsterhunterwilds.wiki.fextralife.com/Lord%27s+Soul',
  },
};