AFRAME.registerComponent('collada-cloak', {
    init: function() {
      this.el.addEventListener('model-loaded', e=>{
        console.log('loaded')
                let mesh = this.el.getObject3D('mesh')

         if (mesh !== undefined) {
          mesh.traverse(function(node) {
            if (node.isMesh) {
              if (node.material) {
                console.log('I am setting the node to false')
                node.material.colorWrite = false
                node.material.needsUpdate = true
                console.log(node.material.colorWrite);
              }
            }
          });
        }
        
      })
    }
})