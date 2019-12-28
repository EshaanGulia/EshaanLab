


//Demonstarate the basic arithmetic operators 
class Example{
    public static void main(String args[])    {
        //arithmetic using integers System.out.println("Integer Arithmetic")
        int a = add(1,1); // arithmetic using integers through lines 8 to 12 
        int b = multiply(a * 3);
        int c = divide(b / 4);
        int d = subtract(c - a);
        int e = -d;
        System.out.println("a = " +a); //printing the a values from the arithmetic integers through lines 13 through 17
        System.out.println("b = " +b);
        System.out.println("c = " +c);
        System.out.println("d = " +d);
        System.out.println("e = " +e);


        //arithmetic using doubles 
        System.out.println("/nFloating Point Arithmetic");
        double da = 1 + 1;	//lines 22 through 26 shows the arithmetic functions using double variables 
         double db = da *3;
         double dc = db /  4;
         double dd = dc -a;
         double de = -dd;	
        System.out.println("da = " +da); //printing the da variable 
        System.out.println("db = " +db); //printing the db variable 
        System.out.println("dc = " +dc); //printing the dc variable 
        System.out.println("dd = " +dd); //printing the dd variable
        System.out.println("de = " +de); //printing the de variable
        
    }
    
    public static int add (int a, int b)
    {
    	return (a + b);
    	
    	
    }
    public static int subtract (int d)
    {
    	return (c - a);
    	
    	
    }
    public static int multiply (int a)
    {
    	return (a * 3);
    	
    	
    }
    public static int divide (int c)
    {
    	return (b / 4);
    	
    	
    }
}



