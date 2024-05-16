import setAriaAttrOnClick from './setAriaAttrOnClick.js';
import populateTagsInChannel from './populateTagsInChannel.js';

export default function getCreatedDOMelems() {
    const topics = document.querySelectorAll('[data-topics] li');
    setAriaAttrOnClick(topics);

    const channelTagsElem = document.querySelectorAll('[data-channel] [data-tags]');
    populateTagsInChannel(channelTagsElem);
}