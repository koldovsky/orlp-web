import { PipeTransform } from "@angular/core";
import { DeckPublic } from "../../classes/DeckDTO/public.deck.DTO";
export declare class NavbarFilterPipe implements PipeTransform {
    transform(value: DeckPublic[], filterBy: string): DeckPublic[];
}
