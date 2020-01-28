import { Category } from "./Category";
import { Geometry } from "./Geometry";
import { Source } from "./Source";

export interface NaturalEvent {
    id: string;
    title: string;
    description: string;
    link: string;
    closed: Date;
    categories: Category[];
    sources: Source[];
    geometries: Geometry[];
}
