// every file in a node is module

//local
const secret_agent = "Riman";
//share
const s1 = "Rhyam";
const s2 = "Rahul";


//we dont wanna share secret, we only share s1 and s2
module.exports = {s1, s2};