import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import Slideshow from "@/components/Slideshow.jsx";
import JoyGallery from "@/components/JoyGallery.jsx";
import heroBg from "@/assets/hero-bg.jpg";
import porsche1 from "@/assets/porsche-1.jpg";
import porsche2 from "@/assets/porsche-2.jpg";
import porsche3 from "@/assets/porsche-3.jpg";
import porsche4 from "@/assets/porsche-4.jpg";
import porsche5 from "@/assets/porsche-5.jpg";
import lfc1 from "@/assets/lfc-1.jpg";
import lfc2 from "@/assets/lfc-2.jpg";
import lfc3 from "@/assets/lfc-3.jpg";
import liverpool from "@/assets/liverpool.jpg";
import lfcWallpaper from "@/assets/L_F.C_.jpg";
import salahWallpaper from "@/assets/Mo Salah _ Liverpool _ Champions League HD Wallpaper.jpg";
import birthdaySong from "@/assets/All Night.mp3";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday Joy — Porsches, Anfield Red & You" },
      {
        name: "description",
        content:
          "A birthday page for Joy: Porsche dream cars, Liverpool red passion, and a gallery of her best moments.",
      },
      { property: "og:title", content: "Happy Birthday Joy" },
      {
        property: "og:description",
        content: "Porsche dreams, Liverpool red and a gallery made just for Joy's birthday.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const porscheSlides = [
  { src: porsche1, alt: "Silver Porsche on a rainy neon street", caption: "Night drives, city lights 🌃" },
  { src: porsche2, alt: "Red Porsche on a coastal road", caption: "Coast road, top down, no rush 🏁" },
  { src: porsche3, alt: "Classic vintage Porsche", caption: "Classic taste — just like you 🤍" },
  { src: porsche4, alt: "Porsche sports car", caption: "Every angle looks good 🏎️" },
  { src: porsche5, alt: "Porsche performance car", caption: "Made for the fast lane" },
];

const lfcSlides = [
  { src: lfc1, alt: "Red scarves raised in a packed stadium", caption: "You'll Never Walk Alone ❤️" },
  { src: lfc2, alt: "Stadium floodlights at dusk", caption: "Matchday nights under the lights" },
  { src: lfc3, alt: "Red scarf and boots on grass", caption: "Red till the very end" },
  { src: liverpool, alt: "Liverpool football scene", caption: "Liverpool in your heart" },
  { src: lfcWallpaper, alt: "Liverpool Football Club wallpaper", caption: "The pride of Anfield" },
  { src: salahWallpaper, alt: "Mohamed Salah celebrating for Liverpool", caption: "Champions League nights" },
];

function Index() {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.play().then(() => setMusicPlaying(true)).catch(() => setMusicPlaying(false));
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().then(() => setMusicPlaying(true));
    } else {
      audio.pause();
      setMusicPlaying(false);
    }
  };

  return (
    <main className="min-h-screen">
      <audio ref={audioRef} src={birthdaySong} loop preload="auto" />
      <button
        type="button"
        onClick={toggleMusic}
        aria-label={musicPlaying ? "Pause birthday music" : "Play birthday music"}
        className="fixed right-4 top-4 z-20 rounded-full border border-accent bg-background/80 px-4 py-2 text-sm font-semibold text-accent backdrop-blur transition hover:bg-accent hover:text-accent-foreground"
      >
        {musicPlaying ? "♫ Music on" : "♫ Play music"}
      </button>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:py-28">
          <p className="animate-float-up text-sm uppercase tracking-[0.35em] text-accent">
            Today we celebrate
          </p>
          <h1 className="animate-float-up mt-4 text-6xl leading-none text-gold sm:text-8xl">
            Happy Birthday Joy
          </h1>
          <p className="animate-float-up mt-5 text-base text-muted-foreground sm:text-lg">
            Fast cars, red scarves and a whole lot of love. Here&apos;s to another lap around the
            sun — may it be your best one yet.
          </p>
          <div className="animate-float-up mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#porsche"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Porsche mode 🏎️
            </a>
            <a
              href="#liverpool"
              className="rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-accent-foreground"
            >
              Anfield mode ❤️
            </a>
          </div>
        </div>
      </section>

      {/* Porsche */}
      <section id="porsche" className="mx-auto max-w-4xl px-5 py-14">
        <h2 className="text-4xl text-foreground sm:text-5xl">Because you love Porsches</h2>
        <p className="mt-2 mb-6 text-muted-foreground">
          Pick one, any one — the keys are yours in spirit.
        </p>
        <Slideshow slides={porscheSlides} />
      </section>

      {/* Liverpool */}
      <section id="liverpool" className="mx-auto max-w-4xl px-5 py-14">
        <h2 className="text-4xl text-foreground sm:text-5xl">And you bleed red</h2>
        <p className="mt-2 mb-6 text-muted-foreground">
          Through the wins, the draws and the heartbreaks — never walking alone.
        </p>
        <Slideshow slides={lfcSlides} interval={4600} />
      </section>

      {/* Her photos */}
      <section id="gallery" className="mx-auto max-w-4xl px-5 py-14">
        <h2 className="text-4xl text-foreground sm:text-5xl">Joy, the moments</h2>
        <p className="mt-2 mb-6 text-muted-foreground">
          Add your own photos to <code className="text-accent">public/joy/</code> as joy-1.jpg …
          joy-6.jpg and they show up right here.
        </p>
        <JoyGallery />
      </section>

      {/* Message */}
      <section className="mx-auto max-w-3xl px-5 pb-20">
        <div className="rounded-3xl border border-border bg-card p-6 text-center card-glow sm:p-10">
          <h2 className="text-3xl text-gold sm:text-4xl">A little note</h2>
          <p className="mt-4 text-muted-foreground">
            Anyolo my love,nakupenda tuh sana we ngombe,i cant even express myself in words you are the best thing that has ever happened to me.
            And if you ask me,yes id choose you in every other lifetime.Happy birthday baby.
            May God bless you with more years to come 
          </p>
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">Made with ❤️ for Joy</p>
      </section>
    </main>
  );
}
