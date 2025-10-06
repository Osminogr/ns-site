import { links } from "@/config/links";

export const useLinks = () => {
  const openLink = (url: string, target: '_blank' | '_self' = '_blank') => {
    if (target === '_blank') {
      window.open(url, target, 'noopener,noreferrer');
    } else {
      window.location.href = url;
    }
  };

  const openDiscord = () => openLink(links.discord);
  const openLore = () => openLink(links.internal.lore);
  const openModpack = () => openLink(links.internal.modpack);
  const openRules = () => openLink(links.internal.rules);
  const openSupport = () => openLink(links.internal.support);
  
  const openExternal = {
    vintageStoryOfficial: () => openLink(links.external.vintageStoryOfficial),
    vintageStoryWiki: () => openLink(links.external.vintageStoryWiki),
    vintageStoryMods: () => openLink(links.external.vintageStoryMods),
  };
  
  const openSocial = {
    youtube: () => openLink(links.social.youtube),
    forum: () => openLink(links.social.forum),
    reddit: () => openLink(links.social.reddit),
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    links,
    openLink,
    openDiscord,
    openLore,
    openModpack,
    openRules,
    openSupport,
    openExternal,
    openSocial,
    scrollToSection,
  };
};
