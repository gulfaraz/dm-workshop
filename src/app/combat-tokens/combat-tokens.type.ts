export interface Token {
    image: string;
    size: string;
    colour: string;
    zoom: number;
}

export const sizes = {
    Tiny: '1x1',
    Small: '2x2',
    Medium: '2x2',
    Large: '4x4',
    Huge: '6x6',
    Gargantuan: '8x8',
};

export const colours = [
    '#009e73', // green
    '#56b4e9', // cerulean
    '#f0e442', // yellow
    '#0072b2', // blue
    '#d55e00', // orange
    '#cc79a7', // pink
    '#999999', // gray
    '#e69f00', // light orange
];

export default { sizes, colours };
