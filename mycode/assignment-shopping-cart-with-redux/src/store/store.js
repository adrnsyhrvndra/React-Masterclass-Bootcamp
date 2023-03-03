import { configureStore } from "@reduxjs/toolkit";
import {cardReducer} from './cartSlice';

export const store = configureStore({

    reducer:{
        cartState:cardReducer,
    }

});
