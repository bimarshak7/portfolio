export function WinCheck(board,turn){
    //const turn=props.turn;
    //const board=props.board;
    const combn=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [2,4,6]
            ];
    for(let i=0;i<combn.length;i++){
        let match=combn[i];
        if (board[match[0]]===board[match[1]] && board[match[2]]===board[match[0]] && board[match[0]]===turn){
            return true;
        }
    }
    return false;
}

export function pcMove(board){
    let possible=[];
    for (let i=0;i<9;i++){
        if (board[i]===null){
            possible.push(i);
        }
    }
    for(let plr of ["O","X"]){
        for (let pos of possible){
            let copy={...board};
            copy[pos]=plr;
            if (WinCheck(copy,plr)){
                return pos;
            }          
        }
    }
    


    let corners=possible.filter(x=>[0,2,6,8].includes(x));
    let edge=possible.filter(x=>[1,3,5,7].includes(x));
   //console.log(corners,edge)
    if (corners.length>0)
        return corners[Math.floor(Math.random() * corners.length)]

    else if (4 in possible)
        return 4
    else 
        return edge[Math.floor(Math.random() * edge.length)]

    
}