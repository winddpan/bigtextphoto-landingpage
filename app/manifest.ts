import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "大字照片",
    short_name: "大字照片",
    description: "一款专为文字与图像融合而生的创意编辑利器",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/9d/e5/79/9de579f6-e549-25b0-09a3-588b2da3a6dd/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/460x0w.webp",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/9d/e5/79/9de579f6-e549-25b0-09a3-588b2da3a6dd/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/460x0w.webp",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

