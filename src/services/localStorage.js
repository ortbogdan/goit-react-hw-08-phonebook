const KEY = "contacts";

export const getItemsForStorage = () => {
  const savedContacts = JSON.parse(window.localStorage.getItem(KEY)) ?? [];
  if (Array.isArray(savedContacts)) {
    return savedContacts;
  }
  return;
};

export const setItemToStorage = (item, prewItems = []) => {
  window.localStorage.setItem(KEY, JSON.stringify([item, ...prewItems]));
};
