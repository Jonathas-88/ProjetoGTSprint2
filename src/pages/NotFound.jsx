import React from 'react'
import { Alert } from 'antd';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex flex-col gap-10 px-5 mt-2'>
      <Alert
      message="Página não encontrada"
      description="Desculpa, a página que você procura não foi encontrada."
      type="success"
      showIcon
      />
      <p>Não se preocupe! Volte para a <span> <Link to='/' className='hover:underline text-blue-600'>página inicial</Link></span></p>
    </div>
  )
}


export default NotFound;