import React, { useEffect } from 'react'
import '../styleSheets/Contacts.css';

function Contacts() {
  useEffect(() => {
    document.title = 'Contacts';
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = 'https://cdn.discordapp.com/attachments/890136733923033119/1199279834975698974/favicon-16x16.png?ex=65c1f762&is=65af8262&hm=69191c4021ac44970c1e4f05cfa7eedcf64091d3346ddef0bff0295a08493ef2&';
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