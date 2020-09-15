<template>
  <div class="canvas-wrapper">
    <canvas id="canvas"></canvas>
    <v-btn @click="eraseCanvas">clear canvas</v-btn>
  </div>

</template>

<script>
export default {
  name: 'CanvasWrapper',
  data: () => ({
    context: null,
    canvas: null,
    previousX: 0,
    previousY: 0,
    currentX: 0,
    currentY: 0,
    pressing: false,
    pressedAt: Date.now(),
    highlightStartPoint: false,
    shapes: [],
    currentShape: [],
    intervalLastPosition: [-1, -1]
  }),
  methods: {
    eraseCanvas () {
      this.shapes = []
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      console.log('erase the canvas')
    },

    prepareNewShape () {
      this.currentShape = [
        [],
        [],
        []
      ]
    },

    storeCoordinates () {
      if (this.intervalLastPosition[0] !== this.previousX &&
        this.intervalLastPosition[1] !== this.previousY) {
        this.intervalLastPosition = [this.previousX, this.previousY]
        this.currentShape[0].push(this.previousX)
        this.currentShape[1].push(this.previousY)
        this.currentShape[2].push(Date.now() - this.pressedAt)
      }
    },

    commitCurrentShape () {
      const API_ENDPOINT = 'https://inputtools.google.com/request?ime=handwriting&app=autodraw&dbg=1&cs=1&oe=UTF-8'
      this.shapes.push(this.currentShape)

      const drawOptions = {
        canvasWidth: this.canvas.width,
        canvasHeight: this.canvas.height
      }

      this.axios.post(API_ENDPOINT, {
        input_type: 0,
        requests: [{
          language: 'autodraw',
          writing_guide: {
            width: drawOptions.canvasWidth,
            height: drawOptions.canvasHeight
          },
          ink: this.shapes
        }]
      }).then(response => {
        console.log('response has come!')
        console.log(response)
        console.log(response.data[0])
        console.log(response.data[1][0][0])
        console.log(response.data[1][0][1])
      })
    },

    draw (mouseEvent) {
      let timeInterval

      switch (mouseEvent.type) {
        case 'mousedown':
          timeInterval = this.drawMouseDown(mouseEvent)
          break
        case 'mouseout':
          if (!this.pressing) break
          clearInterval(timeInterval)
          this.commitCurrentShape()
          break
        case 'mouseup':
          console.log('clearing interval!')
          this.pressing = false
          clearInterval(timeInterval)
          this.commitCurrentShape()
          break
        case 'mousemove':
          if (this.pressing) {
            this.drawMouseMove(mouseEvent)
          }
          break
      }
    },

    drawMouseDown (mouseEvent) {
      let highlightStartPoint
      const drawColorStartingPoint = 'black'
      this.updateXY(mouseEvent)

      this.pressing = true
      this.pressedAt = Date.now()

      highlightStartPoint = true

      this.prepareNewShape()

      if (highlightStartPoint) {
        this.context.beginPath()
        this.context.fillStyle = drawColorStartingPoint
        this.context.fillRect(this.currentX, this.currentY, 2, 2)
        this.context.closePath()
        highlightStartPoint = false
      }

      return window.setInterval(() => this.storeCoordinates(), 9)
    },

    drawMouseMove (mouseEvent) {
      const drawStroke = 8
      const drawColor = 'black'
      // TODO: make a config and use it.

      this.updateXY(mouseEvent)

      this.context.beginPath()
      this.context.moveTo(this.previousX, this.previousY)
      this.context.lineTo(this.currentX, this.currentY)
      this.context.strokeStyle = drawColor
      this.context.fillStyle = drawColor
      this.context.lineCap = 'round'
      this.context.lineJoin = 'round'
      this.context.lineWidth = drawStroke
      this.context.stroke()
      this.context.closePath()
    },

    updateXY (mouseEvent) {
      this.previousX = this.currentX
      this.previousY = this.currentY
      this.currentX = mouseEvent.clientX - this.canvas.offsetLeft
      this.currentY = mouseEvent.clientY - this.canvas.offsetTop
    }
  },

  mounted () {
    this.canvas = this.$el.querySelector('#canvas')
    this.context = this.canvas.getContext('2d')

    const mouseEvents = ['mousemove', 'mousedown', 'mouseup', 'mouseout']

    mouseEvents.map(eventName => {
      this.canvas.addEventListener(eventName, this.draw)
    })

    console.log(this.context)
    console.log(this.canvas)
    console.log(this.axios)
  }
}
</script>
