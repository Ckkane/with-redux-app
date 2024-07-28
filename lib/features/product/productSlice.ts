import { createAppSlice } from "@/lib/createAppSlice";
import { fetchData } from "./productAPI";
import { PayloadAction } from "@reduxjs/toolkit";


type State = {
    items: Array<Product>,
    status: string,
    twoPizzasToggle: boolean
}

const initialState: State = {
    items: [],
    status: 'idle',
    twoPizzasToggle: false
}

export const productSlice = createAppSlice({
  name: "product",

  initialState,
  reducers: (create) => ({

    switchToggle: create.reducer(
      (state, action: PayloadAction<boolean>) => {
        state.twoPizzasToggle = action.payload;
      },
    ),

    getData: create.asyncThunk(
      async () => {
        const response = await fetchData();
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
        selectStatus: (product) => product.status,
        getPizzasToggle: (product) => product.twoPizzasToggle
      },
})

export const { getData, switchToggle } = productSlice.actions;

export const { selectItems,selectStatus,getPizzasToggle } = productSlice.selectors;

// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());

//     if (currentValue % 2 === 1 || currentValue % 2 === -1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };
