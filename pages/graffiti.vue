<template>
  <section>
    <canvas id="c" width="800" height="600"></canvas>
    <h1 class="testing-header disable-select">FrontMania</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum elit nec lorem suscipit, in venenatis massa mattis. Nulla ultricies luctus felis et faucibus. Mauris sapien nulla, pharetra et ipsum nec, suscipit porttitor sapien. Ut quis dapibus eros, id mollis nulla. Nulla facilisi. Suspendisse rutrum augue eu tristique aliquam. Proin iaculis velit at neque rutrum varius. Sed faucibus euismod congue. Duis at mauris magna. Sed sed ligula egestas, luctus elit in, vehicula orci. Cras vulputate justo non odio blandit, non convallis sapien egestas. Nam ut ultricies erat, ut ornare orci. Pellentesque ligula leo, accumsan sed quam ac, efficitur aliquet erat. Proin sed dolor dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc id lacus non ipsum feugiat pharetra in id quam.</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      observer: null,
      baseUrl: process.server
        ? process.env.DEPLOY_URL || process.env.URL || 'http://localhost:3000'
        : window.location.origin
    }
  },
  mounted() {
    const el = document.getElementById('c')
    const canvasWidth = window.innerWidth - 1
    const canvasHeight = window.innerHeight - 1
    el.width = canvasWidth - el.offsetLeft
    el.height = canvasHeight
    const ctx = el.getContext('2d')
    let clientX, clientY, timeout
    const density = 200

    function getRandomFloat(min, max) {
      return Math.random() * (max - min) + min
    }

    el.onmousedown = function(e) {
      ctx.lineJoin = ctx.lineCap = 'round'
      clientX = e.clientX - el.offsetLeft
      clientY = e.clientY

      timeout = setTimeout(function draw() {
        for (let i = density; i--; ) {
          const angle = getRandomFloat(0, Math.PI * 2)
          const radius = getRandomFloat(0, 40)
          ctx.fillStyle = '#ffed00'
          ctx.fillRect(
            clientX + radius * Math.cos(angle),
            clientY + radius * Math.sin(angle),
            1,
            1
          )
        }
        if (!timeout) return
        timeout = setTimeout(draw, 50)
      }, 50)
    }
    el.onmousemove = function(e) {
      clientX = e.clientX - el.offsetLeft
      clientY = e.clientY
    }
    el.onmouseup = function() {
      clearTimeout(timeout)
    }
    el.onmouseout = function() {
      clearTimeout(timeout)
    }
  }
}
</script>

<style>
* {
  z-index: 1;
}

#c {
  /* border: 1px solid white; */
  position: absolute;
  top: 0;
  left: 22.5rem;
  z-index: -1;
}
.testing-header {
  color: white;
  font-size: 6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 2;
}
</style>
