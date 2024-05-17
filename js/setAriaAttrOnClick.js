import changeTitleText from './changeTitleText.js';

export default function setAriaAttrOnClick(topics) {
    topics.forEach(topic => {
        topic.addEventListener('click', () => {
            topics.forEach(topic => {topic.removeAttribute('aria-current')});
            topic.setAttribute('aria-current', '');

            const selectedTopicText = topic.textContent;
            changeTitleText(selectedTopicText);
        });

        // simulate mouse click on enter key press on focused elems
        topic.addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
                e.target.click();
            }
        });
    });
}