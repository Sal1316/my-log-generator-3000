
const { Circle, Square, Triangle } = require('./shapes');

describe('Shape', () => {
      describe('Circle', () => {
            test("should render the correct markup for Circle", () => {
                  const shape = new Circle;

                  const expectedToBeSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
                  expect(shape.render()).toBe(expectedToBeSvg)
            })
      })
      describe('Square', () => {
            test("should render the correct markup for Square", () => {
                  const shape = new Square;

                  const expectedToBeSvg = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
<rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" />
<text x="150" y="170" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
                  expect(shape.render()).toBe(expectedToBeSvg)
            })
      })
      describe('Triangle', () => {
            test("should render the correct markup Triangle", () => {
                  const shape = new Triangle;

                  const expectedToBeSvg = `<svg version="1.1" width="900" height="500" xmlns="http://www.w3.org/2000/svg">
<polygon points="200,150 80,380 320,380" fill="${this.shapeColor}" />
<text x="200" y="325" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
                  expect(shape.render()).toBe(expectedToBeSvg)
            })
      })
})












