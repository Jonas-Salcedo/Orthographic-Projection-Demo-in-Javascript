//var elem = document.getElementById("myAnimation");   
//var pos = 0;
//
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
var xAngle = 0;
var yAngle = 0;
var zAngle = 0;
var quit = 0;
var ThreeDPoints = [
    [1, 1, 1],
    [-1, 1, 1],
    [-1, -1, 1],
    [1, -1, 1],
    [1, 1, -1],
    [-1, 1, -1],
    [-1, -1, -1],
    [1, -1, -1]
];
var scaleMatrix = [
    [100, 0, 0],
    [0, 0, 100]
];
var xRotate = [
    [1, 0, 0],
    [0, Math.cos(xAngle), Math.sin(xAngle)],
    [0, -Math.sin(xAngle), Math.cos(xAngle)]
];
var yRotate = [
    [Math.cos(yAngle), 0, -Math.sin(yAngle)],
    [0, 1, 0],
    [Math.sin(yAngle), 0, Math.cos(yAngle)]
];
var zRotate = [
    [Math.cos(zAngle), Math.sin(zAngle), 0],
    [-Math.sin(zAngle), Math.cos(zAngle), 0],
    [0, 0, 1]
];


console.log(ThreeDPoints[0]);


var identification = setInterval(frames, 10);

