import { Link, type LinkProps } from 'react-router-dom';
import { type BaseProps, type ButtonProps } from '../../types.ts'

type ButtonLinkProps = LinkProps & BaseProps & { to: string };

function isRouterLink(
  props: ButtonProps | ButtonLinkProps
): props is ButtonLinkProps {
  return 'to' in props;
}

export default function Button(props: ButtonProps | ButtonLinkProps) {
  if (isRouterLink(props)) {
    const { children, textOnly, ...otherProps } = props;
    return (
      <Link
        className={`button ${textOnly ? 'button--text-only' : ''}`}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }

  const { children, textOnly, ...otherProps } = props;

  return (
    <button
      className={`button ${textOnly ? 'button--text-only' : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
