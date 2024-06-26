import { channelsWrapper } from './DOMelems.js';

export default function createChannelCardElem(chan) {
    const channel = document.createElement('div');

    channel.setAttribute('data-channel', '');
    channel.classList.add('channel');
    
    channel.innerHTML = `
        <img src=${chan.image} alt="Channel Image">
        <div class="tags-name">
            <div data-tags class="tags">
            </div>
            <h4>${chan.name}</h4>
        </div>
        <div class="info">
            <p>${chan.info}</p>
        </div>
        <div class="subs-link">
            <div class="details">
                <p>${chan.details.subs}</p>
                <p>${chan.details.vids}</p>
            </div>
            <a href=${chan.link} target="_blank">Visit Channel</a>
        </div>
    `;

    channelsWrapper.append(channel);
}