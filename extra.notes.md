> command to generate gif from ffmpeg

```sh
ffmpeg -i cards.mov -vf "fps=30,scale=320:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 output.gif
```

> using requestAnimationFrame

https://stackoverflow.com/questions/39198432/change-duration-of-canvas-animation-with-request-animation-frame
