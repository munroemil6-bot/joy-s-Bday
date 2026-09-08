import { useCallback, useEffect, useState } from "react";

/**
 * Simple auto-playing slideshow.
 * slides: [{ src, alt, caption }]
 */
export default function Slideshow({ slides, interval = 4000 }) {
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    return () => clearInterval(id);
  }, [slides.length, interval]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card card-glow">
      <div className="relative aspect-[16/10] w-full">
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4 pt-12">
          <p className="text-sm font-medium text-foreground sm:text-base">
            {slides[index]?.caption}
          </p>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/70 px-3 py-2 text-foreground backdrop-blur transition hover:bg-primary"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/70 px-3 py-2 text-foreground backdrop-blur transition hover:bg-primary"
      >
        ›
      </button>

      <div className="absolute left-1/2 top-3 flex -translate-x-1/2 gap-2">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-accent" : "w-2 bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
