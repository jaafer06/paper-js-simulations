class Ball extends Path {

  constructor(center, radius, color, velocity) {
    super();
    var temp = Path.Circle(center, radius);
    this.fillColor = color;
    this.ignore = null;
    this.copyContent(temp);
    temp.remove();
    this.radius = radius;
    this.velocity = velocity;
  }

  render() {
    this.addTo(project);
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  remove() {
    super.remove();
  }

}
