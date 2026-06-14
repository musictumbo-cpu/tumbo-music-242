export const siteConfig = {
  artist: "Tumbo Music 242",
  tagline: "Music from Nassau. Stories from real life.",
  location: "Nassau, Bahamas",
  email: "musictumbo@gmail.com",
  socials: {
    spotify: "SPOTIFY_ARTIST_LINK_HERE",
    youtube: "YOUTUBE_CHANNEL_LINK_HERE",
    instagram: "INSTAGRAM_LINK_HERE",
    facebook: "https://www.facebook.com/TumboMusic242",
    appleMusic: "APPLE_MUSIC_LINK_HERE",
  },
}

export interface Song {
  id: string
  title: string
  description: string
  status: string
  spotify: string
  appleMusic: string
  youtube: string
  youtubeVideo: string
  coverArt: string
  lyricsNote: string
}

export const songs: Song[] = [
  {
    id: "nassau-girls",
    title: "Nassau Girls the Sweetest",
    description: "A love letter to Bahamian women — celebrating their beauty, strength, and island spirit. Tumbo's breakout anthem, straight from Nassau.",
    status: "released",
    spotify: "SPOTIFY_NASSAU_GIRLS_LINK_HERE",
    appleMusic: "APPLE_MUSIC_NASSAU_GIRLS_LINK_HERE",
    youtube: "YOUTUBE_NASSAU_GIRLS_SONG_LINK_HERE",
    youtubeVideo: "NASSAU_GIRLS_YOUTUBE_VIDEO_ID_HERE",
    coverArt: "/images/nassau-girls-cover.jpg",
    lyricsNote: "Nassau Girls the Sweetest — available on Spotify and YouTube.",
  },
  {
    id: "she-bumped-into-me",
    title: "She Bumped Into Me",
    description: "A smooth R&B story about an unexpected encounter that changes everything. Warm Nassau vibes with real emotion.",
    status: "released",
    spotify: "SPOTIFY_SHE_BUMPED_LINK_HERE",
    appleMusic: "APPLE_MUSIC_SHE_BUMPED_LINK_HERE",
    youtube: "YOUTUBE_SHE_BUMPED_SONG_LINK_HERE",
    youtubeVideo: "",
    coverArt: "/images/she-bumped-cover.jpg",
    lyricsNote: "She Bumped Into Me — out now on all platforms.",
  },
  {
    id: "poor-and-proud",
    title: "Poor and Proud",
    description: "Coming soon. A bold anthem for anyone who built something from nothing — Nassau-raised, real-life inspired.",
    status: "coming-soon",
    spotify: "",
    appleMusic: "",
    youtube: "",
    youtubeVideo: "",
    coverArt: "/images/poor-and-proud-cover.jpg",
    lyricsNote: "Poor and Proud — dropping soon. Music video in production.",
  },
]