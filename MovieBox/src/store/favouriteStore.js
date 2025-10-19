import { create } from "zustand";

export const useFavouriteStore = create((set) => ({
  favourites: [],

  addFavourite: (movie) =>
    set((state) => {
      if (state.favourites.find((m) => m.id === movie.id)) return state;
      return { favourites: [...state.favourites, movie] };
    }),

  removeFavourite: (id) =>
    set((state) => ({
      favourites: state.favourites.filter((m) => m.id !== id),
    })),
}));