function frames() {
    if (quit == 1) {
        clearInterval(identification);
    } else {





        xAngle += 0.02;
        yAngle += 0.02;
        zAngle += 0.02;

        xRotate = [
            [1, 0, 0],
            [0, Math.cos(xAngle), Math.sin(xAngle)],
            [0, -Math.sin(xAngle), Math.cos(xAngle)]
        ];

        yRotate = [
            [Math.cos(yAngle), 0, -Math.sin(yAngle)],
            [0, 1, 0],
            [Math.sin(yAngle), 0, Math.cos(yAngle)]
        ];

        zRotate = [
            [Math.cos(zAngle), Math.sin(zAngle), 0],
            [-Math.sin(zAngle), Math.cos(zAngle), 0],
            [0, 0, 1]
        ];
        ctx.fillStyle = "#ca7979";
        ctx.fillRect(0, 0, 600, 480);




        var TwoDPoint = math.multiply(zRotate, ThreeDPoints[0]);
        console.log(TwoDPoint);
        TwoDPoint = math.multiply(yRotate, TwoDPoint);
        console.log(TwoDPoint);
        TwoDPoint = math.multiply(xRotate, TwoDPoint);
        console.log(TwoDPoint);
        TwoDPoint = math.multiply(scaleMatrix, TwoDPoint);
        console.log(TwoDPoint);
        TwoDPoint[0] += 200;
        TwoDPoint[1] += 200;



        var TwoDPoint2 = math.multiply(zRotate, ThreeDPoints[1]);
        TwoDPoint2 = math.multiply(yRotate, TwoDPoint2);
        TwoDPoint2 = math.multiply(xRotate, TwoDPoint2);
        TwoDPoint2 = math.multiply(scaleMatrix, TwoDPoint2);
        console.log(TwoDPoint2);
        TwoDPoint2[0] += 200;
        TwoDPoint2[1] += 200;



        var TwoDPoint3 = math.multiply(zRotate, ThreeDPoints[2]);
        TwoDPoint3 = math.multiply(yRotate, TwoDPoint3);
        TwoDPoint3 = math.multiply(xRotate, TwoDPoint3);
        TwoDPoint3 = math.multiply(scaleMatrix, TwoDPoint3);
        console.log(TwoDPoint3);
        TwoDPoint3[0] += 200;
        TwoDPoint3[1] += 200;



        var TwoDPoint4 = math.multiply(zRotate, ThreeDPoints[3]);
        TwoDPoint4 = math.multiply(yRotate, TwoDPoint4);
        TwoDPoint4 = math.multiply(xRotate, TwoDPoint4);
        TwoDPoint4 = math.multiply(scaleMatrix, TwoDPoint4);
        console.log(TwoDPoint4);
        TwoDPoint4[0] += 200;
        TwoDPoint4[1] += 200;



        var TwoDPoint5 = math.multiply(zRotate, ThreeDPoints[4]);
        TwoDPoint5 = math.multiply(yRotate, TwoDPoint5);
        TwoDPoint5 = math.multiply(xRotate, TwoDPoint5);
        TwoDPoint5 = math.multiply(scaleMatrix, TwoDPoint5);
        console.log(TwoDPoint5);
        TwoDPoint5[0] += 200;
        TwoDPoint5[1] += 200;



        var TwoDPoint6 = math.multiply(zRotate, ThreeDPoints[5]);
        TwoDPoint6 = math.multiply(yRotate, TwoDPoint6);
        TwoDPoint6 = math.multiply(xRotate, TwoDPoint6);
        TwoDPoint6 = math.multiply(scaleMatrix, TwoDPoint6);
        console.log(TwoDPoint6);
        TwoDPoint6[0] += 200;
        TwoDPoint6[1] += 200;



        var TwoDPoint7 = math.multiply(zRotate, ThreeDPoints[6]);
        TwoDPoint7 = math.multiply(yRotate, TwoDPoint7);
        TwoDPoint7 = math.multiply(xRotate, TwoDPoint7);
        TwoDPoint7 = math.multiply(scaleMatrix, TwoDPoint7);
        console.log(TwoDPoint7);
        TwoDPoint7[0] += 200;
        TwoDPoint7[1] += 200;



        var TwoDPoint8 = math.multiply(zRotate, ThreeDPoints[7]);
        TwoDPoint8 = math.multiply(yRotate, TwoDPoint8);
        TwoDPoint8 = math.multiply(xRotate, TwoDPoint8);
        TwoDPoint8 = math.multiply(scaleMatrix, TwoDPoint8);
        console.log(TwoDPoint8);
        TwoDPoint8[0] += 200;
        TwoDPoint8[1] += 200;





        ctx.fillStyle = "#FFFFFF";
        //Draws the points 
        ctx.fillRect(TwoDPoint[0], TwoDPoint[1], 5, 5);
        ctx.fillRect(TwoDPoint2[0], TwoDPoint2[1], 5, 5);
        ctx.fillRect(TwoDPoint3[0], TwoDPoint3[1], 5, 5);
        ctx.fillRect(TwoDPoint4[0], TwoDPoint4[1], 5, 5);
        ctx.fillRect(TwoDPoint5[0], TwoDPoint5[1], 5, 5);
        ctx.fillRect(TwoDPoint6[0], TwoDPoint6[1], 5, 5);
        ctx.fillRect(TwoDPoint7[0], TwoDPoint7[1], 5, 5);
        ctx.fillRect(TwoDPoint8[0], TwoDPoint8[1], 5, 5);

        //draws the lines
        //(1,1,1) to (-1,1,1)
        ctx.beginPath();
        ctx.moveTo(TwoDPoint[0], TwoDPoint[1]);
        ctx.lineTo(TwoDPoint2[0], TwoDPoint2[1]);
        ctx.lineTo(TwoDPoint3[0], TwoDPoint3[1]);
        ctx.lineTo(TwoDPoint4[0], TwoDPoint4[1]);
        ctx.lineTo(TwoDPoint[0], TwoDPoint[1]);
        ctx.moveTo(TwoDPoint[0], TwoDPoint[1]);
        ctx.lineTo(TwoDPoint5[0], TwoDPoint5[1]);
        ctx.moveTo(TwoDPoint2[0], TwoDPoint2[1]);
        ctx.lineTo(TwoDPoint6[0], TwoDPoint6[1]);
        ctx.moveTo(TwoDPoint3[0], TwoDPoint3[1]);
        ctx.lineTo(TwoDPoint7[0], TwoDPoint7[1]);
        ctx.moveTo(TwoDPoint4[0], TwoDPoint4[1]);
        ctx.lineTo(TwoDPoint8[0], TwoDPoint8[1]);
        ctx.moveTo(TwoDPoint5[0], TwoDPoint5[1]);
        ctx.lineTo(TwoDPoint6[0], TwoDPoint6[1]);
        ctx.lineTo(TwoDPoint7[0], TwoDPoint7[1]);
        ctx.lineTo(TwoDPoint8[0], TwoDPoint8[1]);
        ctx.lineTo(TwoDPoint5[0], TwoDPoint5[1]);
        ctx.stroke();



    }
}