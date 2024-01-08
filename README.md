# Higher-order components

- A function that take a component as an argument and return the component
- use of higher-order components is it takes a component as an argument and do the little modification and return a component(example: you tube first card u can see ad card in you tube website)

# Debouncing

- suppose lets take search in flipkart if u see there when u type any letter in search it won't make an api call on each key stroke
- it will call an api dependence on that time u have taken between each keystore
- why should we give suggestion because its users better experience and if user typing slowly means he is expecing suggestion so we can show them suggestions
- so using debouncing we can restrict api call for sometime
- it increase app performence and its a huge optimization
- because for 1 user your restricing api call based on time so assume there are lakhs of people using your api call then how many api calls you are avoiding so try to avoid call api each time ASAP

# LRU cache

- how to check alternative of object.assign
- we can only restrict our cache upto 100 as soon as it reaches 100 start removing from top

# live chat challanges

- get data live(data layer challenge)
- update data UI(Ui layer challenge)

- you have to update your UI efficienet way
- also u have to give better user experience

# 1.web sockets

- websocket connection 2 servers connect to each other now they can send data anytime they want to initial connection takes little time but once connection is setup its like handshake

- its for 2 way connections
- it creates handshake once u create handshake u can quikly send data from either sides
- its bi-directional
- it has no reqular interval means it can send data anytime

# 2. Api polling(long polling)

- its uni-directional (Ui keep pulling data each second or after 10 seconds from server)
- it has reqular intervals
