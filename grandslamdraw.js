players_List = [{ PlayerID: "#01", Team: "Roger Federer", Rank: 1 },
{ PlayerID: "#02", Team: "Rafael Nadal", Rank: 2 },
{ PlayerID: "#03", Team: "Serena Williams", Rank: 3 },
{ PlayerID: "#04", Team: "Venus Williams", Rank: 4 },
{ PlayerID: "#05", Team: "Novak Djokovic", Rank: 5 },
{ PlayerID: "#06", Team: "Frank Sedgman", Rank: 6 },
{ PlayerID: "#07", Team: "Stan Smith", Rank: 7 },
{ PlayerID: "#08", Team: "Svetlana Kuznetsova", Rank: 8 }]

function prob(t1, t2) {
    a = findingRankByUsingName(t1)
    b = findingRankByUsingName(t2)
    c = Math.round(100 / (Math.abs(a - b) + 1))
    b = c
    a = 100 - b
    probList = []
    for (d = 1; d <= 100; d++) {
        if (d <= a) {
            probList.push(t1)
        }
        else {
            probList.push(t2)
        }
    }
    ran = Math.floor(Math.random() * 100)
    a=probList[ran]
    return a
}
match = []
for (i = 0; i < players_List.length / 2; i++) {
    match.push([players_List[i].Team, players_List[players_List.length - 1 - i].Team])
}
poolA = []
poolB = []
for (i in match) {
    if (i % 2 == 0) {
        poolA.push(match[i])
    }

    else {
        poolB.push(match[i])
    }
}
for (i of poolB.reverse()) {
    poolA.push(i)
}
z = 0
winners = []
function winner() {
    leagueWinners = []
    winnerslist = []
    for (i = 0; i < poolA.length; i = i + 2) {
        l = []
        v = i + 1
        e = i + 2
        ob1 = {}
        ob2 = {}
        a = prob(poolA[i][0], poolA[i][1])
        ob1["MatchNo"] = v
        ob1["Match"] = poolA[i][0] + " vs " + poolA[i][1]
        ob1["MatchId"] = poolA[i][0].toLowerCase().slice(0, 2) + findingRankByUsingName(poolA[i][0]) + poolA[i][1].toLowerCase().slice(0, 2) + findingRankByUsingName(poolA[i][1])
        ob1["Winner"] = a
        l.push(a)
        b = prob(poolA[i + 1][0], poolA[i + 1][1])
        ob2["MatchNo"] = e
        ob2["Match"] = poolA[i + 1][0] + " vs " + poolA[i + 1][1]
        ob2["MatchId"] = poolA[i + 1][0].toLowerCase().slice(0, 2) + findingRankByUsingName(poolA[i + 1][0]) + poolA[i + 1][1].toLowerCase().slice(0, 2) + findingRankByUsingName(poolA[i + 1][1])
        ob2["Winner"] = b
        l.push(b)
        leagueWinners.push(l)
        winnerslist.push(ob1)
        winnerslist.push(ob2)
    }
    winners.push(winnerslist)
    poolA = leagueWinners
    while (poolA.length != 1) {
        winner()
    }
    if (leagueWinners.length == 1) {
        return leagueWinners
    }
    
}
// Final Round
finalRound = winner()
// Finding Rank by Player Name
function findingRankByUsingName(teamName) {
    rank = 0;
    players_List.forEach(element => {
        if (element.Team == teamName) {
            rank = element.Rank
        }
    });
    return rank
}
// Final Match
final = {}
final["MatchNo"] = "Final"
final["Match"] = finalRound[0][0] + " vs " + finalRound[0][1]
final["MatchId"] = finalRound[0][0].toLowerCase().slice(0, 2) + findingRankByUsingName(finalRound[0][0]) + finalRound[0][1].toLowerCase().slice(0, 2) + findingRankByUsingName(finalRound[0][1])
final["Winner"] = finalRound[0][Math.floor(Math.random() * 2)]
winners.push([final])
count = 1
winners.forEach(element => {
    
    console.log("Round", count)
    console.table(element)
    
    count++
});
// Finding Match Details by Match ID
function findMatchDetailsbyMatchId(str){
    winners.forEach(round => {
        for( i of round){
            if(i.MatchId==str){
                console.log(`Match Details for "${str}" MatchID`)
                console.table([i])
            }
        }        
    });
}
findMatchDetailsbyMatchId("se3fr6")
function findPlayerDetailsbyPlayerId(str){
    players_List.forEach(element => {
        if(element.PlayerID==str){
            console.log(`Player Details for "${str}" PlayerID`)
            console.table([element])
        }
    });
}
findPlayerDetailsbyPlayerId("FS6")