const randomFloat = (min, max) => {
    return Math.random() * (max - min + 1) + min;
  };

export default { randomFloat };