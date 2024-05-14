export default function setAriaAttrOnClick(topics) {
    topics.forEach(topic => {
        topic.addEventListener('click', () => {
            topics.forEach(topic => {topic.removeAttribute('aria-current')});
            topic.setAttribute('aria-current', '');
        });
    });
}