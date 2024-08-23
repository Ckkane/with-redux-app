import { createAppSlice } from "@/lib/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";


type News = {
    title: string,
    description: string,
    image: string,
    date: number
}

type State = {
    news: Array<News>
}

const initialState: State = {
    news: []
}

export const newsSlice = createAppSlice({
  name: "newsStore",

  initialState,
  reducers: (create) => ({

        addNews: create.reducer(
        (state, action: PayloadAction<Array<News>>) => {
            state.news = action.payload;
        },
    ),
    }),
    
    selectors: {
        getNews: (product) => product.news
      },
})

export const { addNews} = newsSlice.actions;

export const { getNews } = newsSlice.selectors;
