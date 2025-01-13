//@ts-check
import { GetHtmlString } from "./fetch.mjs";
import HtmlParse from "node-html-parser";
import { waitToTimeout } from "./utils.mjs";
import { NTRUYEN_SELECTOR } from "./ntruyen-selector.mjs";
export const exportNtruyen = async ({ startChapterUrl, maxChapter }) => {
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
        .querySelector(NTRUYEN_SELECTOR.BOOK_TITLE)
        .getAttribute("value")
        .trim();
    }
    const chapterTitle = htmlDom
      .querySelector(NTRUYEN_SELECTOR.CHAPTER_TITLE)
      .getAttribute("value")
      .trim();
    const chapterContent = htmlDom
      .querySelector(NTRUYEN_SELECTOR.CHAPTER_CONTENT)
      .innerHTML.trim();
    chapters.push({
      title: chapterTitle,
      data: chapterContent,
    });

    const nextChapterLink = htmlDom.querySelector(
      NTRUYEN_SELECTOR.NEXT_CHAPTER_LINK
    );
    await waitToTimeout(5 + Math.round(Math.random() * 5));
    if (nextChapterLink && chapterIndex < maxChapter) {
      chapterUrl = nextChapterLink.getAttribute("href").trim();
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
