import { EAttributeTypes, IAttributeOption } from '@components/products/v-product/types';
import { IColorAttribute, ISizeAttribute, IWeightAttribute } from '@/store/products-store/types';


export const ATTRIBUTE_OPTIONS: IAttributeOption[] = [
    {
        id: EAttributeTypes.TYPE_COLOR,
        title: 'color'
    },
    {
        id: EAttributeTypes.TYPE_SIZE,
        title: 'size'
    },
    {
        id: EAttributeTypes.TYPE_WEIGHT,
        title: 'weight'
    }
];


export const DEFAULT_COLOR_ATTRIBUTE: IColorAttribute = {
    code: 'new code',
    name: 'new field',
    color: 'color'
};

export const DEFAULT_SIZE_ATTRIBUTE: ISizeAttribute = {
    code: 'new code',
    name: 'new field',
    size: {
        width: 0,
        height: 0
    }
};

export const DEFAULT_WEIGHT_ATTRIBUTE: IWeightAttribute = {
    code: 'new code',
    name: 'new field',
    weight: 0
};
