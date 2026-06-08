# Tumbo Music 242 Website

A clean, responsive Next.js artist website for Tumbo Music 242, built for easy deployment on Vercel's free Hobby plan.

## What's Included

- Home, Music, Videos, About, Contact / Booking, and EPK pages
- Reusable React components: Navbar, Footer, MusicCard, VideoEmbed, SocialLinks, EmailSignupPlaceholder, SectionHeader
- Tailwind CSS styling
- Placeholder streaming links, social links, cover art, press photos, video embeds, and downloadable assets
- Comments in the code showing where to replace links, photos, song details, and embed URLs

## 1. Install Dependencies

```bash
npm install
```

## 2. Run Locally

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 3. Push to GitHub

Create a new GitHub repository, then run:

```bash
git init
git add .
git commit -m "Create Tumbo Music 242 website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL_HERE
git push -u origin main
```

## 4. Import Project Into Vercel

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Choose the Tumbo Music 242 repository
5. Keep the default Next.js settings

## 5. Deploy on the Free Hobby Plan

Vercel should detect Next.js automatically. Click "Deploy". This site does not require paid APIs, a backend database, or server setup.

## 6. Replace Placeholder Links and Images

Update placeholder values in:

```text
data/site.ts
```

Replace these values when real links are ready:

```text
SPOTIFY_LINK_HERE
YOUTUBE_LINK_HERE
APPLE_MUSIC_LINK_HERE
INSTAGRAM_LINK_HERE
FACEBOOK_LINK_HERE
DISTROKID_HYPERFOLLOW_LINK_HERE
YOUTUBE_EMBED_LINK_HERE
DOWNLOAD_ASSETS_LINK_HERE
```

Add real images to:

```text
public/images
```

Suggested files:

```text
artist-hero.jpg
poor-and-proud-cover.jpg
she-bumped-into-me-cover.jpg
press-photo-1.jpg
press-photo-2.jpg
press-photo-3.jpg
```

Then replace the placeholder cover/photo blocks in the components and pages with real image tags.

## Deployment Notes

- Works with Vercel's free Hobby plan
- No paid APIs
- No database
- Lightweight static-friendly pages
- Real links and images can be added later without changing the site structure
