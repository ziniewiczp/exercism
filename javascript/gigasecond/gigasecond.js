export const gigasecond = (date) => {
    const dateInMs = date.getTime();
    const gigasecondInMs = Math.pow(10,9) * 1000;
    
    return new Date(dateInMs + gigasecondInMs);
}