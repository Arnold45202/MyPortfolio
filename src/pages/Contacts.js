import React from 'react'

function Contacts() {
  return (
    <div>
      <h1>Send me a Message!</h1>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <textarea name="message" required></textarea>
        <div class="h-captcha" data-captcha="true"></div>
        <button type="submit">Submit message</button>
      </form>
    </div>
  )
}

export default Contacts