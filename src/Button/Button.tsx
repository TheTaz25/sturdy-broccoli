import React from 'react';

import { ButtonProps } from './Button.types';
import { initClassnames } from '../utils/classname';

import './Button.scss';

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const COMPONENT_NAME = 'button';
  const {
    disabled,
    type = 'button',
    color = 'primary',
    feedback,
    circle,
    roundedCorners,
    effect,
    children,
    intention = 'outlined',
    className,
    onTouchEnd,
    block,
  } = props;
  const passProps = { ...props };
  const classes = initClassnames(className, `b-${COMPONENT_NAME}`);

  // Intention Styling
  // CTA -> "Call To Action" Full Color and an animation (Outward-Wave)
  // Primary -> Full Color
  // Outlined -> Bordered (Default)
  classes.push(`b-${COMPONENT_NAME}-${intention}`);

  // Effect Styling
  // Elevated -> Button looks like it hovers
  // Clicky -> Draw Button with perspective
  if (effect) {
    classes.push(`b-${COMPONENT_NAME}-${effect}`);
  }

  // Circle Styling
  // Draw the button as a circle, children should be just one Character (Icon)
  if (circle) {
    classes.push(`b-${COMPONENT_NAME}-circle`);
  }

  // Rounded Corners
  // 5px border-radius
  if (roundedCorners) {
    classes.push(`b-${COMPONENT_NAME}-rounded`);
  }

  // Button Main Color
  if (color) {
    classes.push(`b-${COMPONENT_NAME}-col-${color}`);
  }

  // Block Style (Full Width)
  if (block) {
    classes.push(`b-${COMPONENT_NAME}-block`);
  }

  // Feedback
  // Used for mobile, will dispatch a vibration after touchEnd
  const touchEndFeedback = (event) => {
    if (Array.isArray(feedback)) {
      window.navigator.vibrate(feedback);
    } else if (feedback) {
      window.navigator.vibrate(200);
    }
    if (onTouchEnd) {
      onTouchEnd(event);
    }
  };

  delete passProps.disabled;
  delete passProps.type;
  delete passProps.color;
  delete passProps.feedback;
  delete passProps.circle;
  delete passProps.roundedCorners;
  delete passProps.effect;
  delete passProps.children;
  delete passProps.className;
  delete passProps.onTouchEnd;
  delete passProps.block;

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes.join(' ')}
      onTouchEnd={touchEndFeedback}
      {...passProps}
    >
      {children}
    </button>
  );
};

export default Button;
