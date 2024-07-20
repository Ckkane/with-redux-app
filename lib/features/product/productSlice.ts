import { createAppSlice } from "@/lib/createAppSlice";
import { fetchData } from "./productAPI";


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
