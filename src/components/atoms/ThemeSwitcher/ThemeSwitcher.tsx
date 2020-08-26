import React from 'react';
import './ThemeSwitcher.scss';

export default class ThemeSwitcher extends React.Component<
  {},
  { isDarkTheme: boolean }
> {
  darkTheme = {
    mainColor: '#ededed',
    secondaryColor: 'black',
    logoBg: '#231e1f',
    activeColor: 'orange',
    aboutBgColor: 'white',
    image:
      'url("https://mir-s3-cdn-cf.behance.net/project_modules/disp/17775966002101.5d0713b833074.gif")',
    MarioBgImage: 'url("https://i.imgur.com/3KjQURW.gif")',
  };

  lightTheme = {
    mainColor: 'black',
    secondaryColor: '#ededed',
    logoBg: 'transparent',
    activeColor: 'orangered',
    aboutBgColor: 'black',
    image:
      'url("https://mir-s3-cdn-cf.behance.net/project_modules/disp/cc9f6566002101.5d0713b833226.gif")',
    MarioBgImage:
      'url("https://www.9to5animations.com/wp-content/uploads/2016/03/mario-gif-animated.gif")',
  };

  constructor(props: any) {
    super(props);

    this.state = {
      isDarkTheme: false,
    };
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme() {
    const root = document.documentElement;
    const theme = this.state.isDarkTheme ? this.darkTheme : this.lightTheme;
    this.setState((prevState) => ({ isDarkTheme: !prevState.isDarkTheme }));
    root.style.setProperty('--main-color', theme.mainColor);
    root.style.setProperty('--secondary-color', theme.secondaryColor);
    root.style.setProperty('--logo-bg', theme.logoBg);
    root.style.setProperty('--active-color', theme.activeColor);
    root.style.setProperty('--about-bg-color', theme.aboutBgColor);
    root.style.setProperty('--image', theme.image);
    root.style.setProperty('--MarioBgImage', theme.MarioBgImage);
  }

  render() {
    const switherTheme = this.state.isDarkTheme ? '' : 'active';
    return (
      <span
        role="button"
        aria-label="Change theme"
        tabIndex={0}
        onClick={this.changeTheme}
        onKeyDown={this.changeTheme}
        className={`themeSwitcher ${switherTheme}`}
      />
    );
  }
}
