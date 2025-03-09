function Generate(total){
  // let sum=((Math.random()*15))
  let arr=[]
  for(let i=0;i<total;i++){
    arr[i]=Math.floor(Math.random()*7)
  }
  return arr;
}
function Sum(arr){
  return arr.reduce((sum, curr)=>sum+curr, 0);
}

export {Generate, Sum}