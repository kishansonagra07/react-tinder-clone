import React from 'react'
import Chat from './Chat'
import './Chats.css'

function Chats() {
    return (
        <div className='chats'>
            <Chat name='Mark Zuck' message='whatsaup?' timestamp='40 seconds ago' profilePic='https://www.californiamuseum.org/sites/main/files/imagecache/medium/main-images/screen_shot_2012-07-27_at_6.32.28_pm.png?1578063880' />
            <Chat name='Larry Page' message='How are you?' timestamp='35 minutes ago' profilePic='https://speaking.com/wp-content/uploads/2018/05/Larry-Page.jpeg' />
            <Chat name='Tim Cook' message='Freaking out !!!' timestamp='2 hour ago' profilePic='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5638b2e7e4b0ffa7afe699d5%2F0x0.jpg%3Ffit%3Dscale%26background%3D000000' />
            <Chat name='MS Dhoni' message='Last match might be' timestamp='5 hour ago' profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQr6sHacB264baGS59_xOGVTFPwwosL1NLcg&usqp=CAU' />
        </div>
    )
}

export default Chats
