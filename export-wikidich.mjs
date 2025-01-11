//@ts-check
import { GetHtmlString } from "./fetch.mjs";
import HtmlParse from "node-html-parser";
import { WIKIDICH_SELECTOR } from "./wikidich-selector.mjs";
import { fileURLToPath } from "url";
import { waitToTimeout } from "./utils.mjs";
const __dirname = fileURLToPath(new URL(".", import.meta.url));
export const exportWikidich = async ({ startChapterUrl, maxChapter }) => {
  console.log(`Start export book : ${startChapterUrl}`);
  const chapters = [];
  let chapterIndex = 1;
  let bookTitle = "";
  let chapterUrl = startChapterUrl;
  const urlObject = new URL(startChapterUrl);
  while (true) {
    console.log(`Export chapter ${chapterIndex} : ${chapterUrl}`);
    const htmlString = await GetHtmlString(chapterUrl);
    const htmlDom = HtmlParse.parse(htmlString);
    if (!bookTitle) {
      bookTitle = htmlDom
        .querySelector(WIKIDICH_SELECTOR.BOOK_TITLE)
        .innerText.trim();
    }
    const chapterTitle = htmlDom
      .querySelector(WIKIDICH_SELECTOR.CHAPTER_TITLE)
      .innerText.trim();
    const chapterContent = htmlDom
      .querySelector(WIKIDICH_SELECTOR.CHAPTER_CONTENT)
      .innerHTML.trim();
    chapters.push({
      title: chapterTitle,
      data: chapterContent,
    });

    const nextChapterLink = htmlDom.querySelector(
      WIKIDICH_SELECTOR.NEXT_CHAPTER_LINK
    );
    await waitToTimeout(5 + Math.round(Math.random() * 5));
    if (nextChapterLink && chapterIndex < maxChapter) {
      chapterUrl =
        urlObject.origin + nextChapterLink.getAttribute("href").trim();
    } else {
      break;
    }
    chapterIndex++;
  }
  return {
    chapters,
    bookTitle,
    endChapterUrl: chapterUrl,
  };
};
