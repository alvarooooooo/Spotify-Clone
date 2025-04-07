import { colors } from "./colors";

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: "1",
    albumId: 1,
    title: "Liked Songs",
    color: colors.blue,
    cover: "https://misc.scdn.co/liked-songs/liked-songs-300.jpg",
    artists: [],

  },
  {
    id: "2",
    albumId: 2,
    title: "ASTROWORLD",
    color: colors.blue,
    cover: "https://i.scdn.co/image/ab67616d00001e02072e9faef2ef7b6db63834a3",
    artists: ["Travis Scott"]
  },
  {
    id: "3",
    albumId: 3,
    title: "Graduation",
    color: colors.pink,
    cover:
      "https://i.scdn.co/image/ab67616d00001e0226f7f19c7f0381e56156c94a",
    artists: ["Kanye West"],
  },
  {
    id: "4",
    albumId: 4,
    title: "Nevermind (Deluxe Edition)",
    color: colors.blue,
    cover: "https://i.scdn.co/image/ab67616d00001e0228a90d00a2819504364880e4",
    artists: ["Nirvana"]
  },
  {
    id: "5",
    albumId: 5,
    title: "Currents",
    color: colors.purple,
    cover: "https://i.scdn.co/image/ab67616d00001e029e1cfc756886ac782e363d79",
    artists: ["Tame Impala"]
  },
  {
    id: "6",
    albumId: 6,
    title: "Californication",
    color: colors.blue,
    cover:
      "https://i.scdn.co/image/ab67616d00001e0294d08ab63e57b0cae74e8595",
    artists: ["Red Hot Chili Peppers"],
  }
]

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}));

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}));

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
];

