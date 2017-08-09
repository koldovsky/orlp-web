import {Pipe, PipeTransform} from '@angular/core';
import {DeckPublic} from '../../../dto/DeckDTO/public.deck.DTO';

@Pipe({
    name: 'deckFilter'
})

export class DeckFilterPipe implements PipeTransform {
    transform(value: DeckPublic[], filterBy: string): DeckPublic[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((deck: DeckPublic) =>
            deck.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
