import React from 'react';

function Animator({ className, animationName }) {
    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            entry.target.classList.add({animationName})
        })
    });

    observer.observe(document.querySelector(className))
};

export default Animator;
