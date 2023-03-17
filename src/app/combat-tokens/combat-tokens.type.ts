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
        size: Object.keys(sizes)[1],
        colour: colours[2],
        zoom: 69,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30783/955/1000/1000/638062024584880857.png',
        size: Object.keys(sizes)[1],
        colour: colours[3],
        zoom: 69,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30783/955/1000/1000/638062024584880857.png',
        size: Object.keys(sizes)[1],
        colour: colours[4],
        zoom: 69,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30783/955/1000/1000/638062024584880857.png',
        size: Object.keys(sizes)[1],
        colour: colours[5],
        zoom: 69,
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/en/1/13/Illithid_Sorcerer.png',
        size: Object.keys(sizes)[2],
        colour: colours[6],
        zoom: 64,
    },
    {
        image: 'https://i.pinimg.com/originals/fa/7a/a6/fa7aa6053353934a6e2bf8e147ac255f.jpg',
        size: Object.keys(sizes)[2],
        colour: colours[7],
        zoom: 69,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/6290/200/1000/1000/636960516129250094.jpeg',
        size: Object.keys(sizes)[2],
        colour: colours[0],
        zoom: 86,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/6290/215/1000/1000/636960517653000626.jpeg',
        size: Object.keys(sizes)[2],
        colour: colours[0],
        zoom: 69,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/6288/421/1000/1000/636960342199103296.png',
        size: Object.keys(sizes)[2],
        colour: colours[1],
        zoom: 80,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/6288/421/1000/1000/636960342199103296.png',
        size: Object.keys(sizes)[2],
        colour: colours[2],
        zoom: 80,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/6288/421/1000/1000/636960342199103296.png',
        size: Object.keys(sizes)[2],
        colour: colours[3],
        zoom: 80,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/6288/421/1000/1000/636960342199103296.png',
        size: Object.keys(sizes)[2],
        colour: colours[4],
        zoom: 80,
    },
    {
        image: 'https://www.gmbinder.com/images/b97QP1X.jpg',
        size: Object.keys(sizes)[3],
        colour: colours[0],
        zoom: 74,
    },
    {
        image: 'https://i.pinimg.com/originals/ce/48/b5/ce48b5ff66a976011a24ac8d7f722d5e.png',
        size: Object.keys(sizes)[3],
        colour: colours[1],
        zoom: 110,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30834/702/1000/1000/638063895243217798.png',
        size: Object.keys(sizes)[5],
        colour: colours[6],
        zoom: 69,
    },
    {
        image: 'https://cdnb.artstation.com/p/assets/images/images/023/017/689/large/miguel-regodon-harkness-pzo2102-ancient-gold-dragon-final-2.jpg',
        size: Object.keys(sizes)[5],
        colour: colours[4],
        zoom: 82,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/23375/69/1000/1000/637791959730543418.jpeg',
        size: Object.keys(sizes)[4],
        colour: colours[5],
        zoom: 98,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30834/185/1000/1000/638063883093825018.png',
        size: Object.keys(sizes)[3],
        colour: colours[3],
        zoom: 64,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30834/149/1000/1000/638063882505895317.png',
        size: Object.keys(sizes)[3],
        colour: colours[7],
        zoom: 82,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30833/408/1000/1000/638063863232165584.png',
        size: Object.keys(sizes)[2],
        colour: colours[7],
        zoom: 82,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/31312/871/1000/1000/638084425511165687.png',
        size: Object.keys(sizes)[2],
        colour: colours[1],
        zoom: 59,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30835/940/1000/1000/638063924522595508.png',
        size: Object.keys(sizes)[0],
        colour: colours[2],
        zoom: 76,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30835/940/1000/1000/638063924522595508.png',
        size: Object.keys(sizes)[0],
        colour: colours[3],
        zoom: 76,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30835/940/1000/1000/638063924522595508.png',
        size: Object.keys(sizes)[0],
        colour: colours[4],
        zoom: 76,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30835/940/1000/1000/638063924522595508.png',
        size: Object.keys(sizes)[0],
        colour: colours[5],
        zoom: 76,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30835/940/1000/1000/638063924522595508.png',
        size: Object.keys(sizes)[0],
        colour: colours[6],
        zoom: 76,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30835/940/1000/1000/638063924522595508.png',
        size: Object.keys(sizes)[0],
        colour: colours[7],
        zoom: 76,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30782/21/1000/1000/638061948417487055.png',
        size: Object.keys(sizes)[0],
        colour: colours[2],
        zoom: 64,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/14/487/1000/1000/636364325235118776.png',
        size: Object.keys(sizes)[0],
        colour: colours[3],
        zoom: 69,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/14/487/1000/1000/636364325235118776.png',
        size: Object.keys(sizes)[0],
        colour: colours[3],
        zoom: 69,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30783/784/1000/1000/638062018575789713.png',
        size: Object.keys(sizes)[0],
        colour: colours[4],
        zoom: 69,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30834/690/1000/1000/638063894965168047.png',
        size: Object.keys(sizes)[0],
        colour: colours[5],
        zoom: 69,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30834/690/1000/1000/638063894965168047.png',
        size: Object.keys(sizes)[0],
        colour: colours[6],
        zoom: 69,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30834/690/1000/1000/638063894965168047.png',
        size: Object.keys(sizes)[0],
        colour: colours[7],
        zoom: 69,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30835/934/1000/1000/638063924408565694.png',
        size: Object.keys(sizes)[0],
        colour: colours[0],
        zoom: 92,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30835/934/1000/1000/638063924408565694.png',
        size: Object.keys(sizes)[0],
        colour: colours[1],
        zoom: 92,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30835/934/1000/1000/638063924408565694.png',
        size: Object.keys(sizes)[0],
        colour: colours[2],
        zoom: 92,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30761/865/1000/1000/638061096692582271.png',
        size: Object.keys(sizes)[3],
        colour: colours[3],
        zoom: 69,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30781/604/1000/1000/638061930942710847.png',
        size: Object.keys(sizes)[3],
        colour: colours[4],
        zoom: 82,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30762/228/1000/1000/638061113870717182.png',
        size: Object.keys(sizes)[3],
        colour: colours[5],
        zoom: 94,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30762/236/1000/1000/638061114170787382.png',
        size: Object.keys(sizes)[3],
        colour: colours[6],
        zoom: 86,
    },
    {
        image: 'https://www.dndbeyond.com/avatars/thumbnails/30832/378/1000/1000/638063837085902470.png',
        size: Object.keys(sizes)[2],
        colour: colours[7],
        zoom: 69,
    },
];

export default { sizes, tokens };
