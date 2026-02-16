import { writeClipboardText } from "./copyToClipboard";
import { onClick } from "./copyToClipboard";

document.addEventListener("DOMContentLoaded", () => {
  writeClipboardText();
  onClick();
});
