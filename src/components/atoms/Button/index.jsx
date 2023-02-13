import React from 'react'

import Link from '../Link'

// import { isExist } from "util/helper";

import './index.scss'

export function ButtonLink({ children, className, href, onClick }) {
  return (
    <Link className={className} to={href} onClick={onClick}>
      <div>{children}</div>
    </Link>
  )
}

function Button() {
  return (
    <button type="button" className="btn btn-primary">
      Primary
    </button>
  )
}

export default Button
