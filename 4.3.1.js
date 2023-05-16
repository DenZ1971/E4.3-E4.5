function Own_property(obj){
  for (let key in obj){
    if (obj.hasOwnProperty(key)){
      console.log(key)
    }
  }
}
