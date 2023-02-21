import { PropsAvatar } from './AvatarProps'
import './avatar.scss'

const Avatar = ({ size, alt, src }: PropsAvatar) => {
  return (
    <>
      <div className='avatar' style={ { width: size, height: size } }>
        <img alt={ alt } src={ src } className='avatar-img' />
      </div>
    </>
  )
}

export default Avatar
