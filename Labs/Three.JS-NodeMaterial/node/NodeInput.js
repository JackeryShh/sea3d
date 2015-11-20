/**
 * @author sunag / http://www.sunag.com.br/
 */

THREE.NodeInput = function(type) {
	
	THREE.NodeGL.call( this, type );
	
};

THREE.NodeInput.prototype = Object.create( THREE.NodeGL.prototype );
THREE.NodeInput.prototype.constructor = THREE.NodeInput;

THREE.NodeInput.prototype.generate = function( builder, output, uuid, type ) {

	var material = builder.material;

	uuid = builder.getUuid( uuid || this.uuid );
	type = type || this.type;
	
	var data = material.getNodeData( uuid );
	console.log( uuid, builder.cache );
	if (builder.isShader('vertex')) {
	
		if (!data.vertex) {
		
			data.vertex = material.getVertexUniform( this.value, type );
			
		}
		
		return this.format( data.vertex.name, type, output );
	}
	else {
		
		if (!data.fragment) { 
			
			data.fragment = material.getFragmentUniform( this.value, type );
			
		}
		
		return this.format( data.fragment.name, type, output );
	}

};