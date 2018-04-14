$(document).ready(function(){
    console.log("Hello");
    
    $("#button").click(function(){
        var ka = $("#Ka").val();
        var c1 = $("#c1_not").val();
        var c2 = $("#c2_not").val();
        var c3 = $("#c1_not").val();
        var v1 = $("#v1").val();
        var v2 = $("#v2").val();
        var v3 = $("#v3").val();
        console.log(ka, c1, c2, c3, v1, v2, v3);
    });
});



function RICE(Ka, c1_not, c2_not, c3_not, v1, v2, v3) 
{ 
	this.Ka = Ka;
	this.c1_not = c1_not;
	this.c2_not = c2_not;
	this.c3_not = c3_not;
	this.v1 = v1;
	this.v2 = v2; 
	this.v3 = v3;
	
	function get_Ka()
	{
		return this.Ka;
	}
	
	function get_c1_not()
	{
		return this.c1_not;
	}

	function get_c2_not()
	{
		return this.c2_not;
	}

	function get_c3_not()
	{
		return this.c3_not;
	}

	function get_v1()
	{
		return this.v1;
	}

	function get_v2()
	{
		return this.v2;
	}

	function get_v3()
	{
		return this.v3;
	}

	function get_x()
	{
		var x_not = 1;
		function f_x(x)
		{
			var f = this.c2_not * this.c3_not + this.c2_not * this.v3 * x + this.v2 * this.c3_not * x + this.v2 * this.v3 * Math.pow(x,2) - this.Ka * this.c1_not + this.Ka * this.v1 * x;
			return f;
		}
		
		function f_prime(x)
		{
			var f1 = this.c2_not * this.v3 + this.c3_not * this.v2 + 2 * this.v2 * this.v3 * x + this.Ka * this.v1;
			return f1;
		}
		var x_one = 1 - (f_x(1)/f_prime(1));
		while (f_x(x_one) > 1e-16)
			{
			x_one = x_not - (f_x(x_not)/f_prime(x_not));
			x_not = x_one;
			}
		return x_one;
	}
	
	function get_pX()
	{
		return -Math.log10(this.get_x());
	}

	function set_Ka(Ka)
	{
		self.Ka = Ka;
	}

	function set_c1_not(c1_not)
	{
		this.c1_not = c1_not;
	}

	function set_c2_not(c2_not)
	{
		this.c2_not = c2_not;
	}

	function set_c3_not(c3_not)
	{
		this.c3_not = c3_not;
	}

	function set_v1(v1)
	{
		this.v1 = v1;
	}

	function set_v2(v2)
	{
		this.v2 = v2;
	}

	function set_v3(v3)
	{
		this.v3 = v3;
	}
}


