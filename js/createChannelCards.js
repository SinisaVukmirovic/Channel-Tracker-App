import { channelsData } from '../data/channelsData.js';
import { channelsWrapper } from './DOMelems.js';
import filterBySearchTerm from './filterBySearchTerm.js';
import populateTagsInChannel from './populateTagsInChannel.js';
import createChannelCardElem from './createChannelCardElem.js';

export default function createChannelCards() {
    const ariaCurrent = document.querySelector('[aria-current]');
    const selectedTopic = ariaCurrent.textContent;

    const filteredChannelData = channelsData.filter(data => data.topics.includes(selectedTopic));

    channelsWrapper.innerHTML = '';

    filteredChannelData.forEach(chan => {
        createChannelCardElem(chan);
    });

    populateTagsInChannel(filteredChannelData);

    filterBySearchTerm(filteredChannelData);
}