export const hey = (message) => {
  message = message.replace(/\s+/g, "");

  if(message === "")
    return "Fine. Be that way!";
  
  if(message !== message.replace(/[A-Za-z]/g, "") && message === message.toUpperCase())
    return (message.endsWith("?")) ? "Calm down, I know what I\'m doing!" : "Whoa, chill out!";

  if(message.endsWith("?"))
    return "Sure.";

  return "Whatever.";
};
