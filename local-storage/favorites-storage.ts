const FAVORITES_KEY = "favorite_ids";

export function saveFavoritesToStorage(ids: string[]) {
  if (typeof window === "undefined") return;

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
}

export function getFavoritesFromStorage() {
  if (typeof window === "undefined") return [];

  const res = localStorage.getItem(FAVORITES_KEY);
  if (!res) return [];

  try {
    const parsed = JSON.parse(res);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
export function clearFavoritesFromStorage() {
  if (typeof window === "undefined") return;

  localStorage.removeItem(FAVORITES_KEY);
}
