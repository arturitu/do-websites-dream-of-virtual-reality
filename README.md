# Do websites dream of Virtual Reality
An webGL experiment made with the Awwwards team to share how is possible to do WebVR today ( Optimized for Oculus Rift & Google Cardboard )

Demo - http://awwwards.unboring.net

Awwwards blog entry - http://www.awwwards.com/do-websites-dream-of-virtual-reality.html


[![Do Websites Dream of Virtual Reality?](/assets/share.jpg)](http://awwwards.unboring.net)
# About

This is a simple way to start to do webVR using [three.js](http://www.threejs.org), [WebVR boilerplate](https://github.com/borismus/webvr-boilerplate) & Web Audio API

It uses [THREE.MeshLine](https://github.com/spite/THREE.MeshLine) created by [@thespite](http://twitter.com/thespite)

# Workflow

- From art to code
  - Cinema4D
    - Create 3D Art
    - Add lights
    - Export on .fbx format

  - Blender
    - Import from Blender ( change -Z forward to Z fordward )
    - Optimize ( Group meshes / reduce number of lights / add materials )
    - Use Three.js Blender Export to export on JSON format as a scene

  - Text editor ( Atom )
    - Load JSON file with THREE.ObjectLoader and load the assets into our scene

- From music to code

  - Audacity
    - Compress mp3 audio

  - Text editor ( Atom )
    - Load mp3 file with THREE.Audio and added to an 3D Object into the scene ( uses THREE.AudioListener too )




# Credits

Arturo Paracuellos / [@arturitu](http://twitter.com/arturitu) ( [Unboring.net](http://www.unboring.net) )

Art by Gus T.M & Jessica Travieso ( [Awwwards.com](http://awwwwards.com) )

Music by Gus T.M

License
=======

MIT licensed

Copyright © 2015 Unboring.net

http://www.unboring.net
