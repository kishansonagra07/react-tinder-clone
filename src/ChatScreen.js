import React,{useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import './ChatScreen.css' 

function ChatScreen() {
    const [input,setInput] = useState('')
    const [messages,setMessages] = useState([
        {
            name:'Mark',
            image:'https://www.californiamuseum.org/sites/main/files/imagecache/medium/main-images/screen_shot_2012-07-27_at_6.32.28_pm.png?1578063880',
            message:'Whats Up?'
        },
        {
            name:'Mark',
            image:'https://www.californiamuseum.org/sites/main/files/imagecache/medium/main-images/screen_shot_2012-07-27_at_6.32.28_pm.png?1578063880',
            message:'Are you there?'
        },
        {
            message:'Hows it going?'
        }
    ])
    const handleSend = (e) => {
        e.preventDefault()
        setMessages([...messages,{message:input}])
        setInput('')
    }
    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>YOU MATCHED WITH MARK ON 01/02/2021</p>
            {messages.map(message => (
                message.name ? (
                    <div className='chatScreen__message'>
                        <Avatar className='chatScreen__image' alt={message.name} src={message.image} />
                        <p className='chatScreen__text'>{message.message}</p>
                    </div>
                ) : (
                    <div className='chatScreen__message'>
                        <p className='chatScreen__textUser'>{message.message}</p>
                    </div>
                )                
            ))}
            <form className='chatScreen__input'>
                <input type="text" value={input} onChange={e => setInput(e.target.value)} className='chatScreen__inputField' placeholder='Type a message..' />
                <button onClick={handleSend} type='submit' className='chatScreen__inputButton'>SEND</button>
            </form>
        </div>
    )
}

export default ChatScreen
