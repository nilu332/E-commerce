import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda voluptas facilis eius officiis error. Officia excepturi dicta, reiciendis numquam nulla, natus culpa corrupti atque porro, provident facere fugiat ex facilis.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore autem soluta quod non delectus molestias, fugiat qui quisquam. Neque quas error provident ipsum, veniam in fugit mollitia nobis. Inventore, maiores!
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
