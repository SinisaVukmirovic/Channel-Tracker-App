import { titleElem } from "./DOMelems.js";

export default function changeTitleText(selectedTopic) {
    titleElem.textContent = `${selectedTopic} channels`;
}