export const convertTimestamp = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const options = { 
    day: '2-digit', 
    month: 'long', 
    year: 'numeric' 
  };
  
  return date.toLocaleDateString('en-GB', options);
};

