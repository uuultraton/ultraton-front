import React from 'react';
import './Mario.scss';
import { IMarioState } from '../../../interfaces/i-mario-state';
import { IMarioProps } from '../../../interfaces/i-mario-props';

class Mario extends React.Component<IMarioProps, IMarioState> {
  private defaultMario =
    'https://raw.githubusercontent.com/fabiopaiva/react-super-mario/develop/src/react-super-mario/assets/players/mario.gif';

  private walkingMario =
    'https://raw.githubusercontent.com/fabiopaiva/react-super-mario/develop/src/react-super-mario/assets/players/mario-moving.gif';

  private jumpingMario =
    'https://raw.githubusercontent.com/fabiopaiva/react-super-mario/develop/src/react-super-mario/assets/players/mario-jumping.gif';

  constructor(props: IMarioProps) {
    super(props);
    this.state = {
      left: 100,
      top: 77,
      isMoving: false,
      isJumping: false,
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  }

  handleKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === 39) {
      this.setState((state) => ({ left: state.left + 4, isMoving: true }));
    }
    if (e.keyCode === 37) {
      this.setState((state) => ({ left: state.left - 4, isMoving: true }));
    }
    if (e.keyCode === 32) {
      this.setState((state) => ({
        ...state,
        isJumping: true,
        isMoving: false,
        top: 62,
      }));
      this.props.changeMarioJumpCords(this.state.left);
    }
  };

  handleKeyUp = (e: KeyboardEvent) => {
    if (e.keyCode === 39) {
      this.setState((state) => ({ ...state, isMoving: false }));
    }
    if (e.keyCode === 37) {
      this.setState((state) => ({ ...state, isMoving: false }));
    }
    if (e.keyCode === 32) {
      this.setState((state) => ({
        ...state,
        isJumping: false,
        isMoving: false,
        top: 77,
      }));
    }
  };

  render() {
    return (
      <div
        style={{
          transition: (this.state.isMoving && '.1s linear') || '.5s ease-out',
          top: `${this.state.top}%`,
          left: `${this.state.left}px`,
          backgroundImage: `url(${
            (this.state.isMoving && this.walkingMario) ||
            (this.state.isJumping && this.jumpingMario) ||
            this.defaultMario
          })`,
        }}
        className="mario"
      />
    );
  }
}

export default Mario;
