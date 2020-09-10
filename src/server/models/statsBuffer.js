const buffer = [];

export const add = (data) => {
  buffer.push(data);
};

export const get = () => buffer;
