import React from 'react'
import Comment from './Comment';

const list = [{
	name: 'Ken',
	comment: '안녕하세요? 루니입니다~~',
	avatarUrl: 'images/simple/catAndIcecream.gif'
},
{
	name: 'Gen',
	comment: '안녕~~',
	avatarUrl: 'images/simple/ham.gif'
},
{
	name: 'Ton',
	comment: '다~~',
	avatarUrl: 'images/simple/windows10.png'
}
];
function CommentList() {
	return (
		<>
			{
				list.map(( data, idx )=>{
					return(
						<Comment name={data.name} comment={data.comment} avatarUrl={data.avatarUrl}/>
					)
			})
			}
		</>
	)
}

export default CommentList