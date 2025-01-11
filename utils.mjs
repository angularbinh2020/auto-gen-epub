export const waitToTimeout = (seconds = 3) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, seconds * 1000);
  });

export const getFileName = (bookTitle) => {
  return bookTitle.replace(
    /[^a-z0-9A-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s]/g,
    ""
  );
};

const Format = {
  DD: "DD",
  MM: "MM",
  YYYY: "YYYY",
  hh: "hh",
  mm: "mm",
  ss: "ss",
};

const getStringNumber = (val) => {
  return val > 9 ? val : "0" + val;
};

export const dateFormat = (input, format) => {
  const dateObj = typeof input === "string" ? new Date(input) : input;
  if (isNaN(dateObj.getDate())) return format;
  const date = getStringNumber(dateObj.getDate());
  let result = format;
  const month = getStringNumber(dateObj.getMonth() + 1);
  const year = dateObj.getFullYear();
  const hours = getStringNumber(dateObj.getHours());
  const minutes = getStringNumber(dateObj.getMinutes());
  const seconds = getStringNumber(dateObj.getSeconds());
  const mapSyntax = {
    [Format.DD]: date,
    [Format.MM]: month,
    [Format.YYYY]: year,
    [Format.hh]: hours,
    [Format.mm]: minutes,
    [Format.ss]: seconds,
  };
  for (let syntax in mapSyntax) {
    result = result.replaceAll(syntax, mapSyntax[syntax]);
  }
  return result;
};
