class Point {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
  getPosition() {
    return `(${this.x}, ${this.y})`
  }
}
