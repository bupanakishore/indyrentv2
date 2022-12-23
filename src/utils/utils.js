export const renameKeys = (keysMap, obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    const renamedObject = {
      [keysMap[key] || key]: obj[key],
    };

    return {
      ...acc,
      ...renamedObject,
    };
  }, {});
};
