import type { ImageMetadata } from 'astro';
import ss1 from '../assets/witchs-binder/ss1.jpg';
import ss2 from '../assets/witchs-binder/ss2.jpg';
import ss3 from '../assets/witchs-binder/ss3.jpg';
import ss4 from '../assets/witchs-binder/ss4.jpg';
import ss5 from '../assets/witchs-binder/ss5.jpg';
import ss6 from '../assets/witchs-binder/ss6.jpg';
import ss7 from '../assets/witchs-binder/ss7.jpg';
import ss8 from '../assets/witchs-binder/ss8.jpg';
import ss9 from '../assets/witchs-binder/ss9.jpg';
import wbTitle from '../assets/witchs-binder/title.png';
import wbCapsule from '../assets/witchs-binder/capsule-main.png';
import pc1 from '../assets/pass-the-collage/ss1.jpg';
import pc2 from '../assets/pass-the-collage/ss2.jpg';
import pc3 from '../assets/pass-the-collage/ss3.jpg';
import pc4 from '../assets/pass-the-collage/ss4.jpg';
import pc5 from '../assets/pass-the-collage/ss5.jpg';
import pc6 from '../assets/pass-the-collage/ss6.jpg';
import pcLogo from '../assets/pass-the-collage/logo.png';
import pcCapsule from '../assets/pass-the-collage/capsule-main.png';

export interface Game {
  slug: string;
  name: string;
  title: ImageMetadata;
  capsule: ImageMetadata; // Steam main capsule, used on the home page card
  short: string;
  status: string;
  platforms: string[]; // leave empty to hide
  steamUrl?: string; // leave out until the Steam page is live
  demoUrl?: string;
  trailer?: { src: string; poster: ImageMetadata };
  screenshots: { img: ImageMetadata; full: string; alt: string }[];
}

const wbShots: [ImageMetadata, string][] = [
  [ss1, 'The witch in her study, about to tidy her library with one little spell'],
  [ss2, 'Hundreds of scattered pages covering the study floor'],
  [ss3, 'Pages sorted into piles on the floor, with finished books nearby'],
  [ss4, 'The worktable, with pages being placed in order before binding'],
  [ss5, 'Reading a page from a real historical book, with an engraving'],
  [ss6, 'Binding The Egyptian Book of the Dead by pulling the cloth down its spine'],
  [ss7, 'Examining a faded page through the magnifying glass'],
  [ss8, 'The bookcase, with bound books, a skull, a crystal ball and a candle'],
  [ss9, 'The accessibility menu with interface size, font, contrast and motion options'],
];

const pcShots: [ImageMetadata, string][] = [
  [pc1, 'The main menu, with museum cut-outs scattered across a wooden desk'],
  [pc2, 'Making a collage from the Plants drawer: a statue in a landscape with a line of poetry'],
  [pc3, 'The People drawer next to a collage of a dancer in an old parlour'],
  [pc4, 'A crane, the moon and red flowers on a patterned textile, from the Animals drawer'],
  [pc5, 'The info card for a hooked rug with stars and a crescent, from the Smithsonian American Art Museum'],
  [pc6, 'The mailbox, where you choose your envelope and seal and send out a theme'],
];

export const games: Game[] = [
  {
    slug: 'witchs-binder',
    name: "Witch's Binder",
    title: wbTitle,
    capsule: wbCapsule,
    short:
      'A spell gone wrong has scattered the pages of forty books across the room. Sort them by paper, ink and lettering, look for clues, and bind every book back together in this relaxing game. Every page comes from a real book!',
    status: 'Coming soon · Demo out now',
    platforms: ['Windows', 'macOS'],
    steamUrl: 'https://store.steampowered.com/app/5558400/',
    demoUrl: 'https://store.steampowered.com/app/5558420/',
    trailer: { src: '/video/witchs-binder-trailer.mp4', poster: ss1 },
    screenshots: wbShots.map(([img, alt], i) => ({
      img,
      alt,
      full: `/press/witchs-binder/screenshot-${i + 1}.jpg`,
    })),
  },
  {
    slug: 'pass-the-collage',
    name: 'Pass the Collage',
    title: pcLogo,
    capsule: pcCapsule,
    short:
      'A quiet collage game made from real museum objects. Cut, layer and recolor hundreds of pieces from the Smithsonian Open Access collections, make something new every day, and trade collages with strangers by letter.',
    status: 'Coming soon',
    platforms: [],
    screenshots: pcShots.map(([img, alt], i) => ({
      img,
      alt,
      full: `/press/pass-the-collage/screenshot-${i + 1}.jpg`,
    })),
  },
];
