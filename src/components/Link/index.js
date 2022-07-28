import NextLink from 'next/Link';

export default function Link({children, href, ...props}){
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  )
}