//@ts-check
import { genEbook } from "./gen-ebook.mjs";
const MAX_CHAPTER = 50;
const ebookUrls = [
  // "https://truyenwikidich.net/truyen/tu-vong-tro-choi-tro-choi-nay-noi-nhu-th/chuong-1-dong-hoc-se-ZfJKncQsRF3PEYTY",
  "https://truyenwikidich.net/truyen/xuyen-nhanh-co-chap-dai-lao-lai-bang-nan/chuong-1-mat-the-the-than-phao-hoi-1-ZdOcScQsREKP9q4J",
  "https://truyenwikidich.net/truyen/xuyen-nhanh-vo-tinh-vai-ac-cam-tham-tinh/chuong-1-khe-uoc-thanh-hon-chi-truy-the--ZdizRcQsREKQ96J3",
  "https://truyenwikidich.net/truyen/tu-thi-ngu-hung-trach-bat-dau/chuong-1-ky-hop-dong-ZfJKmsQsRF3QEXpv",
  "https://truyenwikidich.net/truyen/nu-phu-nghi-thoang-roi-xuyen-nhanh/chuong-1-vo-truoc-1-XXTfhMQsRBlbz506",
  "https://truyenwikidich.net/truyen/truyen-tranh-nu-n-hao-sau-khi-thuc-tinh/phan-1-ZgGFcMQsRGIvU8hF",
  "https://truyenwikidich.net/truyen/su-pho-khong-duoc-roi-dai-su-huynh-cung-/chuong-1-tu-chuong-ZkxLs8QsRHkOt6tW",
  "https://truyenwikidich.net/truyen/ta-co-doc-dao-tay-trang-ky-xao-xuyen-nha/phan-1-Zk3sCcQsRAahMOBP",
  "https://truyenwikidich.net/truyen/trong-sinh-o-bi-giet-the-chung-dao-phia-/chuong-1-nang-trong-sinh-ZlH9dcQsRHkOuJNl",
  "https://truyenwikidich.net/truyen/nghe-duoc-thien-dao-tieng-long-sau-tu-ti/trang-1-ZbNKJsQsREKQ766w",
  "https://truyenwikidich.net/truyen/cuu-thien-tue-la-nu-nhi-than-tho-bao-tan/chuong-1-nu-gia-nam-trang-gia-thai-giam-ZlNmp8QsRHkOuMUj",
  "https://truyenwikidich.net/truyen/xuyen-nhanh-ky-chu-lai-dien-khung/chuong-1-troi-dinh-1-ZlQ7g8QsRHkOuNtO",
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
