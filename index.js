class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    let smallWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = string.split(" ")
    let titled = []

    for(let i = 0; i < words.length; i++) {
      if ( i == 0 || !(smallWords.includes(words[i])) ) {
        titled.push(this.capitalize(words[i]))
      } else {
        titled.push(words[i])
      }
    }
    return titled.join(" ")
  }
}