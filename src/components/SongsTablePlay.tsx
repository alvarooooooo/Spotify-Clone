import { Pause, Play } from '@/icons/PlayerIcons';
import { usePlayerStore } from '@/store/playerStore';

interface Props {
  songId: number;
  albumId: number;
}
export const SongsTablePlay = ({ albumId, songId }: Props) => {
  const { currentSong, isPlaying, setIsPlaying, setCurrentSong } =
    usePlayerStore((state) => state);

  const isPlayingSong =
    isPlaying &&
    Number(currentSong?.playlist.id) == albumId &&
    Number(currentSong?.song.id) === songId;

  const handleClick = async () => {
    if (isPlayingSong) {
      setIsPlaying(false);
      return;
    }
    const res = await fetch(
      `/api/get-info-song.json?songId=${songId}&albumId=${albumId}`
    );
    const data = await res.json();
    const { songs, playlist, song } = data;

    setIsPlaying(true);
    setCurrentSong({ songs, playlist, song: song[0] });
  };

  return (
    <button className="text-white" onClick={handleClick}>
      {isPlayingSong ? <Pause /> : <Play />}
    </button>
  );
};
