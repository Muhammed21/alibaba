import { Typographie } from '@/_design/Typographie';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SiUbereats } from "react-icons/si";
import { MdRestaurantMenu } from "react-icons/md";
import { useTranslations } from 'next-intl';

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();
    const t = useTranslations('footer');

    return (
        <footer className='w-full border-t border-t-white/35'>
            
            <div className='flex items-center p-4 justify-between w-full' >
                <div className='w-full'>
                    <Image alt='' src="/_img/_logo/Logo-AliBaba.png" width={115} height={60} />
                </div>
                <div className='w-full flex items-center justify-center'>
                    <Typographie variant='h3' fontFamily='Montserrat' color='white' className='w-full text-center'>
                        © {year} AliBaba Kebab - {t('title')}
                    </Typographie>
                </div>

                <div className='flex item-center justify-end gap-10 w-full'>
                    <Link className='hover:opacity-75' href="https://www.ubereats.com/fr/store/alibaba-kebab/gLiJxeKvQSePgh4iELgwvg?srsltid=AfmBOorXBUSzAXeAUWUekjXZzCtXD0kNwlivL9XBco6xbBVI_7vj9af2">
                        <SiUbereats className='text-white' size={30} />
                    </Link>
                    <Link className='hover:opacity-75' href="https://lacarte.menu/restaurants/annecy/ali-baba-38">
                        <MdRestaurantMenu className='text-white' size={30} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
