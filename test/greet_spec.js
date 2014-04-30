var greet = require("../src/index.coffee")
  , name = "Chao"
  , drunkSentence = ", you look sexy today";

describe('greet',function(){
  it("should greet a preson by name",function(){
    expect("hello, " + name).to.eql(greet(name));
  });
  it("should greet a preson by flitatiously if drunk",function(){
    expect("hello, " + name + drunkSentence).to.eql(greet(name,true));
  });
});
