interface PageLink {
  title: string;
  link: string;
}

// Using object literal with explicit type
const pages: { [key: string]: PageLink } = {
  home: {
    title: "homePageTitle",
    link: "/",
  },
  privacy: {
    title: "privacyPageTitle",
    link: "/pages/privacy",
  },
  terms: {
    title: "termsPageTitle",
    link: "/pages/terms",
  },
  docs: {
    title: "docsPageTitle",
    link: "/pages/docs",
  },
};

interface PageLink {
  title: string;
  link: string;
}

export const getPageLink = (page: string): PageLink => {
  const p = pages[page];
  if (p) {
    return p;
  }
  throw new Error(`Page ${page} not found`);
};
