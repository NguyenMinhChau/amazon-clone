const AMAZON_STORAGE = 'AMAZON_STORAGE';

const amazonStorage = {
    get() {
        return (
            JSON.parse(localStorage.getItem(AMAZON_STORAGE)) || {
                basket: [],
                user: null,
            }
        );
    },
    set(amazons) {
        localStorage.setItem(AMAZON_STORAGE, JSON.stringify(amazons));
    },
};

export { amazonStorage };
