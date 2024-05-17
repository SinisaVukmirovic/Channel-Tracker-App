import { channelsData } from '../data/channelsData.js';

export default function populateTagsInChannel(channelTagsElem) {
    let index = 0;

    channelTagsElem.forEach(tagElem => {
        const tags = channelsData[index].topics;
        tags.forEach(tag => {
            if (tag.toLowerCase() == 'all') return;
            let tagTopic = document.createElement('span');
            tagTopic.textContent = tag;
            tagElem.append(tagTopic)
        });

        index++;
    });
}