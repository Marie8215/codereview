import './GradientBorderLink.css';
 import { ArrowIcon } from '../Icon/Icons';

interface GradientBorderLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const GradientBorderLink = ({
  href,
  children,
  className = "",
}: GradientBorderLinkProps) => {
  return (
    <a href={href} className={`gradient-border-link ${className}`}>
      {children}
    </a>
  );
};

interface GradientLinkWithArrowProps {
  text: string;
  href: string;
  className?: string;
}

export const GradientLinkWithArrow = ({
  text,
  href,
  className = "",
}: GradientLinkWithArrowProps) => {
  return (
    <GradientBorderLink href={href} className={className}>
      <span className="inline-flex items-center gap-2">
        {text}
        <ArrowIcon />
      </span>
    </GradientBorderLink>
  );
};
