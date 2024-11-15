export function getLocalStorage<T>(key: string, defaultValue: T): T {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null && stickyValue !== 'undefined'
      ? JSON.parse(stickyValue)
      : defaultValue;
  }
  
  export function setLocalStorage(key: string, value: unknown): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }