function sidemenu_close(){$(".main_container").stop().animate({left:"0"},250,"swing"),$(".nav-collapse.collapse").stop().animate({left:"-150px"},250,"swing").removeClass("open_left"),$(".main_container").unbind("click"),typeof handler!="undefined"&&$(window).unbind("resize",handler)}function sidemenu_open(){$(".main_container").stop().animate({left:"150px"},250,"swing"),$(".nav-collapse.collapse").stop().animate({left:"0"},250,"swing").addClass("open_left")}function redraw_tickets_analytics(){$("#bars").html(""),$("#donut").html(""),Morris.Donut({element:"donut",data:[{label:"Pending tickets",value:12},{label:"Finished tickets",value:30},{label:"Canceled tickets",value:10}],colors:["#F7DEC8","#F4AC6E","#F5C294"]}),Morris.Bar({element:"bars",data:[{y:"02/02",a:2,b:1},{y:"02/03",a:4,b:1},{y:"02/04",a:2,b:2},{y:"02/05",a:1,b:1},{y:"02/06",a:0,b:3},{y:"02/07",a:5,b:2},{y:"02/08",a:2,b:0}],xkey:"y",ykeys:["a","b"],labels:["Finished tickets","New tickets"],barColors:["#F5C294","#F7DEC8"]})}function redraw_analytics(){$(".analytics_item").html(""),Morris.Donut({element:"donut",data:[{label:"Visits Today",value:1503},{label:"Visits Yesterday",value:2190}],colors:["#42C1F7","#B3E6FC"]}),Morris.Donut({element:"donut2",data:[{label:"% New visitors",value:30},{label:"% Returning visitors",value:70}],colors:["#42C1F7","#B3E6FC"]}),Morris.Donut({element:"donut3",data:[{label:"Firefox",value:5798},{label:"Chrome",value:4855},{label:"Internet Explorer",value:2877}],colors:["#42C1F7","#B3E6FC","#3CB1E0"]}),Morris.Donut({element:"donut4",data:[{label:"Categories",value:8790},{label:"Clothing",value:7052},{label:"About",value:6577}],colors:["#42C1F7","#B3E6FC","#3CB1E0"]}),Morris.Area({element:"areachart",data:[{x:"2012-01-01",y:102},{x:"2012-01-10",y:172},{x:"2012-01-20",y:130},{x:"2012-02-01",y:198},{x:"2012-02-10",y:256},{x:"2012-02-20",y:211},{x:"2012-03-01",y:345},{x:"2012-03-10",y:456},{x:"2012-03-20",y:384},{x:"2012-04-01",y:584}],xkey:"x",ykeys:["y"],smooth:!1,lineColors:["#42C1F7","#B3E6FC"],labels:["Y","Z"]}),Morris.Area({element:"areachart2",data:[{x:"2012-01-01",y:102,z:100},{x:"2012-01-10",y:172,z:150},{x:"2012-01-20",y:130,z:110},{x:"2012-02-01",y:198,z:180},{x:"2012-02-10",y:256,z:220},{x:"2012-02-20",y:211,z:200},{x:"2012-03-01",y:345,z:320},{x:"2012-03-10",y:456,z:400},{x:"2012-03-20",y:384,z:300},{x:"2012-04-01",y:584,z:500}],xkey:"x",ykeys:["y","z"],smooth:!1,lineColors:["#42C1F7","#65A7BF"],labels:["Y","Z"]}),Morris.Line({element:"linechart",data:[{x:"2012-01-01",y:102},{x:"2012-01-10",y:172},{x:"2012-01-20",y:130},{x:"2012-02-01",y:198},{x:"2012-02-10",y:256},{x:"2012-02-20",y:211},{x:"2012-03-01",y:345},{x:"2012-03-10",y:456},{x:"2012-03-20",y:384},{x:"2012-04-01",y:584}],xkey:"x",ykeys:["y"],smooth:!1,lineColors:["#42C1F7","#B3E6FC"],labels:["Y"]}),Morris.Line({element:"linechart2",data:[{x:"2012-01-01",y:102,z:100},{x:"2012-01-10",y:172,z:150},{x:"2012-01-20",y:130,z:110},{x:"2012-02-01",y:198,z:180},{x:"2012-02-10",y:256,z:220},{x:"2012-02-20",y:211,z:200},{x:"2012-03-01",y:345,z:320},{x:"2012-03-10",y:456,z:400},{x:"2012-03-20",y:384,z:300},{x:"2012-04-01",y:584,z:500}],xkey:"x",ykeys:["y","z"],smooth:!1,lineColors:["#42C1F7","#B3E6FC"],labels:["Y","Z"]}),Morris.Bar({element:"barchart",data:[{x:"2012-01-01",y:102,z:100},{x:"2012-01-10",y:172,z:150},{x:"2012-01-20",y:130,z:110},{x:"2012-02-01",y:198,z:180},{x:"2012-02-10",y:256,z:220},{x:"2012-02-20",y:211,z:200},{x:"2012-03-01",y:345,z:320},{x:"2012-03-10",y:456,z:400},{x:"2012-03-20",y:384,z:300},{x:"2012-04-01",y:584,z:500}],xkey:"x",ykeys:["y","z"],barColors:["#42C1F7","#B3E6FC"],labels:["Y","Z"]})}$(function(){function l(){$("#graph").html(""),$("#barchart").html(""),Morris.Area({element:"graph",data:[{x:"2012-01-01",y:102},{x:"2012-01-10",y:172},{x:"2012-01-20",y:130},{x:"2012-02-01",y:198},{x:"2012-02-10",y:256},{x:"2012-02-20",y:211},{x:"2012-03-01",y:345},{x:"2012-03-10",y:456},{x:"2012-03-20",y:384},{x:"2012-04-01",y:584}],xkey:"x",ykeys:["y"],smooth:!1,lineColors:["#42C1F7","#B3E6FC"],labels:["Y","Z"]}),Morris.Bar({element:"barchart",data:[{x:"2012-01-01",y:102,z:100},{x:"2012-01-10",y:172,z:150},{x:"2012-01-20",y:130,z:110},{x:"2012-02-01",y:198,z:180},{x:"2012-02-10",y:256,z:220},{x:"2012-02-20",y:211,z:200},{x:"2012-03-01",y:345,z:320},{x:"2012-03-10",y:456,z:400},{x:"2012-03-20",y:384,z:300},{x:"2012-04-01",y:584,z:500}],xkey:"x",ykeys:["y","z"],barColors:["#42C1F7","#B3E6FC"],labels:["Y","Z"]})}$(".accordion-heading .accordion-toggle").click(function(){$(".accordion-heading .accordion-toggle").not($(this)[0],".accordion-heading .accordion-toggle.collapse").addClass("collapsed")}),$(".overview_boxes .box_row").css("display","inline-block"),$(".tip").tooltip(),$(".pop").popover({title:$(this).data("title"),content:$(this).data("content"),placement:"top"}),$(".typeahead").typeahead(),$(".visible-desktop #messages, .visible-desktop #notifications").click(function(e){e.preventDefault()}),$(".top-menu #messages").popover({html:!0,placement:"bottom",title:"Messages",content:'<ul><li><a href="#"><img src="assets/img/avatars/04.jpg"><span>Today</span><h4>Bill Fernando</h4>Hey John, have you finished the report yet?</a></li><li><a href="#"><img src="assets/img/avatars/05.jpg"><span>Yesterday</span><h4>Roger White</h4>Did you talk to Andrea? She was looking for you</a></li></ul><div class="popover_footer"><a href="">View all messages</a></div>'}),$(".top-menu #notifications").popover({html:!0,placement:"bottom",title:"Notifications",content:'<ul><li><a href="#"><img src="assets/img/avatars/07.jpg"><span>Today</span><h4>Cody Negley</h4>Requested a vacation for 3 days.</a></li><li><a href="#"><img src="assets/img/avatars/09.jpg"><span>Yesterday</span><h4>Customer Support</h4>You have 3 new tickets assigned to you.</a></li></ul><div class="popover_footer"><a href="">View all notifications</a></div>'}),$(".slide_menu_left").click(function(e){e.preventDefault(),$(".nav-collapse.collapse").hasClass("open_left")?sidemenu_close():(sidemenu_open(),$(".main_container").bind("click",function(){sidemenu_close()}))}),$(".widget-buttons a.collapse").click(function(){$(this).attr("data-collapsed")=="false"?($(this).closest(".widget").find(".widget-body").slideUp(),$(this).attr("data-collapsed","true").addClass("widget-hidden")):($(this).closest(".widget").find(".widget-body").slideDown(),$(this).attr("data-collapsed","false").removeClass("widget-hidden"))});var e=!1;$(window).resize(function(){e=!0}),setInterval(function(){e&&(e=!1,$("#analytics_page").length>0&&redraw_analytics(),$("#tickets_page").length>0&&redraw_tickets_analytics(),$("#dashboard_page").length>0&&l())},3e3),$("#dashboard_page").length>0&&($(".knob").knob(),$("#widget-tasks").slimScroll({height:"170px"}),$(".slimscroll").slimScroll({height:"310px"}),$.gritter.add({title:"Welcome to the Realm Admin Template",text:'This icon <i class="icon-external-link" style="font-size:15px;"></i> represents an external link to the documentation for that specific part of the template where you see it. So click if you need more info.',image:"http://profile.ak.fbcdn.net/hprofile-ak-snc6/203244_1677040371_1334985872_q.jpg",sticky:!0,time:"",class_name:"my-sticky-class"}),$(".inlinesparkline").sparkline("html",{width:"100",height:"30",lineColor:"#42C1F7",fillColor:"#B3E6FC"}),l()),$("#forms_page").length>0&&($("#wizard_tags").select2({tags:["Modern","Lightweight","Minimalistic"],maximumInputLength:4}),$("#wizard_validate_tags").select2({tags:["Modern","Lightweight","Minimalistic"],maximumInputLength:4}),$("#wizard_validate").bootstrapWizard({onNext:function(e,t,n){$("#wizard_validate").find(".control-group").removeClass("error");switch(n){case 1:if($("#val_title").val()==""||$("#val_title").val().length<3)return $("#val_title").closest(".control-group").addClass("error"),!1;if($("#val_description").val()=="")return $("#val_description").closest(".control-group").addClass("error"),!1;break;case 2:if($("#val_price").val()=="")return $("#val_price").closest(".control-group").addClass("error"),!1;if($("#wizard_validate_tags").val()=="")return $("#wizard_validate_tags").closest(".control-group").addClass("error"),!1;break;case 3:}},onTabShow:function(e,t,n){var r=t.find("li").length,i=n+1,s=i/r*100;$("#wizard_validate").find(".bar").css({width:s+"%"})}}),$("#wizard").bootstrapWizard({onNext:function(e,t,n){},onTabShow:function(e,t,n){var r=t.find("li").length,i=n+1,s=i/r*100;$("#wizard").find(".bar").css({width:s+"%"})}}),$("#register_form1").validate({errorClass:"help-inline",errorElement:"span",rules:{username:{minlength:3,maxlength:15,required:!0},email:{required:!0,email:!0},password:{required:!0,minlength:5},password_confirm:{required:!0,minlength:5,equalTo:"#form_password"}},messages:{username:{minlength:"Minimum length is 3 characters",maxlength:"Maximum length is 15 characters",remote:"Username is taken",required:"Please specify your username"},email:{required:"We need your email address",email:"Your email address must be in the format of name@domain.com"},password:{required:"Please select a password"},password_confirm:{required:"Please enter the same password as above",equalTo:"Please enter the same password as above"}},highlight:function(e){$(e).closest(".control-group").addClass("error").removeClass("success")},success:function(e){$(e).text("").closest(".control-group").addClass("success")}}),$("#register_form2").validate({errorClass:"help-block",errorElement:"p",rules:{username:{minlength:3,maxlength:15,required:!0},email:{required:!0,email:!0},password:{required:!0,minlength:5},password_confirm:{required:!0,minlength:5,equalTo:"#form_password"}},messages:{username:{minlength:"Minimum length is 3 characters",maxlength:"Maximum length is 15 characters",remote:"Username is taken",required:"Please specify your username"},email:{required:"We need your email address",email:"Your email address must be in the format of name@domain.com"},password:{required:"Please select a password"},password_confirm:{required:"Please enter the same password as above",equalTo:"Please enter the same password as above"}},highlight:function(e){$(e).closest(".control-group").addClass("error").removeClass("success")},success:function(e){$(e).text("").closest(".control-group").addClass("success")}}),$("#select2-basic").select2(),$("#select2-multi-value").select2(),$("#select2-max-value").select2({maximumSelectionSize:3}),$("#select2-tags").select2({tags:["red","green","blue"],tokenSeparators:[","," "]}),$(".colorpicker-rgb").colorpicker({format:"rgb"}),$(".colorpicker-rgba").colorpicker({format:"rgba"}),$(".colorpicker-hex").colorpicker({format:"hex"}),$(".datepicker-basic").datepicker(),$("#datepicker-years").datepicker({viewMode:2}),$(".timepicker-12hrs").timepicker(),$(".timepicker-24hrs").timepicker({showMeridian:!1}),$(".timepicker-seconds").timepicker({showSeconds:!0}),$(".timepicker-modal").timepicker({modalBackdrop:!0,showInputs:!1,template:"modal"})),$("#users_page, #tables_page").length>0&&($.extend(!0,$.fn.dataTable.defaults,{sDom:"<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",sPaginationType:"bootstrap",oLanguage:{sLengthMenu:"_MENU_ records per page"}}),$.extend($.fn.dataTableExt.oStdClasses,{sWrapper:"dataTables_wrapper form-inline"}),$.fn.dataTableExt.oApi.fnPagingInfo=function(e){return{iStart:e._iDisplayStart,iEnd:e.fnDisplayEnd(),iLength:e._iDisplayLength,iTotal:e.fnRecordsTotal(),iFilteredTotal:e.fnRecordsDisplay(),iPage:Math.ceil(e._iDisplayStart/e._iDisplayLength),iTotalPages:Math.ceil(e.fnRecordsDisplay()/e._iDisplayLength)}},$.extend($.fn.dataTableExt.oPagination,{bootstrap:{fnInit:function(e,t,n){var r=e.oLanguage.oPaginate,i=function(t){t.preventDefault(),e.oApi._fnPageChange(e,t.data.action)&&n(e)};$(t).addClass("pagination").append('<ul><li class="prev disabled"><a href="#">&larr; '+r.sPrevious+"</a></li>"+'<li class="next disabled"><a href="#">'+r.sNext+" &rarr; </a></li>"+"</ul>");var s=$("a",t);$(s[0]).bind("click.DT",{action:"previous"},i),$(s[1]).bind("click.DT",{action:"next"},i)},fnUpdate:function(e,t){var n=5,r=e.oInstance.fnPagingInfo(),i=e.aanFeatures.p,s,o,u,a,f,l=Math.floor(n/2);r.iTotalPages<n?(a=1,f=r.iTotalPages):r.iPage<=l?(a=1,f=n):r.iPage>=r.iTotalPages-l?(a=r.iTotalPages-n+1,f=r.iTotalPages):(a=r.iPage-l+1,f=a+n-1);for(s=0,iLen=i.length;s<iLen;s++){$("li:gt(0)",i[s]).filter(":not(:last)").remove();for(o=a;o<=f;o++)u=o==r.iPage+1?'class="active"':"",$("<li "+u+'><a href="#">'+o+"</a></li>").insertBefore($("li:last",i[s])[0]).bind("click",function(n){n.preventDefault(),e._iDisplayStart=(parseInt($("a",this).text(),10)-1)*r.iLength,t(e)});r.iPage===0?$("li:first",i[s]).addClass("disabled"):$("li:first",i[s]).removeClass("disabled"),r.iPage===r.iTotalPages-1||r.iTotalPages===0?$("li:last",i[s]).addClass("disabled"):$("li:last",i[s]).removeClass("disabled")}}}}),$.fn.DataTable.TableTools&&($.extend(!0,$.fn.DataTable.TableTools.classes,{container:"DTTT btn-group",buttons:{normal:"btn",disabled:"disabled"},collection:{container:"DTTT_dropdown dropdown-menu",buttons:{normal:"",disabled:"disabled"}},print:{info:"DTTT_print_info modal"},select:{row:"active"}}),$.extend(!0,$.fn.DataTable.TableTools.DEFAULTS.oTags,{collection:{container:"ul",button:"li",liner:"a"}})),$("#users").dataTable({sDom:"<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",sPaginationType:"bootstrap",oLanguage:{sLengthMenu:"Entries: _MENU_ "}})),$("#notifications_page").length>0&&($("#add-sticky").click(function(){var e=$.gritter.add({title:"This is a sticky notice!",text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',image:"http://profile.ak.fbcdn.net/hprofile-ak-snc6/203244_1677040371_1334985872_q.jpg",sticky:!0,time:"",class_name:"my-sticky-class"});return!1}),$("#add-regular").click(function(){return $.gritter.add({title:"This is a regular notice!",text:'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',image:"http://profile.ak.fbcdn.net/hprofile-ak-snc6/203244_1677040371_1334985872_q.jpg",sticky:!1,time:""}),!1}),$("#add-max").click(function(){return $.gritter.add({title:"This is a notice with a max of 3 on screen at one time!",text:'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',image:"http://a0.twimg.com/profile_images/59268975/jquery_avatar_bigger.png",sticky:!1,before_open:function(){if($(".gritter-item-wrapper").length==3)return!1}}),!1}),$("#add-without-image").click(function(){return $.gritter.add({title:"This is a notice without an image!",text:'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.'}),!1}),$("#add-gritter-light").click(function(){return $.gritter.add({title:"This is a light notification",text:'Just add a "gritter-light" class_name to your $.gritter.add or globally to $.gritter.options.class_name',class_name:"gritter-light"}),!1}),$("#add-with-callbacks").click(function(){return $.gritter.add({title:"This is a notice with callbacks!",text:"The callback is...",before_open:function(){alert("I am called before it opens")},after_open:function(e){alert("I am called after it opens: \nI am passed the jQuery object for the created Gritter element...\n"+e)},before_close:function(e,t){var n=t?'The "X" was clicked to close me!':"";alert("I am called before it closes: I am passed the jQuery object for the Gritter element... \n"+n)},after_close:function(e,t){var n=t?'The "X" was clicked to close me!':"";alert("I am called after it closes. "+n)}}),!1}),$("#add-sticky-with-callbacks").click(function(){return $.gritter.add({title:"This is a sticky notice with callbacks!",text:"Sticky sticky notice.. sticky sticky notice...",sticky:!0,before_open:function(){alert("I am a sticky called before it opens")},after_open:function(e){alert("I am a sticky called after it opens: \nI am passed the jQuery object for the created Gritter element...\n"+e)},before_close:function(e){alert("I am a sticky called before it closes: I am passed the jQuery object for the Gritter element... \n"+e)},after_close:function(){alert("I am a sticky called after it closes")}}),!1}),$("#remove-all").click(function(){return $.gritter.removeAll(),!1}),$("#remove-all-with-callbacks").click(function(){return $.gritter.removeAll({before_close:function(e){alert("I am called before all notifications are closed.  I am passed the jQuery object containing all  of Gritter notifications.\n"+e)},after_close:function(){alert("I am called after everything has been closed.")}}),!1}),$(".demo_notify").click(function(){switch($(this).attr("data-type")){case"info":alertify.log("This is a standard info notification.","info");break;case"error":alertify.log("There is an error somewhere.","error");break;case"success":alertify.log("Action was performed successfully!","success")}}),$(".demo_notify_dialog").click(function(){switch($(this).attr("data-type")){case"alert":alertify.alert("This is an alert box.",function(){});break;case"confirm":alertify.confirm("This is a confirm box.<br>ENTER and ESC keys will trigger OK and Cancel respectively.",function(e){e});break;case"prompt":alertify.prompt("This is a prompt box.<br>ENTER and ESC keys will trigger OK and Cancel respectively.",function(e,t){e})}})),$("#tickets_page").length>0&&redraw_tickets_analytics(),$("#analytics_page").length>0&&(redraw_analytics(),$(".inlinesparkline").sparkline("html",{width:"100",height:"30",lineColor:"#42C1F7",fillColor:"#B3E6FC"}),$("#widget-analytics").slimScroll({height:"300px"}));if($("#gallery_page").length>0){var t=$("#gallery-container"),n=6,r=250,i=$(".gallery-item img");i.each(function(){var e=$(this);(e[0].complete||$.browser.msie&&parseInt($.browser.version)==6)&&e.trigger("load")}),i.imagesLoaded(function(){t.masonry({itemSelector:".gallery-item",gutterWidth:n,isAnimated:!0,columnWidth:function(e){var t=e/r|0,i=(e-(t-1)*n)/t|0;return e<r&&(i=e),$(".gallery-item").width(i),i}})}),$("a[rel*=facybox]").facybox()}if($("#calendar_page").length>0)var s=new Date,o=s.getDate(),u=s.getMonth(),a=s.getFullYear(),f=$("#calendar").fullCalendar({header:{left:"prev,next today",center:"title",right:"month,agendaWeek,agendaDay"},selectable:!0,selectHelper:!0,select:function(e,t,n){var r=prompt("Event Title:");r&&f.fullCalendar("renderEvent",{title:r,start:e,end:t,allDay:n},!0),f.fullCalendar("unselect")},editable:!0,events:[{title:"All Day Event",start:new Date(a,u,1)},{title:"Long Event",start:new Date(a,u,o-5),end:new Date(a,u,o-2)},{id:999,title:"Repeating Event",start:new Date(a,u,o-3,16,0),allDay:!1},{id:999,title:"Repeating Event",start:new Date(a,u,o+4,16,0),allDay:!1},{title:"Meeting",start:new Date(a,u,o,10,30),allDay:!1},{title:"Lunch",start:new Date(a,u,o,12,0),end:new Date(a,u,o,14,0),allDay:!1},{title:"Birthday Party",start:new Date(a,u,o+1,19,0),end:new Date(a,u,o+1,22,30),allDay:!1},{title:"Click for Google",start:new Date(a,u,28),end:new Date(a,u,29),url:"http://google.com/"}]});$("#tasks_page").length>0&&($(".knob").knob({draw:function(){}}),Morris.Donut({element:"donut",data:[{label:"Tasks Completed",value:150},{label:"Tasks Pending",value:250}],colors:["#C1F8A9","#6FB3CE"]}),Morris.Donut({element:"donut2",data:[{label:"Tasks Overdue",value:30},{label:"Tasks On time",value:70},{label:"Tasks Ahead of time",value:70}],colors:["#F79999","#6FB3CE","#C1F8A9"]}),Morris.Donut({element:"donut3",data:[{label:"Fernando Mcie",value:20},{label:"Cody Negley",value:12},{label:"Lilia Triggs",value:10}],colors:["#C1F8A9","#6FB3CE","#72BDDB"]}),Morris.Donut({element:"donut4",data:[{label:"Fixes",value:10},{label:"Updates",value:40},{label:"Adds",value:40}],colors:["#87CEEB","#6FB3CE","#72BDDB"]}))});