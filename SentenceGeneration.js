let sentenceBuilder={
  
  subject:"I",
  verb:"am",
  object:"coding",
  buildsentence:function(){
  return(this.subject&&this.verb&&this.object)
  ?`${this.subject} ${this.verb} ${this.object}`
  :"Incomplete sentence";
},
updateProperty(property,value){
  return(this.hasOwnProperty(property))
  ?(this[property]=value,"Property Updated")
  :"Invalid Property"
}
}
console.log(sentenceBuilder.buildsentence());
sentenceBuilder.updateProperty("verb","am learning javascript")
console.log(sentenceBuilder.buildsentence());
console.log(sentenceBuilder.updateProperty("happy","new"));
sentenceBuilder.updateProperty("verb","")
console.log(sentenceBuilder.buildsentence());