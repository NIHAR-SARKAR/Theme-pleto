$(document).ready(function(){

	rotate=0;
	ern=0;erm=0;ert=0,erp=0;

        		$('#pin-it').click(function(){
        					if($(this).attr('temp')=='1'){
        					$('#flex-desktop #inside').css('display','none');
        					$(this).css('color','#992121');
        					$('#flex-desktop').css({'max-height':'28px','height':'28px'});$(this).attr('temp','0');
        					}
        					else if($(this).attr('temp')=='0'){
        						$('#flex-desktop').css({'max-height':'500px','height':'500px'});
        					$('#flex-desktop #inside').fadeIn(1000);
        					$(this).css('color','#eee');
        					$(this).attr('temp','1');}
        					});

        						$('.contact-x').click(function(){
        							$('#flex-desktop').css('display','none');
        							$('#gallery-flex').css('display','none');
        							$('#project-flex').css('display','none');
        							$('#contact-flex').delay(100).fadeIn(800);
        							$('#menu a').removeClass('active');
        							$('#menu .contact-x').addClass('active');
        							});
        							
        						$('.gallery-x').click(function(){
        					$('#flex-desktop').css('display','none');
        					$('#contact-flex').css('display','none');
        					$('#project-flex').css('display','none');
        					$('#gallery-flex').delay(100).fadeIn(800);
        					$('#menu a').removeClass('active');
        							$('#menu .gallery-x').addClass('active');
        					});
        					//--------/ hide/display---------
        							

    $('#tbName').keyup(function(){
    	if($(this).val().length>3){
    var xstr=/[a-zA-Z\s]+/;var str=$(this).val();var ck=xstr.exec(str);
    if(!ck || ck[0]!=str){$('#vlname').css('color','#aaa');ern=0;}
    else{$('#vlname').css('color','#229977');ern=1;}    }
    else{$('#vlname').css('color','#aaa');ern=0;}
    	});
    	
    $('#tbMail').keyup(function(){
    	if($(this).val()!=''){
    var xstr=/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;var str=$(this).val();var ck=xstr.exec(str);
    if(!ck || ck[0]!=str){$('#vlmail').css('color','#aaa');erm=0;}
    else{$('#vlmail').css('color','#229977');erm=1;}    }
    else{$('#vlmail').css('color','#aaa');erm=0;}
    	});
    	
    $('#tbPhone').keyup(function(){
    	if($(this).val().length>9){
    var xstr=/[0-9\s]+/;var str=$(this).val();var ck=xstr.exec(str);
    if(!ck || ck[0]!=str){$('#vlphone').css('color','#aaa');erp=0;}
    else{$('#vlphone').css('color','#229977');erp=1;}    }
    else{$('#vlphone').css('color','#aaa');erp=0;}
    	});
     
     $('#tbSubject').keyup(function(){
    	if($(this).val().length>3){
    var xstr=/[a-zA-Z0-9\s]+/;var str=$(this).val();var ck=xstr.exec(str);
    if(!ck || ck[0]!=str){$('#vlsub').css('color','#aaa');ert=0;}
    else{$('#vlsub').css('color','#229977');ert=1;}    }
    else{$('#vlsub').css('color','#aaa');ert=0;}
    	});
     
     
     
$('#sendMail').click(function(){

	if(erm==1 && ern==1 && ert==1 && $('#txtMessage').val().trim().length>19){
		var Message= 'A new Message : \n Name:'+$.trim($('#tbName').val())+' \n';
		Message+='MailId : '+$.trim($('#tbMail').val())+' \n';
		Message+='Phone Number : '+$.trim($('#tbPhone').val())+' \n';
		Message+=' Subject : '+$.trim($('#tbSubject').val())+' \n';
		Message+=' message : '+$.trim($('#txtMessage').val())+' \n';
		$.ajax({
			type:'POST',
			url:'contact_form.php',
			data:'details='+Message,
			success:function(msg){
			//$('#show-msg').empty();
	//$('#show-msg').html('<span class="sucess">'+msg+'</span>');	
	set_message('success');
			},error: function (error) {
                 set_message('error');
              }
			}); 
	}
	else{
		set_message('fail');
	}
	});
     
    function set_message(mode) {
        if(mode=='success'){
            $('#notify').removeClass('error');$('#notify').addClass('success');
            $('#notify .header .head').text('Thank you !');
            $('#notify .points').empty();
            $('#notify .points').append('<span class="icon nihar-envelop"></span> Hello '+ $('#tbName').val()+'. Your Message Has benn Sent . We will contact you ,as soon as posible .');
            $('.contact-table .tbx').val("");
			$('.contact-table #txtMessage').val("");
            $("#full-area").fadeIn(500);
            
            
        }
        else if(mode=='fail'){
			$('#notify').removeClass('success');$('#notify').addClass('error');
            $('#notify .header .head').text('Error(s) :');
			$('#notify .points').empty();
            (ern==0)?($('#notify .points').append('<span class="icon nihar-warning"></span> Your name must contain atleast 4 charecters .<br/>')):(rotate=0);
			(erm==0)?($('#notify .points').append('<span class="icon nihar-warning"></span> Enter a correct mail Id .<br/>')):(rotate=0);
			(ert==0)?($('#notify .points').append('<span class="icon nihar-warning"></span> Subject must contain atleast 4 charecters.<br/>')):(rotate=0);
			(erp==0)?($('#notify .points').append('<span class="icon nihar-warning"></span> Minimum 10 numbers necessary and all should be Numbers.<br/>')):(rotate=0);
			if($('#txtMessage').val().trim().length<20){
				$('#notify .points').append('<span class="icon nihar-warning"></span> Your Message must Contain alteast 20 Charecters .<br/>');
			}
			$("#full-area").fadeIn(700);
        }
		else if(mode=='error'){
			$('#notify').removeClass('success');$('#notify').addClass('error');
            $('#notify .header .head').text('Error :');
			$('#notify .points').empty();
			$('#notify .points').append('<span class="icon nihar-warning"></span> Error in Sending Message .Please Check your connection .<br/>');
			$("#full-area").fadeIn(700);
		}
    }
    
    
     $('#valid-close').click(function(){
        if($(this).attr('temp')=='1'){
        	$('#validation').css({'height':'22px'});
        						$('#validation .contact-table').fadeOut(0);
        						$('#validh').fadeOut(0);$('#validation-head').css({'width':'16px'});
        						$('#validation').css({'width':'25px','transition-duration':'0.5s'});
        						$(this).attr('class','icon nihar-circle-right');
        						$(this).attr('temp','0');
        						}
        						else if($(this).attr('temp')=='0'){
        						$('#validation').css({'height':'200px'});
        						$('#validation-head').css({'width':'190px','transition-duration':'0.5s'});
        						$('#validation').css({'width':'200px','transition-duration':'0.5s'});
        						$('#validh').delay(500).fadeIn(0);
        						$('#validation .contact-table').delay(500).fadeIn(200);
        						$(this).attr('class','icon nihar-circle-left');
        						$(this).attr('temp','1');
        						}
        						});	
    $("#cross-notify").click(function(){
         $("#full-area").fadeOut(50);
    });
     
     
        							
     });