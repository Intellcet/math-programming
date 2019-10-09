import React from 'react';
import cn from 'clsx';

import styles from './PageLayout.module.pcss';

type PageLayoutProps = {
  className?: string;
  children: React.ReactNode;
};

const PageLayout = (props: PageLayoutProps): React.ReactElement => {
  const { children, className } = props;

  return <div className={cn(styles.pageLayout, className)}>{children}</div>;
};

export default PageLayout;
