//@ts-check
import { EPub } from "@lesjoursfr/html-to-epub";
import { resolve } from "path";
import { exportWikidich } from "./export-wikidich.mjs";
import { fileURLToPath } from "url";
import { dateFormat, getFileName } from "./utils.mjs";
import { exportNtruyen } from "./export-ntruyen.mjs";
// import { convertToAzw3 } from "./convert-to-azw3.mjs";
const __dirname = fileURLToPath(new URL(".", import.meta.url));
export const genEbook = async ({ maxChapter, startChapterUrl }) => {
  const { chapters, bookTitle, endChapterUrl } = await exportNtruyen({
    startChapterUrl: startChapterUrl,
    maxChapter: maxChapter,
  });
  const fileName = `${getFileName(bookTitle)} ${dateFormat(
    new Date(),
    "hh mm DD MM"
  )}`;
  const filePath = resolve(__dirname, "books", `./${fileName}.epub`);
  //   const azw3FilePath = resolve(__dirname, `./${fileName}.azw3`);
  console.log(filePath);

  const epub = new EPub(
    {
      title: bookTitle,
      description: `Start chapter: ${startChapterUrl} ; End chapter: ${endChapterUrl}`,
      content: [
        ...chapters,
        {
          title: "Phụ lục",
          data: `<div>Start chapter: ${startChapterUrl} ; End chapter: ${endChapterUrl}</div>`,
        },
      ],
    },
    filePath
  );
  await epub.render();
  console.log(">>> Export epub done");
  //   await convertToAzw3({
  //     input: filePath,
  //     output: azw3FilePath,
  //   });
  //   console.log(">>> Export azw3 done");
};
