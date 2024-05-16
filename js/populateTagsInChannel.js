import { channelsData } from '../data/channelsData.js';

// let tags = {};
// let tags = [];

// channelsData.forEach(channel => {
//     // tags = {...channel}
//     tags.push(channel.topics)
//     // console.log(channel.name)
// });
// console.log(tags)

export default function populateTagsInChannel(channelTagsElem) {
    let index = 0;
    channelTagsElem.forEach(tagElem => {
        let tags = channelsData[index].topics;
        tags.forEach(tag => {
            let tagTopic = document.createElement('span');
            tagTopic.textContent = tag;
            tagElem.append(tagTopic)
        })
        // console.log(channelsData[index].topics);
        index++;
    });
}