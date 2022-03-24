export const findIcon = (items, type) => {
   const item = items.find((item) => item.name === type);
   return item.icon;
};
