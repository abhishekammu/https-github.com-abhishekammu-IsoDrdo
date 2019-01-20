package database1;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;

public class New2 {

	public static void main(String[] args)  throws ClassNotFoundException, FileNotFoundException, SQLException, IOException {

		
		database1.MySqlB c= new database1.MySqlB();
		c.conect();
		
		try {
			//Connection con= null;
		java.sql.Statement stmt = ((java.sql.Connection) c.conect()).createStatement();  
		ResultSet rs=stmt.executeQuery("select * from Iso_Drdo");  
		while(rs.next())  
		System.out.println(rs.getString(1)+"  "+rs.getString(2)+"  "+rs.getString(3)+"  "+rs.getString(4)+"  "+rs.getString(5)+"  "+rs.getString(6)+"  "+rs.getString(7));  
		c.conect().close();  
		}
	catch(Exception e){ System.out.println(e);}  
		 


	

		
	

}
}