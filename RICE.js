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
		x_not = 1;
		function f_x(x)
		{
			f = this.c2_not*this.c3_not + this.c2_not*this.v3*x + this.v2*this.c3_not*x + this.v2*this.v3*Math.pow(x,2) - this.Ka*this.c1_not + this.Ka*this.v1*x;
			return f;
		}
		
		function f_prime(x)
		{
			f1 = this.c2_not*this.v3 + this.c3_not*this.v2 + 2*this.v2*this.v3*x + this.Ka*this.v1;
			return f1;
		}
		x_one = 1 - (f_x(1)/f_prime(1));
		while (f_x(x_one) > 0.0000000000000001)
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
