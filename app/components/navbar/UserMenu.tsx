'use client';

import { FiLogOut } from 'react-icons/fi';
import { BiSolidUser } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { User } from '@prisma/client';
import { signOut } from 'next-auth/react';


interface UserMenuProps {
  currentUser?: User | null;
}

const UserMenu = ({ currentUser }: UserMenuProps) => {

  const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const[isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* <div
          onClick={() => {}}
          className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
            ">
          Airbnb your home
        </div> */}
        <div
          //   onClick={toggleOpen}
          className="
          bg-lightestGray
            p-4
            md_py-1
            md_px-2
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
          ">
          <AiOutlineMenu />
        </div>
        <div
          onClick={toggleOpen}
          className="
            bg-lightestGray
            p-4
            md_py-1
            md_px-2
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
            ">
          <BiSolidUser />
          {/* <div className="hidden md:block"><Avatar /></div> */}
        </div>
        <div
          onClick={() => {}}
          className="
            bg-lightestGray
            p-4
            md_py-1
            md_px-2
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
            ">
          <FiLogOut />
          {/* <div className="hidden md:block"><Avatar /></div> */}
        </div>
      </div>

      {isOpen && (
        <div
          className="
            absolute
            md:w-3/4
            rounded-xl
            shadow-md
            w-[40vw]
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
            ">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
               <>
               <MenuItem onClick={() => {}} label="My trips" />
               <MenuItem onClick={() => {}} label="My favorites" />
               <MenuItem onClick={() => {}} label="My reservations" />
               <MenuItem onClick={() => {}} label="My properties" />
               <MenuItem onClick={() => {}} label="Airbnb my home" />
               <MenuItem onClick={() => {}} label="Account" />

               <hr />
               <MenuItem onClick={() => signOut()} label="Logout" />
             </>
            ): (

            
            <>
              <MenuItem onClick={loginModal.onOpen} label="Login" />
              <MenuItem onClick={registerModal.onOpen} label="Sign up" />
              <MenuItem onClick={() => {}} label="Account" />
            </>
          )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
