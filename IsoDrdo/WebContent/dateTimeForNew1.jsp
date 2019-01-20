<%@ page language="java" import="java.util.*,java.text.*" pageEncoding="ISO-8859-1"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>   
    <title>Date Time</title>
    <!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
  </head>
  <body>
  <%
  SimpleDateFormat sdf = new SimpleDateFormat("dd-MMM-yyyy-E");
  %>
<%=System.currentTimeMillis()%>###<%=sdf.format(new java.util.Date()) %>
  </body>
</html>
