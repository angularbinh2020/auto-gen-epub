//@ts-check
import { genEbook } from "./gen-ebook.mjs";
const MAX_CHAPTER = 5;
const ebookUrls = [
  "https://ntruyen.top/truyen/lao-xa-tu-tien-truyen-68892/25955541.html",
];
let ebookIndex = 0;
while (ebookUrls[ebookIndex]) {
  await genEbook({
    maxChapter: MAX_CHAPTER,
    startChapterUrl: ebookUrls[ebookIndex],
  });
  ebookIndex++;
  console.log(`Done ${ebookIndex}/${ebookUrls.length}`);
}
