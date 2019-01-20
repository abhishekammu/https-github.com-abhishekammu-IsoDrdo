package dao1;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import database1.MySqlB;

public class LoginDao1 {
	public Map<String, Comparable> guardlogin() throws ClassNotFoundException, FileNotFoundException, SQLException, IOException
	{
		database1.MySqlB c = new database1.MySqlB();
		Connection con =  c.conect();
		Map obj=null;
		try {
			// Connection con= null;
			java.sql.Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery("select * from Iso_Drdo");
	
			if (rs.next()) {
				obj=new HashMap();
				obj.put("F_Directorate", rs.getString(1));
				obj.put("F_Title", rs.getString(2));
				obj.put("F_FormatNo",rs.getString(3));
				obj.put("F_ReferenceNo",rs.getString(4));	
				obj.put("F_Responsibility",rs.getString(5));
				
				obj.put("F_Remarks",rs.getString(6));	
				obj.put("F_Date",rs.getString(7));
			}
			
		} catch (Exception e) {
			System.out.println(e);
		}
		finally {
			if(con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		return obj;
	}
	public List guardlogin1() throws ClassNotFoundException, FileNotFoundException, SQLException, IOException
	{
		System.out.println("Enter to dao");
		database1.MySqlB c = new database1.MySqlB();
		System.out.println("Enter to dao1");
		Connection con =  MySqlB.conect();
		System.out.println("Enter to dao2");
		List obj=new ArrayList();
		System.out.println("Enter to dao3");
		try {
			System.out.println("10");
			// Connection con= null;
			java.sql.Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery("select * from Iso_Drdo order by F_Directorate");
			
			System.out.println("20");
			while(rs.next()) {
				Map m=new HashMap();
				m.put("F_Directorate", rs.getString(1));
				System.out.println("1");
				m.put("F_Title", rs.getString(2));
				System.out.println("2");
				m.put("F_FormatNo", rs.getString(3));
				System.out.println("3");
				m.put("F_ReferenceNo", rs.getString(4));
				System.out.println("4");
				
				m.put("F_Responsibility",rs.getString(5));
				System.out.println("5");
				m.put("F_Remarks",rs.getString(6));
				System.out.println("6");
				m.put("F_Date", rs.getDate(7));
				
				
				System.out.println("7");
				obj.add(m);
				
				
				
			}
			
		} catch (Exception e) {
			System.out.println(e);
		}
		finally {
			if(con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		return obj;
	}
public int saveIso_DocController(String Directorate,String TitleFormat,String FormatNumber,String ReferenceNo,String Responsibility,String Remarks,String Date) throws ClassNotFoundException, FileNotFoundException, SQLException, IOException


{
	System.out.println("Directorate ===>>. "+ Directorate);
	System.out.println("TitleFormat ===>>. "+ TitleFormat);
	System.out.println("FormatNumber ===>> "+ FormatNumber);
	System.out.println("ReferenceNo===>> "+ReferenceNo);
	System.out.println("Responsibility ===>> "+Responsibility);
	System.out.println("Remarks===>>> "+Remarks);
	System.out.println("Date===>>> "+Date);
	database1.MySqlB c = new database1.MySqlB();
	Connection con =  c.conect();
	try {
		System.out.println("10");
		java.sql.Statement stmt = con.createStatement();
		String sqlQuery = "INSERT INTO `Iso_Drdo`(`F_Directorate`, `F_Title`, `F_FormatNo`, `F_ReferenceNo`, `F_Responsibility`,`F_Remarks`,`F_Date) VALUES ('"+Directorate+"','"+TitleFormat+"', '"+FormatNumber+"', '"+ReferenceNo+"','"+Responsibility+"','"+Remarks+"',STR_TO_DATE('"+Date.trim()+"','%d-%b-%Y'))";
		return stmt.executeUpdate(sqlQuery);
		
	} catch (Exception e) {
		System.out.println(e);
	}
	finally {
		if(con != null) {
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	return 0;
}

}
