export function storeState(state: { [key: string]: any }) {
  const newState = JSON.stringify(state);
  localStorage.setItem("state", newState);
}

interface retrieveStateType {
  [key: string]: any;
}

export function retrieveState(): retrieveStateType {
  const newState = localStorage.getItem("state") || "{}";

  return JSON.parse(newState) || {};
}
