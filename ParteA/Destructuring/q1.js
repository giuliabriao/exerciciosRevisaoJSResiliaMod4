//Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código

                //ANTES
// function handleMouseMove(event) {
//   const clientX = event.clientX;
//   const clientY = event.clientY;
//   console.log(clientX, clientY);
// }

function handleMouseMove(event) {
    const [clientX, clientY] = event
    console.log(clientX, clientY);
}