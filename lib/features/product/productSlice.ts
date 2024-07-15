import { createAppSlice } from "@/lib/createAppSlice";
// import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "./productAPI";
import { stat } from "fs";


type State = {
    items: Array<Product>,
    status: string
}

const initialState: State = {
    items: [],
    status: 'idle'
}


export const productSlice = createAppSlice({
  name: "product",

  initialState,
  reducers: (create) => ({
    // addToList: create.reducer(
    //   (state, action: PayloadAction<Array<Product>>) => {
    //     state.items = action.payload;
    //   },
    // ),

    getData: create.asyncThunk(
      async () => {
        const response = await fetchData();
        // The value we return becomes the `fulfilled` action payload
        return response;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle"; 

          state.items = [...action.payload]

        },
        rejected: (state) => {
          state.status = "failed";
        },
      })
    }),
    
    selectors: {
        selectItems: (product) => product.items,
        selectStatus: (product) => product.status
      },
})

export const { getData } = productSlice.actions;

export const { selectItems,selectStatus } = productSlice.selectors;

// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());

//     if (currentValue % 2 === 1 || currentValue % 2 === -1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };
