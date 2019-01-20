
package Iso_DocController;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import LoginService1.LoginService1;

@WebServlet("/TimesheetController")
public class TimesheetController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected  void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();

		String Directorate = request.getParameter("Directorate");
		String TitleFormat=request.getParameter("TitleFormat");
		String FormatNumber=request.getParameter("FormatNumber");
		String ReferenceNo=request.getParameter("ReferenceNo");
		String Responsibility=request.getParameter("Responsibility");
		String Remarks=request.getParameter("Remarks");
		String Date=request.getParameter("Date");


		LoginService1 s= new LoginService1();
		try {
			s.saveIso_DocController(Directorate , TitleFormat, FormatNumber,ReferenceNo,Responsibility,Remarks,Date);
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		
		List isodetails1;
		try {
			isodetails1 = s.guardlogin1();
			request.setAttribute("isodetails1", isodetails1);
		} catch (ClassNotFoundException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
			
		RequestDispatcher rd = request.getRequestDispatcher("Frontpage1.jsp");
		rd.forward(request, response);

		
             
	}
}