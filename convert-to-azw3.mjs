//@ts-check
import { exec } from "child_process";

export const convertToAzw3 = ({ input, output }) => {
  return new Promise((resolve) => {
    exec(`ebook-convert ${input} ${output}`, (error, stdout, stderr) => {
      resolve(null);
      if (error) {
        console.log(`error: ${error.message}`);
        console.log(error.stack)
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
  });
};
