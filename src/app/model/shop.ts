import {BaseModel} from "./base-model"

export class Shop extends BaseModel{
    name !: string;
    description !: string
    location !: string;
    openingDate !: Date;

}