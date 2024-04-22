import { IOption } from '@ui/v-select/types';

export enum EAttributeTypes {
    TYPE_COLOR,
    TYPE_SIZE,
    TYPE_WEIGHT
}

export interface IAttributeOption extends IOption {
    id: EAttributeTypes;
}
