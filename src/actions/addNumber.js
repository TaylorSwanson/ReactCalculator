export function addNumber(payload) {
  return { type: "ADD_NUMBER", payload }
};

export function applyOperation(payload) {
  return { type: "APPLY_OPERATION", payload };
};

export function clearNumber() {
  return { type: "CLEAR_NUMBER" };
};
