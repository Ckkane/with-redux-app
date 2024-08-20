import { createAppSlice } from "@/lib/createAppSlice";
import { fetchData } from "./productAPI";
import { PayloadAction } from "@reduxjs/toolkit";


type State = {
    items: Array<Product>,
    filtredItems: Array<Product>,
    status: string,
    twoPizzasToggle: boolean
}

type filterByPrice = {
  from: number,
  to: number
}

const initialState: State = {
    items: [],
    filtredItems:[],
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

    filterItems: create.reducer(
      (state, action: PayloadAction<filterByPrice>) => {
        state.filtredItems = [...state.items.filter((item)=> item.price >= action.payload.from && item.price <= action.payload.to)]
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
        selectFiltredItems: (product) => product.filtredItems,
        selectStatus: (product) => product.status,
        getPizzasToggle: (product) => product.twoPizzasToggle
      },
})

export const { getData, switchToggle, filterItems } = productSlice.actions;

export const { selectItems,selectStatus,getPizzasToggle,selectFiltredItems } = productSlice.selectors;

// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());

//     if (currentValue % 2 === 1 || currentValue % 2 === -1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };
