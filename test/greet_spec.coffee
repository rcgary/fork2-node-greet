greet = require("../lib/index")
name = "Chao"
drunkSentence = ", you look sexy today"
describe "greet", ->
  it "should greet a preson by name", ->
    expect("hello, " + name).to.eql greet(name)
    return

  it "should greet a preson by flitatiously if drunk", ->
    expect("hello, " + name + drunkSentence).to.eql greet(name, true)
    return

  return

