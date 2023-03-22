import { Token } from '../combat-tokens.type';

import * as diverseTokens from './diverse.combat-token-set.json';

export const tokenSets: { [key: string]: Token[] } = {
    Diverse: Array.from(diverseTokens),
};

export default tokenSets;
