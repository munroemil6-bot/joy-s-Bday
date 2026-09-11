import { useState } from "react";

import whatsappImage1 from "@/assets/WhatsApp Image 2026-09-11 at 7.24.53 PM.jpeg";
import whatsappImage2 from "@/assets/WhatsApp Image 2026-09-11 at 7.28.29 PM.jpeg";
import whatsappVideo1 from "@/assets/WhatsApp Video 2026-09-11 at 7.24.52 PM.mp4";
import whatsappVideo2 from "@/assets/WhatsApp Video 2026-09-11 at 7.24.55 PM.mp4";
import whatsappVideo3 from "@/assets/WhatsApp Video 2026-09-11 at 7.24.57 PM.mp4";

const photos = [
  { src: whatsappImage1, caption: "A lovely moment", type: "image" },
  { src: whatsappImage2, caption: "Another beautiful memory", type: "image" },
  { src: whatsappVideo1, caption: "A moment to replay", type: "video" },
  { src: whatsappVideo2, caption: "Good times in motion", type: "video" },
  { src: whatsappVideo3, caption: "One for the memories", type: "video" },
];

function PhotoCard({ src, caption, type = "image", onRemove }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-card card-glow">
      <div className="relative aspect-square w-full bg-secondary">
        {type === "video" ? (
          <video
            src={src}
            aria-label={caption}
            controls
            preload="metadata"
            onError={() => onRemove(src)}
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={src}
            alt={caption}
            loading="lazy"
            onError={() => onRemove(src)}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        )}
      </div>
      <figcaption className="px-3 py-2 text-sm text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

export default function JoyGallery() {
  const [visiblePhotos, setVisiblePhotos] = useState(photos);

  const removeMedia = (src) => {
    setVisiblePhotos((currentPhotos) => currentPhotos.filter((photo) => photo.src !== src));
  };

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {visiblePhotos.map((p) => (
        <PhotoCard
          key={p.src}
          src={p.src}
          caption={p.caption}
          type={p.type}
          onRemove={removeMedia}
        />
      ))}
    </div>
  );
}
