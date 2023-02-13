import React from 'react'

import { useNavigate } from 'react-router-dom'

const onClickHandler = (callback, navigate) => {
  return (e) => {
    e.preventDefault()
    navigate(e.currentTarget.pathname)
    callback(e)
  }
}

const Link = ({ className, to, onClick, children, isExternal = false }) => {
  const navigate = useNavigate()

  return (
    <a
      className={className}
      href={to}
      role="button"
      tabIndex={0}
      rel="noreferrer"
      target={isExternal ? '_blank' : '_self'}
      onClick={onClickHandler(onClick, navigate)}
    >
      {children}
    </a>
  )
}

export default Link
