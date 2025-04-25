const commentslist =[
{
	name:"游客1",
	comment1:
	"人工智能（AI）在医疗领域的应用有哪些显著的优势和潜在的风险？",
	time :"Thu Jan 12 2022"
},{
	name:"游客2",
	comment1:
	"当前人工智能技术在处理自然语言理解和生成方面遇到了哪些主要挑战，以及研究人员如何努力克服这些挑战？。",
	time :"Fri Jan 13 2022"
},{
	name:"游客3",
	comment1:
	"随着人工智能技术的不断进步，未来工作市场可能会发生怎样的变化，特别是对于低技能劳动力来说，他们应该如何准备应对这些变化？",
	time :"Fri Jan 19 2022"

}
];
const commentsBox=document.querySelector('#commentslist');
const btnSubmit = document.querySelector('#btn-submit');
let nameInput = document.querySelector('#name');
let commentInput = document.querySelector('#comment');

const renderComments=function(commentslist){
		commentsBox.innerHTML=""

commentslist.forEach((item)=>{
			commentsBox.insertAdjacentHTML(
					'beforeend',
		   `<hr>
			<h4>
		<span>${item.name}</span>
		<span class="date">${item.time}</span>
		</h4>
			<p>${item.comment1}</p>
		`	
		)	
     }
   )
}

renderComments (commentslist);

btnSubmit.onclick =function(){
	let nameStr = nameInput.value.replace(/<(\/?\w+)>/g,"&lt;$1&gt;");
	let commentStr = commentInput.value.replace(/<(\/?\w+)>/g,"&lt;$1&gt;");
	if(nameStr!=""&&commentStr!=""){
	commentslist.unshift(
	{
		name :nameStr,
		comment1: commentStr,
		time:new Date(),
	}

	);
	renderComments(commentslist);
	commentInput.value=""
}
else
	alert('请输入昵称和内容！')
}
