import React from 'react';

import {
  LayoutProps,
  HeaderProps,
  ContentProps,
  FooterProps,
} from './Layout.types';

import './Layout.scss';
import { initClassnames } from '../utils/classname';

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const COMPONENT_NAME = 'layout-base';
  const { className, children } = props;
  const passProps = { ...props };

  const classes = initClassnames(className, `b-${COMPONENT_NAME}`);

  delete passProps.className;
  delete passProps.children;
  return (
    <div className={classes.join(' ')} {...passProps}>
      {children}
    </div>
  );
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const COMPONENT_NAME = 'header';
  const { className, children } = props;
  const passProps = { ...props };

  const classes = initClassnames(className, `b-${COMPONENT_NAME}`);

  delete passProps.className;
  delete passProps.children;
  return (
    <header className={classes.join(' ')} {...passProps}>
      {children}
    </header>
  );
};

const Content: React.FC<ContentProps> = (props: ContentProps) => {
  const COMPONENT_NAME = 'content';
  const { className, children } = props;
  const passProps = { ...props };

  const classes = initClassnames(className, `b-${COMPONENT_NAME}`);

  delete passProps.className;
  delete passProps.children;
  return (
    <main className={classes.join(' ')} {...passProps}>
      {children}
    </main>
  );
};

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const COMPONENT_NAME = 'footer';
  const { className, children } = props;
  const passProps = { ...props };

  const classes = initClassnames(className, `b-${COMPONENT_NAME}`);

  delete passProps.className;
  delete passProps.children;
  return (
    <footer className={classes.join(' ')} {...passProps}>
      {children}
    </footer>
  );
};

export default Layout;
export {
  Header,
  Content,
  Footer,
};
