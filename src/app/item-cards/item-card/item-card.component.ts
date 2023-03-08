import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { Card } from '../item-cards.type';

@Component({
    selector: 'app-item-card',
    templateUrl: './item-card.component.html',
    styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
    @Input() card!: Card;

    @HostBinding('class.card') classCard = true;
    @HostBinding('class.small') classSmall = true;
    @HostBinding('class.medium') classMedium = true;
    @HostBinding('class.large') classLarge = true;
    @HostBinding('class.xlarge') classXLarge = true;
    @HostBinding('class.single') classSingle = true;
    @HostBinding('class.double') classDouble = true;
    @HostBinding('class.triple') classTriple = true;

    ngOnInit() {
        console.log('this.card', this.card);
        const cardSize = this.card.size.split('x');
        this.classSmall = cardSize[0] === '1';
        this.classMedium = cardSize[0] === '2';
        this.classLarge = cardSize[0] === '3';
        this.classXLarge = cardSize[0] === '4';
        this.classSingle = cardSize[1] === '1';
        this.classDouble = cardSize[1] === '2';
        this.classTriple = cardSize[1] === '3';
    }
}
