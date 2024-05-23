import createTopicsList from './createTopicsList.js';
import populateChannelCards from './populateChannelCards.js';
import getCreatedDOMelems from './getCreatedDOMelems.js';

createTopicsList();
populateChannelCards();
getCreatedDOMelems();

const topicItems = document.querySelectorAll('[data-topics] li');
topicItems.forEach(topic => {
    topic.addEventListener('click', populateChannelCards);
});