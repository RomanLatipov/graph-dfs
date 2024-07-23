function isPath(graph, vertexA, vertexB) {
  for(const elem in graph){
    if(graph[elem].includes(vertexB))
      return recursiveSearch(graph, vertexA, vertexB, vertexA)
  }
  
  return false;
}
function recursiveSearch(graph, vertexA, vertexB, start) {
  if (graph[vertexA].length === 0) return false;
  if (graph[vertexA].includes(vertexB)) return true;

  for(const elem of graph[vertexA]) {
    // console.log(graph[vertexA])
    if (elem !== start) {
      console.log(elem)
      if(recursiveSearch(graph, elem, vertexB, start))
        return true;
    }
  }
  return false;
}

if (require.main === module) {
  // add your own tests in here
  // let graph = {
  //   jan: ["john", "jambaby"],
  //   john: ["carl"],
  //   jambaby: [],
  //   carl: ["jambaby"],
  //   dave: []
  // };

  // console.log("Expecting: true");
  // console.log(isPath(graph, "jan", "carl"));

  // console.log("");

  // console.log("Expecting: false");
  // console.log(isPath(graph, "jan", "dave"));
  const complexGraph = {
    jan: ["john", "jambaby", "malala"],
    john: ["carl"],
    jambaby: [],
    carl: ["jambaby", "dave", "martin"],
    dave: ["jan"],
    mittens: [],
    martin: ["mittens"],
    malala: ["dave", "carl", "martin", "pirate"],
    pirate: ["shiba", "inu"],
    shiba: [],
    inu: []
  };

  console.log(isPath(complexGraph, "carl", "inu"))
}

module.exports = isPath;

// Please add your pseudocode to this file
// And a written explanation of your solution
