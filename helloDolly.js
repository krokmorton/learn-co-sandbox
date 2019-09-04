function say(greeting, firstName) {
  console.log('I was called!')
  return`${greeting}, ${firstName}!`
}

say("Hello"," Dolly")
say("Goodbye", "Earl")

