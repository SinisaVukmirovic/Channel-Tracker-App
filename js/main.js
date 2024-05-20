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







// import { channelsData } from '../data/channelsData.js';
// import { channelsWrapper, searchInput } from './DOMelems.js';

// filtering by selected topic
// const topicItems = document.querySelectorAll('[data-topics] li');

// topicItems.forEach(topic => topic.addEventListener('click', (e) => {
//     const selectedTopic = e.target.textContent;
//     const filteredChannelsData = channelsData.filter(chan => chan.topics.includes(selectedTopic));
    
//     channelsWrapper.innerHTML = '';

//     filteredChannelsData.forEach(chan => {
//         const channel = document.createElement('div');

//         channel.setAttribute('data-channel', '');
//         channel.classList.add('channel');
        
//         channel.innerHTML = `
//             <img src=${chan.image} alt="Channel Image">
//             <div class="tags-name">
//                 <div data-tags class="tags">
//                 </div>
//                 <h4>${chan.name}</h4>
//             </div>
//             <div class="info">
//                 <p>${chan.info}</p>
//             </div>
//             <div class="subs-link">
//                 <div class="details">
//                     <p>${chan.details.subs}</p>
//                     <p>${chan.details.vids}</p>
//                 </div>
//                 <a href=${chan.link} target="_blank">Visit Channel</a>
//             </div>
//         `;
        
//         channelsWrapper.append(channel);
//     });

//     const channelTagsElem = document.querySelectorAll('[data-channel] [data-tags]');
//     let index = 0;

//     channelTagsElem.forEach(tagElem => {
//         const tags = filteredChannelsData[index].topics;
//         tags.forEach(tag => {
//             if (tag.toLowerCase() == 'all') return;
//             let tagTopic = document.createElement('span');
//             tagTopic.textContent = tag;
//             tagElem.append(tagTopic);
//         });

//         index++;
//     });

// }));

// filtering by search term
// searchInput.addEventListener('input', () => {
//     const searchedChannelName = searchInput.value;
    
//     const filteredChannelsData = channelsData.filter(chan => chan.name.toLowerCase().includes(searchedChannelName.toLowerCase()));
//     console.log(filteredChannelsData)

    // filteredChannelsData.forEach(chan => {
    //     const channel = document.createElement('div');

    //     channel.setAttribute('data-channel', '');
    //     channel.classList.add('channel');
        
    //     channel.innerHTML = `
    //         <img src=${chan.image} alt="Channel Image">
    //         <div class="tags-name">
    //             <div data-tags class="tags">
    //             </div>
    //             <h4>${chan.name}</h4>
    //         </div>
    //         <div class="info">
    //             <p>${chan.info}</p>
    //         </div>
    //         <div class="subs-link">
    //             <div class="details">
    //                 <p>${chan.details.subs}</p>
    //                 <p>${chan.details.vids}</p>
    //             </div>
    //             <a href=${chan.link} target="_blank">Visit Channel</a>
    //         </div>
    //     `;
        
    //     channelsWrapper.append(channel);
    // });

    // const channelTagsElem = document.querySelectorAll('[data-channel] [data-tags]');
    // let index = 0;

    // channelTagsElem.forEach(tagElem => {
    //     const tags = filteredChannelsData[index].topics;
    //     tags.forEach(tag => {
    //         if (tag.toLowerCase() == 'all') return;
    //         let tagTopic = document.createElement('span');
    //         tagTopic.textContent = tag;
    //         tagElem.append(tagTopic);
    //     });

    //     index++;
    // });
// });

// topicItems.addEventListener('click', sfoins(e));
// searchInput.addEventListener('input', sfoins);

// function sfoins(e) {
//     console.log(e.target)
// }