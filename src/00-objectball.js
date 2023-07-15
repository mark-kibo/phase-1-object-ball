function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }
  
let myObj={...gameObject()};
// console.log(typeof(myObj))
function numPointsScored(playerName){
    let result;
    for (let key in myObj){
        result = myObj[key].players[`${playerName}`];
    }
    return result.points;
}

function shoeSize(playerName){
    let result;
    for (let key in myObj){
        result = myObj[key].players[`${playerName}`];
    }
    return result.shoe;
}


function teamColors(teamPlayerName){
  let result;
  for (let key in myObj){
      // console.log(myObj[key].teamName)
     if (myObj[key].teamName == teamPlayerName){
      result =myObj[key].colors;
     }
  }
  return result;
}
function teamNames(){
  let result = [];
  for (let key in myObj){
      result.push(myObj[key].teamName);
  }
  return result;
}

function playerNumbers(teamPlayerName){
  let result = [];
  for (let key in myObj){
      // console.log(myObj[key].teamName)
     if (myObj[key].teamName == teamPlayerName){
      // result.push(myObj[key].players;
      for( let player in myObj[key].players ){
        result.push(myObj[key].players[player].number);
      }
     }
  }
  return result;
}

function playerStats(playerName){
  let result ={};
  for (let key in myObj){
    result = {...myObj[key].players[playerName]};
    break;
  }
  return result;
}


function bigShoeRebounds(){
  let result;
  let max = 0;
  let playerName="";

  for (let key in myObj){
    for (let key2 in myObj[key].players){
      if(myObj[key].players[key2].shoe > max){
        max= myObj[key].players[key2].shoe 
        playerName=key2
      }
    }
    console.log(max, playerName);
    result = myObj[key].players[playerName]

    console.log(result)
    break;
}
return result.rebounds;
}


function mostPontsScored(){
  let result;
  let max = 0;
  let playerName="";

  for (let key in myObj){
    for (let key2 in myObj[key].players){
      if(myObj[key].players[key2].points > max){
        max= myObj[key].players[key2].points
        playerName=key2
      }
    }
    console.log(max, playerName);
    result = myObj[key].players[playerName]

    console.log(result)
    break;
}
return result.points;
}
function winningTeam(){
  let result;
  let max = 0;
  let team="";

  for (let key in myObj){
    for (let key2 in myObj[key].players){
      if(myObj[key].players[key2].points > max){
        max= myObj[key].players[key2].points
        playerName=key2
        team = key
      }
    }
    console.log(max, playerName);
    result = myObj[team].teamName

    console.log(result)
    console.log(team);
    
    break;
}
return result;
}


function playerWithLongestName(){
  let result;
  let max = 0;
  let playerName="";

  for (let key in myObj){
    for (let key2 in myObj[key].players){
      if(key2.length-1 > max){
        max= key2.length-1;
        playerName=key2;
      }
    }
    console.log(max, playerName);
    result = playerName;
    console.log(result)
    break;
}
return result;
}

function doesLongNameStealATon(){
  let result;
  let max = 0;
  let playerName=""
  let mykey1, mykey2;
  for (let key in myObj){
    for (let key2 in myObj[key].players){
      if(myObj[key].players[key2].steals > max){
        max= myObj[key].players[key2].steals
        playerName=key2
      }
    }
    break;
}
console.log(playerName)
if (playerName === playerWithLongestName()){
  return true;
}else{
  return false
}
}






