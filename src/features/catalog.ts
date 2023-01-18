import { createSlice } from "@reduxjs/toolkit";
import ELECTROKICK from "../assets/icons/electrokick.png";
import ELECTROSCOOTER from "../assets/icons/electroscooter.png";
import ELECTROCYCLE from "../assets/icons/electrocycle.png";
import VACUMCLEANER from "../assets/icons/vacumcleaner.png";
import WEIGHTS from "../assets/icons/weights.png";

interface objectTypes {
  id: number, 
  title: string, 
  image: string, 
  category: Array<{ title: string; names: Array<string> }>
}

const initialStateValue: Array<{ title: string; names: Array<string> }> = [
  {
    title: "Особенности",
    names: ["Внедорожный", "Городской", "Зимний", "С сиденьем", "Без сиденья"],
  },
  {
    title: "Для кого",
    names: ["Для детей и подростков", "Для взрослых", "Для пенсионеров"],
  }
];

export const data: Readonly<Array<objectTypes>> = [
  {
    id: 1,
    title: "Электросамокаты",
    image: ELECTROSCOOTER,
    category: [
      {
        title: "Особенности",
        names: [
          "Внедорожный",
          "Городской",
          "Зимний",
          "С сиденьем",
          "Без сиденья",
        ],
      },
      {
        title: "Для кого",
        names: ["Для детей и подростков", "Для взрослых", "Для пенсионеров"],
      },
    ],
  },
  {
    id: 2,
    title: "Электроскутеры",
    image: ELECTROKICK,
    category: [
      {
        title: "Особенности",
        names: [
          "Внедорожный",
          "Городской",
          "Зимний",
          "С сиденьем",
          "Без сиденья",
        ],
      },
      {
        title: "Для кого",
        names: ["Для детей и подростков", "Для взрослых", "Для пенсионеров"],
      },
    ],
  },
  {
    id: 3,
    title: "Электровелосипеды",
    image: ELECTROCYCLE,
    category: [
      {
        title: "Особенности",
        names: [
          "Внедорожный",
          "Городской",
          "Зимний",
          "С сиденьем",
          "Без сиденья",
        ],
      },
      {
        title: "Для кого",
        names: ["Для детей и подростков", "Для взрослых", "Для пенсионеров"],
      },
    ],
  },
  {
    id: 4,
    title: "Робот-пылесосы",
    image: VACUMCLEANER,
    category: [
      {
        title: "Особенности",
        names: [
          "Внедорожный",
          "Городской",
          "Зимний",
          "С сиденьем",
          "Без сиденья",
        ],
      },
      {
        title: "Для кого",
        names: ["Для детей и подростков", "Для взрослых", "Для пенсионеров"],
      },
    ],
  },
  {
    id: 5,
    title: "Весы",
    image: WEIGHTS,
    category: [
      {
        title: "Особенности",
        names: [
          "Внедорожный",
          "Городской",
          "Зимний",
          "С сиденьем",
          "Без сиденья",
        ],
      },
      {
        title: "Для кого",
        names: ["Для детей и подростков", "Для взрослых", "Для пенсионеров"],
      },
    ],
  },
];

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: { value: initialStateValue },

  reducers: {
    post: (state, action) => {
      return (state = {
        value: action.payload,
      });
    },
  },
});

export const { post } = catalogSlice.actions;
export default catalogSlice.reducer;
