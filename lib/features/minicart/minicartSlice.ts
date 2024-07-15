import { createAppSlice } from "@/lib/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";


type Minicart = {
    toggle: boolean;
    items: Array<Product>;
}

const initialState: Minicart = {
    toggle: true,
    items: []
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
          return;
        }

        state.items = [...state.items, action.payload]
      },
    )
    }),
    selectors: {
        getToggle: (minicart) => minicart.toggle,
        getCartitems: (minicart) => minicart.items
      },
})

export const { switchToggle, addToCart } = minicartSlice.actions;

export const { getToggle, getCartitems } = minicartSlice.selectors;

// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());

//     if (currentValue % 2 === 1 || currentValue % 2 === -1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };
