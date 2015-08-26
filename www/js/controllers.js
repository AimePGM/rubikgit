angular.module('rubikApp.controllers', [])

.service('cubeService', function() {
  this.usingCube = new Cube();
  this.solvedCube = new Cube();
  this.cubeFromDetect = function(str){
    this.usingCube = Cube.fromString(str);
  }

  this.currentSolveAlgo = [];
  this.currentSolveAlgoForMoveRubik = [];
  this.currentSolveAlgoReverse = [];
  this.currentSolveAlgoForMoveRubikReverse = [];
  this.currentInitTime = 0;

  this.convertTwoToOneAlgo = function(algorithm){
    var alg = "";
    for (var i = 0 ; i < algorithm.length ; i++) {
      if(algorithm.charAt(i)=='2'){
        alg += " "+algorithm.charAt(i-1);
      }
      else if(algorithm.charAt(i)==' '){
        alg += " ";
      }
      else{
        alg += algorithm.charAt(i);
      }
      
    };

    var reversealg = Cube.inverse(alg);
    return reversealg;
  }

  this.convertAlgoStrToArr = function(algorithm,type){
          var alg = algorithm;
          if(type=="reverse"){
            alg = this.convertTwoToOneAlgo(alg);
             alg = alg.replace(/\s+/g, '');
          }
          else{
            alg = alg.replace(/\s+/g, '');
          }
          
          console.log(alg);

          

          var solvearr = [];
          var formove = [];
          var j = 0;
          for (var i = 0; i < alg.length; i++) {
            if(alg.charAt(i)!='2' && alg.charAt(i)!='\''){
              solvearr[j] = alg.charAt(i);
              formove[j] = alg.charAt(i);
              j++;
            }
            else if(alg.charAt(i)=='2'){
              solvearr[j] = solvearr[j-1];
              formove[j] = formove[j-1]
              j++;
            }
            else if(alg.charAt(i)=='\''){
              var temp = solvearr[j-1];
              temp +="i";
              solvearr[j-1] = temp;
              temp = formove[j-1];
              temp +="\'";
              formove[j-1] = temp;
            }
          };
          if(type=="normal"){
            this.currentSolveAlgo = solvearr;
            this.currentSolveAlgoForMoveRubik = formove;
          }
          else if (type=="reverse"){
            this.currentSolveAlgoReverse = solvearr;
            this.currentSolveAlgoForMoveRubikReverse = formove;
          }
  }

  

  this.randomCube = function(cube){
    cube.randomize();
  }

  this.sides = [
    {
        side: 'up',
        divid: [
          { text: 'udiv1' },
          { text: 'udiv2' },
          { text: 'udiv3' },
          { text: 'udiv4' },
          { text: 'udiv5' },
          { text: 'udiv6' },
          { text: 'udiv7' },
          { text: 'udiv8' },
          { text: 'udiv9' },
        ]
      },
      {
        side: 'right',
        divid: [
          { text: 'rdiv1' },
          { text: 'rdiv2' },
          { text: 'rdiv3' },
          { text: 'rdiv4' },
          { text: 'rdiv5' },
          { text: 'rdiv6' },
          { text: 'rdiv7' },
          { text: 'rdiv8' },
          { text: 'rdiv9' },
        ]
      },
      {
        side: 'front',
        divid: [
          { text: 'fdiv1' },
          { text: 'fdiv2' },
          { text: 'fdiv3' },
          { text: 'fdiv4' },
          { text: 'fdiv5' },
          { text: 'fdiv6' },
          { text: 'fdiv7' },
          { text: 'fdiv8' },
          { text: 'fdiv9' },
        ]
      },
       {
        side: 'down',
        divid: [
          { text: 'ddiv1' },
          { text: 'ddiv2' },
          { text: 'ddiv3' },
          { text: 'ddiv4' },
          { text: 'ddiv5' },
          { text: 'ddiv6' },
          { text: 'ddiv7' },
          { text: 'ddiv8' },
          { text: 'ddiv9' },
        ]
      },
      {
        side: 'left',
        divid: [
          { text: 'ldiv1' },
          { text: 'ldiv2' },
          { text: 'ldiv3' },
          { text: 'ldiv4' },
          { text: 'ldiv5' },
          { text: 'ldiv6' },
          { text: 'ldiv7' },
          { text: 'ldiv8' },
          { text: 'ldiv9' },
        ]
      },
      {
        side: 'back',
        divid: [
          { text: 'bdiv9' },
          { text: 'bdiv8' },
          { text: 'bdiv7' },
          { text: 'bdiv6' },
          { text: 'bdiv5' },
          { text: 'bdiv4' },
          { text: 'bdiv3' },
          { text: 'bdiv2' },
          { text: 'bdiv1' },
        ]
      },
      ]

  this.buildRubik = function(cube){

      var pane = 1;
      var divid = 1;
      for (var i = 0; i < cube.length; i++) {
      //console.log('i='+(i+1)+'  side = '+cube.charAt(i) + '  pane='+pane+'   divid='+divid)
      if(pane == 1){
        if(cube.charAt(i) == "U") document.getElementById('udiv'+divid).style.backgroundColor = '#5882FA'; //blue
        else if (cube.charAt(i) == "D") document.getElementById('udiv'+divid).style.backgroundColor = '#33cd5f'; //green
        else if (cube.charAt(i) == "L") document.getElementById('udiv'+divid).style.backgroundColor = '#FAAC58'; //orange
        else if (cube.charAt(i) == "R") document.getElementById('udiv'+divid).style.backgroundColor = '#FA5858'; //red
        else if (cube.charAt(i) == "F") document.getElementById('udiv'+divid).style.backgroundColor = 'white';
        else if (cube.charAt(i) == "B") document.getElementById('udiv'+divid).style.backgroundColor = '#F4FA58'; //yellow
        else document.getElementById('udiv'+divid).style.backgroundColor = 'black';
    } else if(pane == 2){
        if(cube.charAt(i) == "U") document.getElementById('rdiv'+divid).style.backgroundColor = '#5882FA'; //blue
        else if (cube.charAt(i) == "D") document.getElementById('rdiv'+divid).style.backgroundColor = '#33cd5f'; //green
        else if (cube.charAt(i) == "L") document.getElementById('rdiv'+divid).style.backgroundColor = '#FAAC58'; //orange
        else if (cube.charAt(i) == "R") document.getElementById('rdiv'+divid).style.backgroundColor = '#FA5858'; //red
        else if (cube.charAt(i) == "F") document.getElementById('rdiv'+divid).style.backgroundColor = 'white';
        else if (cube.charAt(i) == "B") document.getElementById('rdiv'+divid).style.backgroundColor = '#F4FA58'; //yellow
        else document.getElementById('rdiv'+divid).style.backgroundColor = 'black';

    }else if (pane == 3){
        if(cube.charAt(i) == "U") document.getElementById('fdiv'+divid).style.backgroundColor = '#5882FA'; //blue
        else if (cube.charAt(i) == "D") document.getElementById('fdiv'+divid).style.backgroundColor = '#33cd5f'; //green
        else if (cube.charAt(i) == "L") document.getElementById('fdiv'+divid).style.backgroundColor = '#FAAC58'; //orange
        else if (cube.charAt(i) == "R") document.getElementById('fdiv'+divid).style.backgroundColor = '#FA5858'; //red
        else if (cube.charAt(i) == "F") document.getElementById('fdiv'+divid).style.backgroundColor = 'white';
        else if (cube.charAt(i) == "B") document.getElementById('fdiv'+divid).style.backgroundColor = '#F4FA58'; //yellow
        else document.getElementById('fdiv'+divid).style.backgroundColor = 'black';
    }else if (pane == 4){

        if(cube.charAt(i) == "U") document.getElementById('ddiv'+divid).style.backgroundColor = '#5882FA'; //blue
        else if (cube.charAt(i) == "D") document.getElementById('ddiv'+divid).style.backgroundColor = '#33cd5f'; //green
        else if (cube.charAt(i) == "L") document.getElementById('ddiv'+divid).style.backgroundColor = '#FAAC58'; //orange
        else if (cube.charAt(i) == "R") document.getElementById('ddiv'+divid).style.backgroundColor = '#FA5858'; //red
        else if (cube.charAt(i) == "F") document.getElementById('ddiv'+divid).style.backgroundColor = 'white';
        else if (cube.charAt(i) == "B") document.getElementById('ddiv'+divid).style.backgroundColor = '#F4FA58'; //yellow
        else document.getElementById('ddiv'+divid).style.backgroundColor = 'black';

    }else if (pane == 5){
        if(cube.charAt(i) == "U") document.getElementById('ldiv'+divid).style.backgroundColor = '#5882FA'; //blue
        else if (cube.charAt(i) == "D") document.getElementById('ldiv'+divid).style.backgroundColor = '#33cd5f'; //green
        else if (cube.charAt(i) == "L") document.getElementById('ldiv'+divid).style.backgroundColor = '#FAAC58'; //orange
        else if (cube.charAt(i) == "R") document.getElementById('ldiv'+divid).style.backgroundColor = '#FA5858'; //red
        else if (cube.charAt(i) == "F") document.getElementById('ldiv'+divid).style.backgroundColor = 'white';
        else if (cube.charAt(i) == "B") document.getElementById('ldiv'+divid).style.backgroundColor = '#F4FA58'; //yellow
        else document.getElementById('ldiv'+divid).style.backgroundColor = 'black';

    }else if (pane == 6){
        if(cube.charAt(i) == "U") document.getElementById('bdiv'+divid).style.backgroundColor = '#5882FA'; //blue
        else if (cube.charAt(i) == "D") document.getElementById('bdiv'+divid).style.backgroundColor = '#33cd5f'; //green
        else if (cube.charAt(i) == "L") document.getElementById('bdiv'+divid).style.backgroundColor = '#FAAC58'; //orange
        else if (cube.charAt(i) == "R") document.getElementById('bdiv'+divid).style.backgroundColor = '#FA5858'; //red
        else if (cube.charAt(i) == "F") document.getElementById('bdiv'+divid).style.backgroundColor = 'white';
        else if (cube.charAt(i) == "B") document.getElementById('bdiv'+divid).style.backgroundColor = '#F4FA58'; //yellow
        else document.getElementById('bdiv'+divid).style.backgroundColor = 'black';

    }else{
      console.log('no pane');
    }
      
      
      
      if((i+1)%9 == 0) {pane++; divid=1;}
      else divid++;
    };

  }

  
})

.controller('InitCtrl', function($scope,$location) {
   
  $scope.go = function ( path ) {
    $location.path( path );
  };


  
  
  
})
.controller('ResetCtrl', function($scope,cubeService,$window) {

    $scope.imgpath = 'img/loading.gif';
   
    // reset using cube to init state
        cubeService.usingCube = Cube.fromString("UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB");
        console.log('reset cube : completed');
        console.log(cubeService.usingCube.asString());

        // reset algo
        cubeService.currentSolveAlgo = [];
        console.log('solve algo : completed');
        console.log(cubeService.currentSolveAlgo);

        cubeService.currentSolveAlgoForMoveRubik = [];
        console.log('solve algo for move rubik : completed');
        console.log(cubeService.currentSolveAlgoForMoveRubik);


        // reset reverse algo
        cubeService.currentSolveAlgoReverse = [];
        console.log('solve algo reverse : completed');
        console.log(cubeService.currentSolveAlgoReverse);
        cubeService.currentSolveAlgoForMoveRubikReverse = [];
        console.log('solve algo reverse for move rubik : completed');
        console.log(cubeService.currentSolveAlgoForMoveRubikReverse);

    setTimeout(function(){
    

        $window.location.href='#/init';


    }, 2000); 

    //  // delay animation
    // var dots = window.setInterval( function() {
    // var wait = document.getElementById("wait");
    // if ( wait.innerHTML.length > 3 ) 
    //     wait.innerHTML = "";
    // else 
    //     wait.innerHTML += ".";
    // }, 300);
  
  
  
})
.controller('DetectorCtrl', function($scope, cubeService,$location) {

  

  //go to selected mode
  $scope.go = function ( path ) {
  $location.path( path );
};
  
  $scope.imgpath = 'img/loading.gif';

    //detector delay
    var delay=3000; //3 seconds

    //build cube div
    $scope.sides = cubeService.sides;
 

    // //generate a cube
    // var c = cubeService.usingCube;
    // console.log('new cube: '+c.asString());

    // // random a cube
    // cubeService.randomCube(c);
    // console.log('random cube: '+c.asString());
  
  //testing
  var str = "DULRUFDBRBLFRRDDFBBLDFFBUFRRUFUDRLDULDLLLDUBFURFLBURBB";
  cubeService.cubeFromDetect(str);
  var c = cubeService.usingCube;
  console.log('c using cube : '+ c.asString());


  // animate the cube
  $scope.showFront = function (){
    document.getElementById("cube").className = "show-front";
  }
  $scope.showBack = function (){
    document.getElementById("cube").className = "show-back";
  }
  $scope.showRight = function (){
    document.getElementById("cube").className = "show-right";
  }
  $scope.showLeft = function (){
    document.getElementById("cube").className = "show-left";
  }
  $scope.showUp = function (){
    document.getElementById("cube").className = "show-up";
  }
  $scope.showDown = function (){
    document.getElementById("cube").className = "show-down";
  }


  // after delay
    setTimeout(function(){
        cubeService.buildRubik(c.asString());
        $('.top-to-middle-loading').hide();
        $('.loading-cube-img').hide();
        $('#detectstatus').hide();
        $('.top-to-middle-btn').show();
        $('.cube-wrapper').show();
        $('.option-selector-wrapper').show();
    }, delay);  

    // // delay animation
    // var dots = window.setInterval( function() {
    // var wait = document.getElementById("wait");
    // if ( wait.innerHTML.length > 3 ) 
    //     wait.innerHTML = "";
    // else 
    //     wait.innerHTML += ".";
    // }, 300);

  
})
.controller('SolverCtrl', function($scope,cubeService,$window) {
   $scope.imgpath = 'img/loading.gif';
  
   var start, progressHandle;
   var c = cubeService.usingCube;
   
   console.log(c.asString());
   // Start measuring time
      start = new Date;
  
    
  // Start adding dots
      progressHandle = setInterval(progress, 1000);

    var progress = function() {
        // Add a dot each second
        var dots = window.setInterval( function() {
        var wait = document.getElementById("wait");
        if ( wait.innerHTML.length > 3 ) 
            wait.innerHTML = "";
        else 
            wait.innerHTML += ".";
        }, 300);
        
    };
    
  

    Cube.asyncInit('../www/lib/worker.js', function() {
    // Initialized
    console.log('Cube c : '+c.asString());

    Cube._asyncSolve(c, function(algorithm) {
          clearInterval(progressHandle);
          var end = new Date,
          duration = (end - start) / 1000;
          cubeService.currentInitTime = duration;
          console.log(cubeService.currentInitTime);
          console.log(algorithm);
          cubeService.convertAlgoStrToArr(algorithm,"normal");
          $window.location.href='#/showsolve';
        });
    });

})
.controller('TutorCtrl', function($scope,cubeService,$window,$http) {
  $scope.imgpath = 'img/loading.gif';
  var workerpath = 'lib/worker.js';
   var start, progressHandle;
   var c = cubeService.usingCube;
   
   console.log(c.asString());
   // Start measuring time
      start = new Date;

    //    // delay animation
    // var dots = window.setInterval( function() {
    // var wait = document.getElementById("wait");
    // if ( wait.innerHTML.length > 3 ) 
    //     wait.innerHTML = "";
    // else 
    //     wait.innerHTML += ".";
    // }, 300);
  

    Cube.asyncInit(workerpath, function() {
    // Initialized
    console.log('Cube c : '+c.asString());

    Cube._asyncSolve(c, function(algorithm) {
          clearInterval(progressHandle);
          var end = new Date,
          duration = (end - start) / 1000;
          cubeService.currentInitTime = duration;
          console.log(cubeService.currentInitTime);
          console.log(algorithm);
          cubeService.convertAlgoStrToArr(algorithm,"normal");
          cubeService.convertAlgoStrToArr(algorithm,"reverse");

         

   
          $window.location.href='#/showtutor';
        });
    });
  
  
})
.controller('ShowSolveCtrl', function($scope,cubeService,$location) {
     // go to other page
    $scope.go = function ( path ) {
      $location.path( path );
    };
    
    // get the current rubik cube
    var c = cubeService.usingCube;

    // normal move
    // get the current algorithm
    var alg = cubeService.currentSolveAlgo;
    // get the current algorithm array for moving rubik
    var formove = cubeService.currentSolveAlgoForMoveRubik;

    // get initialzation time
    $scope.initTime = cubeService.currentInitTime;

    // communicate with view
    $scope.moves = alg;
    $scope.movenum = alg.length;
    
    var i = 0;

    $scope.startsolve = function(){
    startTimer();
    function startTimer() {    
         setTimeout(function(){
          console.log('move : '+(i+1));
          if(i == alg.length){
            $('#startbtn').hide();
            $('#start').hide();
            $('#move'+(i)).hide();
            $('#finish').show();
            console.log('finished!');
            console.log('cube is solved? : '+c.isSolved());
          }
          
          else if(i < alg.length){
            if(i!=0){
              $('#move'+(i)).hide();
            }
            $('#startbtn').hide();
            $('#start').hide();
            $('#finish').hide();
            $('#move'+(i+1)).show();
            c.move(formove[i]);
            console.log('rubik move : '+formove[i]);
            i++;
            startTimer();
         
          }
        

         }, 3000);
       }

    }

  
})
.controller('ShowTutorCtrl', function($scope,cubeService,$location,$http) {

    // go to other page
    $scope.go = function ( path ) {
      $location.path( path );
    };
    
    // get the current rubik cube
    var c = cubeService.usingCube;

    // normal move
    // get the current algorithm
    var alg = cubeService.currentSolveAlgo;
    // get the current algorithm array for moving rubik
    var formove = cubeService.currentSolveAlgoForMoveRubik;

    //reverse move
    // get the current reverse algorithm 
    var algin = cubeService.currentSolveAlgoReverse;
     // get the current algorithm array for moving rubik reversely
    var formovein = cubeService.currentSolveAlgoForMoveRubikReverse;
    
    console.log(alg);
    console.log(algin);

    // get initialzation time
    $scope.initTime = cubeService.currentInitTime;

    // communicate with view
    $scope.moves = alg;
    $scope.movenum = alg.length;

    // current cube state
    console.log('init state : '+c.asString());

    var move = 0;         // move index
    var count = 0;        // count++ if at finish

    $scope.nextmove = function(){

      // at last move and at finish
      if ((move) == alg.length || (move) == (alg.length+1)){
        if(count==0){
          move++;
          count++;
        }
        // hide forward backward btn
        $('#premovebtn').hide(); 
        $('#nextmovebtn').hide();
        console.log('finished! move: ' +move);


        $('#move'+(move-1)).hide();     // hide last move img
        $('#finish').show();            // show finish
        $('#start').hide();             // hide start div
        console.log('at finish cube is solve? :'+c.isSolved());   // solve?
      }
      else{
        if (move==0) {
         
          $('#start').hide();
          $('#finish').hide();
          c.move(formove[move]);        // move at formove[0]
          // console.error("Debug : "+alg[move]);
          $http.get('http://localhost:8000/cgi-bin/testbluetooth.py?move='+alg[move])
            .success(function(data){
              
              console.log('successfully access json file from python cgi');
             
            })
            .error(function(data, headers){
              console.log(data);
              console.log(headers);
            });


          move++;
          $('#move'+(move)).show();     // show move img step 1
          $('#premovebtn').show();      // show backward btn
          console.log('forward btn click // show move: '+move+' '+alg[move-1]
            +' // rubik move: '+move+' '+alg[move-1]); 
          console.log('cube now : '+c.asString());
          
          
        }

        else{
          c.move(formove[move]);        // move at formove[index]
          // console.error("Debug : "+alg[move]);
          $http.get('http://localhost:8000/cgi-bin/testbluetooth.py?move='+alg[move])
            .success(function(data){
              
              console.log('successfully access json file from python cgi');
             
            })
            .error(function(data, headers){
              console.log(data);
              console.log(headers);
            });
          move++;
          $('#premovebtn').show();
          $('#finish').hide();
          $('#move'+(move-1)).hide();   // hide move img step index
          $('#move'+(move)).show();     // show move img step index+1
          console.log('forward btn click // show move: '+move+' '+alg[move-1]
            +' // rubik move: '+move+' '+alg[move-1]);
          console.log('cube now : '+c.asString());
          
        }
      }
    }

    $scope.previousmove = function(){
      // if exceed 0, notify on start
      if(move==0){
        console.log('on start!');
        $('#finish').hide();
        $('#start').show();
        $('#premovebtn').hide();
      }
      else{

        // back to init state -> from move 1 to init state
        if(move==1){
          $('#finish').hide();
          $('#start').show();             //back to start
          $('#move'+(move)).hide();       // hide move img step 1
          $('#premovebtn').hide();
          c.move(formovein[(formovein.length - move)]);   // move back to init state (index = formovein.length - 1) ex. index = 33 - 1 = 32 
          // console.error("Debug : "+algin[(algin.length - move)]);
          $http.get('http://localhost:8000/cgi-bin/testbluetooth.py?move='+algin[(algin.length - move)])
            .success(function(data){
              
              console.log('successfully access json file from python cgi');
             
            })
            .error(function(data, headers){
              console.log(data);
              console.log(headers);
            });

          move--;
          console.log('backward btn click // show move: '+move+' '+alg[move-1]
            +' // // rubik move: '+formovein[(formovein.length - move)-1]);
          console.log('cube now : '+c.asString());


        }
        // if last move backward
        else if(move==formovein.length){
          c.move(formovein[(formovein.length - move)]);     // move back to previous state (index = formovein.length - move) ex index = 33 - 2 = 31 
          // console.error("Debug : "+algin[(algin.length - move)]);
          $http.get('http://localhost:8000/cgi-bin/testbluetooth.py?move='+algin[(algin.length - move)])
            .success(function(data){
              
              console.log('successfully access json file from python cgi');
             
            })
            .error(function(data, headers){
              console.log(data);
              console.log(headers);
            });

          move--;
          $('#finish').hide(); 
          $('#move'+(move)).show();           // show current move to do
          $('#move'+(move+1)).hide();         // hide previous move
          console.log('backward btn click // show move: '+move+' '+alg[move-1]
            +' // rubik move: '+formovein[(formovein.length - move)]);
          console.log('cube now : '+c.asString());
        }

        // normal backward move
        else{
          
          move--;
          c.move(formovein[(formovein.length - move)-1]);   // move back to previous state (index = formovein.length - move - 1) ex at move 31 to move 30 --> index = 33 - 30 - 1 = 2 
          // console.error("Debug : "+algin[(algin.length - move)]);
          $http.get('http://localhost:8000/cgi-bin/testbluetooth.py?move='+algin[(algin.length - move)-1])
            .success(function(data){
              
              console.log('successfully access json file from python cgi');
             
            })
            .error(function(data, headers){
              console.log(data);
              console.log(headers);
            });

          $('#finish').hide();
          $('#move'+(move)).show();           // show current move to do
          $('#move'+(move+1)).hide();         // hide previous move
          console.log('backward btn click // show move: '+move+' '+alg[move-1]
            +' // rubik move: '+formovein[(formovein.length - move)-1]);
          console.log('cube now : '+c.asString());
        }
      }
    }
  
  
})
