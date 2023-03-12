export interface Card {
    identifier: string;
    name: string;
    attunement?: string;
    type: string;
    rarity?: string;
    description: string;
    size: string;
}

export const sizes = [
    '1x1',
    '2x1',
    '3x1',
    '4x1',
    '2x2',
    '3x2',
    '4x2',
    '3x3',
    '4x3',
];

export const cards: Card[] = [
    {
        identifier: '4708',
        name: 'Potion of Healing',
        type: 'Potion',
        rarity: 'Common',
        description:
            'A character who drinks the magical red fluid in this vial regains 2d4 + 2 hit points. Drinking or administering a potion takes an action.',
        size: sizes[0],
    },
    {
        identifier: '5418',
        name: 'Scroll of Revivify',
        type: 'Scroll',
        rarity: 'Uncommon',
        description:
            'A spell scroll bears the words of a single spell, written in a mystical cipher. If the spell is on your class’s spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell’s normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n\nIf the spell is on your class’s spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell’s level. On a failed check, the spell disappears from the scroll with no other effect.\n\nThe level of the spell on the scroll determines the spell’s saving throw DC and attack bonus, as well as the scroll’s rarity.\n\nSpell Level 3 | Save DC 15 | Attack Bonus +7',
        size: sizes[2],
    },
    {
        identifier: '4581',
        name: 'Bag of Holding',
        type: 'Wondrous Item',
        rarity: 'Uncommon',
        description:
            'This bag has an interior space considerably larger than its outside dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 15 pounds, regardless of its contents. Retrieving an item from the bag requires an action.\n\nIf the bag is overloaded, pierced, or torn, it ruptures and is destroyed, and its contents are scattered in the Astral Plane. If the bag is turned inside out, its contents spill forth, unharmed, but the bag must be put right before it can be used again. Breathing creatures inside the bag can survive up to a number of minutes equal to 10 divided by the number of creatures (minimum 1 minute), after which time they begin to suffocate.\n\nPlacing a bag of holding inside an extradimensional space created by a handy haversack, portable hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can’t be reopened.',
        size: sizes[3],
    },
    {
        identifier: '4726',
        name: 'Ring of Protection',
        attunement: 'Requires attunement',
        type: 'Ring',
        rarity: 'Rare',
        description:
            'You gain a +1 bonus to AC and saving throws while wearing this ring.',
        size: sizes[0],
    },
    {
        identifier: '2418',
        name: 'Diamond',
        type: 'Gemstone',
        description:
            'A transparent blue-white, canary, pink, brown, or blue gemstone worth 5,000 gold pieces.',
        size: sizes[0],
    },
    {
        identifier: '4794',
        name: 'Wand of Magic Missiles',
        type: 'Wand',
        rarity: 'Uncommon',
        description:
            "This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the magic missile spell from it. For 1 charge, you cast the 1st-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.\n\nThe wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
        size: sizes[1],
    },
];

export default { sizes, cards };
