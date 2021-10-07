// import { data } from "jquery";

var clickHandler="click";
var totalPoints=0;
var oldPoints=0;
var rawJSON;
var $canV;
var userResponseJson;
// eslint-disable-next-line no-return-assign, no-param-reassign
$(document).ready(function(){
    dragDrop();
    // slimScrollSec();
    $canV= $(".canvas_demo .canvas_sec_demo");
    $(document).on(clickHandler,".single_view",function(){
        $(".right_canvas").removeClass("multi_view");
        $(".tool_view .opacti").removeClass("opacti");
        $(this).addClass("opacti");
    });
    $(document).on(clickHandler,".double_view",function(){
        $(".right_canvas").addClass("multi_view");
        $(".tool_view .opacti").removeClass("opacti");
        $(this).addClass("opacti");
    });
    $(document).on(clickHandler,".fb_print",function(){
        window.print();
    });
    $(document).on(clickHandler,".zoom_icon",function(){
       $('.zoom_icon').hide();
       $('.zoom_main').show();
    });
    $(document).on(clickHandler,".zoom_close",function(){
       $('.zoom_icon').show();
       $('.zoom_main').hide();
    });
    $(document).on(clickHandler,".edit",function(){
        $(this).parent().parent().removeClass('action_icon')
        $(this).parent().parent().addClass('edit_action_icon')
    });
    $(document).on(clickHandler,".edit_save",function(){
        $(this).parent().parent().addClass('action_icon')
        $(this).parent().parent().removeClass('edit_action_icon')
         $("#save_alert").addClass('show')
        $("#save_alert").css('display','block')
            setTimeout(function () {
                $("#save_alert").removeClass('show')
                    $("#save_alert").css('display','none')
                    }, 3000) ;
    });
    $(document).on(clickHandler,".edit_cancel",function(){
        $(this).parent().parent().addClass('action_icon')
        $(this).parent().parent().removeClass('edit_action_icon')
    });
    $(document).on(clickHandler,".bg_color_main .bg_color",function(){
        bgAction($(this));
        $(".alert_new").addClass('show')
        $(".alert_new").css('display','block')
            setTimeout(function () {
                $(".alert_new").removeClass('show')
                    $(".alert_new").css('display','none')
                    }, 3000) ;
       
    });    
    $(document).on(clickHandler,".individual_font_color .each_val",function(){
        if($(this).attr("font")){
            $(".canvas_sec [sec="+$(this).parent().parent().attr("sec")+"]").attr("font",$(this).attr("font"));
            setColorDynamic();
        }
        else if($(this).attr("text-color")){
            $(".canvas_sec [sec="+$(this).parent().parent().attr("sec")+"]").attr("text-color",$(this).attr("text-color"));
            setColorDynamic();
        }
        $(this).parent().parent().find(".each_val.selected").removeClass("selected");
        $(this).addClass("selected");  
        calculateUserResp();
        setUserRespJSON($(this));
    });
    $(document).on(clickHandler,".actions span",function(){
        var editId=$(this).attr("tab-id");
        if($(this).hasClass("redo")){
            editId = $(this).parent().find(".edit").attr("tab-id");
            $(".canvas_sec ."+$(this).data("val")).html("").removeClass("dropped").removeAttr("font").removeAttr("text-color");
            clearSelected(editId);
            $(this).parent().parent().removeClass("action_icon");
        }
        onFocusNav(editId);
    });    
    $(document).on(clickHandler,".preview_btn",function(){
        // alert();
        $("#myPreviewModal .modal-body").html($(".main_canvas").html());
        $("#myPreviewModal").modal("show");
    });
    $(document).on(clickHandler,".subheader_right .save_btn",function(){
        alert("Printing the Current User Response in Console");
        console.debug("Printing the Current User Response-->",currentUserResponse);
    });
    $(document).on(clickHandler,".submit_btn",function(){
        calcOverallPoints();
    });
    $(document).on(clickHandler,".action_items button",function(){
        var dataId=$(this).data("id");
        getData()
        $(".myprogress_page").attr("hidden","hidden");
        $(".detail_page").removeAttr("hidden");
        setUserResponse(dataId);
    });
    $(document).on(clickHandler,"i.fa.fa-signal",function(){
        // $(".myprogress_page").removeAttr("hidden");
        // $(".detail_page").attr("hidden","hidden");
        location.reload();
    })

});
$(window).on("load",function(){
    // MyProgress();
});
var content='';
var bgContent="bgContent";
var headCount=0;
var collapseCount=0;
var userResponse=[];
var resP={
    bgPoints:"0"
}
function setValues(rawData){
    $.each(rawData.data,function(i,data){
        if(data.type=="background"){
            // console.log("ubu",userResponseJson.data[i].response!="")
            if(userResponseJson.data[i].progressPercentage!="0%"&&userResponseJson.data[i].response!=""){
                $.each(userResponseJson.data[i].response,function(i,res){                    
                    if(res.type=="background"){
                        resP.bgPoints=res.value;
                    }
                });
            }
            content+=`<div class="card eachTab cursor-pointer" data-format="1">
                <div class="card-header collapsed" id="heading${headCount}" data-toggle="collapse" data-target="#collapse${collapseCount}" aria-expanded="false"
                aria-controls="collapseOne">
                    <h5 class="mb-0">
                        <button class="btn btn-link w-100" >
                            ${data.values.title} 
                            <i class="fa fa-angle-down"></i>
                        </button>
                    </h5>
                </div>
                <div id="collapse${collapseCount}" class="collapse" aria-labelledby="heading${headCount}" data-parent="#accordion">
                    <div class="card-body">
                        <div class="row bg_color_main">`;
                        if(data.values.colors.length>0){
                            data.values.colors.forEach(function(e,i){
                                content+=`<div class="col-lg-4">`;
                                bgContent=`
                                    <div class="card mb-3" style="max-width: 18rem;min-height:75px;background:${e[0]};" bg-color="${e[0]}" points="${e[1]}" data-format="1" left-parent=heading${headCount}></div>
                                </div>`;
                                if(e[2]==1){
                                    $canV.attr("bg-color",e[0])
                                }
                                // if(e[1]==resP.bgPoints){
                                //     bgAction(bgContent);
                                                                       
                                // }
                                content+=bgContent;
                            });
                        }                                               
                        content+=`</div>
                    </div>
                </div>
            </div>`;
            // console.log(content);
            headCount=headCount+1;
            collapseCount=collapseCount+1;
        }
        else{
            // console.log(data.type)
            setDynamic(data);
        }
    });
    $("#accordion").html(content);        
    dragDrop();
    $(".canvas_sec_demo").html(correctContent);
    // slimScrollSec();
}
function dragDrop(){
    var dragEnable;
    $(".drag-able").draggable({
        appendTo: "body",
        cursor: "move",
        helper: "clone",
        revert: true,
        revertDuration: 0,
        drag:function(e){
            dragEnable=$(this).parent().attr("sec");
            $(".canvas_sec [sec="+$(this).parent().attr("sec")+"]").addClass("dropActive");
            $(".dragStart").removeClass("dragStart");
            $(this).addClass("dragStart");
        },
        stop: function( event, ui ) {
            $(this).removeClass("dragStart");
            $(".canvas_sec [sec="+$(this).parent().attr("sec")+"]").removeClass("dropActive");
        }
    });  
    $(".drop-able").droppable({
        tolerance: 'pointer',
        drop: function(event, ui){
            if(dragEnable==$(this).attr("sec")){
                $(this).html('<span>' + ui.draggable.clone().html() + '</span>').addClass("dropped");
                $(this).parent().addClass('action_icon');
                if($("#accordion .collapse.show").length==1){
                    $(this).parent().find(".actions .edit").attr("tab-id",$("#accordion .collapse.show").attr("id"));
                }
                if($(".dragStart").length==1){
                    $(".dragStart").parent().find(".drag-able.selected").removeClass("selected")
                    $(".dragStart").addClass("selected");
                    setUserRespJSON($(".dragStart"))
                }
                calculateUserResp();
            }
            
        }
    });
}
var correctContent="";

