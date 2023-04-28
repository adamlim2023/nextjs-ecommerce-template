import Image from 'next/image';
import UserIcon from '@/assets/images/icons/user.svg';

const Header = () => {
  return <div className="h-[72px] flex items-center justify-between px-20 shadow-md">
    <span>Home</span>
    <a className="cursor-pointer">
      <Image src={UserIcon} width={32} height={32} alt="Profile" />
    </a>
  </div>
}

export default Header;