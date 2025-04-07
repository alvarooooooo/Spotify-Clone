import { Pause, Play } from '@/icons/PlayerIcons';
import { usePlayerStore } from '@/store/playerStore';

export function CardPlayButton({ id, size = 'small' }) {
  const { currentSong, isPlaying, setIsPlaying, setCurrentSong } =
    usePlayerStore((state) => state);

  const isPlayingPlaylist = isPlaying && currentSong?.playlist.id === id;

  const handleClick = async () => {
    // PLAYING -> PAUSE
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }

    // PAUSE -> PLAY

    /* promises
    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then(res => res.json())
      .then(data => {
        const { songs, playlist } = data
        setIsPlaying(true)
        setCurrentSong({ songs, playlist, song: songs[0] })

      })
    */

    // async/await
    const res = await fetch(`/api/get-info-playlist.json?id=${id}`);
    const data = await res.json();
    const { songs, playlist } = data;
    setIsPlaying(true);
    setCurrentSong({ songs, playlist, song: songs[0] });
  };

  const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5';

  return (
    <button
      onClick={handleClick}
      className="card-play-button cursor-pointer rounded-full bg-green-500 p-4 text-black transition hover:scale-105 hover:bg-green-400"
    >
      {isPlayingPlaylist ? (
        <Pause className={iconClassName} />
      ) : (
        <Play className={iconClassName} />
      )}
    </button>
  );
}
