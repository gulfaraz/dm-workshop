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

export default { sizes };
