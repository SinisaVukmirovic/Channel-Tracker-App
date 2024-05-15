import { channelsData } from '../data/channelsData.js';
import { topicsElem } from './DOMelems.js';

export default function createTopicsList() {
    let allTopics = [];

    channelsData.forEach(chan => {
        allTopics.push(...chan.topics);
    });
    
    const uniqueTopics = [...new Set(allTopics)];
    
    uniqueTopics.forEach(topic => {
        const liElem = document.createElement('li');
    
        liElem.setAttribute('tabindex', '0');
        liElem.textContent = topic;
        if (topic.toLowerCase() == 'all') {
            liElem.setAttribute('aria-current', '');
        }
    
        topicsElem.append(liElem);
    });
}