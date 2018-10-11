onscroll=function(){
			var scrollTop=document.body.scrollTop ||document.documentElement.scrollTop;
			if(scrollTop>= 670){
				goTop.className="goTop active";
			}else{
				goTop.className="goTop";
			}
			var clientHeight=document.documentElement.clientHeight || document.body.clientHeight;
			if(scrollTop>=3840-clientHeight){
				goTop.className="goTop";
			}
			goTop_icon.onclick=function(){
				document.body.scrollTop=0;
				document.documentElement.scrollTop=0;
			}
		}