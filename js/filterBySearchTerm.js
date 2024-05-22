import { channelsWrapper, searchInput, warningMsgElem } from "./DOMelems.js";
import populateTagsInChannel from './populateTagsInChannel.js';
import createChannelCardElem from './createChannelCardElem.js';

export default function filterBySearchTerm(filteredChannelData) {
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value;
        const searchedChannelName = filteredChannelData.filter(chan => chan.name.toLowerCase().includes(searchTerm.toLowerCase()));

        channelsWrapper.innerHTML = '';

        searchedChannelName.forEach(chan => {
            createChannelCardElem(chan);            
        });
        
        populateTagsInChannel(searchedChannelName);

        if (searchedChannelName.length == 0) {
            warningMsgElem.style.display = 'block';   
        } else {
            warningMsgElem.style.display = 'none';
        }
    });

    searchInput.value = '';
}