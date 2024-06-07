import { authors } from './data.js';

export const createBookPreview = (books) => {
    const fragment = document.createDocumentFragment();
    for (const { author, id, image, title } of books) {
        const element = document.createElement('button');
        element.classList = 'preview';
        element.setAttribute('data-preview', id);

        element.innerHTML = `
            <img class="preview__image" src="${image}" />
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `;

        fragment.appendChild(element);
    }
    return fragment;
};
