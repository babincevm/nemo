import { ref } from 'vue';


import { IProduct } from '@/store/products-store/types';

import Data from './mockData';

export const useProductsStore = () => {

    const mockDataMap = Data.reduce(
        (acc, item) => {
            acc.set(item.id, item);
            return acc;
        },
        new Map<IProduct['id'], IProduct>()
    );

    const products = ref<Map<IProduct['id'], IProduct>>(mockDataMap);

    return {
        products,
    };
};