function setDynamic(sData){
    var txtContent="";
    var imgContent="";
    var correctContentAttr="";
    var name=sData.type;
    var data=sData.values;    
    content+=`<div class="card name_${name} eachTab" data-format="2">
        <div class="card-header collapsed" id="heading${headCount}" data-toggle="collapse" data-target="#collapse${collapseCount}" aria-expanded="false"
        aria-controls="collapseOne">
            <h5 class="mb-0">
                <button class="btn btn-link w-100" >
                    ${data.title} 
                    <i class="fa fa-angle-down"></i>
                </button>
            </h5>
        </div>
        <div id="collapse${collapseCount}" class="collapse" aria-labelledby="heading${headCount}" data-parent="#accordion">
            <div class="card-body-${collapseCount}">
                <div class="nav nav-tabs" role="tablist">
                    <a class="nav-item nav-link active" href="#nav-text${collapseCount}" data-toggle="tab"><div class=""><i class="fas fa-text-width"></i></div>Text</a>
                    <a class="nav-item nav-link" href="#nav-style${collapseCount}" data-toggle="tab"><div class=""><i class="fas fa-font"></i></div>Style</a>
                    <a class="nav-item nav-link" href="#nav-color${collapseCount}" data-toggle="tab"><div class=""><i class="fas fa-palette"></i></div>Color</a>
                    <a class="nav-item nav-link" href="#nav-image${collapseCount}" data-toggle="tab"><div class=""><i class="fas fa-image"></i></div>Image</a>
                </div>
                <div class="tab-content" id="nav-tabContent${collapseCount}">
                    <div class="tab-pane fade active show" id="nav-text${collapseCount}" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div class="individual" sec="${name}_text">`;
                            if(data.text.length>0){
                                data.text.forEach(function(e,i){
                                    content+=`<p class="drag-able text-content cursor-move" data-format="2" data-name="${name}" points="${e[1]}">${e[0]}</p>`;
                                    if(e[2]==1){
                                        txtContent="<span>"+e[0]+"</span>";
                                        
                                    }
                                });
                            }  
                            content+=`        
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-style${collapseCount}" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div class="individual_font_color" sec="${name}_text">`;
                            if(data.font.length>0){
                                data.font.forEach(function(e,i){
                                    content+=`<div class="col-lg-12"><div class="each_val cursor-pointer mb-1" data-format="2" data-name="${name}" font='${e[0]}' points="${e[1]}">${e[0]}</div></div>`;
                                    if(e[2]==1){
                                        correctContentAttr+=` font='${e[0]}'`;
                                    }
                                });
                            }  
                            content+=`        
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-color${collapseCount}" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div class="individual_font_color color_sec row" sec="${name}_text">`;
                            if(data.colors.length>0){
                                data.colors.forEach(function(e,i){
                                    content+=`<div class="col-lg-4">
                                        <div class="cards each_val mb-3 cursor-pointer" style="border:1px solid #000;max-width: 18rem;min-height:75px;background:${e[0]};" points="${e[1]}" data-format="2" text-color="${e[0]}" data-name="${name}" left-parent=heading${headCount}></div>
                                    </div>`;
                                    if(e[2]==1){
                                        correctContentAttr+=` text-color=${e[0]}`;
                                    }
                                });
                            }  
                            content+=`        
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-image${collapseCount}" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div class="individual row" sec="${name}_image">`;
                            if(data.images.length>0){
                                data.images.forEach(function(e,i){
                                    content+=`<div class="col-lg-4 drag-able cursor-move" data-format="2" points="${e[1]}" data-image="1" data-name="${name}">
                                        <div class="mb-3">
                                            <img src="${e}">
                                        </div>
                                    </div>`;
                                    if(e[2]==1){
                                        imgContent="<span><div class='mb-3'><img src='"+e[0]+"'/></div></span>";                                        
                                    }
                                });
                            }  
                            content+=`        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;    
    // console.log(content);
    headCount=headCount+1;
    collapseCount=collapseCount+1;
    setRightPanel(name,data.title);
    correctContent+=`
        <div class="${name} position-relative border_btm_1 float-left">
            <div class="${name}_main drop-able" sec="${name}_text" ${correctContentAttr}>
            ${txtContent}
            </div>
            <div class="${name}_main drop-able" sec="${name}_image" data-placeholder="${name} Image">
            ${imgContent}
            </div>
        </div>`;
        // console.log(correctContent)
}
function calculateUserResp(){
    if($("#accordion .eachTab").length>0){
        $("#accordion .eachTab").each(function(){
            if($(this).data("format")=="1"){
                if($(".bg_color_main .bg_color.selected").length==1){
                    $(this).addClass("completed");
                }else{
                    $(this).removeClass("completed");
                }
            }
            else if($(this).data("format")=="2"){
                var eT = ".collapse .tab-content .tab-pane";
                if($(this).find(eT+" .selected").length==$(this).find(eT).length){
                    $(this).addClass("completed");

                }else{
                    $(this).removeClass("completed");
                }
            }
        });
        calcProgressScore();
    }
}
function onFocusNav(editId){
    $("#accordion .collapse.show").parent().find(".card-header").addClass("collapsed");
    $("#accordion .collapse.show").removeClass("show");
    var editSec = "#accordion #"+editId;
    $(editSec).addClass("show").parent().find(".collapsed").removeClass("collapsed");
    $(editSec+" .nav-link").removeClass("active");
    $(editSec+" .tab-pane").removeClass("active show");
    $(editSec+" .nav-link").first().addClass("active");
    $(editSec+" .tab-pane").first().addClass("active show");
}
function clearSelected(eId){
    $("#"+eId+" .selected").removeClass("selected");
    calculateUserResp();
}
function setRightPanel(val,tit){
    var rightPanel=`<div class="${val} position-relative border_btm_1 float-left w-100">
        <div class="${val}_main drop-able" sec="${val}_text" data-placeholder="${tit} Text">

        </div>
        <div class="${val}_main drop-able" sec="${val}_image" data-placeholder="${tit} Image">
            
        </div>
        <div id="${val}_action" class="actions"><span class="cursor-pointer edit"><img src="../assets/svg/edit.svg"></span><br><span class="cursor-pointer redo" data-val="${val}_main"><img src="../assets/svg/rework.svg"></span></div>
    </div>`;
    $(".canvas_sec").append(rightPanel);
}
function calcProgressScore(){
    var percent = parseInt($("#accordion .eachTab.completed").length*(100/$("#accordion .eachTab").length))
    $("#file").val(percent);
    // alert(percent);
    $(".progress_sec label b").html(percent+"%");
    currentUserResponse.progressPercentage=percent+"%";
    $("#file").css("width", percent+"%");
    if(percent==100){
        currentUserResponse.isCompleted=true;
        $(".submit_btn").removeAttr("disabled");
    }else{
        $(".submit_btn").attr("disabled","disabled");
    }
}

function calcOverallPoints(){
    var overallPoints=0;
    $("#accordion .eachTab.completed").each(function(){
        if($(this).data("format")=="1"&&$(this).find(".selected").length==1){
            overallPoints+=parseInt($(this).find(".selected").attr("points"));
        }else if($(this).data("format")=="2"){
            $(this).find(".selected").each(function(){
                overallPoints+=parseInt($(this).attr("points"));
            });
        }
    });
    $("#myScoreModal .score_per").html(overallPoints+"%");
    currentUserResponse.score=overallPoints;
    $("#myScoreModal").modal("show");
}
// function getData(){
//     $.ajax({
//         url: "data.json",
//         type: "GET",
//         contentType: 'application/json',
//         dataType: 'json',
//         success: function(data){
//             rawJSON=data;
//             setValues(data);
//         }
//     });
// }


function setProgressValue(v){
    var content="";    
    $.each(v.data,function(i,data){
        var disabledClass="";
        var btnName="";
        if(data.progressPercentage=="0%"){
            disabledClass="disabled";
        }
        content+=`<div class="each_topic ${disabledClass}">
        <div class="topic_name">
            ${data.name}
        </div>
        <div class="status_bar">`;
            if(data.progressPercentage=="100%"){
                content+=`<div class="tick">
                    <i class="bi bi-check2"></i>
                </div>`;
                if(data.score){
                    content+=`<div class="score_sec">
                        Score:<span>${data.score}</span>
                    </div>`;
                }
                btnName="Detailed Feedback";
            }
            else if(data.progressPercentage!="0%"&&data.progressPercentage!="100%"){
                
                content += `<div class="progress progress_feedback" data-value='${data.progressPercentage.replace("%","")}'>
                    <span class="progress-left">
                        <span class="progress-bar border-primary"></span>
                    </span>
                    <span class="progress-right">
                        <span class="progress-bar border-primary"></span>
                    </span>
                    <div class="progress-value">${data.progressPercentage}</div>
                </div>`;
                btnName="Resume";
            }
            else if(data.progressPercentage=="0%"){
                content+=`<div class="tick">
                    <i class="bi bi-check2"></i>
                </div>`;
                btnName="Start";
            }
        content+=`</div>
        <div class="action_items">
            <button class="btn btn-xs btn-primary form-control" data-id="${data.id}">${btnName}</button>
        </div>
    </div>`;
    });
    $(".topic_list_sec").append(content)
    setMyProgress();
}
function setUserResponse(id){
    // eslint-disable-next-line
    $.each(userResponseJson.data,function(i,data){
        if(data.id==id){
            currentUserResponse.id=data.id;
            currentUserResponse.name=data.name;
            currentUserResponse.score=data.score;
            currentUserResponse.isCompleted=data.isCompleted;
            currentUserResponse.progressPercentage=data.progressPercentage;
            currentUserResponse.response=data.response;
            // eslint-disable-next-line
            $(".name_action .tool_name").html(data.name);
        }
    });
    setTimeout(function(){
        //Get Current User Response
        if(currentUserResponse.response.length>0){
            currentUserResponse.response.forEach(function(res){
                if(//Background
                    // eslint-disable-next-line
                    $(".bg_color_main .bg_color[points="+res.value+"]").length==1
                    &&
                    res.type=="background"
                ){
                    // eslint-disable-next-line
                    bgAction($(".bg_color_main .bg_color[points="+res.value+"]"));
                }
                else{
                    //Others
                    // eslint-disable-next-line
                    if($(".eachTab.name_"+res.type).length==1 && res.values.length>0){
                        Object.keys(res.values[0]).forEach(function(k){
                            var currentKey=res.values[0][k];
                            console.log(res.values[0].text,k,currentKey)
                            var curText=".eachTab.name_"+res.type+" .individual[sec="+res.type+"_"+k+"] .drag-able[points="+currentKey+"]";
                            var fontColorText=".eachTab.name_"+res.type+" .individual_font_color[sec="+res.type+"_text] .each_val[points="+currentKey+"]";
                            // eslint-disable-next-line
                            var currentText=$(curText);
                            if(currentText && currentText.length==1){
                                currentText.addClass("selected");//Left
                                // eslint-disable-next-line
                                if($(".canvas_sec [sec="+res.type+"_"+k+"]").length==1){
                                    if(k=="text"){
                                        var cont=currentText.text();
                                    }
                                    else if(k=="image"){
                                        var cont=currentText.html();
                                    }                                    
                                    if(cont){
                                        $(".canvas_sec [sec="+res.type+"_"+k+"]").addClass("dropped").html('<span>'+cont+'</span>');    
                                        $(".canvas_sec ."+res.type).addClass("action_icon");
                                    }                                                                            
                                }
                                
                            }
                            else{                                
                                var $rightCan=$(".canvas_sec [sec="+res.type+"_text]");
                                if(k=="colors"){
                                    var fontColorText=".eachTab.name_"+res.type+" .individual_font_color.color_sec[sec="+res.type+"_text] .each_val[points="+currentKey+"]";                                    
                                    $rightCan.attr("text-color",$(fontColorText).attr("text-color"));
                                }
                                else if(k=="font"){                                   
                                    $rightCan.attr("font",$(fontColorText).attr("font"));
                                }
                                $(fontColorText).parent().parent().find(".selected").removeClass("selected");
                                $(fontColorText).addClass("selected");
                            }
                        });
                    }
                }
            });
            calculateUserResp();
        }
       

    },2000);

}

let bgAction=(btn)=>{
    if($(btn).data("format")=="1"&&$(btn).attr("bg-color")){
        $(".bg_color_main .bg_color.selected").removeClass("selected");
        // $(".main_canvas .canvas_sec").css("background-color",$(btn).attr("bg-color"));      
        $(".main_canvas .canvas_sec").attr("bg-color",$(btn).attr("bg-color"));      
          setColorDynamic();
        $(btn).addClass("selected");
        calculateUserResp();

        var pointsValue;
        currentUserResponse.response.forEach(function(res){
            if(res.type=="background"){
                pointsValue=$(btn).attr("points");
                res.value=$(btn).attr("points");
            }
        });
        if(pointsValue==undefined){
            var bgObj = {};
            bgObj["type"] = "background";
            bgObj["value"] = $(btn).attr("points");
            currentUserResponse.response.push(bgObj);
        }
    }
}

var currentUserResponse=
{
        //"id":"3",
        "type":"topics",
        //"name":"Patient Language Summary",
        //"score":"0",
        //"isCompleted":false,
        //"progressPercentage":"0%",
        "response":[]
}
function setUserRespJSON(btn){
    var pointsValue;
    var formats="text";
    if($(btn).attr("font")){
        var formats="font";
    }
    if($(btn).attr("text-color")){
        var formats="text-color";
    }
    if($(btn).data("image")=="1"){
        var formats="image";
    }
    currentUserResponse.response.forEach(function(res){
        console.log(res.type,$(btn).attr("points"))
        if(res.type==$(btn).data("name")&&res.values[0].text){
            pointsValue=$(btn).attr("points");
            if(formats=="text"){
                res.values[0].text=$(btn).attr("points");
            }
            else if(formats=="font"){
                res.values[0].font=$(btn).attr("points");
            }
            else if(formats=="text-color"){
                res.values[0].colors=$(btn).attr("points");
            }
            else if(formats=="image"){
                res.values[0].image=$(btn).attr("points");
            }
        }
    });
    
    if(pointsValue==undefined){
        var bgObj = {};
        bgObj["type"] = $(btn).data("name");
        bgObj["values"]=[];       
        var txtFormt = {};
        txtFormt[formats] = $(btn).attr("points");
        bgObj["values"].push(txtFormt);
        console.log(bgObj)
        currentUserResponse.response.push(bgObj);
    }
}
function setMyProgress(){
    $(".progress_feedback").each(function() {
        var value = $(this).attr('data-value');
        var left = $(this).find('.progress-left .progress-bar');
        var right = $(this).find('.progress-right .progress-bar');
        if (value > 0) {
            if (value <= 50) {
                right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
            } else {
                right.css('transform', 'rotate(180deg)')
                left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
            }
        }
    });       
       
}
function percentageToDegrees(percentage){       
    return percentage / 100 * 360
}

function setColorDynamic() {
    $(".canvas_demo [bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("bg-color"));
    });
    $(".main_canvas [bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("bg-color"));
    });
    $(".main_canvas [font]").each(function () {
        $(this).css("font", $(this).attr("font"));
    });
    $(".canvas_demo [text-color]").each(function () {
        $(this).css("color", $(this).attr("text-color"));
    });
    $(".main_canvas [text-color]").each(function () {
        $(this).css("color", $(this).attr("text-color"));
    });
}
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});


