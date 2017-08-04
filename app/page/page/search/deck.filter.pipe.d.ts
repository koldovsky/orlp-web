import { PipeTransform } from "@angular/core";
import { DeckPublic } from "../../../dto/DeckDTO/public.deck.DTO";
export declare class DeckFilterPipe implements PipeTransform {
    transform(value: DeckPublic[], filterBy: string): DeckPublic[];
}
