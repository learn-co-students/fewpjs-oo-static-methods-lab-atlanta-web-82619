class Formatter {
  //add static methods here
  static capitalize(string) {
    //takes in a string and capitalizes the first letter
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    //takes in a string and removes all non-alphanumeric
    return string.replace(/[^A-Za-z0-9 '-]+/g, "")
  }

  static titleize(string) {
    // takes in a string and capitalizes all words in a sentence except 
    // the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word!

    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    const titleized = []
    let sentence = string.split(" ")

    for (let word of sentence) {
      if (!exceptions.includes(word)) {
        titleized.push(this.capitalize(word))
        } else {
          titleized.push(word)
        }
    }

    // words.forEach(word => { 
    //   if (!exceptions.includes(word)) {
    //   titleized.push(this.capitalize(word))
    //   } else {
    //     titleized.push(word)
    //   }
    // })

    titleized[0] = this.capitalize(titleized[0])
    return titleized.join(" ")
  }
}

