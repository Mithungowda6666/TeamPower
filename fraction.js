function input()
{
  let a=parseInt(prompt("enter the 1st number"));
  let b=parseInt(prompt("enter the 2nd number"));
  return[a,b];
}

function sub(a,b) {
  return a-b;
}

function output(a,b,c)
{
  console.log("%d - %d is %d",a,b,c);
}
function main()
{
  let a,b;
  [a,b]=input();
  let c = sub(a,b);
  output(a,b,c);
}
  main();
