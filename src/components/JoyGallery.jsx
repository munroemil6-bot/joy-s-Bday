import { useState } from "react";

/**
 * Gallery for Joy's own photos.
 *
 * HOW TO ADD HER PHOTOS:
 * 1. Put your image files inside the folder:  public/joy/
 * 2. Name them: joy-1.jpg, joy-2.jpg, joy-3.jpg, joy-4.jpg, joy-5.jpg, joy-6.jpg
 *    (or edit the `photos` list below to match your own file names)
 * 3. Refresh the page — they appear automatically.
 */
const photos = [
  { src: "/joy/joy-1.jpg", caption: "That smile" },
  { src: "/joy/joy-2.jpg", caption: "Good times" },
  { src: "/joy/joy-3.jpg", caption: "Queen of the road" },
  { src: "/joy/joy-4.jpg", caption: "Red till the end" },
  { src: "/joy/joy-5.jpg", caption: "Golden moments" },
  { src: "/joy/joy-6.jpg", caption: "Another year, another win" },
];

function PhotoCard({ src, caption }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-card card-glow">
      <div className="relative aspect-square w-full bg-secondary">
        {failed ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
            <span className="text-3xl">📷</span>
            <span className="text-xs text-muted-foreground">
              Drop your photo here as
              <br />
              <code className="text-accent">public{src}</code>
            </span>
          </div>
        ) : (
          <img
            src={src}
            alt={caption}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        )}
      </div>
      <figcaption className="px-3 py-2 text-sm text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

export default function JoyGallery() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {photos.map((p) => (
        <PhotoCard key={p.src} src={p.src} caption={p.caption} />
      ))}
    </div>
  );
}
