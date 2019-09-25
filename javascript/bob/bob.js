export const hey = (message) => {
  message = message.replace(/\s+/g, "");

  if(message === "") {
    return "Fine. Be that way!";
  }
  
  if(message === message.toUpperCase() && message !== message.replace(/[A-Za-z]/g, "")) {
    if(message.endsWith("?")) {
      return "Calm down, I know what I\'m doing!";

    } else {
      return "Whoa, chill out!";
    }
  }

  if(message.endsWith("?"))
    return "Sure.";

  return "Whatever.";
};
