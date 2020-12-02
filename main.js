const { fabric } = require("./fabric");

var canvas = new fabric.canvas('myCanvas')

var blockimagewidth=30;
var blockimageheight=30;

playerx=10;
playery=10;

var blockimageobject="";
var playerobject="";

function playerupdate() {
    fabric.Image.fromURL("player.png",function(img){
        playerobject=img;
playerobject.scaleToWidth(160);
playerobject.scaleToHeight(160);
playerobject.set({
    top:playery,
    left:playerx
});
canvas.add(playerobject);


    });

    
}

function newimage(get_image) {
    fabric.Image.fromURL(get_image,function(img){
    
        blockimageobject=img;
        blockimageobject.scaleToWidth(blockimagewidth);
        blockimageobject.scaleToHeight(blockimageheight);
        blockimageobject.set({
    
        top:playery,
        left:playerx
    
    });
    canvas.add(blockimageobject);
    
    
        });
    
    }
