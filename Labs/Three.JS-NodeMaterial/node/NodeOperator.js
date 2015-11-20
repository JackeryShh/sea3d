/**
 * @author sunag / http://www.sunag.com.br/
 */
 
THREE.NodeOperator = function( a, b, op ) {
	
	THREE.NodeTemp.call( this );
	
	this.op = op || '+';
	
	this.a = a;
	this.b = b;
	
};

THREE.NodeOperator.prototype = Object.create( THREE.NodeTemp.prototype );
THREE.NodeOperator.prototype.constructor = THREE.NodeOperator;

THREE.NodeOperator.prototype.getType = function() {
	
	// use the greater length vector
	if (this.getFormatLength( this.b.getType() ) > this.getFormatLength( this.a.getType() )) {
		return this.b.getType();
	}
	
	return this.a.getType();

};

THREE.NodeOperator.prototype.generate = function( builder, output ) {
	
	var material = builder.material;
	var data = material.getNodeData( this.uuid );
	
	var a = this.a.build( builder, output );
	var b = this.b.build( builder, output );
	
	return '(' + a + this.op + b + ')';

};