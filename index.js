let N = 4;
let M = 3;

function checkDiagonal(mat, i, j) {
  let res = mat[i][j];
  while (++i < N && ++j < M) {
    // mismatch found
    if (mat[i][j] != res) return false;
  }
  return true;
}
function isToeplitz(mat) {
  for (let i = 0; i < M; i++) {
    if (!checkDiagonal(mat, 0, i)) return false;
  }

  for (let i = 1; i < N; i++) {
    if (!checkDiagonal(mat, i, 0)) return false;
  }
  return true;
}

let mat =[[1, 2, 3, 4],
          [5, 1, 2, 3], 
          [9, 5, 1, 5]];
matrix(mat,3,4)

function matrix(arr,N,M){

  for(let i=1;i<N;i++){
    for(let j=1;j<M;j++){
        if(arr[i][j] !== arr[i-1][j-1]){
          return console.log(false)
        }
    }
  }
  console.log(true)
}
