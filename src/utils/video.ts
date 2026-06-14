/**
 * Transforme un lien collé (YouTube, Vimeo, ou fichier .mp4) en source
 * lisible pour un aperçu vidéo : muet, autoplay, en boucle, sans contrôles.
 */
export interface LoopVideo {
  provider: "youtube" | "vimeo" | "file";
  embed?: string; // URL d'iframe (YouTube / Vimeo)
  src?: string;   // chemin direct (fichier .mp4) pour <video>
}

export function loopEmbed(url: string | undefined | null): LoopVideo | null {
  const u = (url || "").trim();
  if (!u) return null;

  const yt = u.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{6,})/i);
  if (yt) {
    const id = yt[1];
    const embed =
      `https://www.youtube-nocookie.com/embed/${id}` +
      `?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&fs=0`;
    return { provider: "youtube", embed };
  }

  const vm = u.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
  if (vm) {
    const id = vm[1];
    return { provider: "vimeo", embed: `https://player.vimeo.com/video/${id}?autoplay=1&muted=1&loop=1&background=1` };
  }

  if (/\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(u)) {
    return { provider: "file", src: u };
  }

  return null;
}
