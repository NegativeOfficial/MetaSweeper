export function generateBombs(n = 0, layer = [[]]){
    let res = layer
    let values = []
    for (var i = 0; i < layer.length * layer[0].length; i++){
        values.push(i)
    }

    for (let i = 0; i < n; i++){
        let x = values.splice(Math.random()*values.length,1)[0]
        layer[(x - x % layer[0].length) / layer.length][x % layer[0].length] = 'B'
    }
    return res
}
