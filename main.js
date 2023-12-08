let ball = document.getElementById('float-circle');

//Function for rising the ball 
function up(){
  ball.style.bottom = '450px'
};

// Event Handler for up() function
document.onkeydown = up;

//Function for lowering the ball 
function down(){
 ball.style.bottom = '50px'
};

// Event Handler for down() function
document.onkeyup = down;
