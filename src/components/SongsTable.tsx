import { TimeIcon } from '@/icons/Time';
import { type Song } from '@/lib/data';
import { SongsTablePlay } from './SongsTablePlay';

interface Props {
  songs: Song[];
}

export const SongsTable = ({ songs }: Props) => {
  return (
    <table className="min-w-full table-auto divide-y divide-gray-500/20 text-left">
      <thead className="">
        <tr className="text-secondary text-sm">
          <th className="px-4 py-2 font-[400]">#</th>
          <th className="px-4 py-2 font-[400]">Title</th>
          <th className="px-4 py-2 font-[400]">Plays</th>
          <th className="px-4 py-2 font-[400]">
            <TimeIcon />
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="h-[16px]"></tr>
        {songs.map((song, idx) => {
          return (
            <tr
              key={`${song.albumId}-${song.id}`}
              className="text-secondary group overflow-hidden transition duration-300 hover:bg-white/10"
            >
              <td className="w-5 rounded-tl-lg rounded-bl-lg px-4 py-2">
                <div className="relative">
                  <span className="flex h-4 w-4 items-center justify-center group-hover:opacity-0">
                    {idx + 1}
                  </span>
                  <div className="absolute top-0 h-4 w-4 opacity-0 group-hover:opacity-100">
                    <SongsTablePlay albumId={song.albumId} songId={song.id} />
                  </div>
                </div>
              </td>
              <td className="flex gap-3 px-4 py-2">
                <picture className="flex items-center">
                  <img
                    src={song.image}
                    alt={song.title}
                    className="h-10 w-10 rounded-sm"
                  />
                </picture>
                <div className="flex flex-col">
                  <h3 className="text-white">{song.title}</h3>
                  <span>{song.artists.join(', ')}</span>
                </div>
              </td>
              <td className="px-4 py-2">1,000,000</td>
              <td className="rounded-tr-lg rounded-br-lg px-4 py-2">
                {song.duration}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
