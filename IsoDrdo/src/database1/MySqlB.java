package database1;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Connection;
	import java.sql.DriverManager;
import java.sql.SQLException;
public class MySqlB {
	public static Connection conect()throws 
	SQLException, ClassNotFoundException,FileNotFoundException, IOException{  
		Connection con=null;
		String url ="jdbc:mysql://localhost:8888/";
		String db="Iso_Drdo";
		String driver="com.mysql.cj.jdbc.Driver";
		String user="root";
		String pass="root";
		try {
			Class.forName(driver);
			con=DriverManager.getConnection(url + db, user, pass);
			if (con == null) {
	            System.out.println("Connection cannot be established");
	        }
	        return con;
	    } catch (Exception e) {
	        System.out.println(e);
	    }
	    return con;
	}
}
