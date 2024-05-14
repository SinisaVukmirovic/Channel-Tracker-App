import setAriaAttrOnClick from './setAriaAttrOnClick.js';

export default function getCreatedDOMelems() {
    const topics = document.querySelectorAll('[data-topics] li');

    setAriaAttrOnClick(topics);
    
    // topics.forEach(topic => {
    //     topic.addEventListener('click', () => {
    //         topics.forEach(topic => {topic.removeAttribute('aria-current')});
    //         topic.setAttribute('aria-current', '');
    //     });
    // });
}