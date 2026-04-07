export const replaceMongoIdInArray = (array) => {
  const mappedArray = array.map(item => {
    return {
      id: item._id.toString(),
      ...item
    }
  }).map(({ _id, ...rest }) => rest);

  return mappedArray;
}

export const replaceMongoIdInObject = (obj) => {
  if (!obj) return null;
  const { _id, ...updatedObj } = obj;
  return { ...updatedObj, id: _id ? _id.toString() : null };
};

