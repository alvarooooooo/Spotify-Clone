import { allPlaylists, songs as allSongs } from "@/lib/data";

export async function GET({ params, request }) {
  // get the id from the url search params
  const { url } = request
  const urlObject = new URL(url)
  const songId = urlObject.searchParams.get('songId')
  const albumId = urlObject.searchParams.get('albumId')

  
  const playlist = allPlaylists.find((playlist) => playlist.id === albumId)
  const songs = allSongs.filter(song => song.albumId === playlist?.albumId)
  const song = allSongs.filter(song => song.id === Number(songId) && song.albumId === Number(albumId))
  
  return new Response(JSON.stringify({ playlist, songs, song }), {
    headers: { "content-type": "application/json" }
  })

}