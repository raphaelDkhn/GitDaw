import { jsonToAls } from "./converter";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const fileName = args._[0];

if (fileName) {
  jsonToAls(fileName)
    .then(() => console.log("JSON file converted to Ableton file successfully."))
    .catch((error) => console.error("An error occurred while converting the JSON file to Ableton file.", error));
} else {
  console.error('Invalid operation. Please provide the fileName.');
}
