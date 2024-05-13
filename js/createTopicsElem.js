import { channels } from '../data/channelsData.js';

let allTopics = [];

channels.forEach(chan => {
    allTopics.push(...chan.topics);
});

const uniqueTopics = [...new Set(allTopics)];

console.log(uniqueTopics)