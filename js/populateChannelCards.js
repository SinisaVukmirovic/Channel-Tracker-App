import { channelsData } from '../data/channelsData.js';
import { channelsWrapper } from './DOMelems.js';
import filterBySearchTerm from './filterBySearchTerm.js';
import populateTagsInChannel from './populateTagsInChannel.js';
import createChannelCardElem from './createChannelCardElem.js';

export default function populateChannelCards() {
    const ariaCurrent = document.querySelector('[aria-current]');
    const selectedTopic = ariaCurrent.textContent;

    const filteredChannelData = channelsData.filter(data => data.topics.includes(selectedTopic));

    channelsWrapper.innerHTML = '';

    // view transitions
    document.startViewTransition(() => {
        filteredChannelData.forEach(chan => {
            createChannelCardElem(chan);
        });

        populateTagsInChannel(filteredChannelData);
    });

    filterBySearchTerm(filteredChannelData);
}