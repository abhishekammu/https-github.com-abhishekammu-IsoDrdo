package LoginService1;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Date;
import java.util.List;
import java.util.Map;

import dao1.LoginDao1;

public class LoginService1 {
	public Map guardlogin() throws ClassNotFoundException, FileNotFoundException, SQLException, IOException
	{
		LoginDao1 d=new LoginDao1();
		return d.guardlogin();
		
		
		
	}
	
      public List guardlogin1() throws ClassNotFoundException, FileNotFoundException, SQLException, IOException
      {
    	  
    	  LoginDao1 d1= new LoginDao1();
    	  return (List) d1.guardlogin1();
}
      public int saveIso_DocController(String Directorate,String TitleFormat,String FormatNumber,String ReferenceNo,String Responsibility,String Remarks,String Date) throws ClassNotFoundException, FileNotFoundException, SQLException, IOException
      {
    	  
    	  LoginDao1 d2=new LoginDao1();
              return  d2.saveIso_DocController(Directorate , TitleFormat, FormatNumber,ReferenceNo,Responsibility,Remarks,Date);
           
      
      }
      
      
}