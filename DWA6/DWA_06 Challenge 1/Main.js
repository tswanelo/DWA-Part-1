import { createBookList } from './BookList.js';
import { createGenresOption } from './GenresOption.js';
import { setupSearchForm } from './SearchForm.js';
import { books, BOOKS_PER_PAGE } from './data.js';

// Initialize the book list and genres options
createBookList();
createGenresOption();
setupSearchForm();

// Set the theme based on user preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.querySelector('[data-settings-theme]').value = 'night';
    document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
    document.documentElement.style.setProperty('--color-light', '10, 10, 20');
} else {
    document.querySelector('[data-settings-theme]').value = 'day';
    document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
    document.documentElement.style.setProperty('--color-light', '255, 255, 255');
}

// Initialize the "Show more" button
document.querySelector('[data-list-button]').innerText = `Show more (${books.length - BOOKS_PER_PAGE})`;
document.querySelector('[data-list-button]').disabled = (books.length - BOOKS_PER_PAGE) <= 0;
document.querySelector('[data-list-button]').innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${(books.length - BOOKS_PER_PAGE) > 0 ? (books.length - BOOKS_PER_PAGE) : 0})</span>
`;

// Event listeners for various interactions
document.querySelector('[data-settings-cancel]').addEventListener('click', () => {
    document.querySelector('[data-settings-overlay]').open = false;
});

document.querySelector('[data-header-settings]').addEventListener('click', () => {
    document.querySelector('[data-settings-overlay]').open = true;
});

document.querySelector('[data-list-close]').addEventListener('click', () => {
    document.querySelector('[data-list-active]').open = false;
});

document.querySelector('[data-settings-form]').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { theme } = Object.fromEntries(formData);

    if (theme === 'night') {
        document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
        document.documentElement.style.setProperty('--color-light', '10, 10, 20');
    } else {
        document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
        document.documentElement.style.setProperty('--color-light', '255, 255, 255');
    }

    document.querySelector('[data-settings-overlay]').open = false;
});
