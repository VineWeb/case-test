function createShader(gl, type, source) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      alert("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
  }
  return shader;
}

function createProgram(gl, vertexShader, fragmentShader) {
  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      alert("Unable to initialize the shader program: " + gl.getProgramInfoLog(program));
      return null;
  }
  return program;
}

function main() {
  var canvas = document.getElementById("webglCanvas");
  var gl = canvas.getContext("webgl");
  if (!gl) {
      alert("Unable to initialize WebGL. Your browser may not support it.");
      return;
  }

  var vertexShaderSource = `
      attribute vec4 aPosition;
      void main() {
          gl_Position = aPosition;
      }
  `;
  var fragmentShaderSource = `
      void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);  // Red
      }
  `;

  var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
  var shaderProgram = createProgram(gl, vertexShader, fragmentShader);

  var positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  var positions = [
      0.0,  1.0,
     -1.0, -1.0,
      1.0, -1.0,
  ];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  var positionAttributeLocation = gl.getAttribLocation(shaderProgram, "aPosition");
  gl.enableVertexAttribArray(positionAttributeLocation);
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

  gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.useProgram(shaderProgram);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}

window.onload = main;
