export type TProductAttribute = IColorAttribute | ISizeAttribute | IWeightAttribute

export interface IProduct {
    id: number;
    name: string;
    attributes: TProductAttribute[];
}

export interface IColorAttribute {
    code: string;
    name: string;
    color: string;
}

export interface ISizeAttribute {
    code: string;
    name: string;
    size: {
        width: number;
        height: number;
    }
}

export interface IWeightAttribute {
    code: string;
    name: string;
    weight: number
}

export const isIColor = (attr: TProductAttribute): attr is IColorAttribute => 'color' in attr;
export const isISize = (attr: TProductAttribute): attr is ISizeAttribute => 'size' in attr;
export const isIWeight = (attr: TProductAttribute): attr is IWeightAttribute => 'weight' in attr;
