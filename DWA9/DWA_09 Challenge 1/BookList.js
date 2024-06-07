import { books, authors, BOOKS_PER_PAGE } from './data.js';
import { createBookPreview } from './BookPreview.js';

let page = 1;
let matches = books;

export const createBookList = () => {
    const starting = createBookPreview(matches.slice(0, BOOKS_PER_PAGE));
    document.querySelector('[data-list-items]').appendChild(starting);
};

document.querySelector('[data-list-button]').addEventListener('click', () => {
    const fragment = createBookPreview(matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE));
    document.querySelector('[data-list-items]').appendChild(fragment);
    page += 1;
});

document.querySelector('[data-list-items]').addEventListener('click', (event) => {
    const pathArray = Array.from(event.composedPath ? event.composedPath() : event.path);
    let active = null;

    for (const node of pathArray) {
        if (active) break;
        if (node?.dataset?.preview) {
            let result = null;
            for (const singleBook of books) {
                if (result) break;
                if (singleBook.id === node?.dataset?.preview) result = singleBook;
            }
            active = result;
        }
    }

    if (active) {
        document.querySelector('[data-list-active]').open = true;
        document.querySelector('[data-list-blur]').src = active.image;
        document.querySelector('[data-list-image]').src = active.image;
        document.querySelector('[data-list-title]').innerText = active.title;
        document.querySelector('[data-list-subtitle]').innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
        document.querySelector('[data-list-description]').innerText = active.description;
    }
});
