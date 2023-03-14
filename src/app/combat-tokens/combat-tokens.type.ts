export interface Token {
    image: string;
    size: string;
    colour: string;
    zoom: number;
}

export const sizes = ['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan'];

export const colours = [
    '#999999',
    '#e69f00',
    '#56b4e9',
    '#009e73',
    '#f0e442',
    '#0072b2',
    '#d55e00',
    '#cc79a7',
];

export const tokens: Token[] = [
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30783/955/1000/1000/638062024584880857.png',
        size: sizes[2],
        colour: colours[2],
        zoom: 69,
    },
];

export default { sizes, tokens };
