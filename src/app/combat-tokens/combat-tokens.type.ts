export interface Token {
    image: string;
    size: string;
    colour: string;
    zoom: number;
    positionX?: number;
    positionY?: number;
}

export const sizes: { [key: string]: string } = {
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

export const zoomRange = {
    min: 10,
    max: 200,
};

export const getTokenSize = (tokenSize: string) => parseInt(sizes[tokenSize]);

export const scaleTokenPosition = (
    tokenPosition: number | undefined,
    tokenSize: string,
) =>
    tokenPosition ? tokenPosition * getTokenSize(tokenSize) + 'px' : 'center';

export default { sizes, colours, zoomRange, getTokenSize, scaleTokenPosition };
