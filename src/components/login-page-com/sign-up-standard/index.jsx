import React from 'react';
import MenuBar from '../../homes/home-7/menu-bar';
import SidebarCommerce from '../../sidebar/sidebar-ecommerce';
import SignUpStandardArea from './sign-up-standard-area';

const SignUpStandard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  return (
    <div className="main-page-wrapper">
      <SidebarCommerce isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <MenuBar setIsSidebarOpen={setIsSidebarOpen} />
      <SignUpStandardArea />
    </div>
  );
};

export default SignUpStandard;