export const songs: Song[] = [
  {
    id: 1,
    albumId: 2,
    title: "STARGAZING",
    image: "https://i.scdn.co/image/ab67616d00001e02072e9faef2ef7b6db63834a3",
    artists: ["Travis Scott"],
    album: "ASTROWORLD",
    duration: "4:30"
  },
  {
    id: 2,
    albumId: 2,
    title: "NO BYSTANDERS",
    image: "https://i.scdn.co/image/ab67616d00001e02072e9faef2ef7b6db63834a3",
    artists: ["Travis Scott"],
    album: "ASTROWORLD",
    duration: "3:38"
  },
  {
    id: 3,
    albumId: 2,
    title: "SKELETONS",
    image: "https://i.scdn.co/image/ab67616d00001e02072e9faef2ef7b6db63834a3",
    artists: ["Travis Scott"],
    album: "ASTROWORLD",
    duration: "2:25"
  },
  {
    id: 4,
    albumId: 2,
    title: "ASTROTHUNDER",
    image: "https://i.scdn.co/image/ab67616d00001e02072e9faef2ef7b6db63834a3",
    artists: ["Travis Scott"],
    album: "ASTROWORLD",
    duration: "2:22"
  },
  {
    id: 5,
    albumId: 2,
    title: "CAN'T SAY",
    image: "https://i.scdn.co/image/ab67616d00001e02072e9faef2ef7b6db63834a3",
    artists: ["Travis Scott"],
    album: "ASTROWORLD",
    duration: "3:18"
  },
  {
    id: 1,
    albumId: 2,
    title: "BUTTERFLY EFFECT",
    image: "https://i.scdn.co/image/ab67616d00001e02072e9faef2ef7b6db63834a3",
    artists: ["Travis Scott"],
    album: "ASTROWORLD",
    duration: "3:10"
  },
  {
    id: 1,
    albumId: 3,
    title: "Good Morning",
    image: `https://i.scdn.co/image/ab67616d00001e0226f7f19c7f0381e56156c94a`,
    artists: ["Kanye West"],
    album: "Graduation",
    duration: "3:15"
  },
  {
    id: 2,
    albumId: 3,
    title: "Champion",
    image: `https://i.scdn.co/image/ab67616d00001e0226f7f19c7f0381e56156c94a`,
    artists: ["Kanye West"],
    album: "Graduation",
    duration: "2:47"
  },
  {
    id: 3,
    albumId: 3,
    title: "Stronger",
    image: `https://i.scdn.co/image/ab67616d00001e0226f7f19c7f0381e56156c94a`,
    artists: ["Kanye West"],
    album: "Graduation",
    duration: "5:11"
  },
  {
    id: 4,
    albumId: 3,
    title: "I Wonder",
    image: `https://i.scdn.co/image/ab67616d00001e0226f7f19c7f0381e56156c94a`,
    artists: ["Kanye West"],
    album: "Graduation",
    duration: "4:03"
  },
  {
    id: 5,
    albumId: 3,
    title: "Can't Tell Me Nothing",
    image: `https://i.scdn.co/image/ab67616d00001e0226f7f19c7f0381e56156c94a`,
    artists: ["Kanye West"],
    album: "Graduation",
    duration: "4:31"
  },
  {
    id: 1,
    albumId: 4,
    title: "In Bloom",
    image: `https://i.scdn.co/image/ab67616d00001e0228a90d00a2819504364880e4`,
    artists: ["Nirvana"],
    album: "Nevermind (Deluxe Edition)",
    duration: "4:15"
  },
  {
    id: 2,
    albumId: 4,
    title: "Come as you are",
    image: `https://i.scdn.co/image/ab67616d00001e0228a90d00a2819504364880e4`,
    artists: ["Nirvana"],
    album: "Nevermind (Deluxe Edition)",
    duration: "3:38"
  },
  {
    id: 3,
    albumId: 4,
    title: "Breed",
    image: `https://i.scdn.co/image/ab67616d00001e0228a90d00a2819504364880e4`,
    artists: ["Nirvana"],
    album: "Nevermind (Deluxe Edition)",
    duration: "3:04"
  },
  {
    id: 4,
    albumId: 4,
    title: "Lithium",
    image: `https://i.scdn.co/image/ab67616d00001e0228a90d00a2819504364880e4`,
    artists: ["Nirvana"],
    album: "Nevermind (Deluxe Edition)",
    duration: "4:17"
  },
  {
    id: 5,
    albumId: 4,
    title: "Drain You",
    image: `https://i.scdn.co/image/ab67616d00001e0228a90d00a2819504364880e4`,
    artists: ["Nirvana"],
    album: "Nevermind (Deluxe Edition)",
    duration: "3:43"
  },
  {
    id: 6,
    albumId: 4,
    title: "Stay Away",
    image: `https://i.scdn.co/image/ab67616d00001e0228a90d00a2819504364880e4`,
    artists: ["Nirvana"],
    album: "Nevermind (Deluxe Edition)",
    duration: "3:31"
  },
  {
    id: 1,
    albumId: 5,
    title: "The Moment",
    image: "https://i.scdn.co/image/ab67616d00001e029e1cfc756886ac782e363d79",
    artists: ["Tame Impala"],
    album: "Currents",
    duration: "4:15"
  },
  {
    id: 2,
    albumId: 5,
    title: "Eventually",
    image: "https://i.scdn.co/image/ab67616d00001e029e1cfc756886ac782e363d79",
    artists: ["Tame Impala"],
    album: "Currents",
    duration: "5:18"
  },
  {
    id: 3,
    albumId: 5,
    title: "Disciples",
    image: "https://i.scdn.co/image/ab67616d00001e029e1cfc756886ac782e363d79",
    artists: ["Tame Impala"],
    album: "Currents",
    duration: "1:48"
  },
  {
    id: 4,
    albumId: 5,
    title: "Reality In Motion",
    image: "https://i.scdn.co/image/ab67616d00001e029e1cfc756886ac782e363d79",
    artists: ["Tame Impala"],
    album: "Currents",
    duration: "4:12"
  },
  {
    id: 5,
    albumId: 5,
    title: "Love/Paranoia",
    image: "https://i.scdn.co/image/ab67616d00001e029e1cfc756886ac782e363d79",
    artists: ["Tame Impala"],
    album: "Currents",
    duration: "3:05"
  },
  {
    id: 1,
    albumId: 6,
    title: "Around the World",
    image:
      "https://i.scdn.co/image/ab67616d00001e0294d08ab63e57b0cae74e8595",
    artists: ["Red Hot Chili Peppers"],
    album: "Californication",
    duration: "3:58"
  },
  {
    id: 2,
    albumId: 6,
    title: "Parallel Universe",
    image:
      "https://i.scdn.co/image/ab67616d00001e0294d08ab63e57b0cae74e8595",
    artists: ["Red Hot Chili Peppers"],
    album: "Californication",
    duration: "4:29"
  },
  {
    id: 3,
    albumId: 6,
    title: "Scar Tissue",
    image:
      "https://i.scdn.co/image/ab67616d00001e0294d08ab63e57b0cae74e8595",
    artists: ["Red Hot Chili Peppers"],
    album: "Californication",
    duration: "3:35"
  },
  {
    id: 4,
    albumId: 6,
    title: "OtherSIde",
    image:
      "https://i.scdn.co/image/ab67616d00001e0294d08ab63e57b0cae74e8595",
    artists: ["Red Hot Chili Peppers"],
    album: "Californication",
    duration: "4:15"
  },
  {
    id: 5,
    albumId: 6,
    title: "Californication",
    image:
      "https://i.scdn.co/image/ab67616d00001e0294d08ab63e57b0cae74e8595",
    artists: ["Red Hot Chili Peppers"],
    album: "Californication",
    duration: "5:29"
  }

]