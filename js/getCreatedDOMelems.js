import setAriaOnSelectedTopic from './setAriaOnSelectedTopic.js';
// import populateTagsInChannel from './populateTagsInChannel.js';

export default function getCreatedDOMelems() {
    const topics = document.querySelectorAll('[data-topics] li');
    setAriaOnSelectedTopic(topics);

    // const channelTagsElem = document.querySelectorAll('[data-channel] [data-tags]');
    // populateTagsInChannel();
}