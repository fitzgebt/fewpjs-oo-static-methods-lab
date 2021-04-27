class Formatter {
  //add static methods here
    static capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }

    static sanitize(string) {
      return string.replace( /[^A-Za-z0-9 '-]/g, '' )
    }

    static titleize (string) {
      let nonCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

      let stringArr = string.split(' ')

      let finalArr = []


        for (let i = 0; i < stringArr.length; i++) {
          if (i == 0) {
            finalArr.push(this.capitalize(stringArr[i]))
          } else { 
            if (nonCap.includes(stringArr[i])) {
              finalArr.push(stringArr[i])
            } else {
              finalArr.push(this.capitalize(stringArr[i]))
            }
          }
        }
        return finalArr.join(" ")
  }
}