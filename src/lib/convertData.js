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

export const cleanMongoData = (data) => {
  if (!data) return data;

  if (Array.isArray(data)) {
    return data.map(item => cleanMongoData(item));
  }

  if (typeof data === "object") {
    const newObj = {};

    for (const key in data) {
      let value = data[key];

      if (key === "_id") {
        newObj.id = value ? value.toString() : null;
        continue;
      }

      if (value?.type === "Buffer" && Array.isArray(value.data)) {
        value = Buffer.from(value.data).toString("base64");
      }

      newObj[key] = cleanMongoData(value);
    }

    return newObj;
  }

  return data;
};