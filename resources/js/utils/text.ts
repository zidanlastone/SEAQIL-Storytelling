
export function getAcronym(inputString: string) {
  const words = inputString.split(" ");
  if(words.length < 2){
    return inputString;
  }
  
  return words.map(word => word.charAt(0)).join('');
}