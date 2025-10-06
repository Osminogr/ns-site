export const links = {
  // Discord сервер
  discord: "https://discord.gg/MM3NJvBN",
  
  // Внешние ссылки
  external: {
    vintageStoryOfficial: "https://www.vintagestory.at/",
    vintageStoryWiki: "https://wiki.vintagestory.at/",
    vintageStoryMods: "https://mods.vintagestory.at/",
  },
  
  // Социальные сети
  social: {
    youtube: "https://www.youtube.com/@TheNeverend1ngStory",
    forum: "",
    reddit: "",
  },
  
  // Внутренние ссылки
  internal: {
    modpack: "/",
    rules: "/",
    lore: "/",
    support: "/",
  },
  
  // Навигация по секциям
  navigation: {
    home: "#home",
    features: "#features", 
    join: "#join",
    faq: "#faq",
  }
} as const;

export type Links = typeof links;
