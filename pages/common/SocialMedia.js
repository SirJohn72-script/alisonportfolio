import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa'

export default function SocialMedia({ modifier = '' }) {
  return (
    <div className="SocialMedia">
      <div className={`socialmedia__container ${modifier}`}>
        <p className={'socialmedia__icon'}>
          <FaFacebookSquare />
        </p>
        <p className={'socialmedia__icon'}>
          <FaTwitterSquare />
        </p>
        <p className={'socialmedia__icon'}>
          <FaInstagramSquare />
        </p>
        <p className={'socialmedia__icon'}>
          <FaLinkedin />
        </p>
      </div>
    </div>
  )
}
