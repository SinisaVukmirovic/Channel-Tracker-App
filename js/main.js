import createTopicsList from './createTopicsList.js';
import createChannelCards from './createChannelCards.js';
import getCreatedDOMelems from './getCreatedDOMelems.js';

createTopicsList();
createChannelCards();
getCreatedDOMelems();

const topicItems = document.querySelectorAll('[data-topics] li');
topicItems.forEach(topic => {
    topic.addEventListener('click', createChannelCards);
});