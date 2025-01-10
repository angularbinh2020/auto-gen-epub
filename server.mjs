//@ts-check
import { createServer } from "node:http";
import { EPub } from "@lesjoursfr/html-to-epub";
import { resolve } from "path";
import { fileURLToPath } from "url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const hostname = "127.0.0.1";
const port = 3000;
const server = createServer(async (req, res) => {
  // const filePath = path.join(process.env.EPUB_FOLDER || "");
  // console.log(filePath);
  const filePath = resolve(__dirname, `./test.epub`);
  console.log(filePath);

  const epub = new EPub(
    {
      title: "Test",
      description: "test",
      content: [{ title: "Chapter 1", data: "<div>Chương 1</div>" }],
    },
    filePath
  );
  await epub.render();
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
