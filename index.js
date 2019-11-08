class Formatter {
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]+/g, '');
  }

  static titleize(string){
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const title = [];
    let sentence = string.split(' ');

    for(let word of sentence)
      if (exceptions.includes(word)){
        title.push(word)
      } else {
        title.push(this.capitalize(word));
      }
    
    title[0] = this.capitalize(title[0]);
    return title.join(' ');
  };
}