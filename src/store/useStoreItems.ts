import { create } from "zustand";

interface IUseStoreItems {
    item : string,
    setItem : (i : string) => void 
}

export const useStoreItems = create<IUseStoreItems>((set) => ({
    item : 'aboutMe',

    setItem : (i) => set({item : i})


}))