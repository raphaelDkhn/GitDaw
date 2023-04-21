import { alsToJson } from "./converter";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const fileName = args._[0];

if (fileName) {
  alsToJson(fileName)
    .then(() => console.log("Ableton file converted to JSON successfully."))
    .catch((error) => console.error("An error occurred while converting the Ableton file to JSON.", error));
} else {
  console.error('Invalid operation. Please provide the fileName.');
}
