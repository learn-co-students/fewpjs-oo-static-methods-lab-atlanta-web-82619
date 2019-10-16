class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]+/g, '');
  }

  static titleize(string) {
    const skipWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const newString = [];
    const words = string.split(' ');
    words.forEach(word => {
      if (!skipWords.includes(word)) {
        newString.push(this.capitalize(word)) ;
      } else {
        newString.push(word);
      }
    })
    newString[0] = this.capitalize(newString[0]);
    return newString.join(' ');
  }
}