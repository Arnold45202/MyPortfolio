import React, { useEffect } from 'react'
import '../styleSheets/Contacts.css';

function Contacts() {
  useEffect(() => {
    document.title = 'Contacts';
  }, []);

  return (
    <div className='contacts'>
      <h1 className='contacts-title'>Send me a Message!</h1>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="a6330561-5290-4406-90f5-688a1f13b22d" />
        <input type="text" name="name" required placeholder="name"/>
        <input type="email" name="email" required placeholder="email"/>
        <textarea name="message" required placeholder="your message"></textarea>
        <div class="h-captcha" data-captcha="true"></div>
        <button type="submit">Submit message</button>
      </form>
    </div>
  )
}

export default Contacts