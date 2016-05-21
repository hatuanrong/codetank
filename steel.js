class Steel{
	constructor(i,j,width,height){
		this.x = j * 16;
		this.y = i * 16;
		this.width = width;
		this.height = height;
		this.sprite = new Image();
		this.sprite.src = "images/wall_steel.png";
	}
	draw(context){
		context.drawImage(this.sprite,this.x,this.y,this.width,this.height);
	}
}
