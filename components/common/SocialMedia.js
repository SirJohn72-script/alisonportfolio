import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa'

export default function SocialMedia({ modifier = '', color = '' }) {
  return (
    <div className="SocialMedia">
      <div className={`socialmedia__container ${modifier}`}>
        <p className={`socialmedia__icon ${color}`}>
          <FaFacebookSquare />
        </p>
        <p className={`socialmedia__icon ${color}`}>
          <FaTwitterSquare />
        </p>
        <p className={`socialmedia__icon ${color}`}>
          <FaInstagramSquare />
        </p>
        <p className={`socialmedia__icon ${color}`}>
          <FaLinkedin />
        </p>
      </div>
    </div>
  )
}
