# Minecraft Command Generator

A simple web-based Minecraft command generator that helps you create complex commands (like block_display) easily.

No mods.  
No backend.  
Generate → copy → paste.

## Features

- Block Display command generator
- Grid-aligned (Mysticat-style)
- Scale and transform controls
- One-click copy
- Runs fully in the browser

## Live Demo

https://zeke-youtube.github.io/command-genator/

## How to Use

1. Enter a block ID (example: minecraft:smooth_quartz)
2. Adjust scale or options
3. Click Generate
4. Copy the command
5. Paste it into Minecraft Java Edition

Example output:
```

/execute at @p align xyz positioned ~ ~-1 ~ run summon minecraft:block_display ~ ~ ~ {block_state:{Name:"minecraft:smooth_quartz"},transformation:{scale:[1f,1f,1f]}}

```

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- GitHub Pages

## Supported Versions

- Minecraft Java Edition
- 1.19.4 and above (Display Entities)

## Project Structure

command-genator/
- index.html
- style.css
- script.js
- README.md

## Notes

- This tool does not modify your game
- Commands are generated client-side only
- Test commands before using on servers

## License

MIT License

## Author

Zeke  
https://github.com/zeke-youtube