export function storeState(state: { [key: string]: any }, key: string) {
  const newState = JSON.stringify(state);
  localStorage.setItem(key, newState);
}

interface retrieveStateType {
  [key: string]: any;
}

export function retrieveState(key: string): retrieveStateType {
  const newState = localStorage.getItem(key) || "{}";

  return JSON.parse(newState) || {};
}
