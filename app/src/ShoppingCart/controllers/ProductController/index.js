export const isDisabled = (quantity) => {
  const disabled = quantity > 0 ? '' : 'disabled';
  return disabled;
};
export const getButtonContent = (quantity) => {
  const content = quantity > 0 ? 'Add to cart' : 'Sold Out';
  return content;
};
