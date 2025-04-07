import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  currentSong: { playlist: null, song: null, songs: [] },
  volume: 1,
  setVolume: (volume) => set({ volume }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentSong: (currentSong) => set({ currentSong }),
}))