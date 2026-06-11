"use client";

import Image from "next/image";

interface Props {
  videoEmbed: string | null;
  heroVideo: string | null;
  heroImage: string;
  title: string;
  priority?: boolean;
}

function getEmbedUrl(raw: string): string {
  // Already a YouTube embed URL (e.g. https://www.youtube.com/embed/ID?si=...)
  const ytEmbedMatch = raw.match(/youtube\.com\/embed\/([A-Za-z0-9_-]+)/);
  if (ytEmbedMatch) {
    return `https://www.youtube.com/embed/${ytEmbedMatch[1]}?autoplay=1&mute=1&loop=1&playlist=${ytEmbedMatch[1]}&rel=0&modestbranding=1&controls=0`;
  }

  // YouTube watch URL
  const ytWatchMatch = raw.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]+)/);
  if (ytWatchMatch) {
    return `https://www.youtube.com/embed/${ytWatchMatch[1]}?autoplay=1&mute=1&loop=1&playlist=${ytWatchMatch[1]}&rel=0&modestbranding=1&controls=0`;
  }

  // Vimeo share URL → background player
  const vimeoMatch = raw.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&loop=1&muted=1&background=1`;
  }

  // Already a Vimeo player URL
  if (raw.includes("player.vimeo.com")) return raw;

  return raw;
}

export default function VideoHero({
  videoEmbed,
  heroVideo,
  heroImage,
  title,
  priority = false,
}: Props) {
  if (videoEmbed) {
    const embedUrl = getEmbedUrl(videoEmbed);
    return (
      <div className="video-container">
        <iframe
          src={embedUrl}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
          title={title}
          style={{ border: "none" }}
        />
      </div>
    );
  }

  if (heroVideo) {
    return (
      <div className="video-container">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          style={{ objectFit: "cover" }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16/9",
        background: "#1C1C1C",
        overflow: "hidden",
      }}
    >
      <Image
        src={heroImage}
        alt={title}
        fill
        priority={priority}
        sizes="100vw"
        style={{ objectFit: "cover" }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.opacity = "0";
        }}
      />
    </div>
  );
}
