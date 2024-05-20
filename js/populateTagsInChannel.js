export default function populateTagsInChannel(filteredChannelData) {
    const channelTagsElem = document.querySelectorAll('[data-channel] [data-tags]');

    let index = 0;

    channelTagsElem.forEach(tagElem => {
        const tags = filteredChannelData[index].topics;
        // console.log(tags)
        tags.forEach(tag => {
            if (tag.toLowerCase() == 'all') return;
            let tagTopic = document.createElement('span');
            tagTopic.textContent = tag;
            tagElem.append(tagTopic)
        });

        index++;
    });
}