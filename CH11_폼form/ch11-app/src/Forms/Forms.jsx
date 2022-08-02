import React from 'react'
import FileInput from './FileInput'
import FruitSelect from './FruitSelect'
import NameForm from './NameForm'

function Forms() {
  return (
    <div className='container'>
      <NameForm/>
      <FruitSelect/>
      <FileInput/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.023665744387!2d127.03224095082177!3d37.50735997970997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15aee9ab0cb%3A0x31793fc63e0cf9d3!2z67mE7Yq47Lqg7ZSE!5e0!3m2!1sen!2skr!4v1659418938452!5m2!1sen!2skr" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Forms