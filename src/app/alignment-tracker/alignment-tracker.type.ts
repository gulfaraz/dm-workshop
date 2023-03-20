export interface Character {
    name: string;
    ethical: number;
    moral: number;
    colour: string;
}

export const colours = [
    '#2f4f4f',
    '#556b2f',
    '#8b4513',
    '#a52a2a',
    '#191970',
    '#708090',
    '#808000',
    '#483d8b',
    '#008000',
    '#663399',
    '#008080',
    '#b8860b',
    '#4682b4',
    '#000080',
    '#d2691e',
    '#800080',
    '#b03060',
    '#9932cc',
    '#ff4500',
    '#c71585',
    '#0000cd',
    '#4169e1',
    '#dc143c',
    '#9370db',
    '#0000ff',
    '#a020f0',
    '#ff6347',
    '#ff00ff',
    '#1e90ff',
    '#ff1493',
    '#264653',
    '#2a9d8f',
    '#e76f51',
];

export const characters: Character[] = [
    {
        name: 'Mordenkainen',
        ethical: -4,
        moral: 1,
        colour: colours[0],
    },
    {
        name: 'Tenser',
        ethical: 4,
        moral: 4,
        colour: colours[4],
    },
    {
        name: 'Sprigg',
        ethical: -5,
        moral: -3,
        colour: colours[17],
    },
];

export default { characters, colours };
