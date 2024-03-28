function ConditionalRender({ condition = false, children }) {
  if (condition) {
    return children;
  }
  return null;
}
export {
  ConditionalRender as C
};
