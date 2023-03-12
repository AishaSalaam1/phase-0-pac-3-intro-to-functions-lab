// function shout(string) {
//     return string;
//     // it("receives one argument and returns it in all caps",)
//   }"Hello!".toUpperCase(); // 'HELLO!'
//   function shout(string) {
//     return string.toUpperCase();
//   }
function shout(string) {
  return string.toUpperCase()
}

  function whisper(string) {
    return string.toLowerCase()
  }
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  function IsUpperCase(input) {
    return input===  shout(input);
  }
  function IsLowerCase(input) {
    return input===  whisper(input);
  }
 function sayHiToHeadphonedRoommate(string){
  if( IsLowerCase(string)){
    return "I can\'t hear you!";
  }
  else if(IsUpperCase(string)){
    return "YES INDEED!";
  }
  else if(string === "Let's have dinner together!"){
    return "I would love to!";
  }
 }
 console.log(sayHiToHeadphonedRoommate("hello!"));
 console.log(sayHiToHeadphonedRoommate("HELLO"));
 console.log(sayHiToHeadphonedRoommate("lets have dinner together"));

