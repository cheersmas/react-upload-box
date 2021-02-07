> command to generate gif from ffmpeg

```sh
ffmpeg -i upload.mov -vf "fps=30,scale=480:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 upload.gif
```
