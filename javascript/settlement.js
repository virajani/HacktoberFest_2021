function add_data()
{
	m_url=servlet_client_url+":"+client_t3_port+"/"+client_name+"bvalsettlement?chksql=Transfer_lookup";
	var apple  = Apple();apple.getdata(m_url);
	m_size=apple.outvec_value.size();
	vec_pos=0;
	lineno=1;
	m_row="";
	
	if (m_size==0) 
		{
		alert('Currently Bank Transfers are  not available');
	  

		}
		else
		{
			while (vec_pos<m_size) 
			{
				if(apple.outvec_value.elementAt(vec_pos+7)=="@@") 
				{
					m_branch_name="";
				}
				else
				{
					m_branch_name=apple.outvec_value.elementAt(vec_pos+7);
				}
				
				m_row=m_row+'<TR>'; 
				//m_row=m_row+'  <TD ALIGN="CENTER">'+lineno+'</TD>'; 
				m_row=m_row+'  <TD ALIGN="CENTER">'+apple.outvec_value.elementAt(vec_pos+10)+'</TD>';
				m_row=m_row+'  <TD ALIGN="CENTER">'+apple.outvec_value.elementAt(vec_pos+11)+'</TD>';
				m_row=m_row+'  <TD ALIGN="CENTER">'+apple.outvec_value.elementAt(vec_pos)+'<INPUT TYPE="Hidden" NAME="H_settle_mode'+lineno+'" VALUE="'+apple.outvec_value.elementAt(vec_pos)+'"></TD>';
				m_row=m_row+'  <TD ALIGN="CENTER">'+apple.outvec_value.elementAt(vec_pos+1)+'<INPUT TYPE="Hidden" NAME="H_payer_code'+lineno+'" VALUE="'+apple.outvec_value.elementAt(vec_pos+1)+'"></TD>';
				m_row=m_row+'  <TD ALIGN="CENTER">'+apple.outvec_value.elementAt(vec_pos+11)+'</TD> <INPUT TYPE="HIDDEN" NAME="H_payer_branchcode'+lineno+'" VALUE="'+apple.outvec_value.elementAt(vec_pos+2)+'">';
				m_row=m_row+'  <TD ALIGN="CENTER">'+apple.outvec_value.elementAt(vec_pos+3)+'</TD>';
				m_row=m_row+'  <TD ALIGN="CENTER">'+apple.outvec_value.elementAt(vec_pos+4)+' <INPUT TYPE="Hidden" NAME="H_payer_accno'+lineno+'" VALUE="'+apple.outvec_value.elementAt(vec_pos+4)+'"></TD>';
				m_row=m_row+'  <TD ALIGN="CENTER">'+apple.outvec_value.elementAt(vec_pos+5)+' <INPUT TYPE="Hidden" NAME="H_payee_code'+lineno+'" VALUE="'+apple.outvec_value.elementAt(vec_pos+5)+'"> <INPUT TYPE="HIDDEN" NAME="H_payee_branchcode'+lineno+'" VALUE="'+apple.outvec_value.elementAt(vec_pos+6)+'"></TD>';
				m_row=m_row+'  <TD ALIGN="CENTER">'+m_branch_name+'</TD>';
				m_row=m_row+'  <TD ALIGN="CENTER">'+apple.outvec_value.elementAt(vec_pos+8)+' <INPUT TYPE="Hidden" NAME="H_payee_accno'+lineno+'" VALUE="'+apple.outvec_value.elementAt(vec_pos+8)+'"></TD>';
				m_row=m_row+'  <TD ALIGN="CENTER">'+apple.outvec_value.elementAt(vec_pos+9)+' INPUT TYPE="Hidden" NAME="H_amount'+lineno+'" VALUE="'+apple.outvec_value.elementAt(vec_pos+9)+'"> <INPUT TYPE="HIDDEN" NAME="H_payment_no'+lineno+'" VALUE="'+apple.outvec_value.elementAt(vec_pos+10)+'"> <INPUT TYPE="HIDDEN" NAME="H_sus_refno'+lineno+'" VALUE="'+apple.outvec_value.elementAt(vec_pos+11)+'"></TD>';
				m_row=m_row+'  <TD ALIGN="CENTER"> <INPUT TYPE="checkbox" NAME="Text_save'+lineno+'" ></TD></TR>';
				
				vec_pos=vec_pos+12;
				lineno=lineno+1;
				
				document.Form1.Hid_rows.value=lineno;
				
				m_writedata ='<DIV style="width:100%" ><TABLE WIDTH="100%" class="table table-sm table-bordered table-hover  ng-w-j-grid">'+
					'<TR><td colspan="15" ALIGN="Center" class="bg-primary text-white">Transfer Letters</td></TR>'+
					'<TR class="bg-primary text-white">'+
					'<TD WIDTH="10%"  ALIGN="Center">Payment Ref.No</TD>' + 
					'<TD WIDTH="9%" ALIGN="Center">Deal Ref. No</TD>'+
					'<TD WIDTH="9%" ALIGN="Center">Transfer Type</TD>'+
					'<TD WIDTH="9%" ALIGN="Center">Identification</TD>'+
					'<TD WIDTH="9%" ALIGN="Center">Payer Bank Name</TD>'+
					'<TD WIDTH="9%" ALIGN="Center">Payer Account</TD>'+
					'<TD WIDTH="9%" ALIGN="Center">Payee Name</TD>'+
					'<TD WIDTH="9%" ALIGN="Center">Payee Bank Name</TD>'+
					'<TD WIDTH="9%" ALIGN="Center">Payee Account</TD>'+
					'<TD WIDTH="9%" ALIGN="Center">Amount</TD>'+
					'<TD WIDTH="9%" ALIGN="Center">Proceed</TD>'+
					
					m_row+ 
					'</TABLE></DIV>'; 
					
					details.innerHTML=m_writedata;
			}
		}
}
