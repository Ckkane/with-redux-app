import { createAppSlice } from "@/lib/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";


type Minicart = {
    toggle: boolean;
    items: Array<Product>;
    totalPrice: number;
    totalItems: number;
}

const initialState: Minicart = {
    toggle: true,
    items: [],
    totalPrice: 0,
    totalItems: 0,
}


const updateCart = (state: Minicart) =>{
  state.totalItems = state.items.reduce((prev,curr)=> prev + curr.count, 0)
  state.totalPrice = state.items.reduce((prev,curr)=> prev + curr.price * curr.count, 0)
  localStorage.setItem('mini-cart-items', JSON.stringify(state.items))
}

export const minicartSlice = createAppSlice({
  name: "minicart",

  initialState,
  reducers: (create) => ({
    switchToggle: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.toggle = !state.toggle;
      },
    ),
    addToCart: create.reducer(
      (state, action: PayloadAction<Product>) => {

        if(state.items.find((item)=> item.id === action.payload.id)){
          state.items.find((item)=> item.id === action.payload.id ? item.count++ : null)
          localStorage.setItem('mini-cart-items', JSON.stringify(state.items))
          return;
        }

        state.items = [...state.items, action.payload]
        updateCart(state)
      },
    ),
    updateState: create.reducer(
      (state) => {
        state.items = [...JSON.parse(localStorage.getItem('mini-cart-items'))]
        updateCart(state);
      },
    ),
    minusItem: create.reducer(
      (state, action: PayloadAction<Product>) => {

        state.items.find((item)=> item.id === action.payload.id ? item.count-- : null)

        state.items = [...state.items.filter((item)=> item.count > 0)]
        updateCart(state)
      },
    ),
    plusItem: create.reducer(
      (state, action: PayloadAction<Product>) => {

        state.items.find((item)=> item.id === action.payload.id ? item.count++ : null)
        updateCart(state)
      },
    ),
    deleteItem: create.reducer(
      (state, action: PayloadAction<Product>) => {

        state.items = state.items.filter((item) => item.id !== action.payload.id )

        updateCart(state)
      },
    ),
    }),
    selectors: {
        getToggle: (minicart) => minicart.toggle,
        getCartitems: (minicart) => minicart.items,
        getTotalPrice: (minicart) => minicart.totalPrice,
        getTotalItems: (minicart) => minicart.totalItems
      },
})

export const { switchToggle, addToCart, updateState, minusItem, plusItem, deleteItem } = minicartSlice.actions;

export const { getToggle, getCartitems, getTotalPrice, getTotalItems } = minicartSlice.selectors;

// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());

//     if (currentValue % 2 === 1 || currentValue % 2 === -1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };
