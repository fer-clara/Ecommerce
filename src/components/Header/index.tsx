import './../../styles/header.scss'

import logoImg from './../../assets/images/logo.svg';
import cartImg from './../../assets/images/cart.svg';
import { Loading } from './../Loading/index'

import { lazy, Suspense } from 'react';

const Logo = lazy(() => import('./logo'))
const Minicart = lazy(() => import('./minicart'))

export function Header(){
    return (
        <header className="header flex flex-space">
            <Suspense fallback={Loading}>
                <Logo src={logoImg}></Logo>
            </Suspense>
            <Suspense fallback={Loading}>
                <Minicart src={cartImg}></Minicart>
            </Suspense>
        </header>
    )
}



