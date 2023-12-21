export default function returnHowManyArguments(...restParameter) {
  let i = 0;
  restParameter.forEach(function(currentValue) {
    i++;
  });
  return i;
}
