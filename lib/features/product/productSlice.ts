import { createAppSlice } from "@/lib/createAppSlice";
// import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";


type Product = {
    items: string[];
}

const initialState: Product = {
    items: ["hello world"]
}


export const productSlice = createAppSlice({
  name: "product",

  initialState,
  reducers: (create) => ({
    addToList: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.items.push(action.payload)
      },
    )
    }),
    selectors: {
        selectItems: (product) => product.items
      },
})

export const { addToList } = productSlice.actions;

export const { selectItems } = productSlice.selectors;

// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());

//     if (currentValue % 2 === 1 || currentValue % 2 === -1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };
