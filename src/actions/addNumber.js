export function addNumber(payload) {
  return { type: "ADD_NUMBER", payload }
};

export function clearNumber() {
  return { type: "CLEAR_NUMBER" }
};