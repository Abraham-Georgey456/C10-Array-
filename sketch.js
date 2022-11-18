var weight = [44,55,66,77]
function setup() 
{
  createCanvas(400,400);
  var sum = weight[0]+weight[1]+weight[2]+weight[3];
  var avg = sum/weight.length;
  console.log(weight);
  console.log(sum);
  console.log(avg);
}

function draw() 
{
background(51);

}

