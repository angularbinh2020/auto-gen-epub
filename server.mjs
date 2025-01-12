//@ts-check
import { genEbook } from "./gen-ebook.mjs";
const MAX_CHAPTER = 50;
const ebookUrls = [
  "https://truyenwikidich.net/truyen/xuyen-thu-chi-phao-hoi-nguyen-phoi-bai-l/chuong-1-ZldCwMQsRHkOuVnd",
  "https://truyenwikidich.net/truyen/cai-nay-kich-ban-sat-tuyet-doi-co-van-de/chuong-1-nay-co-thoa-thoa-luan-hoi-gia-h-YWIz_cQsRAO61WRt",
  "https://truyenwikidich.net/truyen/xuyen-nhanh-ky-chu-nang-phao-hoi-than-la/chuong-1-le-tang-ZllgDcQsRHkPuhX6",
  "https://truyenwikidich.net/truyen/doan-menh-lao-cong-di-san-nhieu-hao-mon-/chuong-1-ke-thua-chuc-ty-di-san-ZlzD18QsRHkPurkH",
  "https://truyenwikidich.net/truyen/thieu-gia-co-benh-lam-sao-bay-gio-bai-la/chuong-1-xuyen-thu-Zly6RcQsRHkPurd0",
  "https://truyenwikidich.net/truyen/quan-mon-quy-su/phan-1-ZlwJfcQsRHkOuf82",
  "https://truyenwikidich.net/truyen/phat-he-thu-nu-sinh-ton-so-tay/phan-1-ZmIHCMQsRHkPu3Pk",
  "https://truyenwikidich.net/truyen/pokemon-the-gioi-tang-duoi-chot-huan-luy/chuong-1-khong-giong-nhau-pokemon-the-gi-YRhvb8QsRCSX2qe_",
  "https://truyenwikidich.net/truyen/cuu-vot-ca-ca-dai-tac-chien-xuyen-nhanh/phan-1-ZmKBz8QsRDYzzlE5",
  "https://truyenwikidich.net/truyen/lam-cai-gi-nu-xung-cung-muon-mang-song/chuong-1-sao-tich-ta-menh-lien-khong-pha-ZmdXAcQsRHkOu%7EkH",
  "https://truyenwikidich.net/truyen/duong-vai-ac-troi-dinh-nu-chu-he-thong/lieu-am-hoa-minh-1-Y%7E%7ELx8QsRAadJSsC",
  "https://truyenwikidich.net/truyen/mau-xuyen-thanh-vai-ac-dai-lao-nu-nhi-sa/chuong-1-bi-tu-hon-thai-tu-phi-1-Zmh0usQsRHkPvLgC",
  "https://truyenwikidich.net/truyen/xuyen-thu-tro-thanh-duong-nhai-con-dai-s/phan-1-Zn0BdMQsRAwwB79G",
  "https://truyenwikidich.net/truyen/hau-cung-tru-ta-ngoai-deu-co-ban-tay-van/phan-1-ZoJutcQsRCtwB8G0",
  "https://truyenwikidich.net/truyen/xuyen-qua-sau-lam-an-choi-trac-tang/phan-1-ZhqCccQsRANl8AV1",
  "https://truyenwikidich.net/truyen/xuyen-qua-chi-nguoi-toi-tram-muon-thoai-/1-chuong-1-Zj2TdcQsRGJ7Ytzi",
  "https://truyenwikidich.net/truyen/ac-doc-nu-xung-thay-lan-dan-sau-sat-dien/chuong-1-ta-thanh-ac-doc-nu-xung-ZkJODMQsRHkOtk75",
  "https://truyenwikidich.net/truyen/ta-noi-dan-giai-tram-doc-kia-cung-khong-/chuong-1-nguoi-nhu-the-nao-con-khong-cao-Zkol5MQsRHkOtzmG",
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
