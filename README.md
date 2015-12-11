# Do websites dream of Virtual Reality
An webGL experiment made with the Awwwards team to share ow it's possible to do WebVR today

Demo - http://awwwards.unboring.net
Awwwards blog entry - http://www.awwwards.com/do-websites-dream-of-virtual-reality.html


[![Do Websites Dream of Virtual Reality?](/assets/share.jpg)](http://awwwards.unboring.net)
# About

This is a simple way to start to do webVR using [three.js](http://www.threejs.org), [WebVR boilerplate](https://github.com/borismus/webvr-boilerplate) & Web Audio API with THREE.Audio & THREE.AudioListener to have 3D positional audio in the scene

It uses [THREE.MeshLine](https://github.com/spite/THREE.MeshLine) created by [@thespite](http://twitter.com/thespite)

# Workflow

- From art to code
  - Cinema4D
    3D Art created with Cinema4D / Exported on .fbx format

  - Blender
    Imported from Blender / Optimized/simplified / Use Three.js Blender Export to export on JSON format as a scene

  - Text editor (Atom)
    Load JSON file with THREE.ObjectLoader and load the assets into our scene

- From music to code

  - Audacity
    Compress mp3 audio

  - Text editor (Atom)
    Load mp3 file with THREE.Audio and added to an 3D Object into the scene ( uses THREE.AudioListener too )


# Credits

Arturo Paracuellos [www.unboring.net](http://www.unboring.net) [@arturitu](http://twitter.com/arturitu)

Art by Gus T.M & Jessica Travieso ( Awwwards )

Music by Gus T.M

License
=======

MIT licensed

Copyright © 2015 Unboring.net

http://www.unboring.net
