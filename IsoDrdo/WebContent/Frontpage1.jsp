<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page import="java.util.Map,java.util.List"%>

<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="main.css">
<script type="text/javascript" src="Calendar/jquery-3.2.1.min.js"></script>
<LINK REL="stylesheet" type="text/css" href="Calendar/style.css" />
<LINK REL="stylesheet" type="text/css" href="Calendar/calendar.css" />
<script type="text/javascript" src="Calendar/calendar.js"></script>
<script type="text/javascript" src="Calendar/mycalendar.js"></script>
<script type="text/javascript" src="Calendar/tip.js"></script>
<LINK REL="stylesheet" type="text/css" href="Calendar/tip.css" />
<%
List<Map> isoformdetails1=(List<Map>)request.getAttribute("isoDrdodetails1");
System.out.println(isoformdetails1);
%>
</head>
<body>
	<table bgcolor='#000080' width='100%' height='4%' cellpadding='0'
		cellspacing='0'>
		<tr>
			<td align='center' style="padding-left: 5%"><font face='verdana'
				size='4' color='#FFFFFF'> <b> Master List Of Documents </b>
			</font></td>
		</tr>
	</table>
	<TABLE BGCOLOR='#FFFFFF' CELLPADDING='1' CELLSPACING='1' width='100%'
		HEIGHT='10' border='0'>
		<tr>
			<td><table BGCOLOR='C0C0C0' align="center" cellpadding="2"
					border='0'>
					<div class="container-fluid">
						<div class="header">
							<div class="row">
								<div class="col-sm-4">
									<img src="images/drdologo1.png" class="img-rounded" width="200"
										height="200" align="left">
								</div>
								<form name="myform" action="TimesheetController" method="post">
									<tr>


										<td align="right"><font size='4'>Directorate:</font></td>
										<td><textarea name="Directorate" id=" " size="50" rows="2"
												cols="30" maxlength="60" required="required"></textarea></font></td>
									</tr>
									


									

									<tr>
									<td align="right"><font size='4'>TitleFormat:</font></td>
										<td><textarea name="TitleFormat" id=" " size="50" rows="2"
												cols="30" maxlength="60" required="required"></textarea></font></td>
									</tr>
									
										
									
									<tr>
										<td align="right"><font size="4">Format
												Number:</font></td>
										<td><textarea name="FormatNumber" id=" " size="50" rows="2"
												cols="30" maxlength="60" required="required"></textarea></font></td>
										
									</tr>
									<tr>

										<td align="right"><font size='4'>Reference No:</font></td>
										<td><textarea name="ReferenceNo" id=" " size="50" rows="2"
												cols="30" maxlength="10" required="required"></textarea></font></td>
									</tr>
									<tr>
										<td align="right"><font size='4'>Responsibility:</font></td>
										<td><textarea name="Responsibility" id=" " size="50" rows="2"
												cols="30" maxlength="10" required="required"></textarea></font></td>
						
											
						
											
											
									</tr>
									
									<tr>

										<td align="right"><font size='4'>Remarks:</font></td>
										<td><textarea name="Remarks" id=" " size="50" rows="2"
												cols="30" maxlength="60" required="required">
						</textarea></td>


										<div class="col-sm-4">
											<img src="images/emblem.jpg" class="img-rounded" width="200"
												height="170" align="right">
										</div>
							</div>
						</div>
					</div>
					</tr>
					<tr>
						<td align="right"><input type="hidden" name="update"
							id="update"> <input type="hidden" name="F_Directorate "
							id="F_Directorate">
							<button type="submit" name="save" id="save" class="submit"
								onclick="TimesheetController">Save</button>
							<button type="reset" class="reset" name="reset"
								onclick="window.location='Frontpage1.jsp';">
								<font size="2">Reset</font>
							</button>
							<button type="button" name="delete" id="delete" value="Delete"
								class="submit" onclick=Delete()>Delete</button></td>
					</tr>
				</TABLE>
				</form>



				<table bgcolor='#000066' width='100%' height='5%' border='0'
					cellpadding='0' cellspacing='0'>
					<tr>
						<td align='center'>
					</tr>
				</table> <br> <br>
				<table  align="center" border="1" cellpadding="3" cellspacing="0">
					<tr align="center">
						<td><b><font size="3" color="#000066">Directorate</font><font
								size="2" color="red"></font></b></td>
						<td><b><font size="3" color="#000066">TitleFormat</font></b></td>
						<td><b><font size="3" color="#000066">Format
									Number</font></b></td>
						<td><b><font size="3" color="#000066">Reference No</font></b></td>
						<td><b><font size="3" color="#000066">Responsibility</font></b></td>
						<td><b><font size="3" color="#000066">Remarks</font></b></td>
						<tbody>
					<% if(isoformdetails1!= null)for(int i=0;i< isoformdetails1.size();i++){ 
						Map map = isoformdetails1.get(i);
					%>
						<tr>
					
							<td><%= map.get("F_Directorate") %> </td>
							<td><%= map.get("F_Title") %></td>
							<td><%= map.get("F_FormatNo") %></td>
							<td><%= map.get("F_ReferenceNo") %></td>
							<td><%= map.get("F_Responsibility") %></td>
							<td><%= map.get("F_Remarks") %></td>
							<td><%= map.get("F_Date") %></td>
							
							
						</tr>
						
					<%} %>
					</tbody>
						</table>
</body>
</html>