import { User } from '@/db/dummy';
import { create } from 'zustand' //this func allows to create some global state

type SelectedUserState = {
    selectedUser: User | null;
    setSelectedUser: (user:User | null) => void;
}

export const useSelectedUser = create<SelectedUserState>((set) => ({
  selectedUser: null,
  setSelectedUser: (user:User | null) => set({ selectedUser:user}),
}));