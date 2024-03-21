function dijkstra (graph, startNode) {
  const distances = {}
  const visited = {}
  const unvisited = {}

  // Initialize distances and unvisited nodes
  for (let node in graph) {
    distances[node] = Infinity
    unvisited[node] = graph[node]
  }

  distances[startNode] = 0

  while (Object.keys(unvisited).length > 0) {
    const currentNode = minDistanceNode(distances, unvisited)
    visited[currentNode] = true
    delete unvisited[currentNode]

    for (let neighbor in graph[currentNode]) {
      if (!visited[neighbor]) {
        const tentativeDistance =
          distances[currentNode] + graph[currentNode][neighbor]
        if (tentativeDistance < distances[neighbor]) {
          distances[neighbor] = tentativeDistance
        }
      }
    }
  }

  return console.log(distances)
}

function minDistanceNode (distances, unvisited) {
  let minNode = null
  let minDistance = Infinity

  for (let node in unvisited) {
    if (distances[node] < minDistance) {
      minNode = node
      minDistance = distances[node]
    }
  }

  return minNode
}
const graph = {
  A: { B: 4, C: 2 },

  B: { A: 4, C: 5, D: 10 },

  C: { A: 2, B: 5, D: 3 },

  D: { B: 10, C: 3 }
}
dijkstra(graph, 'A')
