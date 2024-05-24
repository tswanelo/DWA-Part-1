import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';
import { createBookPreview } from './BookPreview.js';

let matches = books;
let page = 1;

export const setupSearchForm = () => {
    document.querySelector('[data-search-form]').addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const filters = Object.fromEntries(formData);
        const result = [];

        for (const book of books) {
            let genreMatch = filters.genre === 'any';
            if (!genreMatch) {
                genreMatch = book.genres.includes(filters.genre);
            }

            if (
                (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
                (filters.author === 'any' || book.author === filters.author) &&
                genreMatch
            ) {
                result.push(book);
            }
        }

        page = 1;
        matches = result;

        if (result.length < 1) {
            document.querySelector('[data-list-message]').classList.add('list__message_show');
        } else {
            document.querySelector('[data-list-message]').classList.remove('list__message_show');
        }

        document.querySelector('[data-list-items]').innerHTML = '';
        document.querySelector('[data-list-items]').appendChild(createBookPreview(result.slice(0, BOOKS_PER_PAGE)));

        document.querySelector('[data-list-button]').disabled = (result.length - BOOKS_PER_PAGE) <= 0;
        document.querySelector('[data-list-button]').innerHTML = `
            <span>Show more</span>
            <span class="list__remaining"> (${(result.length - BOOKS_PER_PAGE) > 0 ? (result.length - BOOKS_PER_PAGE) : 0})</span>
        `;

        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.querySelector('[data-search-overlay]').open = false;
    });

    document.querySelector('[data-search-cancel]').addEventListener('click', () => {
        document.querySelector('[data-search-overlay]').open = false;
    });

    document.querySelector('[data-header-search]').addEventListener('click', () => {
        document.querySelector('[data-search-overlay]').open = true;
        document.querySelector('[data-search-title]').focus();
    });
};
