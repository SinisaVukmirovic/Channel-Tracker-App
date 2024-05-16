import { channelsData } from '../data/channelsData.js';

// let tags = {};
let tags = [];

channelsData.forEach(channel => {
    // tags = {...channel}
    tags.push(channel.topics)
    // console.log(channel.name)
});
console.log(tags)

export default function populateTagsInChannel(channelTags, tags) {
    channelTags.forEach((tag, data) => {
        console.log(data.name)
    });
}