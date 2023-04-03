import { Token } from '../combat-tokens.type';

import * as mixedTokens from './mixed.combat-token-set.json';
import * as feyTokens from './fey.combat-token-set.json';
import * as elementalsTokens from './elementals.combat-token-set.json';
import * as devilsTokens from './devils.combat-token-set.json';
import * as demonsTokens from './demons.combat-token-set.json';
import * as yugolothsTokens from './yugoloths.combat-token-set.json';
import * as fiendsTokens from './fiends.combat-token-set.json';

export const tokenSets: { [key: string]: Token[] } = {
    Fey: Array.from(feyTokens),
    Elementals: Array.from(elementalsTokens),
    Devils: Array.from(devilsTokens),
    Demons: Array.from(demonsTokens),
    Yugoloths: Array.from(yugolothsTokens),
    Fiends: Array.from(fiendsTokens),
    Mixed: Array.from(mixedTokens),
};

export default tokenSets;
