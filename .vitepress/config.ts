import { getPosts, getPostLength } from "./theme/serverUtils";

async function config() {
  return {
    lang: "en-US",
    title: "Composable Tokenized Coding System CTCS (beta)",
    href: "/about/Me",
    description: "Tokenized Code - Small to Big Composable Modules - Bundles to Play to Learn - Up to Industrial Infrastructure as Code",
    head: [
      [
        "link",
        {
          rel: "icon",
          type: "image/jpeg",
        },
      ],
      [
        "meta",
        {
          name: "author",
          content: "CTCS",
        },
      ],
      [
        "meta",
        {
          property: "og:title",
          content: "Home",
        },
      ],
      [
        "meta",
        {
          property: "og:description",
          content: "Home of CTCS",
        },
      ],
    ],
    themeConfig: {
      logo: "/cafe.svg",
      docsDir: "/",
      lastUpdated: false,
      posts: await getPosts(),
      pageSize: 3,
      postLength: await getPostLength(),

      nav: [ 
        {
          text: "Home",
          link: "/",
        },
        {
          text: "Tags",
          link: "/tags",
        },
        {
          text: "Hist",
          link: "/archives",
        },
	      {  // move up
          text: "About",
        	link: "/about/Me",
	      },        
      ],
    },
  };
}
export default config();