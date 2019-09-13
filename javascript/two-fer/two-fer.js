export const twoFer = (name) => {
  const finalName = (name === undefined || name === '') ? 'you' : name;

  return `One for ${finalName}, one for me.`;
};
