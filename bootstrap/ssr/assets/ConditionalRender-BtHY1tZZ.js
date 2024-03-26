function ConditionalRender({ condition = false, children }) {
  console.log(condition);
  if (condition) {
    return children;
  }
  return null;
}
export {
  ConditionalRender as C
};
